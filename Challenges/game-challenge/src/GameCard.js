function GameCard (props) {
  return (
    <div className='bg-light border p-4 m-2'>
      <h4>{props.name}</h4>
      <p>{props.rating}</p>
      <p>{props.category}</p>
    </div>
  )
}

export default GameCard
