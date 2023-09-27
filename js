const express = require('express');
const app = express();
const port = 3000;


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

fetch('/api/posts')
  .then((response) => response.json())
  .then((data) => {
    const main = document.querySelector('main');
    data.forEach((post) => {
      const postElement = document.createElement('article');
      postElement.className = 'post';
      postElement.innerHTML = `
        <h2>${post.title}</h2>
        <p>Published on: <span class="date">${post.date}</span></p>
        <div class="content">
          <p>${post.content}</p>
        </div>
      `;
      main.appendChild(postElement);
    });
  })
  .catch((error) => console.error(error));


const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

passport.use(
  new LocalStrategy((username, password, done) => {
    
  })
);

app.post('/login', passport.authenticate('local'), (req, res) => {
  
});


