function getAllPokemons(callback)
{
    getFromPokeApi('pokemon', callback);
}

function getOnePokemon(id, callback)
{
    getFromPokeApi(`pokemon/${id}/`, function(pokemon){
        callback({
            nombre: pokemon.name,
            peso: pokemon.weight,
            altura: pokemon.height,
            imc: pokemon.weight / pokemon.height
        });
    });
}
