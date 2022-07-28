const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (_req, res) => res.json({ message: 'Está vivo!!!' }));

app.listen(PORT, () => console.log(`Executando na porta ${PORT}`));
