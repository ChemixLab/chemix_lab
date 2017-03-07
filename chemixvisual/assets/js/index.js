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
		t1.textContent = "Mixed with";t2.textContent = "";
		t3.textContent = "";t4.textContent = "";
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
		
		var a = 0.7071067811865476;var b = 0.7071067811865475;var c = -0.7071067811865475;var d = 0.7071067811865476;var x = 563.0487804877962;var y = 660.0243902439033;
		var a1 = 1;var b1 = 0;var c1 = 0;var d1 = 1;var x1 = 570.3658536585315;var y1 = 663.3780487804962;
		
		changeCursor(button, 'pointer');
		var smallbutton = document.getElementById("smalltap");
		smallbutton.style.fill="#AC1717";
		
		var col = document.getElementById("col");
		document.getElementById("col").setAttribute("fill",v); 
		document.getElementById("col").setAttribute("stroke",v); 
		//document.getElementById('col').addEventListener('click', function(){m=0;});
		document.getElementById('textname').textContent = s;
		document.getElementById('bltname').textContent = r;
		
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
	function changeChemicals2(v,s,r,q,t,u){

		document.getElementById('acidname').textContent = s;
		document.getElementById('blacidname').textContent = r;
		document.getElementById('blacidname1').textContent = q;
		document.getElementById('blacidname2').textContent = t;
		document.getElementById('blacidname3').textContent = u;
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

	function changeChemicals5(v,u,s,n,g,p){

		document.getElementById('type').textContent = s;
		
		document.getElementById("visiblerect").setAttribute("fill", v); 
		document.getElementById("ind").setAttribute("fill", v); 
			var button = document.getElementById("topbutton");
		changeCursor(button, 'pointer');
		var smallbutton = document.getElementById("smalltap");
		smallbutton.style.fill="#AC1717";
		var a2 = 1;var b2 = 0;var c2 = 0;var d2 = 1;var x2 = 154.6171820162032;var y2 = n;
		
		var a3 = 1;var b3 = 0;var c3 = 0;var d3 = 1;var x3 = 93.32907148828221;var y3 = g;
		
		document.getElementById("phmeter1").setAttribute( 'transform', 'matrix('  + a2 + ' ' + b2 + ' ' + c2 + ' ' + d2 + ' ' + x2 + ' ' + y2 + ')');
		
		document.getElementById("phmeter2").setAttribute( 'transform', 'matrix('  + a3 + ' ' + b3 + ' ' + c3 + ' ' + d3 + ' ' + x3 + ' ' + y3 + ')');
		
		

		document.getElementById("round").setAttribute("fill", u); 
		 
		
		var currentrect = document.getElementById('rect1').getBBox().height;
		visible('indicate');
			
		
	} 

function changeDimensions() {

		var showme = document.getElementById("visiblerect");
		var Rndfillcolor = document.getElementById("ind").getAttribute("fill");
		var current = document.getElementById('rect1').getBBox().height;
		var current2 = document.getElementById('visiblerect').getBBox().height;
		var button2 = document.getElementById("bottombtn");
		var button = document.getElementById("topbutton");
		var smlbutton = document.getElementById("smalltap");
		var r = document.getElementById("volctrl");
		var a = r.transform.baseVal.consolidate().matrix.a;var b = r.transform.baseVal.consolidate().matrix.b;var c = r.transform.baseVal.consolidate().matrix.c;var d = r.transform.baseVal.consolidate().matrix.d;var x = r.transform.baseVal.consolidate().matrix.e;var y = r.transform.baseVal.consolidate().matrix.f;
		var t = document.getElementById("volid");
		var a1 = t.transform.baseVal.consolidate().matrix.a;var b1 = t.transform.baseVal.consolidate().matrix.b;var c1 = t.transform.baseVal.consolidate().matrix.c;var d1 = t.transform.baseVal.consolidate().matrix.d;var x1 = t.transform.baseVal.consolidate().matrix.e;var y1 = t.transform.baseVal.consolidate().matrix.f;
		var ph1=document.getElementById("phmeter1");
		var a2 = ph1.transform.baseVal.consolidate().matrix.a;var b2 = ph1.transform.baseVal.consolidate().matrix.b;var c2 = ph1.transform.baseVal.consolidate().matrix.c;var d2 = ph1.transform.baseVal.consolidate().matrix.d;var x2 = ph1.transform.baseVal.consolidate().matrix.e;var y2 = ph1.transform.baseVal.consolidate().matrix.f;
		
		
		var ph2=document.getElementById("phmeter2");
		
		
		var a3 = ph2.transform.baseVal.consolidate().matrix.a;var b3 = ph2.transform.baseVal.consolidate().matrix.b;var c3 = ph2.transform.baseVal.consolidate().matrix.c;var d3 = ph2.transform.baseVal.consolidate().matrix.d;var x3 = ph2.transform.baseVal.consolidate().matrix.e;var y3 = ph2.transform.baseVal.consolidate().matrix.f;
		
		var fillcolor = document.getElementById("visiblerect").getAttribute("fill");
		var fillacid = document.getElementById("conacid").getAttribute("fill");
		var fillbase = document.getElementById("conbase").getAttribute("fill");
		
		var t1 = document.getElementById('reqacid');
		var t2 = document.getElementById('req');
		
		var basec = document.getElementById('conba').textContent;
		var acidc = document.getElementById('conac').textContent;
		
		
		
	console.log(current);
		if(current>0 && current<=290)
		{
			changeCursor(button2, 'pointer');
			button2.style.fill="#E00606";				
		}
		
		
		if(current>240 && (fillcolor=="#D6CCCA" || fillcolor=="#B3ADAB" )&&  (fillacid="#868683"))
		{ 


			
			showme.style.display = "";
			if(showme.style.visibility == "hidden" ) {
				showme.style.visibility = "visible";
			}
			
			setTimeout(function(){showme.style.visibility = "hidden"; }, 500);
			
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

		document.getElementById('volmeter').textContent = m+'.00 ml';		
							volbase=m;	
				molebase= volbase * basec;
				
				
		} else if((fillcolor=="#E9E4E2"|| fillcolor=="#FB7D06" || fillcolor=="#06DDFB") )
		{
						var aquaname=document.getElementById('type').textContent;

				console.log(aquaname);
			
					switch (aquaname) {
						  case "Phenolphthalein":var n=202;var ph=10.0;var g=230;break;
						  case "Methyl Orange":var n=372;var ph=4.4;var g=400;break;
						  case "Bromphenol blue": var n=364;var ph=6.5;var g=392;break;
						 
					}
					
		}
		else if(fillcolor=="#E6E6F6" && (fillacid="#868683"))
		{
			moleacid= molebase;
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
					  case "#E9E4E2": colorHCl(limit,'h9091');break;
					  case "#FB7D06": colorHCl(limit,'h9191');break;
					  case "#06DDFB": colorHCl(limit,'h9291');break;
					  
					}
				if (Rndfillcolor=="#E9E4E2") 
				{
					y2=y2+5;
						y3=y3+5;
						ph1.setAttribute( 'transform', 'matrix('  + a2 + ' ' + b2 + ' ' + c2 + ' ' + d2 + ' ' + x2 + ' ' + y2 + ')');
						ph2.setAttribute( 'transform', 'matrix('  + a3 + ' ' + b3 + ' ' + c3 + ' ' + d3 + ' ' + x3 + ' ' + y3 + ')');
					if (current == 290)  m = 5;
											
					
				}
				else if (Rndfillcolor=="#FB7D06") 
				{
					y2=y2+4;
						y3=y3+4;
						ph1.setAttribute( 'transform', 'matrix('  + a2 + ' ' + b2 + ' ' + c2 + ' ' + d2 + ' ' + x2 + ' ' + y2 + ')');
						ph2.setAttribute( 'transform', 'matrix('  + a3 + ' ' + b3 + ' ' + c3 + ' ' + d3 + ' ' + x3 + ' ' + y3 + ')');
					

						
					
				}
				else
					{
					y2=y2+5;
						y3=y3+5;
						ph1.setAttribute( 'transform', 'matrix('  + a2 + ' ' + b2 + ' ' + c2 + ' ' + d2 + ' ' + x2 + ' ' + y2 + ')');
						ph2.setAttribute( 'transform', 'matrix('  + a3 + ' ' + b3 + ' ' + c3 + ' ' + d3 + ' ' + x3 + ' ' + y3 + ')');
					
											
					
				}

		}
		
		}
		else if((fillcolor=="#F2F2F2") &&  (fillacid="#868683"))
		{moleacid= molebase/2;
				volacid=moleacid / acidc;
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
				document.getElementById('acidpath1').addEventListener('click', function(){clicks=0;});
				document.getElementById('acidtxt1').addEventListener('click', function(){clicks=0;});
				
				
				relod();
				//document.getElementById('colhcl').addEventListener('click', function(){limit=1;});
				clicks += 1;console.log(clicks);
				if(limit>0){limit = limit-0.2;}
				else limit=0;
				console.log(limit);
				
				switch (Rndfillcolor) {
					   case "#E9E4E2": colorHCl(limit,'h9091');break;
					  case "#FB7D06": colorHCl(limit,'h9191');break;
					  case "#06DDFB": colorHCl(limit,'h9291');break;
					  
					}
					
					if (Rndfillcolor=="#E9E4E2") 
				{
					y2=y2+5;
						y3=y3+5;
						ph1.setAttribute( 'transform', 'matrix('  + a2 + ' ' + b2 + ' ' + c2 + ' ' + d2 + ' ' + x2 + ' ' + y2 + ')');
						ph2.setAttribute( 'transform', 'matrix('  + a3 + ' ' + b3 + ' ' + c3 + ' ' + d3 + ' ' + x3 + ' ' + y3 + ')');
					if (current == 290)  m = 5;
											
					
				}
				else if (Rndfillcolor=="#FB7D06") 
				{
					y2=y2+4;
						y3=y3+4;
						ph1.setAttribute( 'transform', 'matrix('  + a2 + ' ' + b2 + ' ' + c2 + ' ' + d2 + ' ' + x2 + ' ' + y2 + ')');
						ph2.setAttribute( 'transform', 'matrix('  + a3 + ' ' + b3 + ' ' + c3 + ' ' + d3 + ' ' + x3 + ' ' + y3 + ')');
					

						
					
				}
				else
					{
					y2=y2+5;
						y3=y3+5;
						ph1.setAttribute( 'transform', 'matrix('  + a2 + ' ' + b2 + ' ' + c2 + ' ' + d2 + ' ' + x2 + ' ' + y2 + ')');
						ph2.setAttribute( 'transform', 'matrix('  + a3 + ' ' + b3 + ' ' + c3 + ' ' + d3 + ' ' + x3 + ' ' + y3 + ')');
					
											
					
				}
				

		}
		}

				else if(fillcolor=="#F0E5E5" && (fillacid="#868683"))
		{
			moleacid= molebase;
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
			
			
				
				document.getElementById('acid2').addEventListener('click', function(){clicks=0;});
				document.getElementById('acidpath2').addEventListener('click', function(){clicks=0;});
				document.getElementById('acidtxt2').addEventListener('click', function(){clicks=0;});
				
				
				relod();
				//document.getElementById('colhcl').addEventListener('click', function(){limit=1;});
				clicks += 1;console.log(clicks);
				if(limit>0){limit = limit-0.2;}
				else limit=0;
				console.log(limit);
				
				switch (Rndfillcolor) {
					  case "#E9E4E2": colorHCl(limit,'h9091');break;
					  case "#FB7D06": colorHCl(limit,'h9191');break;
					  case "#06DDFB": colorHCl(limit,'h9291');break; 
					}
					
					if (Rndfillcolor=="#E9E4E2") 
				{
					y2=y2+5;
						y3=y3+5;
						ph1.setAttribute( 'transform', 'matrix('  + a2 + ' ' + b2 + ' ' + c2 + ' ' + d2 + ' ' + x2 + ' ' + y2 + ')');
						ph2.setAttribute( 'transform', 'matrix('  + a3 + ' ' + b3 + ' ' + c3 + ' ' + d3 + ' ' + x3 + ' ' + y3 + ')');
					if (current == 290)  m = 5;
											
					
				}
				else if (Rndfillcolor=="#FB7D06") 
				{
					y2=y2+4;
						y3=y3+4;
						ph1.setAttribute( 'transform', 'matrix('  + a2 + ' ' + b2 + ' ' + c2 + ' ' + d2 + ' ' + x2 + ' ' + y2 + ')');
						ph2.setAttribute( 'transform', 'matrix('  + a3 + ' ' + b3 + ' ' + c3 + ' ' + d3 + ' ' + x3 + ' ' + y3 + ')');
					

						
					
				}
				else
					{
					y2=y2+5;
						y3=y3+5;
						ph1.setAttribute( 'transform', 'matrix('  + a2 + ' ' + b2 + ' ' + c2 + ' ' + d2 + ' ' + x2 + ' ' + y2 + ')');
						ph2.setAttribute( 'transform', 'matrix('  + a3 + ' ' + b3 + ' ' + c3 + ' ' + d3 + ' ' + x3 + ' ' + y3 + ')');
					
											
					
				}
				

		}
		}
		
		else if(fillcolor=="#E4DFDF " && (fillacid="#868683"))
		{
			moleacid= molebase;
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
			
			
				
				document.getElementById('acid3').addEventListener('click', function(){clicks=0;});
				document.getElementById('acidpath3').addEventListener('click', function(){clicks=0;});
				document.getElementById('acidtxt3').addEventListener('click', function(){clicks=0;});
				
				
				relod();
				//document.getElementById('colhcl').addEventListener('click', function(){limit=1;});
				clicks += 1;console.log(clicks);
				if(limit>0){limit = limit-0.2;}
				else limit=0;
				console.log(limit);
				
				switch (Rndfillcolor) {
					  case "#E9E4E2": colorHCl(limit,'h9091');break;
					  case "#FB7D06": colorHCl(limit,'h9191');break;
					  case "#06DDFB": colorHCl(limit,'h9291');break;
					  
					}
					if (Rndfillcolor=="#E9E4E2") 
				{
					y2=y2+5;
						y3=y3+5;
						ph1.setAttribute( 'transform', 'matrix('  + a2 + ' ' + b2 + ' ' + c2 + ' ' + d2 + ' ' + x2 + ' ' + y2 + ')');
						ph2.setAttribute( 'transform', 'matrix('  + a3 + ' ' + b3 + ' ' + c3 + ' ' + d3 + ' ' + x3 + ' ' + y3 + ')');
					if (current == 290)  m = 5;
											
					
				}
				else if (Rndfillcolor=="#FB7D06") 
				{
					y2=y2+4;
						y3=y3+4;
						ph1.setAttribute( 'transform', 'matrix('  + a2 + ' ' + b2 + ' ' + c2 + ' ' + d2 + ' ' + x2 + ' ' + y2 + ')');
						ph2.setAttribute( 'transform', 'matrix('  + a3 + ' ' + b3 + ' ' + c3 + ' ' + d3 + ' ' + x3 + ' ' + y3 + ')');
					

						
					
				}
				else
					{
					y2=y2+5;
						y3=y3+5;
						ph1.setAttribute( 'transform', 'matrix('  + a2 + ' ' + b2 + ' ' + c2 + ' ' + d2 + ' ' + x2 + ' ' + y2 + ')');
						ph2.setAttribute( 'transform', 'matrix('  + a3 + ' ' + b3 + ' ' + c3 + ' ' + d3 + ' ' + x3 + ' ' + y3 + ')');
					
											
					
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