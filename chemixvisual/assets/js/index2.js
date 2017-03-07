
var m=0;
var clicks=0;
var click=0;
var limit=1;

function changeCursor(el, cursor){	el.style.cursor = cursor;}

function reloadPage() {	

//setTimeout(function(){show.style.visibility = "hidden"; }, 500);

location.reload();
}
function chbg(r,color) {
	var rec=r;
    document.getElementById(rec).style.fill = color;
} 
/*$("#col1").on("mouseover", function(){
			document.getElementById('text1').textContent = "Choose the aqua";
		document.getElementById('text2').textContent = "chemical!"
		});*/
function mouseOver(r,s)
{
    document.getElementById('text1').textContent = r;
						document.getElementById('text2').textContent = s;
}
function mouseOut()
{
    document.getElementById('text1').textContent = "";
						document.getElementById('text2').textContent = "";
}

function visible(r){
	var show=r;
	
	document.getElementById(show).style.display = "";
	if(document.getElementById(show).style.visibility == "hidden" ) {
				document.getElementById(show).style.visibility = "visible";
			}
			else{
				document.getElementById(show).style.visibility = "hidden";
			
			}
}

function changeChemicals(v,s,r){
		
		var t1 = document.getElementById('acidname');
		var t2 = document.getElementById('blacidname');
		t1.textContent = "Mixed with";t2.textContent = "";
		document.getElementById("rect1").setAttribute("height", "220"); 
		var current = document.getElementById('rect1').getBBox().height;
		document.getElementById("visiblerect").setAttribute("height", "387"); 
		var button2 = document.getElementById("bottombtn");
		var button = document.getElementById("topbutton");
		/*changeCursor(button, 'pointer');
		button.style.fill="#E00606";
		changeCursor(button2, 'default');
			//showme.style.visibility = "hidden";
		button2.style.fill="#809797";*/
		
		changeCursor(button, 'pointer');
		var smallbutton = document.getElementById("smalltap");
		smallbutton.style.fill="#AC1717";
		
			changeCursor(button2, 'default');
			//showme.style.visibility = "hidden";
			button2.style.fill="#809797";
		
		var a = 0.7071067811865476;var b = 0.7071067811865475;var c = -0.7071067811865475;var d = 0.7071067811865476;var x = 443.0487804877962;var y = 539.0243902439033;
		var a1 = 1;var b1 = 0;var c1 = 0;var d1 = 1;var x1 = 450.3658536585315;var y1 = 542.3780487804962;

		changeCursor(button, 'pointer');
		var smallbutton = document.getElementById("smalltap");
		smallbutton.style.fill="#AC1717";
		
		var col = document.getElementById("col");
		document.getElementById("col").setAttribute("fill",v); 
		document.getElementById("col").setAttribute("stroke",v); 
		//document.getElementById('col').addEventListener('click', function(){m=0;});
		document.getElementById('textname').textContent = s;
		document.getElementById('upname').textContent = r;
		
	/*	document.getElementById('acidname').textContent = "Mixed with";
		document.getElementById('blacidname').textContent = "";*/
		document.getElementById("colbase").setAttribute("fill", "#ffffff"); 
		
		document.getElementById("visiblerect").setAttribute("fill", v); 
		document.getElementById("rect2").setAttribute("fill",v);
		
		document.getElementById("round").setAttribute("fill", v); 
		document.getElementById("tapcol1").setAttribute("fill", v); 
		document.getElementById("tapcol2").setAttribute("fill", v); 
		document.getElementById("tapcol3").setAttribute("fill", v); 
		
		document.getElementById("volctrl").setAttribute( 'transform', 'matrix('  + a + ' ' + b + ' ' + c + ' ' + d + ' ' + x + ' ' + y + ')');
		document.getElementById("volid").setAttribute( 'transform', 'matrix('  + a1 + ' ' + b1 + ' ' + c1 + ' ' + d1 + ' ' + x1 + ' ' + y1 + ')');
		document.getElementById("volmeter").textContent =  0+'.00 ml';
		
		/*document.getElementById('volid').setAttribute("fill","#000000");	
		document.getElementById('volid').textContent =  0+'.00 ml';*/
			visible('aqua');

	} 
	
