function slideToLeft(btn) {

    const slider = btn.parentElement;
    const cardsContainer = slider.querySelector('.product-slider');
    const cardCount = cardsContainer.children.length;
    const left = cardsContainer.style.left;

    const cardWrapperWidth = (cardsContainer.scrollWidth - slider.offsetWidth) / cardCount*2;
    const scrollAmount = toNum(left);
    const newScrollAmount = scrollAmount + cardWrapperWidth;
    
    console.log(newScrollAmount, "newScrollAmount");

    // update position 
    cardsContainer.style.left = newScrollAmount + 'px';

    updateBtn(slider);
}

function slideToRight(btn) {

    const slider = btn.parentElement;
    const cardsContainer = slider.querySelector('.product-slider');
    const cardCount = cardsContainer.children.length;
    const left = cardsContainer.style.left;

    const cardWrapperWidth = (cardsContainer.offsetWidth - slider.offsetWidth) / cardCount*2;
    const scrollAmount = (left == '' ? '0px' : toNum(left));
    const newScrollAmount = -scrollAmount + cardWrapperWidth;
    
    console.log(newScrollAmount, "newScrollAmount");

    // update position 
    cardsContainer.style.left = -newScrollAmount + 'px';

    updateBtn(slider);
}

function updateBtn(slider) {
    console.log(slider);
    
    const rightBtn = slider.querySelector('.slider-nav.right');
    const leftBtn = slider.querySelector('.slider-nav.left')
    const cardsContainer = slider.querySelector('.product-slider');

    // if cardsContainer's total width - cardContainer's visible width === cardContainer's hidden width then hide the right button
    if (cardsContainer.offsetWidth - slider.offsetWidth === Math.abs(toNum(cardsContainer.style.left))) {
        rightBtn.classList.add('hidden');
        console.log("hide right btn");
    } else {
        rightBtn.classList.remove('hidden');
    }

    // if cardContainer's hidden width === 0 then hide the left button
    if (cardsContainer.style.left === '0px') {
        leftBtn.classList.add('hidden');
        console.log("hide left btn");
    } else {
        leftBtn.classList.remove('hidden');
    }
}

// update buttons when page is loaded 
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.slider-nav').forEach(btn => {
        console.log("btn", btn);
        btn.addEventListener('click', () => {
            if (btn.classList.contains('left')) {
                slideToLeft(btn);
            } else if (btn.classList.contains('right')) {
                slideToRight(btn);
            }
            updateBtn(btn.parentElement);
        });
    });
});


// function to remove px from the css value and convert it into floating number
function toNum(str) {
    return parseFloat(str.replace('px', ''), 10);
}