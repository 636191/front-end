/*events */
//const btn = document.querySelector('#btn')
/* function multiply(a,b){
  return a*b
}
multiply(23,45) */
/*btn.addEventListener("click",function amiclicked(){
    alert("iam clicled now")
})*/ 

const btn1 = document.querySelecto=r('#btn1')
btn1.addEventListener('click',toggle)

function toggle(){
    let title=document.querySelector("#title")

    if(title.style.display !=="none"){
        title.style.display = "none"
    }else{
        title.style.display="block"
    }
}
const itemlist=document.querySelectorAll('li')
console.log( itemlist)
 
for(let i of itemlist){
    console.log(i)
    i.innerText="yaaaaaay"
}
const para=document.querySelector(#para)
let count = 0
para.addEventListener("click",function paraclick(event){
           console.log(event)
           count++
           console.log(count)
})


