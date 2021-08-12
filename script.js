let submitBtn = document.getElementById('submit');

submitBtn.addEventListener('click', event => {
  event.preventDefault();
  submitForm();
  })

let submitForm = () => {
  document.getElementById('first-name-output').innerHTML = document.getElementById('inputFirstName').value;
  document.getElementById('last-name-output').innerHTML = document.getElementById('inputLastName').value;
  document.getElementById('email-output').innerHTML = document.getElementById('inputEmail').value;
  document.getElementById('age-output').innerHTML = document.getElementById('inputAge').value;
  document.getElementById('secret-output').innerHTML = document.getElementById('inputSecret').value;
  document.getElementById('message-output').innerHTML = document.getElementById('inputMessage').value;
  document.getElementById('income-output').innerHTML = document.getElementById('income').value;
}