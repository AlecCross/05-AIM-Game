//Обработка кнопки "Начасть игру" получить её из dom дерева
//Добавив id для кнопки "start"
const startBtn = document.querySelector('#start')
//Для работы с экранами собираем их все вместе
const screens = document.querySelectorAll('.screen')

startBtn.addEventListener('click', (event) => {
    //Если нажать на "Начать игру"
    //в адресной строке http://127.0.0.1:5500/index.html
    //Добавится # :     http://127.0.0.1:5500/index.html#
    //Чтобы не отображать # используем preventDefault
    //Отменим поведение браузера по умолчанию
    event.preventDefault()
    //Чтобы показать следующий экран
    screens[0].classList.add('up')
})