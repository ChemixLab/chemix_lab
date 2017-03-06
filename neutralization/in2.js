var moleacid;
var molebase;
var volbase;
var volacid;
var m=0;
var clicks=0;
var click=0;
var limit=1;
var tolvol;

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
		var t3 = document.getElementById('blacidname1');
		var t4 = document.getElementById('blacidname2');
		var t5 = document.getElementById('blacidname3');
		var t6 = document.getElementById('blacidname4');
		var t7 = document.getElementById('type');
		t1.textContent = "Mixed with";t2.textContent = "";
		t3.textContent = "";t4.textContent = "";
		t5.textContent = "";t6.textContent = "";
		t7.textContent = "Indicators";
		document.getElementById("rect1").setAttribute("height", "290"); 
		var current = document.getElementById('rect1').getBBox().height;
		document.getElementById("visiblerect").setAttribute("height", "430"); 
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
		
		var a = 0.7071067811865476;var b = 0.7071067811865475;var c = -0.7071067811865475;var d = 0.7071067811865476;var x = 343.0487804877962;var y = 680.0243902439033;
		var a1 = 1;var b1 = 0;var c1 = 0;var d1 = 1;var x1 = 350.3658536585315;var y1 = 683.3780487804962;

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
		document.getElementById("colacid").setAttribute("fill", "#ffffff"); 
		
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
			visible('base');

	} 
	
