const express = require('express');
const path = require('path');

const app = express();
const port = 8005;

// View Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views'));

// Static Folder
app.use(express.static(path.join(__dirname, '../public')));

// Route
app.get('/', (req, res) => {
  res.render('index');
});

// Server
app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});