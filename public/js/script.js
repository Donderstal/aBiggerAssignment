$( document ).ready(
    adamAjax(),
)

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
    var weekDays = new Array(7)
        weekDays[0] = "Sun"
        weekDays[1] = "Mon"
        weekDays[2] = "Tue"
        weekDays[3] = "Wed"
        weekDays[4] = "Thu"
        weekDays[5] = "Fri"
        weekDays[6] = "Sat"
    dateArray = date.split('-')
    weekDaysDate = new Date(dateArray[0], (dateArray[1] - 1), dateArray[2])
    weekDay = weekDays[weekDaysDate.getDay()]
    date = date.substring(date.indexOf("-") + 1)
    const span = document.createElement('span')
    span.classList.add('timeSpan')
    const spanText = document.createTextNode(weekDay + '\n' + date)
    if (time == 03 || index == 0) {
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
    console.log(chart)
    chart.data.datasets[0].data = tempArray
    chart.update()
}


function adamAjax() {
    classChanger("adamButton")
    $.ajax({
        method: 'GET',
        url: 'http://api.openweathermap.org/data/2.5/forecast?id=2759794&appid=d4daeba3e355348ac9050efcae9375ca',
        success: function(response) {
            const APIArray = retrieveAPIData(response)
            getTemperatures(APIArray)
            displayTopRowData(APIArray)
        },
        error: function() {
            console.log(response)
        }
    })
}

function moscowAjax() {
    classChanger("moscowButton")
    $.ajax({
        method: 'GET',
        url: 'http://api.openweathermap.org/data/2.5/forecast?id=5601538&appid=d4daeba3e355348ac9050efcae9375ca',
        success: function(response) {
            const APIArray = retrieveAPIData(response)
            getTemperatures(APIArray)
            displayTopRowData(APIArray)
        },
        error: function() {
            console.log(response)
        }
    })
}

function newYorkAjax() {
    classChanger("newYorkButton")
    $.ajax({
        method: 'GET',
        url: 'http://api.openweathermap.org/data/2.5/forecast?id=5128581&appid=d4daeba3e355348ac9050efcae9375ca',
        success: function(response) {
            const APIArray = retrieveAPIData(response)
            getTemperatures(APIArray)
            displayTopRowData(APIArray)
        },
        error: function() {
            console.log(response)
        }
    })
}