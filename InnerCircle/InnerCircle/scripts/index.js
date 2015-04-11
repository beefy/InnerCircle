// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in Ripple or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.
(function () {
    "use strict";

    document.addEventListener( 'deviceready', onDeviceReady.bind( this ), false );

    function onDeviceReady() {
        // Handle the Cordova pause and resume events
        document.addEventListener( 'pause', onPause.bind( this ), false );
        document.addEventListener( 'resume', onResume.bind( this ), false );
        
        //ajax
        $.ajax({
            url: 'http://localhost:3000/projects',
            data: {
                format: 'json'
            },
            error: function (e) {
                //$('#info').html('<p>An error has occurred</p>');
                console.log("AN AJAX ERROR HAS OCCURED: " + e.statusText);
            },
            dataType: 'json',
            success: function (data) {
                //var $title = $('<h1>').text(data.talks[0].talk_title);
                //var $description = $('<p>').text(data.talks[0].talk_description);
                //$('#info')
                //   .append($title)
                //   .append($description);
                console.log("Data Loaded: " + data.statusText);
            },
            type: 'GET'
        });
    };

    function onPause() {
        // TODO: This application has been suspended. Save application state here.
    };

    function onResume() {
        // TODO: This application has been reactivated. Restore application state here.
    };
} )();