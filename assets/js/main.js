const form = document.querySelector("form")
const div = document.querySelector("form > div:first-of-type")
const input = document.querySelector("form > input")
const thanks = document.querySelector("form > div:last-of-type")

form.addEventListener("submit", () => {

	div.classList.add("hidden")
	input.classList.add("hidden")
	thanks.classList.add("show")

})
