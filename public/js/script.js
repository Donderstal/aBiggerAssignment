
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

function displayTime(eTime) {
    const TimeRow = document.getElementById('timeRow')
    const Span = document.createElement('span')
    Span.classList.add('timeSpan')
    const SpanText = document.createTextNode(eTime)
    Span.appendChild(SpanText)
    TimeRow.appendChild(Span)
}

function getDateAndTime(apiList) {
    apiList.forEach( e => {
        const DateTimeText = e.dt_txt
        const eDate = DateTimeText.split(' ')[0]
        const eTime = DateTimeText.split(' ')[1].split(':')[0]
        displayTime(eTime)
        console.log(eDate)
        console.log(eTime)
    })
}


function adamAjax() {
    $.ajax({
        method: 'GET',
        url: 'http://api.openweathermap.org/data/2.5/forecast?id=2759794&appid=d4daeba3e355348ac9050efcae9375ca',
        success: function(response) {
/*             console.log(response.list[0].dt_txt)
            document.getElementById("ajaxTest").innerHTML = response.list[0].dt_txt */
            const APIArray = retrieveAPIData(response)
            console.log(APIArray[0])
            getDateAndTime(APIArray)
        },
        error: function() {
            console.log(response)
        }
    })
}

function moscowAjax() {
    $.ajax({
        method: 'GET',
        url: 'http://api.openweathermap.org/data/2.5/forecast?id=5601538&appid=d4daeba3e355348ac9050efcae9375ca',
        success: function(response) {
            console.log(response)
        },
        error: function() {
            console.log(response)
        }
    })
}

function newYorkAjax() {
    $.ajax({
        method: 'GET',
        url: 'http://api.openweathermap.org/data/2.5/forecast?id=5128581&appid=d4daeba3e355348ac9050efcae9375ca',
        success: function(response) {
            console.log(response)
        },
        error: function() {
            console.log(response)
        }
    })
}