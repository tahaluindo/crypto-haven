import './home.css';
import anime from "animejs/lib/anime.es.js";

const nav = document.querySelector('nav');
const logo = document.querySelector('header img');
const disclaimer = document.querySelector('#disc');
const blackScreen = document.querySelector('.black');
const imageLanding = document.querySelector('section.landing #image-landing img');
const hamburgerMenu = document.querySelector('div#hamburger-menu');
const firstLine = document.querySelector('div#hamburger-menu .first');
const middleLine = document.querySelector('div#hamburger-menu .middle');
const lastLine = document.querySelector('div#hamburger-menu .last');


anime({
    targets: imageLanding,
    keyframes: [
        {translateY: -30},
        {translateY: 30}
    ],
    duration: 2000,
    loop: true,
    easing: 'easeInOutQuad'
});

if(localStorage.getItem('disclaimer') == null){
    document.body.classList.toggle('freeze');
    disclaimer.innerHTML = `<section id="disclaimer">
                                <h1>Disclaimer</h1>
                                <p>This project is for Personal Purpose not for Commercial Purpose<br>Because on this site i use big tech company's logo like Google, Microsoft, IBM</p>
                                <button class="understand">Alright, I Understand!</button>
                            </section>`;

    blackScreen.classList.toggle('hidden');
}

// Event Binding
document.body.addEventListener('click', (e) => {
    if(e.target.classList.contains('understand')){
        document.body.classList.toggle('freeze');
        blackScreen.classList.toggle('hidden');
        disclaimer.innerHTML = '';
        localStorage.setItem('disclaimer', 'Ever');
    }
});

hamburgerMenu.addEventListener('click', () => {
    document.body.classList.toggle('freeze');
    blackScreen.classList.toggle('hidden');
    nav.classList.toggle('grid');

    firstLine.classList.toggle('miring-first');
    middleLine.classList.toggle('hidden');
    lastLine.classList.toggle('miring-last')
})

logo.addEventListener('click', () => {
    window.location.href = './index.html';
});

export default Home;