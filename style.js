const scrol=document.querySelector('.scrollbtn')

window.addEventListener('scroll',()=>{
    
    if(window.pageYOffset > 100){
        scrol.classList.add('show')
    }

    else{
        scrol.classList.remove('show')
    }
})



const  btnOpen=document.querySelector('.btngear')
const btnClose=document.querySelector('.menu-close')
const menu=document.querySelector('.navb')

btnOpen.addEventListener("click",()=>{
    menu.classList.add('ouvert')
})

btnClose.addEventListener("click",()=>{
    menu.classList.remove('ouvert')
})