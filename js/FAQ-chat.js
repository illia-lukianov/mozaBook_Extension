const FAQ_DATA = [
    { question: "Для чого потрібен обліковий запис mozaWeb?", url: "https://www.mozaweb.com/uk/FAQ/list?category=REGISTRATION_LOGIN&question=19" },
    { question: "Як я можу увійти в свій обліковий запис mozaWeb?", url: "https://www.mozaweb.com/uk/FAQ/list?category=REGISTRATION_LOGIN&question=16" },
    { question: "У мене є кілька облікових записів користувачів, і я хотів би їх об'єднати", url: "https://www.mozaweb.com/uk/FAQ/list?category=REGISTRATION_LOGIN&question=116" },
    { question: "Як я можу перемкнути статус облікового запису на \"Вчитель\"?", url: "https://www.mozaweb.com/uk/FAQ/list?category=REGISTRATION_LOGIN&question=130" },
    { question: "Як я можу змінити свій пароль та інші дані мого облікового запису mozaWeb?", url: "https://www.mozaweb.com/uk/FAQ/list?category=REGISTRATION_LOGIN&question=18" },
    { question: "Коли я можу видалити свій обліковий запис користувача?", url: "https://www.mozaweb.com/uk/FAQ/list?category=REGISTRATION_LOGIN&question=68" },
    { question: "Я не можу використовувати mozaBook, навіть якщо у мене є активаційний код Mozaik Teacher/Mozaik Student.", url: "https://www.mozaweb.com/uk/FAQ/list?category=FIRST_STEPS&question=114" },
    { question: "Як дивитися 3D-сцени за допомогою гарнітури VR?", url: "https://www.mozaweb.com/uk/FAQ/list?category=FIRST_STEPS&question=57" },
    { question: "Чому я не можу відкрити 3D-сцени?", url: "https://www.mozaweb.com/uk/FAQ/list?category=FIRST_STEPS&question=29" },
    { question: "Для чого потрібно активувати цифрові книги?", url: "https://www.mozaweb.com/uk/FAQ/list?category=FIRST_STEPS&question=31" },
    { question: "Що робити, якщо я вже використав активаційний код, але хотів би використовувати його з іншим обліковим записом.", url: "https://www.mozaweb.com/uk/FAQ/list?category=FIRST_STEPS&question=80" },
    { question: "Як можна дозволити файли cookie у моєму браузері?", url: "https://www.mozaweb.com/uk/FAQ/list?category=FIRST_STEPS&question=78" },
    { question: "Чи можна поділитися з іншими навчальним контентом, на mozaWeb або в mozaBook?", url: "https://www.mozaweb.com/uk/FAQ/list?category=FIRST_STEPS&question=76" },
    { question: "Як розпочати відеоконференцію на mozaWeb?", url: "https://www.mozaweb.com/uk/FAQ/list?category=FIRST_STEPS&question=156" },
    { question: "Як видалити посилання на відеоконференції?", url: "https://www.mozaweb.com/uk/FAQ/list?category=FIRST_STEPS&question=160" },
    { question: "Що робити, якщо бачу повідомлення \"Під час обробки сторінки сталася помилка\"?", url: "https://www.mozaweb.com/uk/FAQ/list?category=FIRST_STEPS&question=176" },
    { question: "Використовуйте браузер mozaWeb!", url: "https://www.mozaweb.com/uk/FAQ/list?category=FIRST_STEPS&question=100" },
    { question: "Як я можу продовжувати використовувати Flash-вміст?", url: "https://www.mozaweb.com/uk/FAQ/list?category=FIRST_STEPS&question=55" },
    { question: "Де я можу знайти придбану мною цифрову книгу?", url: "https://www.mozaweb.com/uk/FAQ/list?category=DIGITAL_BOOKS&question=40" },
    { question: "Як я можу активувати мої цифрові книги?", url: "https://www.mozaweb.com/uk/FAQ/list?category=DIGITAL_BOOKS&question=39" },
    { question: "Я отримую повідомлення про помилку при спробі активувати активаційний код. Що мені робити?", url: "https://www.mozaweb.com/uk/FAQ/list?category=DIGITAL_BOOKS&question=86" },
    { question: "Який додатковий вміст можна знайти в електронних виданнях?", url: "https://www.mozaweb.com/uk/FAQ/list?category=DIGITAL_BOOKS&question=30" },
    { question: "Як можна завантажити офлайн-версію своїх підручників у mozaBook?", url: "https://www.mozaweb.com/uk/FAQ/list?category=DIGITAL_BOOKS&question=63" },
    { question: "Що робити, якщо я вже використав активаційний код, але хотів би використовувати його з іншим обліковим записом.", url: "https://www.mozaweb.com/uk/FAQ/list?category=DIGITAL_BOOKS&question=80" },
    { question: "Який активаційний код у мене є? Як дізнатися, до якого типу цифрового вмісту дає мені доступ мій активаційний код?", url: "https://www.mozaweb.com/uk/FAQ/list?category=DIGITAL_BOOKS&question=92" },
    { question: "Чому я отримую повідомлення про те, що 3D-сцени не можна використовувати на інтерактивних панелях чи дошках?", url: "https://www.mozaweb.com/uk/FAQ/list?category=DIGITAL_BOOKS&question=146" },
    { question: "Як я можу поновити доступ до Mozaik?", url: "https://www.mozaweb.com/uk/FAQ/list?category=DIGITAL_BOOKS&question=290" },
    { question: "Як я можу випробувати програму mozaBook?", url: "https://www.mozaweb.com/uk/FAQ/list?category=SOFTWARE_DOWNLOAD&question=22" },
    { question: "Чи потрібен мені Mozaik TEACHER або mozaBook CLASSROOM як вчителю?", url: "https://www.mozaweb.com/uk/FAQ/list?category=SOFTWARE_DOWNLOAD&question=33" },
    { question: "У чому різниця між активацією облікового запису користувача та активацією пристроїв?", url: "https://www.mozaweb.com/uk/FAQ/list?category=SOFTWARE_DOWNLOAD&question=140" },
    { question: "Як можна придбати програму mozaBook?", url: "https://www.mozaweb.com/uk/FAQ/list?category=SOFTWARE_DOWNLOAD&question=37" },
    { question: "Що таке Активаційний пакунок?", url: "https://www.mozaweb.com/uk/FAQ/list?category=SOFTWARE_DOWNLOAD&question=65" },
    { question: "Де я можу активувати придбаний активаційний код mozaBook?", url: "https://www.mozaweb.com/uk/FAQ/list?category=SOFTWARE_DOWNLOAD&question=26" },
    { question: "Що таке локальний користувач і як він пов'язаний з моїм обліковим записом mozaWeb?", url: "https://www.mozaweb.com/uk/FAQ/list?category=SOFTWARE_DOWNLOAD&question=27" },
    { question: "Чи можу я використовувати mozaBook на комп'ютері Apple MacOS?", url: "https://www.mozaweb.com/uk/FAQ/list?category=SOFTWARE_DOWNLOAD&question=49" },
    { question: "Чи можна встановити mozaBook на комп'ютери з Linux?", url: "https://www.mozaweb.com/uk/FAQ/list?category=SOFTWARE_DOWNLOAD&question=278" },
    { question: "Як використовувати додаток mozaBook на інтерактивній дошці Android?", url: "https://www.mozaweb.com/uk/FAQ/list?category=SOFTWARE_DOWNLOAD&question=264" },
    { question: "Як я можу перенести свою активацію mozaBook на інший комп'ютер?", url: "https://www.mozaweb.com/uk/FAQ/list?category=SOFTWARE_DOWNLOAD&question=53" },
    { question: "Системні вимоги", url: "https://www.mozaweb.com/uk/FAQ/list?category=SOFTWARE_DOWNLOAD&question=48" },
    { question: "Як я можу запустити mozaBook у віконному режимі?", url: "https://www.mozaweb.com/uk/FAQ/list?category=SOFTWARE_DOWNLOAD&question=82" },
    { question: "Розпізнавання рукописного тексту в mozaBook", url: "https://www.mozaweb.com/uk/FAQ/list?category=SOFTWARE_DOWNLOAD&question=144" },
    { question: "Як я можу відкрити вміст GeoGebra в mozaBook?", url: "https://www.mozaweb.com/uk/FAQ/list?category=SOFTWARE_DOWNLOAD&question=286" },
    { question: "Чому mozaBook не може під'єднатися до сервера mozaWeb?", url: "https://www.mozaweb.com/uk/FAQ/list?category=SOFTWARE_DOWNLOAD&question=128" },
    { question: "Після запуску mozaBook, я отримую повідомлення про помилку щодо налаштувань проксі", url: "https://www.mozaweb.com/uk/FAQ/list?category=SOFTWARE_DOWNLOAD&question=126" },
    { question: "Як я можу відправити відгук і звіт про помилку в mozaBook?", url: "https://www.mozaweb.com/uk/FAQ/list?category=SOFTWARE_DOWNLOAD&question=51" },
    { question: "Як надіслати відгук з mozaBook, коли сервер недоступний?", url: "https://www.mozaweb.com/uk/FAQ/list?category=SOFTWARE_DOWNLOAD&question=134" },
    { question: "Як встановити mozaBook від імені адміністратора? Чи доступна прихована інсталяція?", url: "https://www.mozaweb.com/uk/FAQ/list?category=SOFTWARE_DOWNLOAD&question=164" },
    { question: "Як завантажити в mozaBook офлайн версію 3D-сцен?", url: "https://www.mozaweb.com/uk/FAQ/list?category=SOFTWARE_DOWNLOAD&question=67" },
];

