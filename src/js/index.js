// //         Pegar os "personagens" no JS pra poder verificar quando o usuário passar o mouse em cima de um deles

const personagens = document.querySelectorAll('.personagem');

// Adicionar a classe selecionado no personagem que o usuário passar o cursor do mouse

personagens.forEach(personagem => {
    personagem.addEventListener('mouseenter', () => {

        if(window.innerWidth <450) {
            window.scrollTo ({top: 0, behavior: 'smooth'});
        }
       

     // Verificar se já exista um personagem selecionado, se sim, devemos remover a seleção dele 

    const personagemSelecionado = document.querySelector('.selecionado');
    personagemSelecionado.classList.remove('selecionado');
    personagem.classList.add('selecionado');

     // Quando passar o mouse em cima do personagem na listagem, trocar a imagem, o nome e a descrição do personagem grande
     // Pegar o elemento do personagem grande pra adicionar as informações nele

     const imagemPersonagemGrande = document.querySelector('.personagem-grande');
     //console.log(imagemPersonagemGrande);

    // Alterar a imagem do personagem grande
    const idPersonagem = personagem.attributes.id.value;
   
    imagemPersonagemGrande.src = `./src/imagens/card-${idPersonagem}.png`;

    // Alterar o nome do personagem grande
    const nomePersonagem = document.getElementById('nome-personagem');

    nomePersonagem.innerText = personagem.getAttribute('data-name');

   // Alterar a descrição do personagem grande
      const descricaoPersonagem = document.getElementById('descricao-personagem');
      descricaoPersonagem.innerText = personagem.getAttribute('data-description');

    })
})
    