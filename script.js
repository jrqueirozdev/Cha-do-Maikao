<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Chá de Casa Nova do Maikão</title>
  <link rel="stylesheet" href="style.css" />
  <style>
    body {
      font-family: "Poppins", sans-serif;
      background: #fafafa;
      margin: 0;
      padding: 0;
      text-align: center;
    }

    header {
      background: #f5b042;
      padding: 20px;
      color: #fff;
      font-size: 24px;
      font-weight: bold;
      letter-spacing: 1px;
    }

    .container {
      max-width: 1000px;
      margin: 20px auto;
      padding: 20px;
    }

    #nomeConvidado {
      width: 80%;
      padding: 10px;
      font-size: 16px;
      margin-bottom: 20px;
      border: 1px solid #ccc;
      border-radius: 6px;
    }

    .presente {
      display: inline-block;
      width: 240px;
      margin: 10px;
      padding: 10px;
      border: 1px solid #ddd;
      border-radius: 10px;
      background: #fff;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    }

    .presente img {
      width: 100%;
      height: 180px;
      object-fit: cover;
      border-radius: 10px;
    }

    .presente h3 {
      font-size: 16px;
      margin: 10px 0;
    }

    .presente button {
      background: #f5b042;
      color: white;
      border: none;
      padding: 10px 15px;
      border-radius: 8px;
      cursor: pointer;
      font-size: 15px;
      transition: 0.2s;
    }

    .presente button:hover {
      background: #e89a2b;
    }

  </style>
</head>
<body>
  <header>Chá de Casa Nova do Maikão</header>

  <div class="container">
    <input id="nomeConvidado" type="text" placeholder="Insira seu nome" />
    <div id="lista-presentes"></div>
  </div>

  <script src="script.js"></script>
</body>
</html>