const refsFAQ = {
  suggestionsList: document.querySelector('.suggestions-list'),
  queryInput: document.querySelector('.mozabook-query-input'),
  chatForm: document.querySelector('.mozabook-search-form'),
  chatContainer: document.querySelector('.mozabook-chat-messages'),
  clearButton: document.querySelector('#chat-clear-recent')
};

const CHAT_HISTORY_KEY = 'mozabookChatHistory';

function saveChatHistory(history) {
  localStorage.setItem(CHAT_HISTORY_KEY, JSON.stringify(history));
}

function loadChatHistory() {
  const storedHistory = localStorage.getItem(CHAT_HISTORY_KEY);
  return storedHistory ? JSON.parse(storedHistory) : [];
}

function addMessageToChat(author, content) {
  const message = document.createElement('div');
  message.classList.add('message', author);

  let messageData = { author: author };

  if (typeof content === 'string') {
    message.textContent = content;
    messageData.text = content;
  } else if (content instanceof Element) {
    message.appendChild(content);
    messageData.html = content.outerHTML;
  }

  refsFAQ.chatContainer.appendChild(message);

  const currentHistory = loadChatHistory();
  currentHistory.push(messageData);
  saveChatHistory(currentHistory);

  refsFAQ.chatContainer.scrollTop = refsFAQ.chatContainer.scrollHeight;
}

