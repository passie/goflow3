var host = 'dinges.synology.me';
var port = 4545;
var u = encodeURIComponent('admin');
var p = encodeURIComponent('leonisdebeste');


var socket = io('http://' + host + ':' + port + '/?username=' + u + '&password=' + p, {
    reconnection: true,
    reconnectionDelay: 1000,
    reconnectionDelayMax: 3000,
    timeout: 20000,
    forceNew: true
});

socket.on('connect', function() {
    console.log('connected');
});

socket.on('event', function(data) {
    //console.log(data);
});

socket.on('disconnect', function(data) {
    console.log('disconnected');
});

socket.emit('call', {
    id: 'queryMessages',
    action: 'queryMessages',
    params: {
        groupId: 'iets',
        group: 'iets'
    }
})


// socket.on('groups', function(groups) {
//     for (item in groups) {
//         var html = "<div id=" + groups[item].name + groups[item].devices + " class=\"groups\">\
//                         <h1>" + groups[item].name + "</h1>\
//                         </div></br>";
//         $("#groups").append(html);
//     }
// });

// socket.on('devices', function(devices) {
//     console.log(devices)
//     for (item in devices) {
//         if (devices[item].template == 'switch') {
//             var html = "<div id=" + devices[item].name + " class=\"switch\">\
//                         <img src=\"assets/img/ico_doorbell.png\" height=\"50\" width=\"70\">\
//                         <h3>" + devices[item].name + "</h3>\
//                      </div>";
//             $("#data").append(html);
//         }
//     }
// });


// for (item in devices) {
//     if (devices[item].template == 'switch') {

//         var html = "<div id=" + devices[item].name + " class=\"switch\">\
//                         <img src=\"assets/img/ico_doorbell.png\">\
//                         <h3>" + devices[item].name + "</h3>\
//                      </div>";
//         $("#data").append(html);
//     }
// }
// });

// $(".device_icon").click(function(data) {
//     console.log(data);
//     alert( "Handler for .click() called." );
// });



// socket.on('groups', function(messages) {
//     socket.emit('call', {
//         id: 'queryMessages',
//         action: 'queryMessages',
//         params: {
//             criteria: {
//                 level: 'any',
//             }
//         }
//     })
// });
socket.on('callResult', function(data) {
    for (items in data) {
        // console.log(data[items].messages)
        for (iets in data[items].messages) {
            var d = new Date(data[items].messages[iets].time).toLocaleString();;
            var html = "<div class=mTime>" + d + "</div>\
                        <div class=mLevel>" + data[items].messages[iets].level + "</div>\
            <div class=mText>" + data[items].messages[iets].text + "</div>";
            $("#messages").append(html);
        }

    }
});