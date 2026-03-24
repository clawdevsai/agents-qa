const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

let users = [];
let nextId = 1;

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function validateRequiredFields(body) {
  const requiredFields = ["nome", "email", "username", "password"];

  for (const field of requiredFields) {
    if (!body[field] || String(body[field]).trim() === "") {
      return `O campo '${field}' e obrigatorio.`;
    }
  }

  if (!isValidEmail(body.email)) {
    return "Email invalido.";
  }

  return null;
}

app.get("/users", (req, res) => {
  res.json(users);
});

app.get("/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const user = users.find((item) => item.id === id);

  if (!user) {
    return res.status(404).json({ error: "User nao encontrado." });
  }

  return res.json(user);
});

app.post("/users", (req, res) => {
  const validationError = validateRequiredFields(req.body);
  if (validationError) {
    return res.status(400).json({ error: validationError });
  }

  const newUser = {
    id: nextId++,
    nome: String(req.body.nome).trim(),
    email: String(req.body.email).trim(),
    username: String(req.body.username).trim(),
    password: String(req.body.password).trim()
  };

  users.push(newUser);
  return res.status(201).json(newUser);
});

app.put("/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const userIndex = users.findIndex((item) => item.id === id);

  if (userIndex === -1) {
    return res.status(404).json({ error: "User nao encontrado." });
  }

  const validationError = validateRequiredFields(req.body);
  if (validationError) {
    return res.status(400).json({ error: validationError });
  }

  const updatedUser = {
    id,
    nome: String(req.body.nome).trim(),
    email: String(req.body.email).trim(),
    username: String(req.body.username).trim(),
    password: String(req.body.password).trim()
  };

  users[userIndex] = updatedUser;
  return res.json(updatedUser);
});

app.delete("/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const userIndex = users.findIndex((item) => item.id === id);

  if (userIndex === -1) {
    return res.status(404).json({ error: "User nao encontrado." });
  }

  users.splice(userIndex, 1);
  return res.status(204).send();
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`API rodando em http://localhost:${PORT}`);
});
