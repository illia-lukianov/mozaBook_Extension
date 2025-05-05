const NAVIGATION_LINKS = {
    'Головна': 'https://www.mozaweb.com/uk/',
    'Медіатека': 'https://www.mozaweb.com/uk/lexikon.php?cmd=getlist&let=3D',
    '3d сцени': 'https://www.mozaweb.com/uk/lexikon.php?cmd=getlist&let=3D',
    'Відео': 'https://www.mozaweb.com/uk/lexikon.php?cmd=getlist&let=VIDEO&active_menu=video',
    'Інструменти': 'https://www.mozaweb.com/uk/tools.php?cmd=list',
    'Продукти': 'https://www.mozaweb.com/uk/shop.php?cmd=software_list',
    'Ціни': 'https://www.mozaweb.com/uk/Shop/main',
    'Реєстрація': 'https://www.mozaweb.com/uk/signup',
    'Вхід': 'https://www.mozaweb.com/uk/index.php',
    'Підручники': 'https://www.mozaweb.com/uk/course.php?cmd=book_list_inner&spec=subjects',
    'Електронні робочі зошити': 'https://ua.mozaweb.com/uk/MyLearn/exerciseBooks?view_type=shared',
    'Навчальні матеріали': 'https://ua.mozaweb.com/uk/lexikon.php?cmd=getlist&let=MICROCURRICULUM&active_menu=elesson',
    'Навігація по сайту': 'https://www.mozaweb.com/uk/',
    'Меню': 'https://www.mozaweb.com/uk/',
    'Допомога': 'https://www.mozaweb.com/uk/Portal/help',
    'Підтримка': 'https://www.mozaweb.com/uk/Portal/help',
    'Про нас': 'https://www.mozaweb.com/uk/index.php'
};

const refsNavigation = {
    navLinksContainer: document.getElementById('nav-links-container'),
    cleanHistoryButton: document.getElementById('clear-recent'),
};

const icons = {
    'головна': '🏠',
    'медіатека': '🎬',
    '3d сцени': '🧩',
    'відео': '📹',
    'інструменти': '🔧',
    'продукти': '📦',
    'ціни': '💰',
    'реєстрація': '📝',
    'вхід': '🔑',
    'підручники': '📚',
    'електронні робочі зошити': '📓',
    'навчальні матеріали': '📖',
    'навігація по сайту': '🧭',
    'меню': '📋',
    'допомога': '❓',
    'підтримка': '🆘',
    'про нас': 'ℹ️'
};

function renderComponent() {
    refsNavigation.navLinksContainer.innerHTML = '';
    const dataFromStorage = localStorage.getItem('navHistory');
    const navHistory = JSON.parse(dataFromStorage) || {};

    const recentLinks = Object.entries(navHistory).sort(([, a], [, b]) => new Date(b) - new Date(a));
    const allLinks = Object.entries(NAVIGATION_LINKS);

    if (recentLinks.length > 0) {
        const recentTitle = document.createElement('h3');
        recentTitle.textContent = 'Нещодавні';
        refsNavigation.navLinksContainer.appendChild(recentTitle);

        recentLinks.forEach(([name, url]) => {
            createNavLink(name, url, true);
        });

        const separator = document.createElement('hr');
        refsNavigation.navLinksContainer.appendChild(separator);
    }

    allLinks.forEach(([name, url]) => {
        if (!navHistory[name]) {
            createNavLink(name, url, false);
        }
    });
}

function createNavLink(name, url, isRecent) {
    const link = document.createElement('a');
    link.className = isRecent ? 'mozabook-nav-link recent' : 'mozabook-nav-link';
    link.href = '#';
    link.dataset.name = name;
    link.dataset.href = url; 
    const icon = icons[name.toLowerCase()] || '🔗';
    const iconSpan = document.createElement('span');
    iconSpan.className = 'nav-icon';
    iconSpan.textContent = icon;
    link.appendChild(iconSpan);
    const textSpan = document.createElement('span');
    textSpan.textContent = name;
    link.appendChild(textSpan);
    refsNavigation.navLinksContainer.appendChild(link);
}

refsNavigation.navLinksContainer.addEventListener('click', (event) => {
    if (event.target.classList.contains('mozabook-nav-link')) {
        const clickedName = event.target.dataset.name;
        const clickedHref = event.target.dataset.href;
        const dataFromStorage = localStorage.getItem('navHistory');
        const navHistory = JSON.parse(dataFromStorage) || {};

        navHistory[clickedName] = new Date().toISOString();
        localStorage.setItem('navHistory', JSON.stringify(navHistory));
        event.target.classList.add('recent');
        window.open(clickedHref);
        renderComponent();
    }
});

refsNavigation.cleanHistoryButton.addEventListener('click', () => {
    localStorage.removeItem('navHistory');
    renderComponent();
});

renderComponent();