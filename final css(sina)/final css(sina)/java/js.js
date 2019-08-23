let menu = document.getElementsByTagName("nav")[0];

function openMenu(){
	if( menu.className == ""){
		menu.className+="responsive";
	} else {
		menu.className = "";
	}
}
// for slid
let index = 1;
showSlide(index);

// This is the actual function that we run every time we click on one of the two arrows.
function changeIndex(index_update){
	// Every time we click on an arrow we pass a number as argument. This number changes the value of index, as you can see. if the number that we are passing is 1 (because we clicked on the "next" arrow), then the index will increase of one. Otherwise, it will decrease. The updated index becomes in the same time the argument of another function, "showSlide". 
	showSlide(index += index_update);
}

// This is the actual function that we run every time we click on one of the dots.
function changeSlide(index_move){
	// Here what we do is setting the value of "index" with the number we are passing as argument. The updated index becomes in the same time the argument of another function, "showSlide".
	showSlide(index = index_move);
}

function showSlide(number){
	// Set up a counter, we will need it in a moment
	let i = 0;
	// let's collet all the slides...
	let slides = document.getElementsByTagName("figure");

	// ...the divs for displaying the number of slide that we are currently looking at...
	let slide_numbers = document.getElementsByClassName("text-num");

	// ... and the dots.
	let dots = document.getElementsByClassName("dot");

	// If the current index is bigger than the size of the array, it means there's no more images to display: at this point we want to set it back to the beginning
	if(number > slides.length){
		index = 1;
	}

	// Here we do the opposite. when we are clicking on the 'previous' arrow we are decreasing the 'index' var value through the function changeIndex. If it becomes smaller than 1, we need to adjust it, showing the last element of our array - in this way the slideshow becomes a loop.
	if(number < 1){
		index = slides.length;
	}

	for(let slide_num of slide_numbers){
		slide_num.innerText = "";
	}

	// Let's hide all the slides through JavaScript every time the user click and triggers this function:
	for(let slide of slides){
		slide.style.display = "none";
	}

	// And let's manage the dots as well, to activate the correct one. To do that, we first remove the class 'active' from other dots:
	for(let dot of dots){
		dot.className = dot.className.replace(" active", "");
	}

	// Eventually, we can display an image now. We will use the previous array ('let slides') with all the slides, and as index we will pass the variable 'let index'. Every time the user press on the 'previous' arrow or the 'next' arrow he's sending an argument to the function changeSlide. That function changes the 'index' variable adding or removing the number sent by the user. In the same time, the function 'changeSlide' calls this current function ('showSlide'), with the updated 'index' variable as argument.
	slides[index-1].style.display="block";
	dots[index-1].className += " active";

	// Here we dinamically change the number that indicates which slide we are looking at: in this way, if we add more more images to our slideshow, there's less things to change in HTML!
	slide_numbers[index-1].innerText = `${index}/${slides.length}`;


	// Potentially, we can even create the dots below dinamically (based on the quantity of images inside our slideshow), but this requires a bit more complex code (we should append childs, assign events, etc.)



}