const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  let numero = parseInt(req.query.tabuada);
  let sequencia = parseInt(req.query.sequencia) || 10; // Padrão de 10 multiplicações

  if (isNaN(numero)) {
    res.send('Por favor, informe um número válido para a tabuada, exemplo: ?tabuada=3&sequencia=20');
    return;
  }

  let resultado = '';
  for (let i = 0; i <= sequencia; i++) {
    resultado += `<div class="tabuada-item">${numero} x ${i} = ${numero * i}</div>`;
  }

  // Renderizar o HTML com o resultado
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Tabuada do ${numero}</title>
        <style>
          body {
            font-family: 'Arial', sans-serif;
            background-color: #f0f4f8;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            margin-top: 0;
          }
          .container {
            background-color: #fff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            text-align: center;
            width: 400px;
            transition: transform 0.2s;
          }
          .container:hover {
            transform: translateY(-10px);
          }
          h1 {
            color: #3498db;
            margin-bottom: 20px;
            font-size: 24px;
          }
          .tabuada-item {
            font-size: 18px;
            margin: 10px 0;
            padding: 8px;
            background-color: #ecf0f1;
            border-radius: 4px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            transition: background-color 0.3s;
          }
          .tabuada-item:hover {
            background-color: #dff9fb;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>Tabuada do ${numero}</h1>
          ${resultado}
        </div>
      </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
