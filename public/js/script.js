$( document ).ready(
    setTimeout(adam, 1000),
)

const statusObject = {
    adam: false,
    moscow: false,
    newYork: false
}

function Interval() {
    if (statusObject.adam == true) {
        interval = setInterval(testLog, 1000)
    }
    else if (statusObject.moscow == true) {
        clearInterval(interval)
    }
    else if (statusObject.newYork == true) {

    }
}

function testLog(){
    console.log('test!')
}

function classChanger(id) {
    const activeElement = document.getElementById(id)
    activeElement.setAttribute("class", "active")
}

function retrieveAPIData(api) {
    const list = api.list
    const newArray = []
    for (i = 0; i < list.length; i++)  {
        if (i % 2 == 0) {
            newArray.push(list[i])
        }
    }
    return newArray
}

function displayTime(time) {
    const span = document.createElement('span')
    span.classList.add('timeSpan')
    const spanText = document.createTextNode(time)
    span.appendChild(spanText)
    timeRow.appendChild(span)
}

function displayDate(date, time, index) {
    var weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri"]
    dateArray = date.split('-')
    weekDaysDate = new Date(dateArray[0], (dateArray[1] - 1), dateArray[2])
    weekDay = weekDays[weekDaysDate.getDay()]
    date = date.substring(date.indexOf("-") + 1)
    const span = document.createElement('span')
    span.classList.add('timeSpan')
    const spanText = document.createTextNode(weekDay + '\n' + date)
    console.log(time)
    if (time == 03 || time == 00 || index == 0) {
        span.appendChild(spanText)
    } 
    dateRow.appendChild(span)
}

function displayIcons(icon) {
    const img = document.createElement('img')
    img.classList.add('timeSpan')
    img.setAttribute("src", 'http://openweathermap.org/img/w/' + icon + '.png')
    imageRow.appendChild(img)
}

function displayTopRowData(apiList) {
    const timeRow = document.getElementById('timeRow')
    const imageRow = document.getElementById('imageRow')
    const dateRow = document.getElementById('dateRow')
    timeRow.innerHTML = ""
    imageRow.innerHTML = ""
    dateRow.innerHTML = ""
    let index = 0
    const timeArray = []
    apiList.forEach( e => {
        const DateTimeText = e.dt_txt
        let eDate = DateTimeText.split(' ')[0]
        const eTime = DateTimeText.split(' ')[1].split(':')[0]
        displayTime(eTime)
        displayIcons(e.weather[0].icon)
        displayDate(eDate, eTime, index)
        timeArray.push(eTime)
        index +=1
    })
    chart.data.labels = timeArray
    chart.update()
}

function getTemperatures(apiList) {
    const tempArray = []
    apiList.forEach(e => {
        tempCelsius = Math.round(e.main.temp - 273.15)
        tempArray.push(tempCelsius)
    })
    chart.data.datasets[0].data = tempArray
    chart.update()
}

function adamAjax() {
    classChanger("adamButton")
    $.ajax({
        method: 'GET',
        url: 'http://api.openweathermap.org/data/2.5/forecast?id=2759794&appid=9a7f046e8334b9ccd2878162b35dc767',
        success: function(response) {
            const APIArray = retrieveAPIData(response)
            getTemperatures(APIArray)
            displayTopRowData(APIArray)
        },
        error: function(response) {
            console.log(response)
        }
    })
    console.log('succesAdam!')
}

function moscowAjax() {
    classChanger("moscowButton")
    $.ajax({
        method: 'GET',
        url: 'http://api.openweathermap.org/data/2.5/forecast?id=5601538&appid=9a7f046e8334b9ccd2878162b35dc767',
        success: function(response) {
            const APIArray = retrieveAPIData(response)
            getTemperatures(APIArray)
            displayTopRowData(APIArray)
        },
        error: function(response) {
            console.log(response)
        }
    })
    console.log('succesMoscow!')
}

function newYorkAjax() {
    classChanger("newYorkButton")
    $.ajax({
        method: 'GET',
        url: 'http://api.openweathermap.org/data/2.5/forecast?id=5128581&appid=9a7f046e8334b9ccd2878162b35dc767',
        success: function(response) {
            const APIArray = retrieveAPIData(response)
            getTemperatures(APIArray)
            displayTopRowData(APIArray)
        },
        error: function(response) {
            console.log(response)
        }
    })
}

function adam(){
    statusObject.adam = true
    statusObject.moscow = false
    statusObject.newYork = false
        /* adamAjax() */
    Interval()
    console.log('hoiA!')
}

function moscow(){
    statusObject.adam = false
    statusObject.moscow = true
    statusObject.newYork = false
   /*  moscowAjax() */
   Interval()
    console.log('hoiM!')
}

function newYork(){
    statusObject.adam = false
    statusObject.moscow = false
    statusObject.newYork = true
    /* newYorkAjax() */
    Interval()
    console.log('hoiNY!')
}