var h3 = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
console.log(body);
// console.log(h3);
// console.log(color1);
// console.log(color2);

function setGradient()
{
  body.style.background=body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";
	h3.textContent = body.style.background + ";" ;
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);