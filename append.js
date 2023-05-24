const content= document.body;

const newDiv=document.createElement("div")
const NewH1=document.createElement("h1")

/* content.append(newDiv)
content.append(NewH1)
content.append("hello") */


const parent = document.createElement("div")

const child1=document.createElement("h1")
const child2=document.createElement("h1")
const child3=document.createElement("h1")

content.append(parent)
parent.append(child1)
child1.append("hurrryy")
parent.append(child2)
child2.append("hurrryy")
parent.append(child3)
child3.append("hurrryy")

const parentAC=parent.appendChild(child1)
const bodyAc=content.appendChild(parent)
console.log('parentAC',parentAC)
console.log('bodyAC',bodyAC)
child1.appendChild("hello")