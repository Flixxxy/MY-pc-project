const countdown = document.querySelector('.countdown')
const targetDate = new Date('2024-04-30T00:00:00')

function updateCountdown() {
	const now = new Date()
	const remainingTime = targetDate - now

	const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24))
	const hours = Math.floor(
		(remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
	)
	const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60))
	const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000)

	document.getElementById('days').innerText = days.toString().padStart(2, '0')
	document.getElementById('hours').innerText = hours.toString().padStart(2, '0')
	document.getElementById('minutes').innerText = minutes
		.toString()
		.padStart(2, '0')
	document.getElementById('seconds').innerText = seconds
		.toString()
		.padStart(2, '0')
}

// Обновляем счетчик каждую секунду
setInterval(updateCountdown, 1000)


// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}