const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');




  burger.addEventListener('click', () => {
    //Toggle Nav

    nav.classList.toggle('nav-active');

    //Animate Links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.4}s`;
      }

    });
        //Burger animation
        burger.classList.toggle('toggle');

  });

}
navSlide();

function scrollAppear () {
  var introText = document.querySelector('.intro-text');
  var introPosition = introText.getBoundingClientRect().top;
  var screenPosition = window.innerHeight;
  if(introPosition < screenPosition) {
    introText.classList.add('intro-appear');
  }
}
window.addEventListener('scroll', scrollAppear);