function changeChemicals2(v,s,r){

		document.getElementById('acidname').textContent = s;
		document.getElementById('blacidname').textContent = r;
		document.getElementById("visiblerect").setAttribute("fill", v); 
		document.getElementById("colbase").setAttribute("fill", v); 
			var button = document.getElementById("topbutton");
		changeCursor(button, 'pointer');
		var smallbutton = document.getElementById("smalltap");
		smallbutton.style.fill="#AC1717";
	
		document.getElementById("tapcol1").setAttribute("fill", v); 
		document.getElementById("tapcol2").setAttribute("fill", v); 
		document.getElementById("tapcol3").setAttribute("fill", v); 
		
		var currentrect = document.getElementById('rect1').getBBox().height;
		visible('mix');
			
		
	} 

function changeDimensions() {

		var showme = document.getElementById("visiblerect");
		var Rndfillcolor = document.getElementById("col").getAttribute("fill");
		var current = document.getElementById('rect1').getBBox().height;
		var current2 = document.getElementById('visiblerect').getBBox().height;
		var button2 = document.getElementById("bottombtn");
		var button = document.getElementById("topbutton");
		var smlbutton = document.getElementById("smalltap");
		var r = document.getElementById("volctrl");
		var a = r.transform.baseVal.consolidate().matrix.a;var b = r.transform.baseVal.consolidate().matrix.b;var c = r.transform.baseVal.consolidate().matrix.c;var d = r.transform.baseVal.consolidate().matrix.d;var x = r.transform.baseVal.consolidate().matrix.e;var y = r.transform.baseVal.consolidate().matrix.f;
		var t = document.getElementById("volid");
		var a1 = t.transform.baseVal.consolidate().matrix.a;var b1 = t.transform.baseVal.consolidate().matrix.b;var c1 = t.transform.baseVal.consolidate().matrix.c;var d1 = t.transform.baseVal.consolidate().matrix.d;var x1 = t.transform.baseVal.consolidate().matrix.e;var y1 = t.transform.baseVal.consolidate().matrix.f;
		
		var fillcolor = document.getElementById("visiblerect").getAttribute("fill");
		//var col = document.getElementById("col");
		/*switch (current) {
					  
					  case 250: document.getElementById('text1').textContent = "You can't add";document.getElementById('text2').textContent = "Acid/Base Now!";break;
					  case 180: document.getElementById('text1').textContent = "Now You can add";document.getElementById('text2').textContent = "Acid/Base!";break;
					  
					}*/
	console.log(current);
		if(current>0 && current<=220)
		{
			changeCursor(button2, 'pointer');
			button2.style.fill="#E00606";				
		}
		
		
		if(current>70 && (fillcolor=="#01DFA5" || fillcolor=="#00BFFF" || fillcolor=="#E6E6E6"
							|| fillcolor=="#F7819F" || fillcolor=="#B404AE" || fillcolor=="#A9F5A9"
							|| fillcolor=="#F7D358" || fillcolor=="#3B0B39" || fillcolor=="#BE81F7"
							|| fillcolor=="#F800C7"))
		{ 


			
			showme.style.display = "";
			if(showme.style.visibility == "hidden" ) {
				showme.style.visibility = "visible";
			}
			
			setTimeout(function(){showme.style.visibility = "hidden"; }, 500);
			
				if (current == 220)  m = 1;
				else m = m+1;
				
		current = current - 5;console.log(current);
		document.getElementById("rect1").setAttribute("height", current);
		
		current2 = current2 - 5;
		document.getElementById("visiblerect").setAttribute("height", current2);
		console.log(current2);	
		
		y=y-5;y1=y1-5;
		r.setAttribute( 'transform', 'matrix('  + a + ' ' + b + ' ' + c + ' ' + d + ' ' + x + ' ' + y + ')');
		t.setAttribute( 'transform', 'matrix('  + a1 + ' ' + b1 + ' ' + c1 + ' ' + d1 + ' ' + x1 + ' ' + y1 + ')');
				//m=m+5;
			
		document.getElementById('volmeter').textContent = m+'.00 ml';				
			
				
		}
		else if(current>=25 && current <=125 && fillcolor=="#E6E6F6" && click==0)
		{
			showme.style.display = "";
			if(showme.style.visibility == "hidden" ) {
				showme.style.visibility = "visible";
			}
			
			setTimeout(function(){showme.style.visibility = "hidden"; }, 500);
			
			current = current - 5;console.log(current);
			document.getElementById("rect1").setAttribute("height", current);
			current2 = current2 - 5;
			document.getElementById("visiblerect").setAttribute("height", current2);
			
			y=y-5;y1=y1-5;
			r.setAttribute( 'transform', 'matrix('  + a + ' ' + b + ' ' + c + ' ' + d + ' ' + x + ' ' + y + ')');
			t.setAttribute( 'transform', 'matrix('  + a1 + ' ' + b1 + ' ' + c1 + ' ' + d1 + ' ' + x1 + ' ' + y1 + ')');
			m=m+1;
			
			document.getElementById('volmeter').textContent = m+'.00 ml';				
			
			
				
				document.getElementById('acid').addEventListener('click', function(){clicks=0;});
				document.getElementById('acidpath').addEventListener('click', function(){clicks=0;});
				document.getElementById('acidtxt').addEventListener('click', function(){clicks=0;});
				
				
				relod();
				//document.getElementById('colhcl').addEventListener('click', function(){limit=1;});
				clicks += 1;console.log(clicks);
				if(limit>0){limit = limit-0.2;}
				else limit=0;
				console.log(limit);
				
				switch (Rndfillcolor) {
					  case "#01DFA5": colorHCl(limit,'h9091');break;
					  case "#00BFFF": colorHCl(limit,'h9191');break;
					  case "#E6E6E6": colorHCl(limit,'h9291');break;
					  case "#F7819F": colorHCl(limit,'h9391');break;
					  case "#B404AE": colorHCl(limit,'h9491');break;
					  case "#A9F5A9": colorHCl(limit,'h9591');break;
					  case "#F7D358": colorHCl(limit,'h9691');break;
					  case "#3B0B39": colorHCl(limit,'h9791');break;
					  case "#BE81F7": colorHCl(limit,'h9891');break;
					  case "#F800C7": colorHCl(limit,'h9991');break;  
					}
				

		}
		else if(current>=25 && current<=125 && fillcolor=="#F2F2F2" && clicks==0)
		{
			showme.style.display = "";
			if(showme.style.visibility == "hidden" ) {
				showme.style.visibility = "visible";
			}
			
			setTimeout(function(){showme.style.visibility = "hidden"; }, 500);
			
			current = current - 5;console.log(current);
			document.getElementById("rect1").setAttribute("height", current);
			current2 = current2 - 5;
			document.getElementById("visiblerect").setAttribute("height", current2);
			
			y=y-5;y1=y1-5;
			r.setAttribute( 'transform', 'matrix('  + a + ' ' + b + ' ' + c + ' ' + d + ' ' + x + ' ' + y + ')');
			t.setAttribute( 'transform', 'matrix('  + a1 + ' ' + b1 + ' ' + c1 + ' ' + d1 + ' ' + x1 + ' ' + y1 + ')');
			m=m+1;
			
			document.getElementById('volmeter').textContent = m+'.00 ml';				
			
				
				document.getElementById('base').addEventListener('click', function(){click=0;});
				document.getElementById('basepath').addEventListener('click', function(){click=0;});
				document.getElementById('basetxt').addEventListener('click', function(){click=0;});
				
				relod();
				
				click += 1;console.log(click);
				if(limit>0){limit = limit-0.2;}
				else limit=0;
				console.log(limit);
				
				switch (Rndfillcolor) {
					  case "#01DFA5": colorNH(limit,'n9091');break;
					  case "#00BFFF": colorNH(limit,'n9191');break;
					  case "#E6E6E6": colorNH(limit,'n9291');break;
					  case "#F7819F": colorNH(limit,'n9391');break;
					  case "#B404AE": colorNH(limit,'n9491');break;
					  case "#A9F5A9": colorNH(limit,'n9591');break;
					  case "#F7D358": colorNH(limit,'n9691');break;
					  case "#3B0B39": colorNH(limit,'n9791');break;
					  case "#BE81F7": colorNH(limit,'n9891');break;
					  case "#F800C7": colorNH(limit,'n9991');break;  
					}
		}
		else
		{
			var button = document.getElementById("topbutton");
			changeCursor(button, 'default');
			showme.style.visibility = "hidden";
			smlbutton.style.fill="#809797";
		}
		
}

