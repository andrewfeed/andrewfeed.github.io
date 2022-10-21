elementsToTranslate = document.querySelectorAll('[translation-key]')
dictionary = {
    'birth_place': {
        'ru': 'Место рождения: Россия 🇷🇺',
        'en': 'Place of Birth: Russia 🇷🇺'
    },
    'current_location': {
        'ru': 'Текущее местоположение: Грузия 🇬🇪',
        'en': 'Current location: Georgia 🇬🇪'
    },
    'languages': {
        'ru': 'Знание языков: Русский 🇷🇺, Английский 🇬🇧 (На уровне чтения документации)',
        'en': 'Languages: Russian 🇷🇺, English 🇬🇧 (At reading documentation level)'
    },
    'algo': {
        'ru': 'Знание основных алгоритмов и структур данных',
        'en': 'Knowledge of basic algorithms and data structures'
    },
    'oop': {
        'ru': 'Общее знание OOP',
        'en': 'General knowledge of OOP'
    },
    'solid': {
        'ru': 'Общее знание SOLID',
        'en': 'General knowledge of SOLID'
    },
    'slientserver': {
        'ru': 'Опыт написания клиент-серверных приложений',
        'en': 'Experience in writing client-server applications'
    },
    'neuralnetworks': {
        'ru': 'Опыт работы с нейросетями',
        'en': 'Experience with neural networks'
    },
    'multithreading': {
        'ru': 'Умение работать с многопоточностью',
        'en': 'Ability to work with multithreading'
    },
    'git': {
        'ru': 'Умение работать с Git',
        'en': 'Ability to work with Git'
    },
    'testing': {
        'ru': 'Умение работать с технологиями тестирования',
        'en': 'Ability to work with testing technologies'
    },
    'education': {
        'ru': 'Education: Vyatka State University, Fundamental Informatics and IT, Bachelor\'s degree (Фундаментальная информатика и информационные технологии 1.02.04.02)',
        'en': 'Education: Vyatka State University, Fundamental Informatics and IT, Bachelor\'s degree (Фундаментальная информатика и информационные технологии 1.02.04.02)'
    },
    'stack': {
        'ru': 'Имел дело со следующими технологиями:',
        'en': 'Worked with the following technologies:'
    },
    'portfolio': {
        'ru': 'Результаты моей деятельности',
        'en': 'Results of my activity'
    },
    'ray_shard': {
        'ru': 'Игра создана без глобального использования стороннего кода и ассетов. Была разработана и выложена в общий доступ летом 2021 года. Длительность разработки: 3 месяца.',
        'en': 'The game was created without the global use of third-party code and assets. It was developed and made available to the public in the summer of 2021. Development time: 3 months.'
    },
    'afk_bot': {
        'ru': 'AFK бот предназначенный для поднятия показателей учётных записей (открытия доступа к рейтинговым матчам) в игре Dota 2. Обладал большим количеством режимов работы и дополнительных функций. Являлся коммерческим программным обеспечением. Функционировал и получал обновления на протяжении нескольких лет, на данный момент не актуален.',
        'en': 'AFK bot is designed to improve account performance (opening access to ranked matches) in the Dota 2 game. It had a large number of operating modes and additional functions. It was commercial software. Functioned and received updates for several years, at the moment it is not relevant.'
    },
    'anti_ahk': {
        'ru': 'Сборник макросов, позволяющий получать преимущество в игре Dota 2, за счёт быстрого, автоматического нажатия различных комбинаций клавиш. На данный момент является актуальным программным обеспечением и пользуется спросом.',
        'en': 'A collection of macros that allows you to gain an advantage in the Dota 2 game by quickly, automatically pressing various key combinations. At the moment, it is an up-to-date software and is in demand.'
    },
    'dotaunlink': {
        'ru': 'Программа, позволяющая полностью удалить информацию о прошлых авторизациях Steam аккаунтов на ПК. Используется для снятия блокировки по системным данным и манипуляции скрытым рейтингом учётных записей. На данный момент является актуальным программным обеспечением и пользуется спросом.',
        'en': 'A program that allows you to completely delete information about past authorizations of Steam accounts on a PC. Used to unlock system data and manipulate the hidden rating of accounts. At the moment, it is an up-to-date software and is in demand.'
    },
    'd2ma': {
        'ru': 'Программный код, позволяющий определить, насколько матч является подозрительным с точки зрения злоупотребления изменением рейтинга побед посредством использования двух и более учётных записей одним игроком в матче.',
        'en': 'Program code that allows you to determine how suspicious a match is in terms of abuse of changing the win rating through the use of two or more accounts by one player in a match.'
    },
    'abuse_scripts': {
        'ru': 'Программа, позволяющая автоматизировать прокачку платного дополнения Dota Plus. На момент активной программной уязвимости, позволявшей повышать уровень персонажа пользовалась спросом. На данный момент уязвимость исправлена, ПО не актуально.',
        'en': 'A program that allows you to automate the boosting of the paid add-on Dota Plus. At the time of the active software vulnerability, which allowed increasing the level of the character, it was in demand. At the moment, the vulnerability has been fixed, the software is not up to date.'
    },
}

ruButton = document.getElementById('siwtchToRu');
enButton = document.getElementById('siwtchToEn');

function changeLanguage(language) {
    elementsToTranslate.forEach(element => {
        key = element.getAttribute('translation-key')
        element.innerHTML = dictionary[key][language]
    });
}

ruButton.onclick = function () {
    ruButton.classList.add('selected')
    enButton.classList.remove('selected')
    changeLanguage('ru');
};
siwtchToEn.onclick = function () {
    enButton.classList.add('selected')
    ruButton.classList.remove('selected')
    changeLanguage('en');
};

siwtchToEn.onclick()
