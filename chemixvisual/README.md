# Chemix Visualize
<h4>  Scope and Purpose of the project </h4>

We are developing a project for chemical experiment. 
It is made to present the information regarding the change of volume 
and the color change during the reaction between inorganic solutions and acidic solutions, 
and to present the change of pH value of solutions with water.
In order to perform this we can use html, JavaScript, svg techniques.
We are contributing this project for Mozilla Science Lab/chemix
Click below to check our project site and demo<br/>
<a class="btn btn-primary btn-lg" href="http://chemixlab.github.io/chemix_lab/chemixvisual/index.html" role="button">Show A Demo</a></p>

<h4>	Process Overview project </h4>
  
Here, there are two types of solution changes. 
The first one is the acidic, basic changes of inorganic solutions. 
It demonstrates the change of volume, the color change when the solution is added with an acid or base.
The second one is the change of pH value of solutions with water. 
It demonstrates how it is balanced when solution is added with water and how its pH value changes. 


<h4>	Introduction the Structure of Interface </h4>
This application consists Experimental area and toolbar. 
Chemical experiments are done in the experimental area. 
This application consists two types of experiment. 
The experimental pages can be changed by using the toolbar. 
The conclusions regarding the explanations are in the related pages. 
In case of help, there is a help me icon.

<h4>How to work with an experimental area  </h4>

In each application, different chemicals can be selected by using the triangular icon. 
The selected chemicals can be filled into the flask by clicking the button on the top. 
Volume can be reduced by using the rectangular button on the flask with the help of the volume scalar the volume fitted within the flask can be identified.  

In complex chemical page, 
the experiment should be done after filling the given solution above 20 ml. 
The color can be identified when an acid/base is mixed and obtained.

In pH scalar application, 
its goal is to present the change which occurs when a given solution is filled within the flask and diluted with water. 
Here, change of pH can be identified by using the pH scalar. 
The change of the pH value of acid/base solution with water can be also identified.



<h3> Developer's Guide </h3>

<h4> Project Directory Structure </h4>

This project contains files and folders.
The structure of the contents of this folder is outlined below: 
•	assets/images/ 
This contains any images used by all html file. 
•	assets/js/ 
        		This contains the all JavaScript code used. 
•	assets/css/ 
This contains the Style Sheet for this project
•	index.html 
•	phindex.html
This contains all HTML code used by the project.


<h4> The index.js File </h4>

The index.js file contains all main functionality functions used by this index.html page. 
These are defined with several method and variables, explained below. 

<h2> Methods </h2>
chbg(r,color) – change the flask fill color. 
changeChemicals(v,s,r) – To change the specific chemical.
changeChemicals2(v,s,r) – To change the base/acid . 
changeDimensions() –To increase the volume level. 
changeHeight() – To decrease the volume level.
colorHCl(l,u) –To change the color with adding HCl.
colorNH(l,u) – To change the color with adding NH3.


<h4> The index1.js File </h4>

The index1.js file contains all main functionality functions used by this phindex.html page. 
These are defined with several method and variables, explained below. 

<h2> Methods </h2>

convertHex(hex) – To convert the colotr code into RGB color format.
visible(r) – To visibility the object.
changeChemicals(v,s,n,m,p) - To change the specific solution.
changeChemicals2(v) – Add the water into the tap.
changeDimensions() - To increase the volume level. 
changeHeight() - To decrease the vo