function changeHeight() 
{
		
		var showme = document.getElementById("rect2");
		var current = document.getElementById('rect1').getBBox().height;
		var button2 = document.getElementById("bottombtn");
		var button = document.getElementById("topbutton");
		var current2 = document.getElementById('visiblerect').getBBox().height;
		var r = document.getElementById("volid");
		var a = r.transform.baseVal.consolidate().matrix.a;var b = r.transform.baseVal.consolidate().matrix.b;var c = r.transform.baseVal.consolidate().matrix.c;var d = r.transform.baseVal.consolidate().matrix.d;var x = r.transform.baseVal.consolidate().matrix.e;var y = r.transform.baseVal.consolidate().matrix.f;
		var t = document.getElementById("volctrl");
		var a1 = t.transform.baseVal.consolidate().matrix.a;var b1 = t.transform.baseVal.consolidate().matrix.b;var c1 = t.transform.baseVal.consolidate().matrix.c;var d1 = t.transform.baseVal.consolidate().matrix.d;var x1 = t.transform.baseVal.consolidate().matrix.e;var y1 = t.transform.baseVal.consolidate().matrix.f;
			
		if(current>0 && current<=220)
		{   
			changeCursor(button, 'pointer');
					button.style.fill="#E00606";
		 	showme.style.display = "";
			if(showme.style.visibility == "hidden" ) {
				showme.style.visibility = "visible";
			}
			var fillcol = document.getElementById("round").getAttribute("fill");
			showme.setAttribute("fill",fillcol);
			setTimeout(function(){showme.style.visibility = "hidden"; }, 500);
			
			current = current + 5;console.log(current);
			document.getElementById("rect1").setAttribute("height", current);
			current2 = current2 + 5;
			document.getElementById("visiblerect").setAttribute("height", current2);
			
			y=y+5;y1=y1+5;
			r.setAttribute( 'transform', 'matrix('  + a + ' ' + b + ' ' + c + ' ' + d + ' ' + x + ' ' + y + ')');
			t.setAttribute( 'transform', 'matrix('  + a1 + ' ' + b1 + ' ' + c1 + ' ' + d1 + ' ' + x1 + ' ' + y1 + ')');
			m=m-1;
			
			document.getElementById('volmeter').textContent = m+'.00 ml';				
			
					
					
		}
		
		else
		{
			changeCursor(button2, 'default');
			showme.style.visibility = "hidden";
			button2.style.fill="#809797";
		}
		
}

