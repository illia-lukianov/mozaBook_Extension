# 🧩 MozaBook_Extension

Розширення Chrome для покращеної навігації сайтом https://www.mozaweb.com/uk/, яке містить AI-асистент, FAQ чат і інструменти для вчителів, учнів та авторів контенту.

---

## 📌 Основні можливості

- 🔗 **Навігація по сайту MozaWeb**
- 💬 **FAQ чат-бот з історією повідомлень**
- 🤖 **Інтеграція з Zaiper AI**
- 🌗 **Перемикач теми (світла/темна)**
- 🧠 **Збереження історії навігації (localStorage)**

---

## 🚀 Як встановити

### 🔽 Встановлення з GitHub

1. Завантажте ZIP-архів або клонуй репозиторій:

```bash
git clone https://github.com/illia-lukianov/mozaBook_Extension.git
```

2. Відкрий Chrome і перейдіть до:

```
chrome://extensions/
```

3. Увімкніть **Режим розробника** (Developer Mode)

4. Натисніть кнопку `Load unpacked` і виберіть розпаковану папку `mozaBook_Extension`

5. Готово! Іконка з’явиться в панелі розширень 🧩

---

## 🖥️ Структура проєкту

```
mozaBook_Extension/
├── html/               # Папка з головним інтерфейсом
  ├──FAQ-chat.html
  ├──popup.html
  ├──navigation.html
├── css/                # Стили для UI
  ├──styles.css                
├── js/                 # Логіка навігації, перемикача теми та чат-бота
  ├──FAQ-chat.js
  ├──navigation.js
  ├──themeToggle.js
├── manifest.json       # Конфігурація Chrome Extension
```

---

## 📂 Технічна інформація

- **Мови:** HTML, CSS, JavaScript
- **Сховище:** localStorage (без серверної частини)
- **Сумісність:** Google Chrome (підтримка Chromium)

---

## 📄 Ліцензія

MIT License © 2024 [Illia Lukianov]

---

## 📬 Звʼязок

Звʼязатися з автором: [GitHub профіль](https://github.com/illia-lukianov)

