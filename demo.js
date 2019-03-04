var url = '/employees.php';
var data = {
    firstName = "Luke",
    lastName = "Logan"
};

// With Jquery, you dont need to check the "ready" status. 
var callback = function( response ) {
    // do something with the response
}

$.get(URL, data, callback);


// This is  the same as the following:
$.get('/employees.php', {
    firstName = "Luke",
    lastName = "Logan"
}, function( response ) {
    // do something with the response
});