function change(v){	document.getElementById("round").setAttribute("fill", v); } 

/*function colchange(Rndfillcolor){
			var button = document.getElementById("tapbutton");
				var t1 = document.getElementById('acidname');
				var t2 = document.getElementById('blacidname');
				t1.textContent = "Mixed with";t2.textContent = "";
			document.getElementById('col').addEventListener('click', 
			function(){
			document.getElementById("visiblerect").setAttribute("fill", Rndfillcolor); 
			document.getElementById("visiblerect2").setAttribute("fill",Rndfillcolor);
			
			document.getElementById("round").setAttribute("fill", Rndfillcolor); 
			document.getElementById("tapcol1").setAttribute("fill", Rndfillcolor); 
			document.getElementById("tapcol2").setAttribute("fill", Rndfillcolor); 
			document.getElementById("tapcol3").setAttribute("fill", Rndfillcolor); 
			
			changeCursor(button, 'pointer');
			button.style.fill="#E00606";});

}
*/
function relod(){
		var r = document.getElementById('acidname');
		var t = document.getElementById('blacidname');
		var t1=document.getElementById('text1');
		var t2=document.getElementById('text2');
		
		document.getElementById('col1').addEventListener('click', function(){limit=1;clicks=0;click=0;m=0;r.textContent = "Mixed with";t.textContent = "";});
		document.getElementById('col2').addEventListener('click', function(){limit=1;clicks=0;click=0;m=0;r.textContent = "Mixed with";t.textContent = "";});
		document.getElementById('col3').addEventListener('click', function(){limit=1;clicks=0;click=0;m=0;r.textContent = "Mixed with";t.textContent = "";});
		document.getElementById('col4').addEventListener('click', function(){limit=1;clicks=0;click=0;m=0;r.textContent = "Mixed with";t.textContent = "";});
		document.getElementById('col5').addEventListener('click', function(){limit=1;clicks=0;click=0;m=0;r.textContent = "Mixed with";t.textContent = "";});
		document.getElementById('col6').addEventListener('click', function(){limit=1;clicks=0;click=0;m=0;r.textContent = "Mixed with";t.textContent = "";});
		document.getElementById('col7').addEventListener('click', function(){limit=1;clicks=0;click=0;m=0;r.textContent = "Mixed with";t.textContent = "";});
		document.getElementById('col8').addEventListener('click', function(){limit=1;clicks=0;click=0;m=0;r.textContent = "Mixed with";t.textContent = "";});
		document.getElementById('col9').addEventListener('click', function(){limit=1;clicks=0;click=0;m=0;r.textContent = "Mixed with";t.textContent = "";});
		document.getElementById('col10').addEventListener('click',function(){limit=1;clicks=0;click=0;m=0;r.textContent = "Mixed with";t.textContent = "";});
}
	
