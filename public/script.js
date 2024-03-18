var btnCadastrar = document.getElementById('btnCadastrar');
var btnAtualizar = document.getElementById('btnAtualizar');

var id = document.getElementById('id');
var nome = document.getElementById('nome');
var descricao = document.getElementById('descricao');
var tipo = document.getElementById('tipo');
var imagem = document.getElementById('imagem');

if(btnCadastrar){
btnCadastrar.addEventListener('click', function() {
    axios({
        method: "post",
        url: "http://localhost:3000/pokemons",
        data: {
            nome: nome.value,
            descricao: descricao.value,
            tipo: tipo.value,
            imagem: imagem.value,
        }
      });
});
}

if (btnAtualizar) {
    btnAtualizar.addEventListener('click', function() {
        axios({
            method: "put",
            url: "https://glorious-capybara-qwggv5v76qphx5v5-3000.app.github.dev/pokemons/" + id.value,
            data: {
                nome: nome.value,
                descricao: descricao.value,
                tipo: tipo.value,
                imagem: imagem.value,
            }
        });
    });
}

axios("http://localhost:3000/pokemons").then((response) => {
    const pokemons = response.data.map(pokemon => {
        return `<div class="card">
        <img src="${pokemon.imagem}" alt="">
        <h3> ${pokemon.nome} </h3>
        <p class="descricao"> ${pokemon.descricao} </p>
        <p>Tipo: ${pokemon.tipo} </p> 
        <a id="editar" href="/detalhes/${pokemon.id}"> Editar</a>
        <a id="apagar"href="/delete/${pokemon.id}"> Excluir</a>
    </div>`
    });
    document.getElementById('pokemons').innerHTML = pokemons.join('');
});