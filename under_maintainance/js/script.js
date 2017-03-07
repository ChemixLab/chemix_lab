(function () {
    var dlgtrigger = document.querySelector('[data-dialog]'),
            somedialog = document.getElementById(dlgtrigger.getAttribute('data-dialog')),
            dlg = new DialogFx(somedialog);
    dlgtrigger.addEventListener('click', dlg.toggle.bind(dlg));




})();









$(document).ready(function () {

    //Hiding Next Steps
    $(".step02-mix").hide();
    $(".step02-heat").hide();
    $(".step03").hide();
    $(".step04").hide();
    $(".step05").hide();
    $("#next-mix").hide();
    $(".indicator").hide();
    $('#bb').hide();


    //Change Text Of Start Experiment When Click
    $('#startExp').click(function () {
        $(this).text("CHEMIX Experimental Wizard!");

    });

    //Move to Next Step of experiment
    $("#mix").click(function () {
        move_step(".step01", ".step02-mix");
    });

    $("#heat").click(function () {
        move_step(".step01", ".step02-heat");
    });

    list(".chemical");
    list_phy(".chem-phy");

    $("#testReaction").click(function () {
        localStorage.clear();
        reaction_test();
    });

    $("#next-mix").click(function () {
        set_selected_chemicals();
        move_step(".step02-mix", ".step03");
    });

    $(".playAnim").click(function () {
        //set_selected_info();
        $("#hiddenBox").hide();
    });

    $("#playNext").click(function () {
        $indicator = $("#indicatior option:selected").text();
        localStorage.setItem("indicator", $indicator);
        get_observation($indicator);
        $(".step03").hide();
        $(".step04").show();
    });

    $("#personal").click(function () {
        $(".step02-mix").hide();
        $(".step05").show();
    });

    $("#clicker").click(function () {
        $savedcolor = localStorage.getItem('observation1').substring(1);
        console.log($savedcolor);
        if (localStorage.getItem('observation1').substring(0, 1) === "C") {
            $("#tube").attr("src", "img/testtube.png");
            $('.filler').animate({backgroundColor: $savedcolor});
            $('#bb').hide();
            if ($savedcolor === "colorless") {
                $("#tube").attr("src", "img/ntesttube.png");
                swal("Colourless!", "", "warning");
            }
            
        }
    
        else if (localStorage.getItem('observation1').substring(0, 1) === "p") {
            $("#tube").attr("src", "img/ptesttube.png");
            $('#bb').hide();
            $('.filler').animate({backgroundColor: $savedcolor});
            if ($savedcolor === "colorless") {
                swal("Colourless!", "", "warning");
            }
            
        }
        else if (localStorage.getItem('observation1').substring(0, 1) === "b") {
            $("#tube").attr("src", "img/testtube.png");
            $('.filler').animate({backgroundColor: "white"});
            $('#bb').show();
            if ($savedcolor === "colorless") {
                swal("Colourless!", "", "warning");
            }
            
        }
        else {
                swal("Oops!", "No Observations Formed", "error");
            }
    });
});

function move_step($current, $next) {
    $($current).hide();
    $($next).show();
}

function reset_all() {
    $("#next-mix").hide();
    $(".step01").show();
    $(".step02-heat").hide();
    $(".step02-mix").hide();
    $(".step03").hide();
    $(".indicator").hide();
}

function list($className) {
    $.getJSON("ajax/instrument.php", function (data) {
        $.each(data.result, function () {
            $($className).append('<option>' + this['name'] + '<option>');
        });
    });
}

function list_phy($className) {
    $.getJSON("ajax/chem_phy.php", function (data) {
        $.each(data.result, function () {
            $($className).append('<option>' + this['level'] + '<option>');
        });
    });
}

function reaction_test() {
    $chem01 = $("#chem01 option:selected").text();
    $chem02 = $("#chem02 option:selected").val();
    $phy01 = $("#chem01-phy option:selected").val();
    $phy02 = $("#chem02-phy option:selected").val();
    $response_array = [];
    $indicator_array = [];
    $.ajax({
        url: 'ajax/reaction.php',
        type: "POST",
        data: ({chem01: $chem01, chem02: $chem02, phy01: $phy01, phy02: $phy02}),
        dataType: 'json',
        async: false,
        success: function (data) {
            $.each(data.result, function (index, element) {
                $response_array.push(element.id);
                $indicator_array.push(element.indicator);
            });
        }
    });

    if ($response_array.length > 0) {
        swal({title: "Great! Reaction Found!",
            text: "Do you want to continue ?",
            type: "success",
            showCancelButton: true,
            confirmButtonColor: "Green",
            confirmButtonText: "Yes, Please!",
            closeOnConfirm: true},
        function () {
            move_step(".step02-mix", ".step03");
            reaction_display($response_array[0]);
            set_selected_chemicals();
        });
    }
    else {
        swal("Sorry!", "Reaction Not Found, Try Again!", "error");
    }

    if ($indicator_array.length > 0) {
        $(".indicator").show();
        for ($i = 0; $i < $indicator_array.length; $i++) {
            $(".indcator_list").append('<option>' + $indicator_array[$i] + '<option>');
        }
    }
    else {
        $(".indicator").hide();
    }

}

function set_selected_chemicals() {
    $chem01 = $("#chem01 option:selected").text();
    $chem02 = $("#chem02 option:selected").val();
    $phy01 = $("#chem01-phy option:selected").val();
    $phy02 = $("#chem02-phy option:selected").val();

    localStorage.setItem("chem01", $chem01);
    localStorage.setItem("chem02", $chem02);
    localStorage.setItem("phy01", $phy01);
    localStorage.setItem("phy02", $phy02);

}

function reaction_display($id) {
    $.ajax({
        url: 'ajax/getDataById.php',
        type: "POST",
        data: ({id: $id}),
        dataType: 'json',
        async: false,
        success: function (data) {
            $.each(data.result, function (index, element) {
                $obs1 = element.product1;
                $obs2 = element.product2;
                $obs_level1 = element.pplevel1;
                $obs_level2 = element.pplevel2;





                localStorage.setItem("obs1", $obs1);
                localStorage.setItem("obs2", $obs2);
                localStorage.setItem("obs_level1", $obs_level1);
                localStorage.setItem("obs_level2", $obs_level2);


            });
        }
    });

}

function set_selected_info() {
    $title = $("#title_info").val();
    $description = $("#description_info").val();
    localStorage.setItem("title", $title);
    localStorage.setItem("description", $description);


}

function get_observation($indicator) {
    $.ajax({
        url: 'ajax/getObservation.php',
        type: "POST",
        data: ({chem01: localStorage.getItem('chem01'), chem02: localStorage.getItem('chem02'), phy01: localStorage.getItem('phy01'), phy02: localStorage.getItem('phy02'), indicator: $indicator}),
        dataType: 'json',
        async: false,
        success: function (data) {
            $.each(data.result, function (index, element) {
                $observ = element.observation1;
                localStorage.setItem('observation1', $observ);






                localStorage.setItem("obs1", $obs1);
                localStorage.setItem("obs2", $obs2);
                localStorage.setItem("obs_level1", $obs_level1);
                localStorage.setItem("obs_level2", $obs_level2);


            });
        }
    });

}