function colorHCl(l,u)
{
			if(u=="h9091") 
			{
				if(l>0){document.getElementById('h9091').setAttribute("offset", l);change('url(#h909)');}
						else{document.getElementById('h9091').setAttribute("offset", 0);change('url(#h909)');}
			}
			if(u=="h9191")
			{
				if(l>0){document.getElementById('h9191').setAttribute("offset", l);change('url(#h919)');}
						else{document.getElementById('h9191').setAttribute("offset", 0);change('url(#h919)');}
			}
			if(u=="h9291")
			{
					if(l>0){document.getElementById('h9291').setAttribute("offset", l);change('url(#h929)');}
						else{document.getElementById('h9291').setAttribute("offset", 0);change('url(#h929)');}
			}
			if(u=="h9391")
			{
				if(l>0){document.getElementById('h9391').setAttribute("offset", l);change('url(#h939)');}
						else{document.getElementById('h9391').setAttribute("offset", 0);change('url(#h939)');}
			}
			if(u=="h9491")
			{
				if(l>0){document.getElementById('h9491').setAttribute("offset", l);change('url(#h949)');}
						else{document.getElementById('h9491').setAttribute("offset", 0);change('url(#h949)');}
			}
			if(u=="h9591")
			{
				if(l>0){document.getElementById('h9591').setAttribute("offset", l);change('url(#h959)');}
						else{document.getElementById('h9591').setAttribute("offset", 0);change('url(#h959)');}
			}
			if(u=="h9691")
			{
				if(l>0){document.getElementById('h9691').setAttribute("offset", l);change('url(#h969)');}
						else{document.getElementById('h9691').setAttribute("offset", 0);change('url(#h969)');}
			}if(u=="h9791")
			{
				if(l>0){document.getElementById('h9791').setAttribute("offset", l);change('url(#h979)');}
						else{document.getElementById('h9791').setAttribute("offset", 0);change('url(#h979)');}
			}
			if(u=="h9891")
			{
				if(l>0){document.getElementById('h9891').setAttribute("offset", l);change('url(#h989)');}
						else{document.getElementById('h9891').setAttribute("offset", 0);change('url(#h989)');}
			}
			if(u=="h9991")
			{
				if(l>0){document.getElementById('h9991').setAttribute("offset", l);change('url(#h999)');}
						else{document.getElementById('h9991').setAttribute("offset", 0);change('url(#h999)');}
			}
}

