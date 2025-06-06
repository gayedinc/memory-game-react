import { useState } from 'react'
import Header from './components/Header';
import Footer from './components/Footer';
import MemoryChart from './components/MemoryChart';
import ModalPage from './components/ModalPage';
import Confetti from 'react-confetti';
import { useWindowSize } from 'react-use';

let timerId;
let firstTime = false;

let datas = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18'];

function App() {
  const [selectedCards, setSelectedCards] = useState([]); // 2 seçimi tutan dizi statei
  const [matchedCards, setMatchedCards] = useState([]); // eşleşen kartların olduğu dizi statei
  const [moves, setMoves] = useState(0); // 2 seçim hareketlerini tutan state
  const [time, setTime] = useState(0); // sayfa yüklendiğinden itibaren geçirilen zamanı tutan state
  const [gameOver, setGameOver] = useState(false); // oyunun bitme durumunu kontrol eden state
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal kontrolü için state
  const [cards, setCards] = useState(() => shuffleCards(datas));

  const { width, height } = useWindowSize();

  // sayıların karıştırılması için oluşturuklan fonksiyon
  function shuffleCards(datas) {
    const shuffled = datas.concat(datas).sort(() => Math.random() - 0.5);
    return shuffled.map(value => ({
      id: crypto.randomUUID(),
      value,
    }));
  }

  function handleOpenModal() {
    setIsModalOpen(true); // Modalı aç
  }

  function handleCloseModal() {
    setIsModalOpen(false); // Modalı kapat
  }

  // restart ve new game butonları için oluşturulan fonksiyon
  function handleRestart() {
    clearInterval(timerId); // time durduruldu
    setCards(shuffleCards(datas)); // sayıların yeniden karıştırılması için
    setSelectedCards([]); // seçilen kartların dizisi boşaltılsın
    setMatchedCards([]); // eşleşen kartların dizisi boşaltılsın
    setMoves(0); // moves sıfırlansın
    setTime(0); // zaman sıfırlansın
    setGameOver(false); // game over hali false halde kalsın
    setIsModalOpen(false); // modal penceresi false halde kalsın
    timer(); // ve time yeniden başlatıldı
  }

  // time için fonksiyon
  function timer() {
    timerId = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000)
  }

  // timer fonksiyonunun sadece bir kez çalıştırılması için oluşturulan fonksiyon
  if (!firstTime) { // firsTime başta false olduğunda burada true döner ve kod bloğu çalışır
    timer(); // zamanlayıcı başlatılır
    firstTime = true; // firsTime değişkeni true yapılır böylece zamanlayıcı bir kez çalışır
  }

  function handleMoves() {
    setMoves(moves + 1); // her bir hareketin üzerine birer birer ekleyerek artar
  }

  function endGame() {
    setGameOver(true); // gameover olma durumu true olur
    clearInterval(timerId); // zamanlayıcı durdurulur
  }

  // handleClick bir karta tıklandığı zaman çalışır
  function handleClick(value) { // value parametresi her bir kartın id değerini temsil eder
    let newSelectedCards = []; // seçili kartların güncel durumunu tutacak bir dizi

    if (selectedCards.includes(value)) { // eğer tıklanan kart zaten seçilen kartlar arasında varsa
      newSelectedCards = selectedCards.filter(x => x !== value); // bu kart selectedCards dizisinden çıkartılır ve güncel diziye atanır
    } else { // eğer tıklanan kart seçili değilse 

      if (selectedCards.length >= 2) { // eğer halihazırda 2 kart seçildiyse
        newSelectedCards = [value]; // yeni seçim (value) yapılır ve yeni güncel diziye atanır
      }
      else { // eğer seçilen kart 2'den azsa
        newSelectedCards = [...selectedCards, value]; // tıklanan kart mevcut seçimlere eklenir

        if (newSelectedCards.length === 2) { // 2 kart seçilmişse
          handleMoves(); // moves bir arttırılması için fonksiyon çağrılır
          setTimeout(() => { // bir saniye sonra seçim kaldırılır
            setSelectedCards([]);
          }, 1000);
        }
      }
    }
    setSelectedCards(newSelectedCards); // yeni seçili kartları kaydeder ve statei günceller

    // Eşleşme kontrolü
    if (
      newSelectedCards.length === 2 &&
      cards.find(card => card.id === newSelectedCards[0])?.value ===
      cards.find(card => card.id === newSelectedCards[1])?.value
    ) {
      setMatchedCards(prev => {
        const updatedMatchedCards = [...prev, ...newSelectedCards];

        // Tüm kartlar eşleşmişse, endGame çağrılır
        if (updatedMatchedCards.length === cards.length) {
          endGame();
        }

        return updatedMatchedCards; // güncellenmiş eşlenmiş kartlar listesini döndürür
      });
    }
  }

  // saniyeyi dakika ve saniye formatına çevirip her birinin 2 basamaklı şekilde gösterilmesi için
  function convertSecondsToTime(seconds) {
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    const formattedMinutes = minutes.toString().padStart(2, "0"); // minutes değişkenini 2 haneli stringe dönüştürüyoruz ve eğer 2 haneli değilse 0 ekliyoruz
    const formattedSeconds = secs.toString().padStart(2, "0"); // secs değişkenini 2 haneli stringe dönüştürüyoruz ve eğer 2 haneli değilse 0 ekliyoruz

    return `${formattedMinutes}:${formattedSeconds}`; // zamanı formatlayarak döndürüyoruz
  }

  return (
    <>
      <div className="container">
        {gameOver && (
          <Confetti width={width} height={height} />
        )}
        <Header onOpenModal={handleOpenModal}
          onRestartClick={handleRestart} />
        <MemoryChart
          cards={cards}
          selectedCards={selectedCards}
          matchedCards={matchedCards}
          onHandleClick={handleClick} />

        <Footer time={convertSecondsToTime(time)}
          moves={moves}
          gameOver={gameOver} />

        {isModalOpen && (
          <ModalPage
            onRestartClick={handleRestart}
            onCloseModal={handleCloseModal} />
        )}
      </div>
    </>
  );
}

export default App;