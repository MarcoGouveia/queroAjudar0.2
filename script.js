const menuItens = document.querySelectorAll('.nav-bar a[href^="#"');

menuItens.forEach(itens => {
    itens.addEventListener('click', scrollSmoth);
})


function scrollSmoth(event){

    event.preventDefault();

    const element = event.target;
    const id = element.getAttribute('href');

    const toTarget = document.querySelector(id).offsetTop;

    window.scroll({
        top: toTarget -80,
        behavior: 'smooth'
    })

    console.log(toTarget);
}








