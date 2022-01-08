var numElements = 1;
let oldCode = "";
document.getElementById("add-paragraph").addEventListener('click', function(){
    var newElement = document.createElement("div");
    newElement.id = "addedElement" + numElements;
    newElement.className = "accordion";
    newElement.style.backgroundColor = "#dddddd";
    newElement.style.margin = "20px";
    newElement.style.padding = "10px";
    newElement.style.borderRadius = "10px";
    document.getElementById("site-build").appendChild(newElement);
    
    var newElementTitle = document.createElement("h3");
    newElementTitle.innerText = "Paragraph";
    document.getElementById("addedElement" + numElements).appendChild(newElementTitle);
    
    var newElementOptions = document.createElement("div");
    document.getElementById("addedElement" + numElements).appendChild(newElementOptions);
    newElementOptions.innerHTML = '<center class="center-widget"><input type="checkbox" name="isBold" value="Bike"><label for="isBold">Bold</label><br><input type="checkbox" name="isitalic"><label for="isItalic">Italic</label><br><label for="font-size">Font-Size (pixels):</label><br><input type="text" placeholder="Enter a number" name="font-size"><br><label for="paragraph">Paragraph Text:</label><br><textarea placeholder="Enter some text" name="paragraph"></textarea></center>';


    var newElementDelete = document.createElement("button");
    newElementDelete.innerText = "Delete";
    newElementDelete.id = numElements + "delete"
    document.getElementById("addedElement" + numElements).appendChild(newElementDelete);
    document.getElementById(numElements + "delete").addEventListener('click', function(){
        this.parentNode.remove();
    });
    numElements ++;
});
document.getElementById("add-header").addEventListener('click', function(){
    var newElement = document.createElement("div");
    newElement.id = "addedElement" + numElements;
    newElement.style.backgroundColor = "#dddddd";
    newElement.className = "accordion";
    newElement.style.margin = "20px";
    newElement.style.padding = "10px";
    newElement.style.borderRadius = "10px";
    document.getElementById("site-build").appendChild(newElement);
    
    var newElementTitle = document.createElement("h3");
    newElementTitle.innerText = "Header";
    document.getElementById("addedElement" + numElements).appendChild(newElementTitle);
    
    var newElementOptions = document.createElement("div");
    document.getElementById("addedElement" + numElements).appendChild(newElementOptions);
    newElementOptions.innerHTML = '<center class="center-widget"><input type="checkbox" name="isBold" value="Bike"><label for="isBold">Bold</label><br><input type="checkbox" name="isitalic"><label for="isItalic">Italic</label><br><label for="font-size">Font-Size (pixels):</label><br><input type="text" placeholder="Enter a number" name="font-size"><br><label for="paragraph">Paragraph Text:</label><br><textarea placeholder="Enter some text" name="paragraph"></textarea></center>';


    var newElementDelete = document.createElement("button");
    newElementDelete.innerText = "Delete";
    newElementDelete.id = numElements + "delete"
    document.getElementById("addedElement" + numElements).appendChild(newElementDelete);
    document.getElementById(numElements + "delete").addEventListener('click', function(){
        this.parentNode.remove();
    });
    numElements ++;
});
document.getElementById("add-image").addEventListener('click', function(){
    var newElement = document.createElement("div");
    newElement.id = "addedElement" + numElements;
    newElement.style.backgroundColor = "#dddddd";
    newElement.className = "accordion";
    newElement.style.margin = "20px";
    newElement.style.padding = "10px";
    newElement.style.borderRadius = "10px";
    document.getElementById("site-build").appendChild(newElement);
    
    var newElementTitle = document.createElement("h3");
    newElementTitle.innerText = "Image";
    document.getElementById("addedElement" + numElements).appendChild(newElementTitle);
    
    var newElementOptions = document.createElement("div");
    document.getElementById("addedElement" + numElements).appendChild(newElementOptions);
    newElementOptions.innerHTML = '<center class="center-widget"><label for="width">Image Width (Pixels):</label><br><input type="text" placeholder="Enter a number" name="width"><br><label for="height">Image Height (Pixels):</label><br><input type="text" placeholder="Enter a number" name="height"><br><label for="source">Image Source (URL):</label><br><input type="text" placeholder="Enter a url" name="source"><br></center>';


    var newElementDelete = document.createElement("button");
    newElementDelete.innerText = "Delete";
    newElementDelete.id = numElements + "delete"
    document.getElementById("addedElement" + numElements).appendChild(newElementDelete);
    document.getElementById(numElements + "delete").addEventListener('click', function(){
        this.parentNode.remove();
    });
    numElements ++;
});
document.getElementById("add-iframe").addEventListener('click', function(){
    var newElement = document.createElement("div");
    newElement.id = "addedElement" + numElements;
    newElement.style.backgroundColor = "#dddddd";
    newElement.className = "accordion";
    newElement.style.margin = "20px";
    newElement.style.padding = "10px";
    newElement.style.borderRadius = "10px";
    document.getElementById("site-build").appendChild(newElement);
    
    var newElementTitle = document.createElement("h3");
    newElementTitle.innerText = "Iframe";
    document.getElementById("addedElement" + numElements).appendChild(newElementTitle);
    
    var newElementOptions = document.createElement("div");
    document.getElementById("addedElement" + numElements).appendChild(newElementOptions);
    newElementOptions.innerHTML = '<center class="center-widget"><label for="width">Iframe Width (Pixels):</label><br><input type="text" placeholder="Enter a number" name="width"><br><label for="height">Iframe Height (Pixels):</label><br><input type="text" placeholder="Enter a number" name="height"><br><label for="code">Iframe Source:</label><br><input type="text" placeholder="Enter Iframe code" name="code"><br></center>';


    var newElementDelete = document.createElement("button");
    newElementDelete.innerText = "Delete";
    newElementDelete.id = numElements + "delete"
    document.getElementById("addedElement" + numElements).appendChild(newElementDelete);
    document.getElementById(numElements + "delete").addEventListener('click', function(){
        this.parentNode.remove();
    });
    numElements ++;
});
document.getElementById("add-spacer").addEventListener('click', function(){
    var newElement = document.createElement("div");
    newElement.id = "addedElement" + numElements;
    newElement.style.backgroundColor = "#dddddd";
    newElement.className = "accordion";
    newElement.style.margin = "20px";
    newElement.style.padding = "10px";
    newElement.style.borderRadius = "10px";
    document.getElementById("site-build").appendChild(newElement);
    
    var newElementTitle = document.createElement("h3");
    newElementTitle.innerText = "Line Break";
    document.getElementById("addedElement" + numElements).appendChild(newElementTitle);
    
    var newElementOptions = document.createElement("div");
    document.getElementById("addedElement" + numElements).appendChild(newElementOptions);
    newElementOptions.innerHTML = '<center class="center-widget"><label for="size">Number of Line Breaks:</label><br><input type="text" placeholder="Enter a number" name="size"></center>';


    var newElementDelete = document.createElement("button");
    newElementDelete.innerText = "Delete";
    newElementDelete.id = numElements + "delete"
    document.getElementById("addedElement" + numElements).appendChild(newElementDelete);
    document.getElementById(numElements + "delete").addEventListener('click', function(){
        this.parentNode.remove();
    });
    numElements ++;
});
document.getElementById("add-divider").addEventListener('click', function(){
    var newElement = document.createElement("div");
    newElement.id = "addedElement" + numElements;
    newElement.style.backgroundColor = "#dddddd";
    newElement.className = "accordion";
    newElement.style.margin = "20px";
    newElement.style.padding = "10px";
    newElement.style.borderRadius = "10px";
    document.getElementById("site-build").appendChild(newElement);
    
    var newElementTitle = document.createElement("h3");
    newElementTitle.innerText = "Divider";
    document.getElementById("addedElement" + numElements).appendChild(newElementTitle);
    
    var newElementOptions = document.createElement("div");
    document.getElementById("addedElement" + numElements).appendChild(newElementOptions);
    newElementOptions.innerHTML = '<center class="center-widget"><input type="radio" name="radio1" value="solid" checked><label for="solid">solid</label><br><input type="radio" name="radio1" value="dashed"><label for="dashed">dashed</label><br><input type="radio" name="radio1" value="dotted"><label for="dotted">dotted</label><br/><label for="color">Color (Hex) ex: #000000</label><br><input type="text" placeholder="Enter a color" name="color"><br><label for="weight">Line Weight/Thickness (Pixels)</label><br><input type="text" placeholder="Enter a number" name="weight"></center>';


    var newElementDelete = document.createElement("button");
    newElementDelete.innerText = "Delete";
    newElementDelete.id = numElements + "delete"
    document.getElementById("addedElement" + numElements).appendChild(newElementDelete);
    document.getElementById(numElements + "delete").addEventListener('click', function(){
        this.parentNode.remove();
    });
    numElements ++;
});
document.getElementById("add-button").addEventListener('click', function(){
    var newElement = document.createElement("div");
    newElement.id = "addedElement" + numElements;
    newElement.className = "accordion";
    newElement.style.backgroundColor = "#dddddd";
    newElement.style.margin = "20px";
    newElement.style.padding = "10px";
    newElement.style.borderRadius = "10px";
    document.getElementById("site-build").appendChild(newElement);
    
    var newElementTitle = document.createElement("h3");
    newElementTitle.innerText = "Button";
    document.getElementById("addedElement" + numElements).appendChild(newElementTitle);
    
    var newElementOptions = document.createElement("div");
    document.getElementById("addedElement" + numElements).appendChild(newElementOptions);
    newElementOptions.innerHTML = '<center class="center-widget"><label for="text">Button Text:</label><br><input type="text" placeholder="Enter some text" name="text"><br><label for="paragraph">Target:</label><br><input type="text" placeholder="Enter a URL" name="paragraph"></input></center>';


    var newElementDelete = document.createElement("button");
    newElementDelete.innerText = "Delete";
    newElementDelete.id = numElements + "delete"
    document.getElementById("addedElement" + numElements).appendChild(newElementDelete);
    document.getElementById(numElements + "delete").addEventListener('click', function(){
        this.parentNode.remove();
    });
    numElements ++;
});