document.addEventListener('DOMContentLoaded', () => {
  const initialHistory = loadChatHistory();
  initialHistory.forEach(msg => {
    const message = document.createElement('div');
    message.classList.add('message', msg.author);
    if (msg.text) {
      message.textContent = msg.text;
    } else if (msg.html) {
      message.innerHTML = msg.html;
    }
    refsFAQ.chatContainer.appendChild(message);
  });
  refsFAQ.chatContainer.scrollTop = refsFAQ.chatContainer.scrollHeight;
});

refsFAQ.queryInput.addEventListener('input', function() {
  const query = this.value.toLowerCase();
  refsFAQ.suggestionsList.innerHTML = '';

  if (query.length < 2) {
    return;
  }

  const matchingQuestions = FAQ_DATA.filter(faq =>
    faq.question.toLowerCase().includes(query)
  );

  if (matchingQuestions.length > 0) {
    matchingQuestions.forEach(faq => {
      const listItem = document.createElement('li');
      listItem.textContent = faq.question;
      listItem.classList.add('suggestion-item');
      listItem.addEventListener('click', () => {
        addMessageToChat('user', faq.question);

        const response = document.createElement('div');
        response.classList.add('message', 'system');
        response.textContent = `Відповідь на ваш запит відкрито в новій вкладці.`;
        refsFAQ.chatContainer.appendChild(response);
        addMessageToChat('system', response.textContent);

        window.open(faq.url, '_blank');
        refsFAQ.queryInput.value = '';
        refsFAQ.suggestionsList.innerHTML = '';

        refsFAQ.chatContainer.scrollTop = refsFAQ.chatContainer.scrollHeight;
      });
      refsFAQ.suggestionsList.appendChild(listItem);
    });
  }
});

refsFAQ.chatForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const query = refsFAQ.queryInput.value.trim();

  if (query !== '') {
    addMessageToChat('user', query);

    const response = document.createElement('div');
    response.textContent = `Відповіді на Ваше запитання не знайдено в FAQ секції, зверніться будь-ласка до нашого AI асистенту. `;
    const link = document.createElement('a');
    link.classList.add('assistant-button');
    link.href = 'https://mozabookextension.zapier.app/';
    link.target = '_blank';
    link.textContent = 'Zapier bot';
    response.appendChild(link);

    addMessageToChat('assistant', response);

    refsFAQ.queryInput.value = '';
    refsFAQ.suggestionsList.innerHTML = '';
    refsFAQ.chatContainer.scrollTop = refsFAQ.chatContainer.scrollHeight;
  }
});

refsFAQ.clearButton.addEventListener('click', () => {
    refsFAQ.chatContainer.innerHTML = '';
  localStorage.removeItem(CHAT_HISTORY_KEY);
});