document.addEventListener('DOMContentLoaded', function(){
    let cards = document.querySelectorAll('.course-card');
    let activeСard = document.querySelector('.active-card');

    function setActiveCard(clickedCard){
        if(clickedCard.classList.contains('active-card')){
            return;
        }
        cards.forEach(card =>{
            card.classList.remove('active-card');
        });

        clickedCard.classList.add('active-card');
        activeСard = clickedCard;
    }

    cards.forEach(card=>{
        card.addEventListener('click', function(){
            setActiveCard(this);
        })
    })
});