function changeChemicals2(v,s,r,p,q,t,b){

		document.getElementById('acidname').textContent = s;
		document.getElementById('blacidname').textContent = r;
		document.getElementById('blacidname1').textContent = p;
		document.getElementById('blacidname2').textContent = q;
		document.getElementById('blacidname3').textContent = t;
		document.getElementById('blacidname4').textContent = b;
		document.getElementById("visiblerect").setAttribute("fill", v); 
		document.getElementById("colacid").setAttribute("fill", v); 
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
	function changeChemicals5(v,s,r){

		document.getElementById('type').textContent = s;
		
		document.getElementById("visiblerect").setAttribute("fill", v); 
		document.getElementById("ind").setAttribute("fill", v); 
			var button = document.getElementById("topbutton");
		changeCursor(button, 'pointer');
		var smallbutton = document.getElementById("smalltap");
		smallbutton.style.fill="#AC1717";
	
		document.getElementById("tapcol1").setAttribute("fill", v); 
		document.getElementById("tapcol2").setAttribute("fill", v); 
		document.getElementById("tapcol3").setAttribute("fill", v); 
		
		var currentrect = document.getElementById('rect1').getBBox().height;
		visible('indicate');
			
		
	} 
	 
	function changeChemicals3(v,s,r){
		
		

		document.getElementById('conac').textContent = s;
		
		document.getElementById("conacid").setAttribute("fill",v); 
		document.getElementById("conacid").setAttribute("stroke","#000000"); 
		
			var button = document.getElementById("topbutton");
		changeCursor(button, 'pointer');
		var smallbutton = document.getElementById("smalltap");
		smallbutton.style.fill="#AC1717";
	
		var currentrect = document.getElementById('rect1').getBBox().height;
		visible('mix1');
			
		
	} 

	function changeChemicals4(v,s,r){
		
		

		document.getElementById('conba').textContent = s;
		
		
		document.getElementById("conbase").setAttribute("fill",v); 
		document.getElementById("conbase").setAttribute("stroke","#000000"); 
		var button = document.getElementById("topbutton");
		changeCursor(button, 'pointer');
		var smallbutton = document.getElementById("smalltap");
		smallbutton.style.fill="#AC1717";
	
		
		
		var currentrect = document.getElementById('rect1').getBBox().height;
		visible('mix2');
			
		
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
		var fillacid = document.getElementById("conacid").getAttribute("fill");
		var fillbase = document.getElementById("conbase").getAttribute("fill");
		
		var t1 = document.getElementById('reqacid');
		var t2 = document.getElementById('req');
		
		var basec = document.getElementById('conba').textContent;
		var acidc = document.getElementById('conac').textContent;
		//var col = document.getElementById("col");
		/*switch (current) {
					  
					  case 250: document.getElementById('text1').textContent = "You can't add";document.getElementById('text2').textContent = "Acid/Base Now!";break;
					  case 180: document.getElementById('text1').textContent = "Now You can add";document.getElementById('text2').textContent = "Acid/Base!";break;
					  
					}*/
	console.log(current);
		if(current>0 && current<=290)
		{
			changeCursor(button2, 'pointer');
			button2.style.fill="#E00606";				
		}
		

		if(current>120 &&( (fillcolor=="#D6CCCA" || fillcolor=="#B3ADAB" ) && (fillbase="#A5789D")))
		{   
			showme.style.display = "";
			if(showme.style.visibility == "hidden" ) {
				showme.style.visibility = "visible";
			}
			
			
			setTimeout(function(){showme.style.visibility = "hidden"; }, 500);
			changeCursor(button2, 'pointer');
			button2.style.fill="#A5789D";
				if (current == 290)  m = 5;
				else m = m+5;
				
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
				volbase=m;	
				molebase= volbase * basec;
				
			
		}
		else if((fillcolor=="#E9E4E2") )
		{
		if(current <=285 && click==0)
		{
			
					
					
			showme.style.display = "";
			if(showme.style.visibility == "hidden" ) {
				showme.style.visibility = "visible";
			}
			
			setTimeout(function(){showme.style.visibility = "hidden"; }, 500);
			
					
			
			
			
				document.getElementById('phe').addEventListener('click', function(){clicks=0;});
				document.getElementById('ind1').addEventListener('click', function(){clicks=0;});
				document.getElementById('itxt1').addEventListener('click', function(){clicks=0;});
				
				
				relod();
				//document.getElementById('colhcl').addEventListener('click', function(){limit=1;});
				clicks += 1;console.log(clicks);
				if(limit>0){limit = limit-0.2;}
				else limit=0;
				console.log(limit);
				
				switch (Rndfillcolor) {
					  case "#D6CCCA": colorPhe(limit,'h9091');break;
					  case "#B3ADAB": color(limit,'h9191');break;
					  
					 
					}
					
				

		}
		

		}
		else if((fillcolor=="#E6E6F6") &&  (fillacid="#A5789D"))
		{moleacid= molebase;
				volacid=moleacid / acidc
				tolvol=volbase + volacid;
				t2.textContent = volbase;
		if(current>=(295-tolvol) && current <=285 && click==0)
		{
			t1.textContent = volacid;
					
					
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
			m=m+5;
			
			document.getElementById('volmeter').textContent = m+'.00 ml';				
			
			
			
				document.getElementById('acid1').addEventListener('click', function(){clicks=0;});
				document.getElementById('acid1path').addEventListener('click', function(){clicks=0;});
				document.getElementById('acid1txt').addEventListener('click', function(){clicks=0;});
				
				
				relod();
				//document.getElementById('colhcl').addEventListener('click', function(){limit=1;});
				clicks += 1;console.log(clicks);
				if(limit>0){limit = limit-0.2;}
				else limit=0;
				console.log(limit);
				
				switch (Rndfillcolor) {
					  case "#F1F6F6": colorHCl(limit,'h9091');break;
					  case "#DADCDC": colorHCl(limit,'h9191');break;
					  case "#CCCDCD": colorHCl(limit,'h9291');break;
					 
					}
				

		}
		}
		
				else if((fillcolor=="#F2F2F2") &&  (fillacid="#A5789D"))
		{moleacid= molebase;
				volacid=moleacid / acidc
				tolvol=volbase + volacid;
				t2.textContent = volbase;
		if(current>=(295-tolvol) && current <=285 && click==0)
		{
			t1.textContent = volacid;
					
					
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
			m=m+5;
			
			document.getElementById('volmeter').textContent = m+'.00 ml';				
			
			
			
				document.getElementById('acid1').addEventListener('click', function(){clicks=0;});
				document.getElementById('acid1path').addEventListener('click', function(){clicks=0;});
				document.getElementById('acid1txt').addEventListener('click', function(){clicks=0;});
				
				
				relod();
				//document.getElementById('colhcl').addEventListener('click', function(){limit=1;});
				clicks += 1;console.log(clicks);
				if(limit>0){limit = limit-0.2;}
				else limit=0;
				console.log(limit);
				
				switch (Rndfillcolor) {
					  case "#F1F6F6": colorHCl(limit,'h9091');break;
					  case "#DADCDC": colorHCl(limit,'h9191');break;
					  case "#CCCDCD": colorHCl(limit,'h9291');break;
					 
					}
				

		}
		}
		
		else if((fillcolor=="#E1D8D5") &&  (fillacid="#A5789D"))
		{moleacid= molebase/2;
				volacid=moleacid / acidc
				tolvol=volbase + volacid;
				t2.textContent = volbase;
		if(current>=(295-tolvol) && current <=285 && click==0)
		{
			t1.textContent = volacid;
					
					
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
			m=m+5;
			
			document.getElementById('volmeter').textContent = m+'.00 ml';				
			
			
			
				document.getElementById('acid1').addEventListener('click', function(){clicks=0;});
				document.getElementById('acid1path').addEventListener('click', function(){clicks=0;});
				document.getElementById('acid1txt').addEventListener('click', function(){clicks=0;});
				
				
				relod();
				//document.getElementById('colhcl').addEventListener('click', function(){limit=1;});
				clicks += 1;console.log(clicks);
				if(limit>0){limit = limit-0.2;}
				else limit=0;
				console.log(limit);
				
				switch (Rndfillcolor) {
					  case "#F1F6F6": colorHCl(limit,'h9091');break;
					  case "#DADCDC": colorHCl(limit,'h9191');break;
					  case "#CCCDCD": colorHCl(limit,'h9291');break;
					 
					}
				

		}
		}
		
	
		else if((fillcolor=="#06DDFB") )
		{
		if(current <=285 && click==0)
		{
			
					
					
			showme.style.display = "";
			if(showme.style.visibility == "hidden" ) {
				showme.style.visibility = "visible";
			}
			
			setTimeout(function(){showme.style.visibility = "hidden"; }, 500);
			
					
			
			
			
				document.getElementById('bro').addEventListener('click', function(){clicks=0;});
				document.getElementById('ind3').addEventListener('click', function(){clicks=0;});
				document.getElementById('itxt3').addEventListener('click', function(){clicks=0;});
				
				
				relod();
				//document.getElementById('colhcl').addEventListener('click', function(){limit=1;});
				clicks += 1;console.log(clicks);
				if(limit>0){limit = limit-0.2;}
				else limit=0;
				console.log(limit);
				
				switch (Rndfillcolor) {
					  case "#D6CCCA": colorPhe(limit,'h9091');break;
					  case "#B3ADAB": color(limit,'h9191');break;
					  
					 
					}
					
				

		}
		

		}
		else if((fillcolor=="#E6E6F6") &&  (fillacid="#A5789D"))
		{moleacid= molebase;
				volacid=moleacid / acidc
				tolvol=volbase + volacid;
				t2.textContent = volbase;
		if(current>=(295-tolvol) && current <=285 && click==0)
		{
			t1.textContent = volacid;
					
					
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
			m=m+5;
			
			document.getElementById('volmeter').textContent = m+'.00 ml';				
			
			
			
				document.getElementById('acid1').addEventListener('click', function(){clicks=0;});
				document.getElementById('acid1path').addEventListener('click', function(){clicks=0;});
				document.getElementById('acid1txt').addEventListener('click', function(){clicks=0;});
				
				
				relod();
				//document.getElementById('colhcl').addEventListener('click', function(){limit=1;});
				clicks += 1;console.log(clicks);
				if(limit>0){limit = limit-0.2;}
				else limit=0;
				console.log(limit);
				
				switch (Rndfillcolor) {
					  case "#F1F6F6": colorHCl(limit,'h9091');break;
					  case "#DADCDC": colorHCl(limit,'h9191');break;
					  case "#CCCDCD": colorHCl(limit,'h9291');break;
					 
					}
				

		}
		}
		
				else if((fillcolor=="#F2F2F2") &&  (fillacid="#A5789D"))
		{moleacid= molebase;
				volacid=moleacid / acidc
				tolvol=volbase + volacid;
				t2.textContent = volbase;
		if(current>=(295-tolvol) && current <=285 && click==0)
		{
			t1.textContent = volacid;
					
					
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
			m=m+5;
			
			document.getElementById('volmeter').textContent = m+'.00 ml';				
			
			
			
				document.getElementById('acid1').addEventListener('click', function(){clicks=0;});
				document.getElementById('acid1path').addEventListener('click', function(){clicks=0;});
				document.getElementById('acid1txt').addEventListener('click', function(){clicks=0;});
				
				
				relod();
				//document.getElementById('colhcl').addEventListener('click', function(){limit=1;});
				clicks += 1;console.log(clicks);
				if(limit>0){limit = limit-0.2;}
				else limit=0;
				console.log(limit);
				
				switch (Rndfillcolor) {
					  case "#F1F6F6": colorHCl(limit,'h9091');break;
					  case "#DADCDC": colorHCl(limit,'h9191');break;
					  case "#CCCDCD": colorHCl(limit,'h9291');break;
					 
					}
				

		}
		}
		
		else if((fillcolor=="#E1D8D5") &&  (fillacid="#A5789D"))
		{moleacid= molebase/2;
				volacid=moleacid / acidc
				tolvol=volbase + volacid;
				t2.textContent = volbase;
		if(current>=(295-tolvol) && current <=285 && click==0)
		{
			t1.textContent = volacid;
					
					
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
			m=m+5;
			
			document.getElementById('volmeter').textContent = m+'.00 ml';				
			
			
			
				document.getElementById('acid1').addEventListener('click', function(){clicks=0;});
				document.getElementById('acid1path').addEventListener('click', function(){clicks=0;});
				document.getElementById('acid1txt').addEventListener('click', function(){clicks=0;});
				
				
				relod();
				//document.getElementById('colhcl').addEventListener('click', function(){limit=1;});
				clicks += 1;console.log(clicks);
				if(limit>0){limit = limit-0.2;}
				else limit=0;
				console.log(limit);
				
				switch (Rndfillcolor) {
					  case "#F1F6F6": colorHCl(limit,'h9091');break;
					  case "#DADCDC": colorHCl(limit,'h9191');break;
					  case "#CCCDCD": colorHCl(limit,'h9291');break;
					 
					}
				

		}
		}
		else if((fillcolor=="#FB7D06") )
		{
		if(current <=285 && click==0)
		{
			
					
					
			showme.style.display = "";
			if(showme.style.visibility == "hidden" ) {
				showme.style.visibility = "visible";
			}
			
			setTimeout(function(){showme.style.visibility = "hidden"; }, 500);
			
					
			
			
			
				document.getElementById('met').addEventListener('click', function(){clicks=0;});
				document.getElementById('ind2').addEventListener('click', function(){clicks=0;});
				document.getElementById('itxt2').addEventListener('click', function(){clicks=0;});
				
				
				relod();
				//document.getElementById('colhcl').addEventListener('click', function(){limit=1;});
				clicks += 1;console.log(clicks);
				if(limit>0){limit = limit-0.2;}
				else limit=0;
				console.log(limit);
				
				switch (Rndfillcolor) {
					  case "#D6CCCA": colorPhe(limit,'h9091');break;
					  case "#B3ADAB": color(limit,'h9191');break;
					  
					 
					}
					
				

		}
		

		}
		else if((fillcolor=="#E6E6F6") &&  (fillacid="#A5789D"))
		{moleacid= molebase;
				volacid=moleacid / acidc
				tolvol=volbase + volacid;
				t2.textContent = volbase;
		if(current>=(295-tolvol) && current <=285 && click==0)
		{
			t1.textContent = volacid;
					
					
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
			m=m+5;
			
			document.getElementById('volmeter').textContent = m+'.00 ml';				
			
			
			
				document.getElementById('acid1').addEventListener('click', function(){clicks=0;});
				document.getElementById('acid1path').addEventListener('click', function(){clicks=0;});
				document.getElementById('acid1txt').addEventListener('click', function(){clicks=0;});
				
				
				relod();
				//document.getElementById('colhcl').addEventListener('click', function(){limit=1;});
				clicks += 1;console.log(clicks);
				if(limit>0){limit = limit-0.2;}
				else limit=0;
				console.log(limit);
				
				switch (Rndfillcolor) {
					  case "#F1F6F6": colorHCl(limit,'h9091');break;
					  case "#DADCDC": colorHCl(limit,'h9191');break;
					  case "#CCCDCD": colorHCl(limit,'h9291');break;
					 
					}
				

		}
		}
		
				else if((fillcolor=="#F2F2F2") &&  (fillacid="#A5789D"))
		{moleacid= molebase;
				volacid=moleacid / acidc
				tolvol=volbase + volacid;
				t2.textContent = volbase;
		if(current>=(295-tolvol) && current <=285 && click==0)
		{
			t1.textContent = volacid;
					
					
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
			m=m+5;
			
			document.getElementById('volmeter').textContent = m+'.00 ml';				
			
			
			
				document.getElementById('acid1').addEventListener('click', function(){clicks=0;});
				document.getElementById('acid1path').addEventListener('click', function(){clicks=0;});
				document.getElementById('acid1txt').addEventListener('click', function(){clicks=0;});
				
				
				relod();
				//document.getElementById('colhcl').addEventListener('click', function(){limit=1;});
				clicks += 1;console.log(clicks);
				if(limit>0){limit = limit-0.2;}
				else limit=0;
				console.log(limit);
				
				switch (Rndfillcolor) {
					  case "#F1F6F6": colorHCl(limit,'h9091');break;
					  case "#DADCDC": colorHCl(limit,'h9191');break;
					  case "#CCCDCD": colorHCl(limit,'h9291');break;
					 
					}
				

		}
		}
		
		else if((fillcolor=="#E1D8D5") &&  (fillacid="#A5789D"))
		{moleacid= molebase/2;
				volacid=moleacid / acidc
				tolvol=volbase + volacid;
				t2.textContent = volbase;
		if(current>=(295-tolvol) && current <=285 && click==0)
		{
			t1.textContent = volacid;
					
					
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
			m=m+5;
			
			document.getElementById('volmeter').textContent = m+'.00 ml';				
			
			
			
				document.getElementById('acid1').addEventListener('click', function(){clicks=0;});
				document.getElementById('acid1path').addEventListener('click', function(){clicks=0;});
				document.getElementById('acid1txt').addEventListener('click', function(){clicks=0;});
				
				
				relod();
				//document.getElementById('colhcl').addEventListener('click', function(){limit=1;});
				clicks += 1;console.log(clicks);
				if(limit>0){limit = limit-0.2;}
				else limit=0;
				console.log(limit);
				
				switch (Rndfillcolor) {
					  case "#F1F6F6": colorHCl(limit,'h9091');break;
					  case "#DADCDC": colorHCl(limit,'h9191');break;
					  case "#CCCDCD": colorHCl(limit,'h9291');break;
					 
					}
				

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
			
		if(current>0 && current<=290)
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
			m=m-5;
			
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
			
}
function colorHS(l,u)
{
			if(u=="s9091") 
			{
				if(l>0){document.getElementById('s9091').setAttribute("offset", l);change('url(#s909)');}
						else{document.getElementById('s9091').setAttribute("offset", 0);change('url(#s909)');}
			}
			if(u=="s9191")
			{
				if(l>0){document.getElementById('s9191').setAttribute("offset", l);change('url(#s919)');}
						else{document.getElementById('s9191').setAttribute("offset", 0);change('url(#h919)');}
			}
			if(u=="s9291")
			{
					if(l>0){document.getElementById('s9291').setAttribute("offset", l);change('url(#s929)');}
						else{document.getElementById('s9291').setAttribute("offset", 0);change('url(#s929)');}
			}
			
}

function colorCH(l,u)
{
			if(u=="c9091")
			{
				if(l>0){document.getElementById('c9091').setAttribute("offset", l);change('url(#c909)');}
						else{document.getElementById('c9091').setAttribute("offset", 0);change('url(#c909)');}
			}
			if(u=="c9191")
			{
				if(l>0){document.getElementById('c9191').setAttribute("offset", l);change('url(#c919)');}
						else{document.getElementById('c9191').setAttribute("offset", 0);change('url(#c919)');}
			}
			if(u=="n9291")
			{
					if(l>0){document.getElementById('c9291').setAttribute("offset", l);change('url(#c929)');}
						else{document.getElementById('c9291').setAttribute("offset", 0);change('url(#c929)');}
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