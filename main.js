const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible--expanded");
  })
);

var main = document.getElementById("main");
var modelS = document.getElementById("modelS");
var model3 = document.getElementById("model3");
var modelX = document.getElementById("modelX");
var modelY = document.getElementById("modelY");
var solarRoof = document.getElementById("solarRoof");
var solarPanels = document.getElementById("solarPanels");

var model = document.getElementById("model");
var content = document.getElementById("content");
var footer = document.getElementById("footer");
var button = document.getElementById("button");

var heading1 = document.getElementById("heading1");
var heading2 = document.getElementById("heading2");
var heading3 = document.getElementById("heading3");
var heading4 = document.getElementById("heading4");

var p1 = document.getElementById("p1");
var p2 = document.getElementById("p2");
var p3 = document.getElementById("p3");
var p4 = document.getElementById("p4");

var centralContent = document.getElementById("central-content");

modelS.onclick = function(){
    main.style.backgroundImage = "url(images/Model-S.webp)";
    model.innerHTML = "Model S";
    content.innerHTML = "Plaid";
    footer.style.color = "#fff";
    button.style.color = "#fff";
    button.style.border = "3px solid #fff";
    centralContent.style.color = '#000';

    modelS.style.color = '#000';
    model3.style.color = '#000';
    modelX.style.color = '#000';
    modelY.style.color = '#000';
    solarRoof.style.color = '#000';
    solarPanels.style.color = '#000';

    heading1.innerHTML = "396 mi";
    heading2.innerHTML = "1.99 s";
    heading3.innerHTML = "200 mph";
    heading4.innerHTML = "1,020 hp";

    p1.innerHTML = "Range (EPA est.)";
    p2.innerHTML = "0-60 mph*";
    p3.innerHTML = "Top Speed<sup>†</sup>";
    p4.innerHTML = "Peak Power";
}

model3.onclick = function(){
    main.style.backgroundImage = "url(images/Model-3.webp)";
    model.innerHTML = "Model 3";
    content.innerHTML = "Plaid";

    footer.style.color = "#fff";
    button.style.color = "#fff";
    button.style.border = "3px solid #fff"
    centralContent.style.color = '#fff';

    modelS.style.color = '#fff';
    model3.style.color = '#fff';
    modelX.style.color = '#fff';
    modelY.style.color = '#fff';
    solarRoof.style.color = '#fff';
    solarPanels.style.color = '#fff';

    heading1.innerHTML = "358 mi";
    heading2.innerHTML = "3.1 s";
    heading3.innerHTML = "145 mph";
    heading4.innerHTML = "AWD";

    p1.innerHTML = "Range (EPA est.)";
    p2.innerHTML = "0-60 mph*";
    p3.innerHTML = "Top Speed<sup>†</sup>";
    p4.innerHTML = "Dual Motor";

    
}

modelX.onclick = function(){
    main.style.backgroundImage = "url(images/Model-X.webp)";
    model.innerHTML = "Model X";
    content.innerHTML = "Plaid"; 

    footer.style.color = "#fff";
    button.style.color = "#fff";
    button.style.border = "3px solid #fff";
    centralContent.style.color = '#000';

    modelS.style.color = '#000';
    model3.style.color = '#000';
    modelX.style.color = '#000';
    modelY.style.color = '#000';
    solarRoof.style.color = '#000';
    solarPanels.style.color = '#000';

    heading1.innerHTML = "333 mi";
    heading2.innerHTML = "2.5 s";
    heading3.innerHTML = "9.9s";
    heading4.innerHTML = "1,020 hp";

    p1.innerHTML = "Range (EPA est.)";
    p2.innerHTML = "0-60 mph*";
    p3.innerHTML = "1/4 Mile";
    p4.innerHTML = "Peak Power";
}

modelY.onclick = function(){
    main.style.backgroundImage = "url(images/Model-Y.webp)";
    model.innerHTML = "Model Y";
    content.innerHTML = "Plaid";
    footer.style.color = "#000";
    button.style.color = "#000";
    button.style.border = "3px solid #000"
    centralContent.style.color = '#000';

    modelS.style.color = '#000';
    model3.style.color = '#000';
    modelX.style.color = '#000';
    modelY.style.color = '#000';
    solarRoof.style.color = '#000';
    solarPanels.style.color = '#000';

    heading1.innerHTML = "330 mi";
    heading2.innerHTML = "76 cu ft";
    heading3.innerHTML = "155 mph";
    heading4.innerHTML = "AWD";

    p1.innerHTML = "Range (EPA est.)";
    p2.innerHTML = "Cargo Space";
    p3.innerHTML = "Top Speed<sup>†</sup>";
    p4.innerHTML = "Dual Motor";
}

solarRoof.onclick = function(){
    main.style.backgroundImage = "url(images/SolarRoof.webp)";
    model.innerHTML = "Solar Roof";
    content.innerHTML = "Transform your roof and produce clean energy";
    footer.style.color = "#fff";
    button.style.color = "#fff";
    button.style.border = "3px solid #fff";
    centralContent.style.color = '#fff';

    modelS.style.color = '#fff';
    model3.style.color = '#fff';
    modelX.style.color = '#fff';
    modelY.style.color = '#fff';
    solarRoof.style.color = '#fff';
    solarPanels.style.color = '#fff';

    heading1.innerHTML = "$";
    heading2.innerHTML = "25-Year";
    heading3.innerHTML = "*";
    heading4.innerHTML = "24/7";

    p1.innerHTML = "Lowest Price";
    p2.innerHTML = " Tile Warranty";
    p3.innerHTML = "Beautiful Solar";
    p4.innerHTML = "Outage Protection";
}

solarPanels.onclick = function(){
    main.style.backgroundImage = "url(images/SolarPanels.webp)";
    model.innerHTML = "Solar for Existing Roofs";
    content.innerHTML = "Lowest Cost Solar Panels in America—Money-back guarantee";
    footer.style.color = "#fff";
    button.style.color = "#fff";
    button.style.border = "3px solid #fff"
    centralContent.style.color = '#000';

    modelS.style.color = '#000';
    model3.style.color = '#000';
    modelX.style.color = '#000';
    modelY.style.color = '#000';
    solarRoof.style.color = '#000';
    solarPanels.style.color = '#000';

    heading1.innerHTML = "*";
    heading2.innerHTML = "25-Year";
    heading3.innerHTML = "$";
    heading4.innerHTML = "24/7";

    p1.innerHTML = "Sunlight to Energy";
    p2.innerHTML = "Tile Warranty";
    p3.innerHTML = "Lowest Price";
    p4.innerHTML = "Energy Monitoring";
}



