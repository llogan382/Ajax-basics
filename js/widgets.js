// This is jquery- waits for all HTML before running JS inside the file. This is required when you load JS in the head of the doc. 
$(document).ready(function () {
var url = "../htdocs/data/employees.json";
  // The url to connect to, data to send, and callback for how to handle the response
  // For the callback, if the response is not JSON, it will fail without any warnings.
  $.getJSON(url, function(response){
    var statusHTML = '<ul class="bulleted">';
    $.each(response, function(index, employee){
      if(employee.inoffice === true ){
        statusHTML += '<li class="in">';
      } else {
        statusHTML += '<li class="out">';
      }
      statusHTML += employee.name + '</li>';
    });
    statusHTML += "</ul>";
    $('#employeeList').html(statusHTML);
  }); //end getJSON

});// end ready