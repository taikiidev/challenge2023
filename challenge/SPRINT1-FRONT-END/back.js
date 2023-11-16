const listItemIntroducao = document.querySelector(".list_item-introducao")
const listItemProblema = document.querySelector(".list_item-problema")
const listItemEntendimento = document.querySelector(".list_item-entendimento")
const listItemSolucao = document.querySelector(".list_item-solucao")
const listItemAplicacao = document.querySelector(".list_item-aplicacao")
const listItemComparacao = document.querySelector(".list_item-comparacao")

listItemIntroducao.addEventListener('click', () => {
    location.replace('#section-introducao')
})

listItemProblema.addEventListener('click', () => {
    location.replace('#section-problema')
})

listItemEntendimento.addEventListener('click', () => {
    location.replace('#section-entendimento')
})

listItemSolucao.addEventListener('click', () => {
    location.replace('#section-solucao')
})

listItemAplicacao.addEventListener('click', () => {
    location.replace('#section-aplicacao')
})

listItemComparacao.addEventListener('click', () => {
    location.replace('#section-comparacao')
})



const modalOpen = document.querySelector('.modal_open')
const modalControler = document.querySelector('.modal_controler')
const modalClose = document.querySelector('.modal_close')
const body = document.querySelector('body')

function openModal(){
    modalOpen.addEventListener('click', () => {
        modalControler.showModal()
        closeModal()
    })

}

function closeModal(){
    modalClose.addEventListener('click', () => {
        modalControler.close()
    })

    window.addEventListener('click', function (event) {
        if (event.target == modalControler) {
            modalControler.style.display = 'none';
        }
    })
}


openModal()

