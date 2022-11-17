
function validation(){
 
  let input=document.getElementsByClassName("form-control");
  let required=document.getElementsByClassName("required");
  for(let i=0;i<input.length;i++){
    for(let k=0;k<required.length;k++){
      if(input[i].value<5){
        required[i].innerHTML="field is required"
       
      }
      else{
        alert("sucessfull")
        required[i].innerHTML=""
      let item=input.value;
      let formdetails={item}

      console.log(JSON.stringify(formdetails))
      }
    }
  }
}


document.onscroll=function(){
	let text = document.getElementById("animated_scroll")
let scrol = document.body.scrollTop || document.documentElement.scrollTop;
if (scrol === 0) {
  setInterval(() => {
	text.classList.add("active")
  }, 800)
}
else if (scrol > 0) {
  // document.getElementById("animated_scroll").classList.remove("active")
}
}




let loading=document.getElementById("loader")

function loader(){
setTimeout(()=>{
  loading.style.display="none"
},4000)

}
