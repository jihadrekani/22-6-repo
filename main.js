const dark = document.getElementById("dark");
console.log(dark)

const body = document.getElementById("body")

dark.addEventListener("click" , ( )=>{
    body.classList.toggle("dark")
})