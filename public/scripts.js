

/* querySelector pedido para selecionar exatamente o que eu quero */
const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')

/* for neste caso a função funcionará em cada cartão dos cartões é um looping 
(uma cadeia sequencial, rodou em todos até parar)*/
for (let card of cards) {

    /* addEventListener é quando ele escuta um evento ele executa a função, 
    neste caso o evento é de click */
    card.addEventListener("click", function() {
        const videoId = card.getAttribute("id");
        window.location.href = `/video?id=${videoId}`

    })
}

// quando funcionava pelo metodo modal
//         /* Neste caso a função que peço ao addEventListener ao escutar o click 
//         é para agregar uma classe (no caso active) ou seja classList.add agrega 
//         onde eu pedi para selecionar anteriormente */
//         modalOverlay.classList.add('active')

//         /* Neste caso eu pedi para o seletor selecionar o iframe e dizer que ele é o que informei em seguida,
//         lá em cima na minha const videoId eu pedi para seguir informando o que ele é */
//         modalOverlay.querySelector('iframe').src = `https://www.youtube.com/embed/${videoId}`
//     })
// }

// /* Selecionei o close-modal e pedi para quando ele escutar o click executar a função de... */
// document.querySelector(".close-modal").addEventListener("click", function() {

//    /* ...remover uma classe ou seja classList.remove no caso a classe é a 
//    active a que anteriormente eu adicionei, aqui disse que já não queria mais... */
//     modalOverlay.classList.remove("active")

//     /* ... como não quero mais ver a classe, também não quero escutar o video 
//     que pedi para o iframe completar, assim eu disse a ele que novamente ele não é nada */
//     modalOverlay.querySelector('iframe').src = ''
// })