setInterval(function(){
    temptext = '<style> body{margin: 10px 50px}</style>';
    for (var i = 1; i <= numElements; i++){
        if (document.getElementById("addedElement" + i) != null){
            var element = document.getElementById("addedElement" + i);
            if (element.firstChild.innerText == "Paragraph"){
                var newE = document.createElement("p");
                newE.innerText = document.querySelector("#addedElement"+i+" .center-widget :nth-child(13)").value;
                if (document.querySelector("#addedElement"+i+" .center-widget :nth-child(1)").checked == true){
                    newE.style.fontWeight = "bold";
                }
                if (document.querySelector("#addedElement"+i+" .center-widget :nth-child(4)").checked == true){
                    newE.style.fontStyle = "italic";
                }
                newE.style.fontSize = document.querySelector("#addedElement"+i+" .center-widget :nth-child(9)").value;
                temptext += newE.outerHTML;
            }
            if (element.firstChild.innerText == "Header"){
                var newE = document.createElement("H1");
                newE.innerText = document.querySelector("#addedElement"+i+" .center-widget :nth-child(13)").value;
                if (document.querySelector("#addedElement"+i+" .center-widget :nth-child(1)").checked == true){
                    newE.style.fontWeight = "bold";
                }
                if (document.querySelector("#addedElement"+i+" .center-widget :nth-child(4)").checked == true){
                    newE.style.fontStyle = "italic";
                }
                newE.style.fontSize = document.querySelector("#addedElement"+i+" .center-widget :nth-child(9)").value;
                temptext += newE.outerHTML;
            }
            else if (element.firstChild.innerText == "Image"){
                var newE = document.createElement("img");
                newE.style.maxWidth = "100%";
                newE.style.width = document.querySelector("#addedElement"+i+" .center-widget :nth-child(3)").value;
                newE.style.height = document.querySelector("#addedElement"+i+" .center-widget :nth-child(7)").value;
                newE.setAttribute("src", document.querySelector("#addedElement"+i+" .center-widget :nth-child(11)").value);
                temptext += newE.outerHTML;
            }
            else if (element.firstChild.innerText == "Iframe"){
                var newE = document.createElement("div");
                newE.innerHTML = document.querySelector("#addedElement"+i+" .center-widget :nth-child(11)").value;
                newE.style.maxWidth = "100%";
                newE.style.width = document.querySelector("#addedElement"+i+" .center-widget :nth-child(3)").value;
                newE.style.height = document.querySelector("#addedElement"+i+" .center-widget :nth-child(7)").value;
                temptext += newE.outerHTML;
            }
            else if (element.firstChild.innerText == "Line Break"){
                var newE = document.createElement("br");
                for (var k = 0; k < document.querySelector("#addedElement"+i+" .center-widget :nth-child(3)").value; k++){
                    temptext += newE.outerHTML;
                }
            }
            else if (element.firstChild.innerText == "Divider"){
                var newE = document.createElement("hr");
                tempstr = document.querySelector("#addedElement"+i+" .center-widget :nth-child(16)").value + "px";
                if (document.querySelector("#addedElement"+i+" .center-widget :nth-child(1)").checked){
                    tempstr += " solid ";
                }
                if (document.querySelector("#addedElement"+i+" .center-widget :nth-child(4)").checked){
                    tempstr += " dashed ";
                }
                if (document.querySelector("#addedElement"+i+" .center-widget :nth-child(7)").checked){
                    tempstr += " dotted ";
                }
                tempstr += document.querySelector("#addedElement"+i+" .center-widget :nth-child(12)").value;
                newE.style.maxWidth = "100%";
                newE.style.border = tempstr;
                temptext += newE.outerHTML;
            }
            if (element.firstChild.innerText == "Button"){
                var newE = document.createElement("a");
                newE.innerText = document.querySelector("#addedElement"+i+" .center-widget :nth-child(3)").value;
                newE.setAttribute("href", document.querySelector("#addedElement"+i+" .center-widget :nth-child(7)").value);
                newE.style = "color: black; background-color: #EFEFEF; border-radius: 1px; border: 1px solid black; padding: 4px; font-size: 14px; text-decoration: none;"
                newE.setAttribute('target', '_blank')
                temptext += newE.outerHTML;
            }
        }
    }
    document.getElementById("output-code").innerText = temptext;
    if (oldCode != document.getElementById("output-code").innerText){
        oldCode = document.getElementById("output-code").innerText;
        document.getElementById("test").innerHTML = document.getElementById("output-code").innerText.substring(39);
    }
}, 1000);


