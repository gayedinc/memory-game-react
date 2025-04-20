# 🧩 Memory Game - React

> Kart eşleştirme üzerine kurulu, zaman ve hamle takibi yapabilen, confetti animasyonuyla başarıyı kutlayan modern bir React oyunu!

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript)
![CSS](https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=css3)

## 🔍 Proje Genel Bakış

**Memory Game** projesi, kullanıcıların hafızalarını kullanarak aynı değere sahip kart çiftlerini eşleştirmelerini sağlayan eğlenceli bir oyundur.  
Bu React tabanlı versiyon ile oyun daha modüler, performanslı ve kullanıcı dostu hale getirilmiştir.

![image](https://github.com/user-attachments/assets/131e948d-2da0-470c-9a32-d6c3265bbfb0)

## 🚀 Temel Özellikler

### 🔄 Kartların Karıştırılması & Dinamik Render
- Oyun başladığında tüm kartlar `shuffle()` fonksiyonu ile karıştırılır.
- Kartlar iki kez eklenerek eşleştirme yapılabilecek hale getirilir.
- Her yeni oyunda farklı kart dizilimi oluşur.

### 🧠 Seçim ve Eşleşme Kontrolü
- Oyuncunun seçtiği kartlar `selectedCards` state'inde tutulur.
- Eşleşen kartlar `matchedCards` dizisine eklenir.
- Her iki kart seçildiğinde eşleşme kontrolü yapılır ve görsel olarak kartlar açılır/kapanır.

![image](https://github.com/user-attachments/assets/4e6f84cb-5a9a-4d40-9a02-daa1b6897a5f)

### ⏱️ Zaman & Hamle Takibi
- Oyun başladığında otomatik olarak **zamanlayıcı (timer)** çalışır.
- Geçen süre formatlanarak (MM:SS) ekranda gösterilir.
- Her iki kart seçimi bir hamle olarak sayılır ve **hamle sayısı (moves)** artırılır.

![image](https://github.com/user-attachments/assets/50f396f7-2e95-45d6-92c5-e73efc6e46d5)

### 🧩 Oyun Bitişi ve Modal Yönetimi
- Tüm kartlar eşleştirildiğinde oyun otomatik olarak sona erer ve “Game Over” mesajı gösterilir.
- Kullanıcıya modal üzerinden 3 seçenek sunulur:
  - **Restart:** Oyunu sıfırlar.
  - **New Game:** Yeni kart dizilimi ile oyun başlatır.
  - **Resume Game:** Mevcut oyuna kaldığı yerden devam eder.

![image](https://github.com/user-attachments/assets/1bb62bfb-c1cc-47e2-9f13-3f6df50d27f2)

### 🎉 Confetti Kutlama Animasyonu
- Tüm kartlar eşleştirilip oyun bittiğinde, ekranda **confetti yağmuru** başlar!
- `react-confetti` kütüphanesi kullanılarak başarı animasyonu gösterilir.
- Bu animasyon, kullanıcı “New Game” ya da “Restart” yapana kadar devam eder.

![image](https://github.com/user-attachments/assets/e8b4706c-0b4e-472f-b9ec-6a0d6c655946)

### 🖥️ Responsive & Mobil Uyumlu Tasarım
- Tüm ekran boyutlarına duyarlı olacak şekilde tasarlanmıştır.
- Hem mobil hem masaüstü kullanıcılar için ideal bir oyun deneyimi sunar.

### 🔐 Modal Dışı Tıklamada Kapanma
- Modal açıkken ekranın dışına tıklandığında modal pencere otomatik olarak kapanır.
- Kullanıcı deneyimini iyileştiren bu özellik `useRef` ve `mousedown` event listener ile yönetilir.

## 💡 Geliştirme Amaçlarım

- React'in temel yapılarını kullanarak modüler ve sürdürülebilir bir oyun oluşturmak
- Kullanıcının başarılarını anında yansıtan görsel geri bildirimler sunmak
- Zaman ve hamle takibi ile oyuncuya performansını değerlendirme imkânı tanımak
- Responsive tasarım ile tüm cihazlarda erişilebilirliği sağlamak
- Oyun deneyimini animasyon ve kutlama öğeleri ile zenginleştirmek

## 🛠️ Kullanılan Teknolojiler

- React  
- JavaScript (ES6+)  
- CSS3  
- react-confetti  
- useRef + useEffect (modal kontrolü)  
- Responsive Design (Flexbox, Media Queries)

🟢 **Canlı Demo:**  
🔗 [https://memory-game-react-khaki.vercel.app](https://memory-game-react-khaki.vercel.app)

## 📂 Proje Yapısı

```bash
📁 public  
📁 src  
 ┣ 📁 assets                # Kart ikonları ve stil dosyaları  
 ┣ 📄 App.jsx              # Tüm oyunun mantığını yöneten ana bileşen  
 ┣ 📄 index.html           # Ana HTML dosyası  
 ┣ 📄 main.jsx             # React DOM entry point  
📄 package.json             # Bağımlılıklar ve script’ler  
📄 README.md                # Proje açıklama dokümantasyonu  
