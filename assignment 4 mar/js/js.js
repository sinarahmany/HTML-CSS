function openNav() {
  document.getElementById("myNav").style.width = "30%";
  // document.getElementById("celllll").style.opacity = "0.5";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}
function next() {
	document.getElementsByClassName("imag2")[0].style.opacity = "1.0";
	document.getElementsByClassName("imag1")[0].style.opacity = "0.0";

}

function mouseOver() {
  document.getElementById("no_glow").style.opacity = "0.0";
  document.getElementById("no_glow2").style.opacity = "1.0";
}

function mouseOut() {
  document.getElementById("no_glow").style.opacity = "1.0";
  document.getElementById("no_glow2").style.opacity = "0.0";
}