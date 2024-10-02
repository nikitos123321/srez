'use sstrict'

const menu = document.getElementById('menu')
const vidno = document.getElementById('vidno')

menu.addEventListener('mouseover', function () {
    vidno.classList.add('vidno');
})

menu.addEventListener('mouseleave', function () {
    vidno.classList.remove('vidno');
})
// Выпадающее меню ↑


const phoneNumber = document.getElementById('number');
const faqSection = document.getElementById('faq');

const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
        phoneNumber.style.display = 'block';
    }
});

observer.observe(faqSection);
// Вывод номера телефона  ↑



const modal = document.getElementById('modal')
const close = document.getElementById('close')

let modalTime = setTimeout(() => {
    modal.style.display = 'block'
}, 3000);

close.addEventListener('click', () => {
    modal.style.display = 'none';
})
// Модальное окно ↑

const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach((item) => {
    const header = item.querySelector('.accordion-header');
    const content = item.querySelector('.accordion-content');

    header.addEventListener('click', () => {
        content.classList.toggle('active');
    });
});
// Аккордеон ↑


function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}
// Вкладки ↑

let sliderBody = document.querySelector('.slider__body')
let sliderNav = document.querySelector('.slider__nav')
let sliderImages = document.querySelector('.slider__images')
let sliderItems = Array.from(document.querySelectorAll('.slider__item'))
let sliderDots = Array.from(document.querySelectorAll('.slider__dot'))

sliderBody.addEventListener('click', function (event) {
    let targetArrow = event.target.closest('.slider__arrow');
    if (!targetArrow) return;

    let currentActiveImage = document.querySelector('.slider__item.active');
    let currentActiveIndex = sliderItems.indexOf(currentActiveImage);

    currentActiveImage.classList.remove('active');
    document.querySelector('.slider__dot.active').classList.remove('active');

    changeActive(targetArrow, currentActiveIndex)

    let newActiveImage = document.querySelector('.slider__item.active');
    let newActiveIndex = sliderItems.indexOf(newActiveImage);

    scrollSlider(newActiveIndex)


})
function scrollSlider(index) {
    sliderImages.style.transform = `translateX(${- 100 * index}%)`; 
}
function changeActive(arrow, currentIndex) {
    if (arrow.classList.contains('left')) {
        if (currentIndex == 0) {
            sliderItems.at(-1).classList.add('active');
            sliderDots.at(-1).classList.add('active');
        } else {
            sliderItems[currentIndex - 1].classList.add('active');
            sliderDots[currentIndex - 1].classList.add('active');
        }
    } else {
        if (currentIndex == sliderItems.length - 1) {
            sliderItems[0].classList.add('active');
            sliderDots[0].classList.add('active');
        } else {
            sliderItems[currentIndex + 1].classList.add('active');
            sliderDots[currentIndex + 1].classList.add('active');
        }
    }
}

sliderNav.addEventListener('click', function (event) {
    let targetDot = event.target.closest('.slider__dot');
    if (!targetDot) return;

    if (targetDot.classList.contains('active')) return;

    document.querySelector('.slider__dot.active').classList.remove('active');
    targetDot.classList.add('active');
    document.querySelector('.slider__item.active').classList.remove('active');
    sliderItems[targetDot.dataset.index].classList.add('active');

    scrollSlider(targetDot.dataset.index)
})

// Слайдер