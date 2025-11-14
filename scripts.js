document.addEventListener('DOMContentLoaded', function(){
    initLogin();    //Вход через логин
    initNavigation();   //Навигация в карточках
    initCards();    //Карточки
    initFooter();   //Футер
});

//Вход через логин
function initLogin(){
    const loginDlg = document.querySelector(".loginDialog");
    if(!loginDlg) return;
    const openLoginBtn = document.getElementById('openLoginDialog');
    const closeLoginBtn = document.getElementById('closeLoginDialog');
    const loginForm = document.getElementById('loginDialogForm');
    const accountButtons = document.querySelector('.account-buttons');
    const profile = document.querySelector('.profile');
    let lastActive = null;
    
    openLoginBtn.addEventListener('click', ()=>{
        lastActive = document.activeElement;
        loginDlg.showModal();
    });
    
    closeLoginBtn.addEventListener('click', ()=> loginDlg.close('cancel'));
    
    loginForm.addEventListener('submit', (e)=>{
        e.preventDefault();
    
        let email = document.getElementById('email').value;
        let password = document.getElementById('password').value;
    
        if(email && password){
            accountButtons.style.display = 'none';
            profile.style.display = 'flex';
            loginDlg.close('success');
        }
    })
};

// НАВИГАЦИЯ
function initNavigation(){
    let navItems = document.querySelectorAll('.nav__item');
    if(navItems.length === 0) return;
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
};

   // КАРТОЧКИ
function initCards(){
    let cards = document.querySelectorAll('.course-card');
    if (cards.length === 0) return;
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
};

// FOOTER
function initFooter(){
    const footer = document.querySelector('footer')
    if(!footer) return;
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
};