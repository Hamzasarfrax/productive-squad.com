
document.onscroll=function(){
	let text = document.getElementById("animated_scroll")
let scrol = document.body.scrollTop || document.documentElement.scrollTop;
if (scrol === 0) {
  setInterval(() => {
	text.classList.add("active")
  }, 800)
}
else if (scrol > 0) {
  text.classList.remove("active")
}
}



