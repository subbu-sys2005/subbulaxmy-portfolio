const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const app = express();
const PORT = 8085;

// Middleware setup
app.use(cors());
app.use(bodyParser.json());

// MySQL Connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',        // 🔸 Update this if your MySQL has a password
  database: 'fullstack_db' // 🔸 Make sure this database exists
});

db.connect(err => {
  if (err) {
    console.error('Database connection failed:', err);
  } else {
    console.log('MySQL Connected');
  }
});

// 🔹 Register Route
app.post('/register', (req, res) => {
  const { name, email, password, slot } = req.body;
  const sql = 'INSERT INTO users (name, email, password, slot) VALUES (?, ?, ?, ?)';
  db.query(sql, [name, email, password, slot], (err, result) => {
    if (err) {
      console.error('Registration error:', err);
      return res.status(500).send('Registration failed');
    }
    res.send('Registered successfully');
  });
});

// 🔹 Login Route
app.post('/login', (req, res) => {
  const { email, password } = req.body;
  const sql = 'SELECT * FROM users WHERE email = ? AND password = ?';
  db.query(sql, [email, password], (err, result) => {
    if (err || result.length === 0) {
      console.error('Login error or user not found');
      return res.status(401).send('Login failed');
    }
    res.send('Login successful');
  });
});

// ✅ Correct Logging Line
console.log(`Server running at http://localhost:${PORT}`);


app.listen(PORT);