

var btnPlus= document.querySelectorAll('.btnplus')

for (let i=0; i<btnPlus.length;i++  ){
btnPlus[i].addEventListener('click', function(){
  btnPlus[i].nextElementSibling.innerHTML++
  Total()
})
}

var btnMinus=document.querySelectorAll('.btnminus')
for (let u=0;u<btnMinus.length;u++)
btnMinus[u].addEventListener('click',function(){

 if(btnMinus[u].previousElementSibling.innerHTML>0)
 btnMinus[u].previousElementSibling.innerHTML--
 Total()
})

function deleteRow(r) {
var i = r.parentNode.parentNode.rowIndex;
document.getElementById('main').parentElement.parentElement.remove(i)
Total()
}


const heartDOM = document.querySelectorAll('.js-heart');
// initialized like to false when user didnt selected
let liked = false;
for (let i = 0; i < heartDOM.length; i++) {
heartDOM[i].onclick = (event) => {
// check if liked 
liked = !liked; // toggle the like 

// this is what we clicked on
const target = event.currentTarget;

if (liked) {
// remove empty heart if liked and add the full heart
target.classList.remove('far');
target.classList.add('fas', 'pulse');
} else {
// remove full heart if unliked and add empty heart
target.classList.remove('fas');
target.classList.add('far');
}
}

heartDOM[i].addEventListener('animationend', (event) => {
event.currentTarget.classList.remove('pulse');
})

}

function Total () {
var tot=document.getElementById('tot')
let z=0
var x = document.querySelectorAll(".number");
var y = document.querySelectorAll(".counter");
for (let i=0; i<x.length;i++){
z = z+ x[i].innerHTML * y[i].innerHTML
console.log('test')
console.log( z )
tot.innerHTML=z + "" +"$"
}


