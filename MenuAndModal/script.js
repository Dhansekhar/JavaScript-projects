let toggle=document.querySelector('#toggle')
// let Logo=document.querySelector('.logo')
//show-navbar
toggle.addEventListener('click',()=>{
    document.body.classList.toggle('show-nav')
})
//showing model
let show_modal=document.querySelector('#open')

let modal=document.querySelector('#modal')

show_modal.addEventListener('click',()=>{
    modal.classList.add('show-modal')
    // console.log(modal);  
})
//remove modal

let close=document.querySelector('#close')

close.addEventListener('click',()=>{
    modal.classList.remove('show-modal')
})
//remove modal outside click

window.addEventListener('click',(e)=>{
    console.log(e.target);
    
e.target==modal?modal.classList.remove('show-modal'):false
})