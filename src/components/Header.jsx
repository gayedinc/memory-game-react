// header componenti
export default function Header({ onOpenModal, onRestartClick }) {
  return (
    <div className="header">
      <h2>memory</h2>
      <button className='menuBtn' onClick={onOpenModal}>Menu</button>
      <div className="btn-area">
        <button onClick={onRestartClick} className='restartBtn'>Restart</button>
        <button onClick={onRestartClick} className='newGame'>New Game</button>
      </div>
    </div>
  );
}