console.log("hi")
let mass=document.getElementById("mass");
let height=document.getElementById("height");
let cal=document.getElementById("cal");
let answer=document.getElementById("answer");

console.log(cal)

cal.addEventListener('click',function(e){
    m=mass.value
    h=height.value
    ans= m/(h*h)
    answer.innerHTML=ans 
    console.log(ans)
})