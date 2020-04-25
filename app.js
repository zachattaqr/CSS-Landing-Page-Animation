const hero= document.querySelector('.hero');
const slider= document.querySelector('.slider');
const logo= document.querySelector('#logo');
const menu= document.querySelector('.menu');
const headline= document.querySelector('.headline');

const tl = new TimelineMax();

tl.fromTo(hero, 1.2, {height: "0%"}, 
{height: "80%", ease: Power2.easeInout})

.fromTo(hero, 1, {width: '100%'},
{width: "80%", ease: Power2.easeInout}

)

.fromTo(slider, 1,{ x: "-100%", ease: Power2.easeInout}, 
{x: "0%",ease: Power2.easeInout},"-=1.2" )


.fromTo(logo, 0.6, {opacity: 0, x: 30}, {opacity: 1, x: 0},"-=0.5")
.fromTo(menu, 0.6, {opacity: 0, x: 30}, {opacity: 1, x: 0},"-=0.5")
.fromTo(headline, 0.6, {opacity: 0, x: 30}, {opacity: 1, x: -110},"-=0.5")


;




