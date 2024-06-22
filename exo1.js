<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Change Background Color</title>
</head>
<body>
    <select id="colorSelect">
        <option value="yellow">Jaune</option>
        <option value="green">Vert</option>
        <option value="red">Rouge</option>
        <option value="black">Noir</option>
    </select>
    <script>
  document.getElementById('colorSelect').addEventListener('change', function() {
    document.body.style.backgroundColor = this.value;
});
</script>
</body>
</html>
