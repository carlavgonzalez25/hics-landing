const scroll = () => {

   // let sections = ['home', 'services', 'contact', 'contactForm', 'partners']; 

    let lastScrollTop =  window.pageYOffset; 
    console.log( 'PageYOffset es ' + lastScrollTop);

    let direction = 0; 
    let cont = 0; 

    window.addEventListener('click', ()=> {
  //  document.getElementById('home').scrollIntoView({behavior: "smooth"});   

        setTimeout(()=> {
            moveScroll()
        }, 5);
    })

    window.addEventListener('wheel', () => {
        let movement = window.pageYOffset || document.documentElement.scrollTop; 
        if( movement > lastScrollTop) {
            if (direction === 0)
            { 
                direction = 1;
               
                setTimeout(()=> {
                   
                 //   cont= cont+1;
                  //  document.getElementById('partners').scrollIntoView();
                  moveScroll();      
                }, 5)          
            }
            if (direction !== 0) setTimeout(()=> {
                direction = 0;
                console.log("scroll -> direction", direction)
            }, 600)
            
        }
            
         else {
            if(direction === 0)
            direction = -1

            if (direction !== 0) setTimeout(()=> {
                    direction = 0;
                    console.log("scroll -> direction", direction)                    

                }, 600)
        }

        console.log( "Scroll direction " + direction  );
        
        lastScrollTop = movement <= 0 ? 0 : movement;

    }, false)

    const moveScroll = () => {
        document.getElementById('home').scrollIntoView({behavior: "smooth"});   
        console.log( " ejecuta moveScroll ");
    }
  
}

export default scroll ;
