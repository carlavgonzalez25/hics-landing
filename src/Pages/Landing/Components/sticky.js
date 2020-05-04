import React from 'react'

const sticky = () => {
    const header = document.getElementById('home');
    let sticky = header.offsetTop ; 

    const toggleSticky = ()  => {
       // (window.pageYOffset > sticky) ? header.classList.add('sticky') :  header.classList.remove('sticky')

        if (window.pageYOffset > sticky) 
        header.classList.add('sticky'); 
        else header.classList.remove('sticky');
    
    }

    window.addEventListener('wheel', ()=> {
        toggleSticky()
    })
}

export default sticky
