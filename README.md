# 🎮 Memory Game - React

Bu projede bir eşleştirme oyunu geliştirdim. Oyunun amacı aynı değere sahip kart çiftlerini eşleştirerek oyunu tamamlamak. React kullanarak daha modüler, performanslı ve kullanıcı dostu bir yapı elde ettim. Aşağıda projede kullandığım bazı önemli özellikleri ve teknikleri bulabilirsiniz:

## Kullanılan Teknikler ve Özellikler

- **Kartların Karıştırılması ve Dinamik Render:**  
  Oyun başlangıcında kartlar **shuffle** fonksiyonu ile karıştırılıyor ve React'ın bileşen mantığıyla ekrana dinamik olarak yerleştiriliyor. Bu her oyun başlangıcında farklı bir düzen sunarak oyunun eğlenceli kalmasını sağlıyor.

- **State Yönetimi ile Seçim ve Eşleşme Kontrolü:**  
  - **Seçim Yönetimi:** Kullanıcıların seçtiği iki kart `selectedCards` state'inde saklanıyor. Kartlar eşleştiğinde `matchedCards` state'ine ekleniyor.  
  - **Eşleşme Kontrolü:** Seçilen iki kartın değerleri kontrol edilerek eşleşme olup olmadığı dinamik olarak belirleniyor.

- **Zaman ve Hamle Takibi:**  
  - **Zamanlayıcı:** Oyun başlangıcında aktif hale gelen bir zamanlayıcıyla kullanıcının oyun süresi ölçülüyor. Bu süre her yeni oyunda sıfırlanıyor ve kullanıcıya gösteriliyor.  
  - **Hamle Sayacı:** Kullanıcının yaptığı her iki seçim bir hamle olarak sayılıyor ve toplam hamle sayısı gerçek zamanlı olarak güncelleniyor.

- **Oyun Bitişi ve Modal Yönetimi:**  
  Tüm kartlar eşleştiğinde oyun otomatik olarak bitiyor ve "Game Over" bildirimi gösteriliyor.  
  Oyunda **"Restart"** veya **"New Game"** seçenekleri; mobil versiyonda yer alan menüden de modal penceresi açılarak "Restart", "New Game" ve "Resume" seçenekleri sunuluyor.

- **Responsive Tasarım:**  
  Mobil öncelikli bir yaklaşımla oyunun tüm cihazlarda kullanışlı ve modern görünmesini sağladım.

## Hedefler

Bu projede React'in temel özelliklerini kullanarak modüler, performanslı ve etkileşimli bir oyun deneyimi yaratmayı, kullanıcıların zaman ve hamle takibi yaparak eğlenceli bir şekilde kartları eşleştirmelerini sağlamayı hedefledim.
