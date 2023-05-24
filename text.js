let btn1=doument.querySelector('#btn1')
let btn2=doument.querySelector('#btn2')

let content=document.querySelector('.content')

let content1=`<h1 id="title">hello events</h1>
<button id="btn1">toggle</button>
<button id="btn2">click me twice</button>
<p id="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat possimus ipsa facilis voluptatibus amet quidem voluptates in aut. Distinctio amet odit ipsam veritatis voluptates repellendus earum quas vero dolores obcaecati.</p>

<ul id="itemlist">
    
 <li>spiderman</li>
 <li>batman</li>
 <li>ironman</li>
 <li>rcb</li>
</ul>

<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis ea atque illo odit temporibus voluptates delectus, impedit cumque asperiores nam veniam accusantium quis in. Ullam libero in officiis! Labore laudantium autem, at ullam porro modi voluptates repudiandae neque quaerat iste.</p>
<img src="https://images.pexels.com/photos/6468167/pexels-photo-6468167.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" width="400px">
     <section>
        <ul>
        <li>holla</li>
        <li>holla</li>
        <li>holla</li>
        <li>holla</li>
    </ul>
</section>
`
content.innerHTML=content1

btn1=addEventListener("click",()>={
    content.InnerText=content1
})
btn2=addEventListener("click",()>={
    content.innerHTML=content1
})