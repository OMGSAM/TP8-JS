<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Event Handling</title>
</head>
<body>
    <button id="myButton">Cliquez-moi !</button>
    <p id="message"></p>
    <script src="events.js">
  const button = document.getElementById('myButton');
const message = document.getElementById('message');

button.addEventListener('click', function() {
    message.textContent = 'Le bouton a été cliqué !';
});

button.addEventListener('mouseover', function() {
    button.style.backgroundColor = 'yellow';
});

button.addEventListener('mouseout', function() {
    button.style.backgroundColor = '';
});
</script>
</body>
</html>