window.addEventListener('mouseover', function(e) {
    categoryDetails(e.target);
});
window.addEventListener('click', function(e) {
	categoryDetails(e.target);
});
function categoryDetails(target){
	switch(target.id) {
		case "add-paragraph": {
            resetAll();
            target.style.fontWeight = "bold";
            document.getElementById("element-description").innerText = "This element allows you to add text to your webpage. Large chunks of information usually go in a paragraph.";
			document.getElementById("description-title").innerText = "Paragraph";
            document.getElementById("description-icon").className = "fa fa-paragraph";
            break;
		}
		case "add-image": {
            resetAll();
            target.style.fontWeight = "bold";
            document.getElementById("element-description").innerText = "This element allows you to add an image to your website. Find an image online, then right click on the image and click open image in new tab. Copy the URL of the image and past it in the URL box.";
            document.getElementById("description-title").innerText = "Image";
            document.getElementById("description-icon").className = "fa fa-image";
			break;
		}
		case "add-header": {
            resetAll();
            target.style.fontWeight = "bold";
            document.getElementById("element-description").innerText = "This element adds a header to your website. If you have multiple sections, use this element to separate each section with a title.";
            document.getElementById("description-title").innerText = "Header";
            document.getElementById("description-icon").className = "fa fa-header";
			break;
		}
		case "add-spacer": {
            resetAll();
            target.style.fontWeight = "bold";
            document.getElementById("element-description").innerText = "Use this element to add space between two other elements.";
            document.getElementById("description-title").innerText = "Line Break";
            document.getElementById("description-icon").className = "fa fa-arrows-v";
			break;
		}
		case "add-divider": {
            resetAll();
            target.style.fontWeight = "bold";
            document.getElementById("element-description").innerText = "Use this element to divide two different sections.";
            document.getElementById("description-title").innerText = "Divider";
            document.getElementById("description-icon").className = "fa fa-bars";
			break;
		}
		case "add-button": {
            resetAll();
            target.style.fontWeight = "bold";
            document.getElementById("element-description").innerText = "When clicked, a button will take the user to another website. Take the website address of another website and paste it in the 'target' box.";
            document.getElementById("description-title").innerText = "Button";
            document.getElementById("description-icon").className = "fa fa-hand-pointer-o";
			break;
		}
		case "add-iframe": {
            resetAll();
            target.style.fontWeight = "bold";
            document.getElementById("element-description").innerText = "An Iframe allows you to embed outside media on your website (videos, games, etc.). Find the 'embed code' for the iframe and paste it all in the 'Iframe Source' box. To embed a Tynker game, click 'share' on your Tynker project page, click  the 'embed' and paste the text beginning with '<iframe' into the 'Iframe Source' box.";
            document.getElementById("description-title").innerText = "Iframe";
            document.getElementById("description-icon").className = "fa fa-video-camera";
			break;
		}
	}
}
function resetAll(){
	var list = ["add-paragraph","add-header","add-spacer","add-image","add-divider","add-button","add-iframe"];
	for (var i = 0; i < list.length; i++){
		document.getElementById(list[i]).style.fontWeight = "normal";
        document.getElementById("element-description").innerText = "Hover over an element to see its description";
        document.getElementById("description-title").innerText = "";
        document.getElementById("description-icon").className = "fa fa-question";
	}
}

document.onload = function(){
    var path = document.querySelector('.squiggle-container.path');
    path.getTotalLength(); // 988.0062255859375
    path.style.transition = path.style.WebkitTransition = 'none';
    // Set up the starting positions
    path.style.strokeDasharray = length + ' ' + length;
    path.style.strokeDashoffset = length;
    // Trigger a layout so styles are calculated & the browser
    // picks up the starting position before animating
    path.getBoundingClientRect();
    // Define our transition
    path.style.transition = path.style.WebkitTransition =
    'stroke-dashoffset 2s ease-in-out';
    // Go!
    path.style.strokeDashoffset = '0';
}