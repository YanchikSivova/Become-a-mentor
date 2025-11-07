document.addEventListener('DOMContentLoaded', function(){
    let cards = document.querySelectorAll('.course-card');
    let activeCard = document.querySelector('.active-card');

    function setActiveCard(clickedCard){
        if(clickedCard.classList.contains('active-card')){
            return;
        }
        cards.forEach(card =>{
            card.classList.remove('active-card');
        });

        clickedCard.classList.add('active-card');
        activeCard = clickedCard;
    }

    cards.forEach(card=>{
        card.addEventListener('click', function(){
            setActiveCard(this);
        })
    })

    let navItems = document.querySelectorAll('.nav__item');
    let activeItem = document.querySelector('.nav__item--active');
    function setActiveNav(clickedNav){
        if(clickedNav.classList.contains('nav__item--active')){
            return;
        };
        navItems.forEach(item=>{
            item.classList.remove('nav__item--active');
        });
        clickedNav.classList.add('nav__item--active');
        activeItem = clickedNav;
    }
    navItems.forEach(item=>{
        item.addEventListener('click', function(){
            setActiveNav(this);
        })
    })
});