import Pokemon from "./Pokemon"

const Pokemons = ({pokemons}) => {
    return (
        <section>
            {pokemons?.length > 0 ? pokemons.map((pokemon) => <Pokemon key={pokemon.name} pokemon={pokemon}/>): null }
        </section>
       /*  <div>
            {JSON.stringify(pokemons)}
        </div> */
    )
}
export default Pokemons