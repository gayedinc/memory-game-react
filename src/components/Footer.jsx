// footer componenti
export default function Footer({ time, moves, gameOver }) {
  return (
    <>
      <div className="footer">
        <h1>{gameOver && "Game Over"}</h1>
        <div className="footer-content">
          <div className="time">
            <h2>Time</h2>
            <span>{time}</span>
          </div>
          <div className="moves">
            <h2>Moves</h2>
            <span>{moves}</span>
          </div>
        </div>
      </div>
    </>
  )
}