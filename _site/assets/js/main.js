const form = document.querySelector("form")
const div = document.querySelector("form > div:first-of-type")
const input = document.querySelector("form > input")
const thanks = document.querySelector("form > div:last-of-type")

form.addEventListener("submit", () => {

	div.classList.add("hidden")
	input.classList.add("hidden")
	thanks.classList.add("show")

})


check_in_view = (element) => {
  const top = element.getBoundingClientRect().top
  const percent = element.dataset.scroll
  const scrollClass = "in-view"

  if (top < window.innerHeight*percent/100 && !element.classList.contains(scrollClass)) {
    element.classList.add(scrollClass)
  }
  else if (top > window.innerHeight*percent/100) {
    element.classList.remove(scrollClass)
  }
}


const scrollers = document.querySelectorAll("[data-scroll]")
for(var i = 0; i < scrollers.length; i++){
	check_in_view(scrollers[i])
}
document.addEventListener("scroll", () => {
  // const scrollers = document.querySelectorAll("[data-scroll]")
  for(var i = 0; i < scrollers.length; i++){
    check_in_view(scrollers[i])
  }
})
