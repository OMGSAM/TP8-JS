<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form Validation</title>
</head>
<body>
    <form id="registrationForm">
        <label for="name">Nom:</label>
        <input type="text" id="name" required>
        <span id="nameError" class="error"></span>
        <br>
        
        <label for="email">Email:</label>
        <input type="email" id="email" required>
        <span id="emailError" class="error"></span>
        <br>
        
        <label for="phone">Téléphone:</label>
        <input type="tel" id="phone" required>
        <span id="phoneError" class="error"></span>
        <br>
        
        <label for="password">Mot de passe:</label>
        <input type="password" id="password" required>
        <span id="passwordError" class="error"></span>
        <br>
        
        <button type="submit">Submit</button>
    </form>
    <script">document.getElementById('registrationForm').addEventListener('submit', function(event) {
    let isValid = true;

    // Validate Name
    const name = document.getElementById('name').value;
    if (name.length < 3) {
        isValid = false;
        document.getElementById('nameError').textContent = 'Le nom doit contenir au moins 3 caractères.';
    } else {
        document.getElementById('nameError').textContent = '';
    }

    // Validate Email
    const email = document.getElementById('email').value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        isValid = false;
        document.getElementById('emailError').textContent = 'Veuillez entrer un email valide.';
    } else {
        document.getElementById('emailError').textContent = '';
    }

    // Validate Phone
    const phone = document.getElementById('phone').value;
    if (!/^\d{10}$/.test(phone)) {
        isValid = false;
        document.getElementById('phoneError').textContent = 'Le téléphone doit contenir exactement 10 chiffres.';
    } else {
        document.getElementById('phoneError').textContent = '';
    }

    // Validate Password
    const password = document.getElementById('password').value;
    if (password.length < 6) {
        isValid = false;
        document.getElementById('passwordError').textContent = 'Le mot de passe doit contenir au moins 6 caractères.';
    } else {
        document.getElementById('passwordError').textContent = '';
    }

    if (!isValid) {
        event.preventDefault();
    } else {
        alert('Le formulaire a été soumis avec succès.');
    }
});
</script>
</body>
</html>
