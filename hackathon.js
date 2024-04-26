/ Perform action with meeting date, e.g., schedule meeting

var modal = document.getElementById("scheduleModal");


var buttons = document.querySelectorAll(".schedule-button");


var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  modal.style.display = "none";
}


window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


document.getElementById("confirmMeeting").onclick = function() {
  var meetingDate = document.getElementById("datepicker").value;
  
  alert("Confirmation letter will be sent to your mail");
  console.log("Meeting Scheduled for", meetingDate);
  
  modal.style.display = "none";
}

buttons.forEach(function(button) {
  button.onclick = function() {
    modal.style.display = "block";
    $("#datepicker").datepicker(); 
  }
});