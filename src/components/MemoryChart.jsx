// sayıların oluştuğu ve seçilme eşleşme durumlarının kontrol edildiği component
export default function MemoryChart({ cards, matchedCards, selectedCards, onHandleClick }) {
  return (
    <div className="game">
      {cards.map(x => {
        // bir kartın şu anda eşleşmiş ya da seçilmiş olup olmadığını includes ile arıyoruz
        const isSelected = selectedCards.includes(x.id);
        const isMatched = matchedCards.includes(x.id);

        return (
          <button
            key={x.id}
            className={`game-item ${isMatched ? "game-item-same" : isSelected ? "game-item-active" : ""}`}
            onClick={isMatched ? null : () => onHandleClick(x.id)}>
            {x.value}
          </button>
        );
      })}
    </div>
  );
}