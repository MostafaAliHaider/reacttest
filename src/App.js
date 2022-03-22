import { useState } from "react"
import Pokemons from "./components/Pokemons"


function App() {
const [pokemons, setPokemons] = useState ([])

  const getPokemons = async () => {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=25")
    const data = await response.json()
    console.log(data)
    setPokemons(data?.results)
  }

  return (
    <main>
        <Pokemons pokemons={pokemons}/>
        <button type="button" onClick={getPokemons}>Hent data</button>
    </main>
          
  );
}

export default App;
