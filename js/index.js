const navSlide = () => {
    const navIcon = document.querySelector('.nav_icon');
    const navLinks = document.querySelector('.nav-links');

    navIcon.addEventListener('click', () => {
        if(document.querySelector('.nav-active')){
            navLinks.classList.toggle('nav-active',false)
        }else {
            navLinks.classList.toggle('nav-active',true)
        }
        
    })


}

navSlide()