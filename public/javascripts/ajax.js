/**
 * Created by Davy on 24/12/2014.
 */

function forward(){
    $.ajax({
        url: "/control/forward",
        context: document.body,
        success: function(){
            console.log('ok');
        }
    })
}

function left(){
    $.ajax({
        url: "/control/left",
        context: document.body,
        success: function(){
            console.log('ok');
        }
    })
}

function right(){
    $.ajax({
        url: "/control/right",
        context: document.body,
        success: function(){
            console.log('ok');
        }
    })
}

function stop(){
    $.ajax({
        url: "/control/stop",
        context: document.body,
        success: function(){
            console.log('ok');
        }
    })
}