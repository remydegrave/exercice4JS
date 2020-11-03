document.getElementById('clickButton').onclick = showAlert;
function showAlert() {
var lastName = document.getElementById('lastName').value;
var firstName = document.getElementById('firstName').value;
var city = document.getElementById('city').value;
alert('Bonjour, ' + lastName + ' ' + firstName + ' ' + 'de' + ' ' + city)
}