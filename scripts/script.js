function burguer() {
    menu = document.querySelector('.cab-links-celular')
    if (menu.style.display == 'none') {
        menu.style.display = 'flex'
    } else {
        menu.style.display = 'none'
    }

}



function mudarFoto() {
    pratoUm = document.querySelector('#pratoUm')
    pratoDois = document.querySelector('#pratoDois')
    pratoTres = document.querySelector('#pratoTres')

    pratoUm.display.style = 'none'
}