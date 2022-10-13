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

    if (pratoUm.style.display == 'flex' && pratoDois.style.display == 'none' && pratoDois.style.display == 'none') {
        pratoUm.style.display = 'none'
        pratoDois.style.display = 'flex'

    } else if (pratoUm.style.display == 'none' && pratoDois.style.display == 'flex' && pratoDois.style.display == 'none') {
        pratoUm.style.display = 'flex'
        pratoDois.style.display = 'none'

    } 
}