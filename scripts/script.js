function burguer() {
    menu = document.querySelector('.cab-links-celular')
    if (menu.style.display == 'none') {
        menu.style.display = 'flex'
    } else {
        menu.style.display = 'none'
    }

}