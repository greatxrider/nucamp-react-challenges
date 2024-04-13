// import logo from './logo.svg'
import GameCard from './GameCard'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

const gamesList = [
  {
    id: 0,
    name: 'Scythe',
    rating: null,
    category: 'Fun'
  },
  {
    id: 1,
    name: 'Machi Koro',
    rating: null,
    category: 'Deck Building'
  },
  {
    id: 2,
    name: 'Galaxy Trucker',
    rating: null,
    category: 'Fun'
  }
]

function App () {
  return (
    <div>
      <h1>My Board Games</h1>
      {gamesList.map(game => {
        return (
          <>
            <GameCard
              name={game.name}
              rating={game.rating}
              category={game.category}
            />
          </>
        )
      })}
    </div>
  )
}

export default App
