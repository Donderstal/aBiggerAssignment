$( document ).ready(
    setTimeout(adam, 100),
)

//Status variable to determine interval on active tab
let status

function Interval() {
    let interval
    clearInterval(interval)
    if (status == 'adam') {
        interval = setInterval(function(){
            ajaxMaker(status)
        }, 600000)
    }
    else if (status == 'moscow') {
        interval = setInterval(function(){
            ajaxMaker(status)
        }, 600000)
    }
    else if (status == 'newYork') {
        interval = setInterval(function(){
            ajaxMaker(status)
        }, 600000)
    }
}

// retrieve Api data and structure it properly by removing every second entry in array
function retrieveAPIData(api) {
    return newArray = api.list.filter(e => {
        return (api.list.indexOf(e) % 2 == 0)
    })
}

//Display time in text nodes
function displayTime(time) {
    const span = document.createElement('span')
    span.classList.add('timeSpan')
    const spanText = document.createTextNode(time)
    span.appendChild(spanText)
    timeRow.appendChild(span)
}

//Display dates and weekdays in text node
function displayDate(date, time, index) {
    const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    dateArray = date.split('-')
    weekDaysDate = new Date(dateArray[0], (dateArray[1] - 1), dateArray[2])
    weekDay = weekDays[weekDaysDate.getDay()]
    date = date.substring(date.indexOf("-") + 1)
    const span = document.createElement('span')
    span.classList.add('timeSpan')
    const spanText = document.createTextNode(weekDay + '\n' + date)
    if (time == 03 || time == 00 || index == 0) {
        span.appendChild(spanText)
    } 
    dateRow.appendChild(span)
}

//Display weather icons from openweathermap
function displayIcons(icon) {
    const img = document.createElement('img')
    img.classList.add('timeSpan')
    img.setAttribute("src", 'http://openweathermap.org/img/w/' + icon + '.png')
    imageRow.appendChild(img)
}

//Structure api data and display them on page using the above three helper functions
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

//get temperatures, convert them to celsius and send them to chart's y axis
function getTemperatures(apiList) {
    const tempArray = []
    apiList.forEach(e => {
        tempCelsius = Math.round(e.main.temp - 273.15)
        tempArray.push(tempCelsius)
    })
    chart.data.datasets[0].data = tempArray
    chart.update()
}


//ajax constructer function
function ajaxMaker(type){
    let url
    if (type == 'adam') {
        url = 'http://api.openweathermap.org/data/2.5/forecast?id=2759794&appid=9a7f046e8334b9ccd2878162b35dc767'
    }
    else if (type == 'moscow') {
        url = 'http://api.openweathermap.org/data/2.5/forecast?id=5601538&appid=9a7f046e8334b9ccd2878162b35dc767'
    }
    else if (type == 'newYork') {
        url = 'http://api.openweathermap.org/data/2.5/forecast?id=5128581&appid=9a7f046e8334b9ccd2878162b35dc767'
    }
    $.ajax({
        method: 'GET',
        url: url,
        success: function(response) {
            const APIArray = retrieveAPIData(response)
            getTemperatures(APIArray)
            displayTopRowData(APIArray)
        }
    })
}

//toggle active class on click
$(".nav-link").click(function(){
    if ($(".nav-link").hasClass("active")) {
        $(".nav-link").removeClass("active")
    }
        $(this).toggleClass("active")  
})

//fire ajax and change status for Amsterdam
function adam(){
    status = 'adam'
/*     ajaxMaker(status)
    Interval() */
}

//fire ajax and change status for Moscow
function moscow(){
    status = 'moscow'
/*     ajaxMaker(status)
    Interval() */
}

//fire ajax and change status for New York
function newYork(){
    status = 'newYork'
/*     ajaxMaker(status)
    Interval() */
}