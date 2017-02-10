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


socket.on('devices', function(devices) {
    for(item in devices) {
        if(devices[item].template == 'switch') {

            var html = "<div id="+ devices[item].name + " class=\"device_wrapper\">\
                    <div class=\"device_icon\">\
                        <i class=\"material-icons\">lightbulb_outline</i>\
                    </div>\
                    <div class=\"device_name\">" + devices[item].name + "</div>\
                    <div class=\"device_state\">\
                        <i class=\"material-icons\">settings_power</i>\
                    </div>\
                </div>";

            $("#data").append(html);
        }
    }
});

// $(".device_icon").click(function(data) {
//     console.log(data);
//     alert( "Handler for .click() called." );
// });









// $("#target").click()

// $(document).off('click', '#target').on('click', '#target', function(e) {
//     socket.emit('call', {
//         id: 'executeAction1',
//         action: 'executeAction',
//         params: {
//             actionString: 'toggle keukenlamp'
//         }
//     });
// });

// socket.on('disconnect', function() {
//     console.log('disconnected');
// });

// socket.on('connect', function() {
//     console.log('connected');

//     socket.emit('call', {
//         id: 'executeAction1',
//         action: 'executeAction',
//         params: {
//             actionString: 'toggle woonKamervoor'
//         }
//     });
// });

// socket.on('callResult', function(msg) {
//     if (msg.id === 'executeAction-1') {
//         console.log(msg.result);
//     }
// });



// socket.on('devices', function(devices) {
//     for (var i = 0; i < devices.length; i++) {

//         if (devices[i].template = 'switch') {
//             $(".wrapper").append("<div class=device_wrapper><div class=device_icon><i class=material-icons>lightbulb_outline</i></div><div class=device_name>" + devices[i].name + "</div><div class=device_spacer></div><div class=device_state><i class=material-icons>settings_power</i></div></div></br>")
//                 //<div class=device><div class=device-icon " + devices[i].template + "></div><h3>" + devices[i].name + "</h3></div></br></br>")
//             console.log(devices[i])
//         }       
//     }
// });







// werkt
// socket.on('rules', function(rules) {
//     for (var i = 0; i < rules.length; i++) {
//         $("#rulelist").append("<option id=" + rules[i].name + ">" + rules[i].name + "</option")
//             //console.log(rules[i].name)
//     }
// });

// socket.on('variables', function(variables) {
//     console.log(variables);
// });

// socket.on('pages', function(pages) {
//     console.log(pages);
// });

// socket.on('groups', function(groups) {
//     for (var i = 0; i < groups.length; i++) {
//         console.log(groups[i].name)
//     }

//     for (var i = 0; i < groups.length; i++) {
//         console.log(groups[i].devices);
//     }
// });

// socket.on('deviceAttributeChanged', function(attrEvent) {
//     console.log(attrEvent);
// });


// setInterval(function() {
//     socket.emit('call', {
//         id: 'update-variable-call1',
//         action: 'getDevices'
//     });
// }, 10000);

// socket.on('callResult', function(msg) {
//     if (msg.id === 'update-variable-call1') {
//         console.log("sjaakie");
//         console.log(msg.result);
//     }
// });