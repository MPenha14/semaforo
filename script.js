const amarelo = document.querySelector('.amarelo')
const verde = document.querySelector('.verde')
const vermelho = document.querySelector('.vermelho')


function activeGreen(){
    amarelo.classList.add('desactive')
    vermelho.classList.add('desactive')
    verde.classList.remove('desactive')
}
function activeYellow(){

    vermelho.classList.add('desactive')
    verde.classList.add('desactive')
    amarelo.classList.remove('desactive')
    
}

function activeRed(){
    verde.classList.add('desactive')
    amarelo.classList.add('desactive')
    vermelho.classList.remove('desactive')
}


function semaforo(){
    activeGreen()

    setTimeout(() => {
        activeYellow()
    }, 10000)

    setTimeout(() => {
        activeRed()
    }, 17000)
}


setInterval(semaforo,20000)
