const express = require('express');
const axios = require('axios');
const path = require("path");
const app = express();

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded());

let pokemon = undefined;

app.get('/',(req,res) => {
    res.render("index", { pokemon });
})

app.post('/create',(req,res) => {
    const pokemon  = req.body;
    pokemon.id = pokedex.length + 1;
    pokedex.push(pokemon);
    res.redirect("/#cards");
})

app.get("/detalhes/:id", (req,res) => {
    const id = req.params.id
    axios("http://localhost:3000/pokemons/"+id)
    .then((response) => {
    pokemon = response.data;
    res.redirect("/#cadastro");
    });
})

app.post("/update/:id", (req,res) => {
    const id = +req.params.id - 1;
    const newPokemon = req.body;
    newPokemon.id =  id + 1 ;
    pokedex[id]= newPokemon;
    pokemon = undefined;
    res.redirect("/#cards");
})

app.delete("/delete/:id"), (req,res) => {
    const id = +req.params.id - 1;
    delete pokedex[id];
    res.redirect("/#cards");
}

app.listen(3000, () => {console.log("Servidor rodando na porta http:/localhost:3000")});