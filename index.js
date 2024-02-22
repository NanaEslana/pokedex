const express = require('express');
const path = require("path");
const app = express();

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")))

const pokedex = [
    {
        id: 1,
        nome: "Bulbasaur",
        descricao:"Por algum tempo após seu nascimento, ele utiliza os nutrientes que estão contidos na semente em seu dorso para crescer",
        tipo: "Grass",
        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
    },
    {
        id: 2,
        nome: "Charmander",
        descricao:"A chama em sua cauda mostra a força de sua força vital. Se Charmander estiver fraco, a chama também queimará fracamente.",
        tipo: "Fire",
        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",
    },
    {
        id: 3,
        nome: "Squirtle",
        descricao:"Após o nascimento, suas costas incha e endurece formando uma concha. Ele espalha uma espuma potente pela boca.",
        tipo: "Water",
        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png",
    }
]


app.get('/',(req,res) => {
    res.render("index", {pokedex});
})

app.listen(3000, () => {console.log("Servidor rodando na porta http:/localhost:3000")});