function colorNH(l,u)
{
			if(u=="n9091")
			{
				if(l>0){document.getElementById('n9091').setAttribute("offset", l);change('url(#n909)');}
						else{document.getElementById('n9091').setAttribute("offset", 0);change('url(#n909)');}
			}
			if(u=="n9191")
			{
				if(l>0){document.getElementById('n9191').setAttribute("offset", l);change('url(#n919)');}
						else{document.getElementById('n9191').setAttribute("offset", 0);change('url(#n919)');}
			}
			if(u=="n9291")
			{
					if(l>0){document.getElementById('n9291').setAttribute("offset", l);change('url(#n929)');}
						else{document.getElementById('n9291').setAttribute("offset", 0);change('url(#n929)');}
			}
			if(u=="n9391")
			{
				if(l>0){document.getElementById('n9391').setAttribute("offset", l);change('url(#n939)');}
						else{document.getElementById('n9391').setAttribute("offset", 0);change('url(#n939)');}
			}
			if(u=="n9491")
			{
				if(l>0){document.getElementById('n9491').setAttribute("offset", l);change('url(#n949)');}
						else{document.getElementById('n9491').setAttribute("offset", 0);change('url(#n949)');}
			}
			if(u=="n9591")
			{
				if(l>0){document.getElementById('n9591').setAttribute("offset", l);change('url(#n959)');}
						else{document.getElementById('n9591').setAttribute("offset", 0);change('url(#n959)');}
			}
			if(u=="n9691")
			{
				if(l>0){document.getElementById('n9691').setAttribute("offset", l);change('url(#n969)');}
						else{document.getElementById('n9691').setAttribute("offset", 0);change('url(#n969)');}
			}if(u=="n9791")
			{
				if(l>0){document.getElementById('n9791').setAttribute("offset", l);change('url(#n979)');}
						else{document.getElementById('n9791').setAttribute("offset", 0);change('url(#n979)');}
			}
			if(u=="n9891")
			{
				if(l>0){document.getElementById('n9891').setAttribute("offset", l);change('url(#n989)');}
						else{document.getElementById('n9891').setAttribute("offset", 0);change('url(#n989)');}
			}
			if(u=="n9991")
			{
				if(l>0){document.getElementById('n9991').setAttribute("offset", l);change('url(#n999)');}
						else{document.getElementById('n9991').setAttribute("offset", 0);change('url(#n999)');}
			}
}

function pop() {
				document.getElementById('openModal').style.display = 'block';
			}
			function hide() {
				document.getElementById('openModal').style.display = 'none';
			}
			//To detect escape button
			document.onkeydown = function(evt) {
				evt = evt || window.event;
				if (evt.keyCode == 27) {
					hide();
				}
			};