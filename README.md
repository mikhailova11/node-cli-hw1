# node-cli-hw1

Крок 1

- Ініціалізується npm в проекті (npm init)
- В корені проекту створи файл index.js

  Скрін коду: https://ibb.co/cN9yyWQ

- Постав пакет nodemon як залежність nodemon як залежність розробки (devDependencies) (npm install --save-dev nodemon)
- В файлі package.json додай "скрипти" для запуску index.js

  1. Скрипт start який запускає index.js с помощью node
  2. Скрипт dev який запускає index.js за допомогою nodemon

  Скрін коду: https://ibb.co/RYPjdCj

Крок 5

Запусти команди в терміналі і зроби окремий скріншот результату виконання кожної команди.

# Отримуємо і виводимо весь список контактів у вигляді таблиці (console.table)

node index.js --action="list"

Скрін коду: https://ibb.co/x6Tf9Lj

# Отримуємо контакт по id

node index.js --action="get" --id=5

Скрін коду: https://ibb.co/VYGt1yf

# Добавялем контакт

node index.js --action="add" --name="Mango" --email="mango@gmail.com" --phone="322-22-22"

Скрін коду: https://ibb.co/6y1v58t

# Видаляємо контакт

node index.js --action="remove" --id=3

Скрін коду: https://ibb.co/WK1Md6S
