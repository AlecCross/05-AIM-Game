//Обработка кнопки "Начасть игру" получить её из dom дерева
//Добавив id для кнопки "start"
const startBtn = document.querySelector('#start')
//Для работы с экранами собираем их все вместе
const screens = document.querySelectorAll('.screen')
//Список выбора времени 10 20 30
const timeBtn = document.querySelector('#time-list')
let time = 0
const timeEl = document.querySelector('#time')

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

timeBtn.addEventListener('click', (event) => {
    //слушатель на весь блок списка, но нам нужно слушать каждый эл отдельно
    //Делегирование событий
    if(event.target.classList.contains('time-btn')) {
        
        console.log(event.target.getAttribute('data-time'))
        //Теперь нужно определить какую кнопку нажал и сколько времени нужно передать в игру
        //Создадим time = 0 и в html добавим атрибуты к 10 20 30 с соответственными значениями
        //data-time="10"...

        time = parseInt(event.target.getAttribute('data-time'))
        startGame()
    }
})

function startGame() {   
    screens[1].classList.add('up')
    //Каждые 1000 милисек (1сек) вызывает переданную в парам фунцию
    setInterval(decreaseTime, 1000)

    //Мы вбрали определенное время и его нужно передать в игру
    setTime(time)
}

function decreaseTime(){
    if(time===0){
        finishGame()
    }
    else {
            let current = --time
        if(current < 10){
            current = `0${current}`
        }
        setTime(current)
    }
    
}

function setTime(value){
    timeEl.innerHTML = `00:${value}`
}


function finishGame(){
    console.log('finishGame')
}