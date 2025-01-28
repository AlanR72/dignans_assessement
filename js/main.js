// Function which toggles mobile navigation and large navigation

function Nav(){
    let mobileClick = document.getElementById('mobile-click');
    let mobileNav = document.querySelector('#mobile-nav');

    mobileClick.addEventListener('click',() =>{
        mobileNav.classList.toggle('active');
        document.getElementById('page_instruction').style.position='static';
        document.getElementById('page_instruction1').style.position='static';
    });
}
Nav()


