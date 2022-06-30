const dark = document.getElementById("dark");
console.log(dark)

const body = document.getElementById("body")

dark.addEventListener("click" , ()=>{
    body.classList.toggle("dark")
})























// select skills selector
let myskills = document.querySelector(".skills");

window.onscroll = function (){

    //skills offset top
    let skillsOffsetTop = myskills.offsetTop;

    // skills outer height
    let skillsOuterHeight = myskills.offsetHeight;

    //window height 
    let windowHeight = this.innerHeight;

    //window scrollTop
    let windowScrollTop = this.pageYOffset;


    if (windowScrollTop > (skillsOffsetTop + skillsOuterHeight - windowHeight)) {

        let allSkills = document.querySelectorAll(".skill-box .skill-progress span")

    allSkills.forEach(skill => {
        skill.style.width = skill.dataset.progress;
    })
        
    }


}










