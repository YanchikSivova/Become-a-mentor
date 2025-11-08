document.addEventListener('DOMContentLoaded', function(){
    
    // КАРТОЧКИ
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

    // НАВИГАЦИЯ
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

    // FOOTER
    const linksHeaders = document.querySelectorAll('.links__header-wrapper');
    linksHeaders.forEach(header =>{
        header.addEventListener('click', function(){
            if(window.innerWidth <=2024){
                const linksList = this.nextElementSibling;
                const toggleBtn = this.querySelector('.links__toggle');

                document.querySelectorAll('.links-list.active').forEach(activeList=>{
                    if(activeList!==linksList){
                        activeList.classList.remove('active');
                        activeList.previousElementSibling.querySelector('.links__toggle').classList.remove('rotated');
                    }
                });
                linksList.classList.toggle('active');
                toggleBtn.classList.toggle('rotated');
            }
        })
    })
});