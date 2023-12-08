var dayButtons = document.getElementsByClassName('day-button');
var daySchedules = document.getElementsByClassName('day-schedule');

for (var i = 0; i < dayButtons.length; i++) {
  dayButtons[i].addEventListener('click', function(event) {
    var scheduleId = event.target.id.replace('-button', '-schedule');
    for (var j = 0; j < daySchedules.length; j++) {
      if (daySchedules[j].id !== scheduleId) {
        daySchedules[j].classList.add('hidden');
      } else {
daySchedules[j].classList.remove('hidden');
      }
    }
  });
}
document.querySelector(".back-button").addEventListener("click", function() {
  window.location.href = "index2.html";
});
const backButton = document.querySelector('.back-button');

backButton.addEventListener('mouseover', function() {
  this.style.transform = 'scale(1.1)';
});

backButton.addEventListener('mouseout', function() {
  this.style.transform = 'scale(1.0)';
});
backButton.addEventListener('click', function() {
  this.style.transform = 'scale(0.9)';
  window.location.href = 'index2.html';
});