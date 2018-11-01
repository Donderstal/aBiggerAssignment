
function retrieveAPIData(api) {
    let list = api.list
    let newArray = []
    for (i = 0; i < list.length; i++)  {
        if (i % 2 == 0) {
            newArray.push(list[i])
        }
    }
    return newArray
}

function adamAjax() {
    $.ajax({
        method: 'GET',
        url: 'http://api.openweathermap.org/data/2.5/forecast?id=2759794&appid=d4daeba3e355348ac9050efcae9375ca',
        success: function(response) {
/*             console.log(response.list[0].dt_txt)
            document.getElementById("ajaxTest").innerHTML = response.list[0].dt_txt */
            console.log(retrieveAPIData(response))
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