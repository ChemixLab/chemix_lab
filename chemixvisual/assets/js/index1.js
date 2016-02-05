
var m=0;
var clicks=0;
var click=0;
var limit=1;
var limits=0.1;
var mm=1;
var count =1;
function reloadPage() {	

//setTimeout(function(){show.style.visibility = "hidden"; }, 500);

location.reload();
}	
				
function changeCursor(el,cursor){
	el.style.cursor = cursor;
}


function chbg(r,color) {
	var rec=r;
    document.getElementById(rec).style.fill = color;
} 
function rgb2hex(rgb){
 rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
 return (rgb && rgb.length === 4) ? "#" +
  ("0" + parseInt(rgb[1],10).toString(16)).slice(-2) +
  ("0" + parseInt(rgb[2],10).toString(16)).slice(-2) +
  ("0" + parseInt(rgb[3],10).toString(16)).slice(-2) : '';
}

function convertHex(hex){
    hex = hex.replace('#','');
    r = parseInt(hex.substring(0,2), 16);
    g = parseInt(hex.substring(2,4), 16);
    b = parseInt(hex.substring(4,6), 16);

    result = 'rgb('+r+','+g+','+b+')';
    return result;
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

function changeChemicals(v,s,n,m,p){

		document.getElementById("rect1").setAttribute("height", "215"); 
		var current = document.getElementById('rect1').getBBox().height;
		document.getElementById("visiblerect").setAttribute("height", "383.5"); 
		var button2 = document.getElementById("bottombtn");
		var button = document.getElementById("tapbutton");
		
		//changeCursor(button2, 'default');
	//	button2.style.fill="#809797";
		
		changeCursor(button, 'pointer');
		var smallbutton = document.getElementById("smalltap");
		smallbutton.style.fill="#AC1717";

		var a = 0.7071067811865476;var b = 0.7071067811865475;var c = -0.7071067811865475;var d = 0.7071067811865476;var x = 533.44;var y = 533.77;
		var a1 = 1;var b1 = 0;var c1 = 0;var d1 = 1;var x1 = 544.2682926829216;var y1 =535.9780487804962;
		var a2 = 1;var b2 = 0;var c2 = 0;var d2 = 1;var x2 = 154.6171820162032;var y2 = n;
		
		var a3 = 1;var b3 = 0;var c3 = 0;var d3 = 1;var x3 = 93.32907148828221;var y3 = m;
		
		var col = document.getElementById("col");
		document.getElementById("col").setAttribute("fill",v); 
		document.getElementById("col").setAttribute("stroke",v); 
	
		document.getElementById('aquaname').textContent = s;

		document.getElementById('visiblerect').setAttribute("fill", v); 
		document.getElementById("rect2").setAttribute("fill",v);
		
		document.getElementById("round").setAttribute("fill", v); 
		document.getElementById("round").setAttribute("fill-opacity", 1.0)
		document.getElementById("tcol1").setAttribute("fill", v); 
		document.getElementById("tcol2").setAttribute("fill", v); 
		document.getElementById("tcol3").setAttribute("fill", v); 
		
		document.getElementById("volctrl").setAttribute( 'transform', 'matrix('  + a + ' ' + b + ' ' + c + ' ' + d + ' ' + x + ' ' + y + ')');
		document.getElementById("volid").setAttribute( 'transform', 'matrix('  + a1 + ' ' + b1 + ' ' + c1 + ' ' + d1 + ' ' + x1 + ' ' + y1 + ')');
		document.getElementById("phmeter1").setAttribute( 'transform', 'matrix('  + a2 + ' ' + b2 + ' ' + c2 + ' ' + d2 + ' ' + x2 + ' ' + y2 + ')');
		document.getElementById("phmeter2").setAttribute( 'transform', 'matrix('  + a3 + ' ' + b3 + ' ' + c3 + ' ' + d3 + ' ' + x3 + ' ' + y3 + ')');
		
		document.getElementById("volmeter").textContent =  0+'.00 ml';
		document.getElementById("phtext").textContent = p;
		
		document.getElementById('watrcol1').addEventListener('click', function(){click=0;});
		document.getElementById('watrcol2').addEventListener('click', function(){click=0;});
		document.getElementById('water1').addEventListener('click', function(){click=0;});
		document.getElementById('water2').addEventListener('click', function(){click=0;});
		document.getElementById('txt1').addEventListener('click', function(){click=0;});
		document.getElementById('txt2').addEventListener('click', function(){click=0;});
		visible('chemical');
				
			
} 

function changeChemicals2(v){

		document.getElementById("visiblerect").setAttribute("fill", v); 
		var button = document.getElementById("tapbutton");
		changeCursor(button, 'pointer');
		var smallbutton = document.getElementById("smalltap");
		smallbutton.style.fill="#AC1717";
	
		document.getElementById("tcol1").setAttribute("fill", v); 
		document.getElementById("tcol2").setAttribute("fill", v); 
		document.getElementById("tcol3").setAttribute("fill", v); 
	
		
	} 
function roundToTwo(num) {    
    return +(Math.round(num + "e+2")  + "e-2");
}
function roundToThree(num) {    
    return +(Math.round(num + "e+3")  + "e-3");
}
function changeDimensions() {

		var showme = document.getElementById("visiblerect");
		var Rndfillcolor = document.getElementById("round").getAttribute("fill");	
		var current = document.getElementById('rect1').getBBox().height;
		var current2 = document.getElementById('visiblerect').getBBox().height;
		//var button = document.getElementById("tapbutton");
		var button = document.getElementById("tapbutton");
			var smallbutton = document.getElementById("smalltap");
		var botbutton = document.getElementById("bottombutton");
		var r = document.getElementById("volctrl");
		var a = r.transform.baseVal.consolidate().matrix.a;var b = r.transform.baseVal.consolidate().matrix.b;var c = r.transform.baseVal.consolidate().matrix.c;var d = r.transform.baseVal.consolidate().matrix.d;var x = r.transform.baseVal.consolidate().matrix.e;var y = r.transform.baseVal.consolidate().matrix.f;
		var t = document.getElementById("volid");
		var a1 = t.transform.baseVal.consolidate().matrix.a;var b1 = t.transform.baseVal.consolidate().matrix.b;var c1 = t.transform.baseVal.consolidate().matrix.c;var d1 = t.transform.baseVal.consolidate().matrix.d;var x1 = t.transform.baseVal.consolidate().matrix.e;var y1 = t.transform.baseVal.consolidate().matrix.f;
		var ph1=document.getElementById("phmeter1");
		var a2 = ph1.transform.baseVal.consolidate().matrix.a;var b2 = ph1.transform.baseVal.consolidate().matrix.b;var c2 = ph1.transform.baseVal.consolidate().matrix.c;var d2 = ph1.transform.baseVal.consolidate().matrix.d;var x2 = ph1.transform.baseVal.consolidate().matrix.e;var y2 = ph1.transform.baseVal.consolidate().matrix.f;
		var ph2=document.getElementById("phmeter2");
		var a3 = ph2.transform.baseVal.consolidate().matrix.a;var b3 = ph2.transform.baseVal.consolidate().matrix.b;var c3 = ph2.transform.baseVal.consolidate().matrix.c;var d3 = ph2.transform.baseVal.consolidate().matrix.d;var x3 = ph2.transform.baseVal.consolidate().matrix.e;var y3 = ph2.transform.baseVal.consolidate().matrix.f;
		var php = document.getElementById("phtext").textContent;
	console.log(current);
		if(current == 5)
		{
			//var button = document.getElementById("tapbutton");
			//var smallbutton = document.getElementById("smalltap");
			changeCursor(button,'default');
			showme.style.visibility = "hidden";
			smallbutton.style.fill="#809797";
		}
		
		/*if(current>210)
		{
			changeCursor(button2, 'pointer');
			button2.style.fill="#E00606";	
		}*/
		var fillcolor = document.getElementById("visiblerect").getAttribute("fill");
		if(current>=10 && current <=215)
		{
			
			showme.style.display = "";
			if(showme.style.visibility == "hidden" ) {
				showme.style.visibility = "visible";
			}
			
			setTimeout(function(){showme.style.visibility = "hidden"; }, 500);
			
				if (current == 215) { meter = 1;limit=1;click=0;}
				else meter = meter+1;
				current = current - 5;console.log(current);
				if(current<215)
				{
					changeCursor(botbutton,'pointer');
					botbutton.style.fill="#AC1717";				
				}
				document.getElementById("rect1").setAttribute("height", current);
				
				document.getElementById('watrcol1').addEventListener('click', function(){click=1;mm=meter;});
				document.getElementById('watrcol2').addEventListener('click', function(){click=1;mm=meter;});
				document.getElementById('water1').addEventListener('click', function(){click=1;mm=meter;});
				document.getElementById('water2').addEventListener('click', function(){click=1;mm=meter;});
				document.getElementById('txt1').addEventListener('click', function(){click=1;mm=meter;});
				document.getElementById('txt2').addEventListener('click', function(){click=1;mm=meter;});
				
			if(click >=1)
			{
				var aquaname=document.getElementById('aquaname').textContent;

				console.log(aquaname,php);
			
					switch (aquaname) {
						  case "Drain Cleaner":var ph=13.0;var n=112;var m=140;break;
						  case "Hand Soap":var ph=10.0;var n=202;var m=230;break;
						  case "Milk": var ph=6.5;var n=307;var m=335;break;
						  case "Blood": var ph=7.4;var n=279.88;var m=307.88;break;
						  case "Eggs Yolks": var ph=7.3;var n=280;var m=310;break;
						  case "Chicken Soup": var ph=5.8;var n=327.75;var m=355.75;break;
						  case "Coffee": var ph=5.0;var n=352;var m=380;break;
						  case "Orange Juice": var ph=3.5;var n=396.85;var m=424.85;break;
						  case "Soda Pop": var ph=2.5;var n=426.85;var m=454.85;break;
						  case "Vomit": var ph=2.0;var n=442;var m=470;break;
						  case "Battery Acid": var ph=1.0;var n=472;var m=500;break;  
					}
					
				if(limit>0.1 && limit<=1)
				{
					if(php == 7){
						ph1.setAttribute( 'transform', 'matrix('  + a2 + ' ' + b2 + ' ' + c2 + ' ' + d2 + ' ' + x2 + ' ' + 294 + ')');
						ph2.setAttribute( 'transform', 'matrix('  + a3 + ' ' + b3 + ' ' + c3 + ' ' + d3 + ' ' + x3 + ' ' + 322 + ')');
						document.getElementById("phtext").textContent = 7.0;
					}
					else{
					if(ph>=8)
					{
						y2=y2+0.6;
						y3=y3+0.6;console.log(y2,y3,ph);
						ph1.setAttribute( 'transform', 'matrix('  + a2 + ' ' + b2 + ' ' + c2 + ' ' + d2 + ' ' + x2 + ' ' + y2 + ')');
						ph2.setAttribute( 'transform', 'matrix('  + a3 + ' ' + b3 + ' ' + c3 + ' ' + d3 + ' ' + x3 + ' ' + y3 + ')');
					
						php=php-0.02;
						if(php >7){
							document.getElementById("phtext").textContent =roundToTwo(php);
						}
						limit = limit -0.01;console.log(limit);
					}
					else if(ph<=6)
					{
						y2=y2-0.6;
						y3=y3-0.6;
						ph1.setAttribute( 'transform', 'matrix('  + a2 + ' ' + b2 + ' ' + c2 + ' ' + d2 + ' ' + x2 + ' ' + y2 + ')');
						ph2.setAttribute( 'transform', 'matrix('  + a3 + ' ' + b3 + ' ' + c3 + ' ' + d3 + ' ' + x3 + ' ' + y3 + ')');
						
						php=php-(-0.02);
						console.log(php);
						if(php <7){
							document.getElementById("phtext").textContent =roundToTwo(php);
						}
						limit = limit -0.01;console.log(limit);
					}
					else if(ph<8 && ph>6)
					{
							if(ph>7)
							{
								y2=y2+0.3;
								y3=y3+0.3;
								ph1.setAttribute( 'transform', 'matrix('  + a2 + ' ' + b2 + ' ' + c2 + ' ' + d2 + ' ' + x2 + ' ' + y2 + ')');
								ph2.setAttribute( 'transform', 'matrix('  + a3 + ' ' + b3 + ' ' + c3 + ' ' + d3 + ' ' + x3 + ' ' + y3 + ')');
								
								php=php-0.01;
								
								document.getElementById("phtext").textContent =roundToTwo(php);
								limit = limit -0.05;console.log(limit);
							}
							else{
							y2=y2-0.3;
							y3=y3-0.3;
							ph1.setAttribute( 'transform', 'matrix('  + a2 + ' ' + b2 + ' ' + c2 + ' ' + d2 + ' ' + x2 + ' ' + y2 + ')');
							ph2.setAttribute( 'transform', 'matrix('  + a3 + ' ' + b3 + ' ' + c3 + ' ' + d3 + ' ' + x3 + ' ' + y3 + ')');
							
							php=php-(-0.01);
							
							document.getElementById("phtext").textContent =roundToTwo(php);
							limit = limit -0.05;console.log(limit);
							}
							
						}
					}
					document.getElementById("round").setAttribute("fill-opacity", limit);
		
			}
				console.log(limit,limits)
				if (limit <= 0.1 && limits==0.1)
				{
					document.getElementById("round").setAttribute("fill", '#DBFFFF');
					//document.getElementById("phtext").textContent =7.1;
				}
				
				if(limit <= 0.1 && limits<=1)
				{
					if(php == 7){
						ph1.setAttribute( 'transform', 'matrix('  + a2 + ' ' + b2 + ' ' + c2 + ' ' + d2 + ' ' + x2 + ' ' + 294 + ')');
						ph2.setAttribute( 'transform', 'matrix('  + a3 + ' ' + b3 + ' ' + c3 + ' ' + d3 + ' ' + x3 + ' ' + 322 + ')');
						document.getElementById("phtext").textContent = 7.0;
					}
					else{
						if(ph>=8)
						{
							y2=y2+0.3;
							y3=y3+0.3;console.log(y2,y3,ph);
							ph1.setAttribute( 'transform', 'matrix('  + a2 + ' ' + b2 + ' ' + c2 + ' ' + d2 + ' ' + x2 + ' ' + y2 + ')');
							ph2.setAttribute( 'transform', 'matrix('  + a3 + ' ' + b3 + ' ' + c3 + ' ' + d3 + ' ' + x3 + ' ' + y3 + ')');
							php=php-0.01;
								
							document.getElementById("phtext").textContent =roundToTwo(php);
							limits = limits +0.01;console.log(limits);
						}
						else if(ph<=6)
						{
							y2=y2-0.3;
							y3=y3-0.3;
							ph1.setAttribute( 'transform', 'matrix('  + a2 + ' ' + b2 + ' ' + c2 + ' ' + d2 + ' ' + x2 + ' ' + y2 + ')');
							ph2.setAttribute( 'transform', 'matrix('  + a3 + ' ' + b3 + ' ' + c3 + ' ' + d3 + ' ' + x3 + ' ' + y3 + ')');
							
							php=php-(-0.01);
							
							document.getElementById("phtext").textContent =roundToTwo(php);
							limits = limits +0.01;console.log(limits);
						}
						else if(ph<8 && ph>6)
						{
							if(ph>7){
							y2=y2+0.15;
							y3=y3+0.15;
							ph1.setAttribute( 'transform', 'matrix('  + a2 + ' ' + b2 + ' ' + c2 + ' ' + d2 + ' ' + x2 + ' ' + y2 + ')');
							ph2.setAttribute( 'transform', 'matrix('  + a3 + ' ' + b3 + ' ' + c3 + ' ' + d3 + ' ' + x3 + ' ' + y3 + ')');
							
							php=php-(0.005);
							
							document.getElementById("phtext").textContent =roundToThree(php);
							limits = limits +0.01;console.log(limits);
							}
							else{
								y2=y2-0.15;
								y3=y3-0.15;
								ph1.setAttribute( 'transform', 'matrix('  + a2 + ' ' + b2 + ' ' + c2 + ' ' + d2 + ' ' + x2 + ' ' + y2 + ')');
								ph2.setAttribute( 'transform', 'matrix('  + a3 + ' ' + b3 + ' ' + c3 + ' ' + d3 + ' ' + x3 + ' ' + y3 + ')');
								
								php=php-(-0.005);
								
								document.getElementById("phtext").textContent =roundToThree(php);
								limits = limits +0.01;console.log(limits);
							}
						}
				
						document.getElementById("round").setAttribute("fill-opacity", limits);
					}
					if(limits>=1)
					{
						document.getElementById("neutral").style.display = "";
								
						document.getElementById("neutral").style.visibility = "visible";
									
					}
				}
			}	
			
				current2 = current2 - 5;
				document.getElementById("visiblerect").setAttribute("height", current2);
				console.log(current2);
				
				y=y-5;
				y1=y1-5;
				r.setAttribute( 'transform', 'matrix('  + a + ' ' + b + ' ' + c + ' ' + d + ' ' + x + ' ' + y + ')');
				t.setAttribute( 'transform', 'matrix('  + a1 + ' ' + b1 + ' ' + c1 + ' ' + d1 + ' ' + x1 + ' ' + y1 + ')');
				//m=m+5;
			
				document.getElementById('volmeter').textContent = meter+'.00 ml';
				console.log(meter);
				console.log(y);
				console.log(y1);	
		}	
	
}


function changeHeight() {

		var showme = document.getElementById("rect2");
		var current = document.getElementById('rect1').getBBox().height;
		var botbutton = document.getElementById("bottombutton");
		var button = document.getElementById("tapbutton");
		var current2 = document.getElementById('visiblerect').getBBox().height;
		var r = document.getElementById("volctrl");
		var a = r.transform.baseVal.consolidate().matrix.a;var b = r.transform.baseVal.consolidate().matrix.b;var c = r.transform.baseVal.consolidate().matrix.c;var d = r.transform.baseVal.consolidate().matrix.d;var x = r.transform.baseVal.consolidate().matrix.e;var y = r.transform.baseVal.consolidate().matrix.f;
		var t = document.getElementById("volid");var a1 = t.transform.baseVal.consolidate().matrix.a;var b1 = t.transform.baseVal.consolidate().matrix.b;var c1 = t.transform.baseVal.consolidate().matrix.c;var d1 = t.transform.baseVal.consolidate().matrix.d;var x1 = t.transform.baseVal.consolidate().matrix.e;var y1 = t.transform.baseVal.consolidate().matrix.f;
		var tcolor = document.getElementById("tcol1").getAttribute("fill");
		var smallbutton = document.getElementById("smalltap");		
		
		if(current>=5 && current<=210)
		{   
			console.log(current);
			
			changeCursor(button,'pointer');
			smallbutton.style.fill="#AC1717";
			
		 	showme.style.display = "";
			if(showme.style.visibility == "hidden" ) {
				showme.style.visibility = "visible";
			}
			var fillcol = document.getElementById("round").getAttribute("fill");
			var fillop = document.getElementById("round").getAttribute("fill-opacity");
			showme.setAttribute("fill",fillcol);
			showme.setAttribute("fill-opacity",fillop);
		 setTimeout(function(){showme.style.visibility = "hidden"; }, 500);
			
				
				
				current = current + 5;console.log(current);
				document.getElementById("rect1").setAttribute("height", current);
				current2 = current2 + 5;
				document.getElementById("visiblerect").setAttribute("height", current2);
				
				y=y+5;y1=y1+5;
				r.setAttribute( 'transform', 'matrix('  + a + ' ' + b + ' ' + c + ' ' + d + ' ' + x + ' ' + y + ')');
				t.setAttribute( 'transform', 'matrix('  + a1 + ' ' + b1 + ' ' + c1 + ' ' + d1 + ' ' + x1 + ' ' + y1 + ')');
				meter=meter-1;
				document.getElementById('volmeter').textContent = meter+'.00 ml';
				console.log(y);
					
					
		}
		
		else
		{
			changeCursor(botbutton,'default');
			showme.style.visibility = "hidden";
			botbutton.style.fill="#809797";
			
		}
		if(tcolor=="#DBFFFF" && current==215)
		{
				document.getElementById("round").setAttribute("fill", "#DBFFFF"); 
				document.getElementById("round").setAttribute("fill-opacity", 1.0);
				document.getElementById("visiblerect").setAttribute("fill", "#DBFFFF"); 
				var a2 = 1;var b2 = 0;var c2 = 0;var d2 = 1;var x2 = 154.6171820162032;
		
				var a3 = 1;var b3 = 0;var c3 = 0;var d3 = 1;var x3 = 93.32907148828221;
				document.getElementById("phmeter1").setAttribute( 'transform', 'matrix('  + a2 + ' ' + b2 + ' ' + c2 + ' ' + d2 + ' ' + x2 + ' ' + 294 + ')');
				document.getElementById("phmeter2").setAttribute( 'transform', 'matrix('  + a3 + ' ' + b3 + ' ' + c3 + ' ' + d3 + ' ' + x3 + ' ' + 322 + ')');
				document.getElementById("phtext").textContent = "7.0";
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