const express = require("express");
const axios = require("axios");
const app = express();
app.get('/',async (req,res)=>{
  const pokemon_one = await axios.get('https://pokeapi.co/api/v2/pokemon/pikachu');
  const pokemon_two = await axios.get('https://pokeapi.co/api/v2/pokemon/eevee');
  const pokemon_three = await axios.get('https://pokeapi.co/api/v2/pokemon/squirtle')
  res.render('home',{pokemon_one:pokemon_one.data,pokemon_two:pokemon_two.data,pokemon_three:pokemon_three.data});
})

app.set('view engine','ejs');
app.set('pages','/pages');
app.listen(3000,()=>{
  console.log('Server started on port 3000');
  console.log('http://localhost:3000');
})