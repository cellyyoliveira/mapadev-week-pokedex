/*
quando clicar no pokémon da listagem, temos que esconder o cartão do pokémon aberto e mostrar o cartão correspondente ao que foi selecionado na listagem.

Vamos trabalhar com dois elementos
1- Listagem
2- Cartão do pokémon

Precisamos criar duas variáveis no JS pra trabalhar com os elementos da tela.
Vamos trabalhar com eventos de clique feito pelo usuário na listagem de pokemons.

-remover a classe aberto só do que está aberto
- ao clicar em pokémon da listagem pegamos o id para saber qual é o cartão
-remover a classe ativo que marca o pokémon selecionado

*/

const listaSelecaoPokemons = document.querySelectorAll('.pokemon')
const pokemonsCard = document.querySelectorAll('.cartao-pokemon')

listaSelecaoPokemons.forEach(pokemon => {
    // Vamos trabalhar com eventos de clique feito pelo usuário na listagem de pokemons.
    pokemon.addEventListener('click',() => {
        // -remover a classe aberto só do que está aberto
        const cartaoPokemonAberto = document.querySelector('.aberto')
        cartaoPokemonAberto.classList.remove('aberto')

       //  ao clicar em pokémon da listagem pegamos o id para saber qual é o cartão
      
       const idPokemonSelecionado = pokemon.attributes.id.value

       const idDoCartaoPokemonParaAbrir = 'cartao-' + idPokemonSelecionado
       const cartaoPokemonParaAbrir = document.getElementById(idDoCartaoPokemonParaAbrir)
       cartaoPokemonParaAbrir.classList.add('aberto')

       //remover a classe ativo que marca o pokémon selecionado
       const pokemonAtivoNaListagem = document.querySelector('.ativo')
       pokemonAtivoNaListagem.classList.remove('ativo')

       //adicionar a classe ativo que marca o pokémon selecionado
        const pokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado)
        pokemonSelecionadoNaListagem.classList.add('ativo')

    })
})

 