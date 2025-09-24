const scrol=document.querySelector('.scrollbtn')

window.addEventListener('scroll',()=>{
    
    if(window.pageYOffset > 100){
        scrol.classList.add('show')
    }

    else{
        scrol.classList.remove('show')
    }
})
