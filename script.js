    

const swiper = new Swiper('.swiper', {
    spaceBetween: 10,
    slidesPerView: 1,
    pagination:{ 
        el:'.swiper-pagination',
        type:'bullets',
    },
    });    

 const navbar= document.querySelector(".navbar"); 
        const menuButton = document.querySelector(".menu-mob"); 

        menuButton.addEventListener("click", () => { 
            navbar.classList.toggle("mostrar-menu");
        });            

        

               // $(function() {
           // const toggleMenu = e => {
              //  e.preventDefault();
              //  $(e.currentTarget).next('.lista-menu').toggleClass('show');
           // };

           //$('.link').on('click', toggleMenu);
       // }); 

       