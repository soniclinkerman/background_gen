let h3 = document.querySelector("h3")
let color1 = document.querySelector(".color1")
let color2 = document.querySelector(".color2")
let body = document.querySelector("body")
let button = document.querySelector("button")

function randomizeColors() {
	color1.value = getRandomColor()
	color2.value = getRandomColor()
}

function backgroundChanger(x,y) {
	body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`
	h3.textContent = `Left: ${color1.value} || Right: ${color2.value}`
}

function getRandomColor() {
	var letters = '0123456789ABCDEF';
	var color = '#';
	for (var i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}
color1.addEventListener("input", backgroundChanger)
color2.addEventListener("input", backgroundChanger)

button.addEventListener("click", ()=> {
	randomizeColors()
	backgroundChanger(color1,color2)
})

randomizeColors()
backgroundChanger(color1,color2)
