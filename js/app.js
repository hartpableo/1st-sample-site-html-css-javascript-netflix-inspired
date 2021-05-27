// toggle navbar button
const toggleBtn = document.querySelector('.toggleBtn');
const navLinks = document.querySelector('.navLinks');

toggleBtn.addEventListener('click',function() {
    navLinks.classList.toggle('active');
});

// auto set year on footer
const year = document.querySelector('.date');
year.innerHTML = new Date().getFullYear();

// back-to-top button
const backToTop = document.querySelector('.backToTop');

window.addEventListener('scroll',function() {
    const scrollHeight = window.pageYOffset;
    
    if (scrollHeight > 500) { // back to top
        backToTop.classList.add('showBackToTop');
    } else {
        backToTop.classList.remove('showBackToTop');
    }
});

// close navbar after clicking a link
const scrollLinks = document.querySelectorAll('.scrollLink');

scrollLinks.forEach(function(link) {
    link.addEventListener('click',function(event) {
        navLinks.classList.remove('active'); // close nav links after clicking and navigating
    });
});

// Awesome tabs for about-section
const tabBtns = document.querySelectorAll('.tabBtn');
const about = document.querySelector('.aboutContainer');
const aboutText = document.querySelectorAll('.content');

about.addEventListener('click',function(event) {
    const id = event.target.dataset.id;
    
    if (id) {
        tabBtns.forEach(function(btn) {
            btn.classList.remove('active'); // remove active from other buttons
            event.target.classList.add('active'); // add active class to selected or clicked button
        });
        aboutText.forEach(function(article) {
            article.classList.remove('active');
        });
        const element = document.getElementById(id); // add the corresponding content or text of the buttons
        element.classList.add('active');
    }
});

// slide or carousel for works section
const carouselImgs = document.querySelectorAll('.carouselSlide img');
const prevBtn = document.querySelector('.prevBtn');
const nextBtn = document.querySelector('.nextBtn');

carouselImgs.forEach(function(slide,index) {
    slide.style.left = `${index * 100}%`;
});

let counter = 0;

nextBtn.addEventListener('click',function() {
    counter++;
    carousel();
});
prevBtn.addEventListener('click',function() {
    counter--;
    carousel();
});

function carousel() {
    // working with buttons
    if (counter < carouselImgs.length - 1) {
        nextBtn.style.display = 'block';
    } else {
        nextBtn.style.display = 'none';
    };
    if (counter > 0) {
        prevBtn.style.display = 'block';
    } else {
        prevBtn.style.display = 'none';
    }
    
    // working with slides' movement
    carouselImgs.forEach(function(slide) {
        slide.style.transform = `translateX(-${counter * 100}%)`;
    });
};

// FAQs accordion
const questions = document.querySelectorAll('.questionItems');

questions.forEach(function(clickedQuestion) {
    const btn = clickedQuestion.querySelector('.answerBtns');
    btn.addEventListener('click',function() {
        clickedQuestion.classList.toggle('showAnswers');
        console.log(clickedQuestion)
        questions.forEach(function(qItem) {
            if (qItem !== clickedQuestion) {
                qItem.classList.remove('showAnswers');
            }
        });
    });
});