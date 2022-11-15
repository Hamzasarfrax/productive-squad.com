
// window.addEventListener("load" , function(){
 
//   this.document.body.style.display="none"
//   this.setTimeout(()=>{
// this.document.body.style.display="block"
//   },4000)
// })


document.onreadystatechange = function() {
	if (document.readyState !== "complete") {
        
		document.getElementsByTagName("body").style.visibility = "hidden";
		document.getElementById("loader").style.display = "block";
	} else {
	setTimeout(()=>{
        document.getElementById("loader").style.display = "none";
		document.getElementsByTagName("body").style.visibility = "visible";
    },250000)
	}
};
