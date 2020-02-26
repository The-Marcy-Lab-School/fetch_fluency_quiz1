// const fetch = require('node-fetch');

const getPost = async function(postID) {
  try {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts');
    let data = await response.json();
    return data;
  }
  catch (err) {
    console.warn(err)
  }
}

const getUsers = async function() {
  try {
    let response = await fetch('https://jsonplaceholder.typicode.com/users');
    let data = await response.json()
    return data.map(user => user.name)
  }
  catch (err) {
    console.warn(err)
  }
}

const getAddresses = async function() {
  try {
    let response = await fetch('https://jsonplaceholder.typicode.com/users');
    let data = await response.json()
    return data.map(user => `${user.address.street}, ${user.address.suite}, ${user.address.city}`)
  }
  catch (err) {
    console.warn(err)
  }
}

const shortestPost = async function() {
  try {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts');
    let data = await response.json()
    let postArr = data.map(user => user)
    let shortestBody;
    let shortest = postArr[0].body.length
    for (let i in postArr) {
      if (postArr[i].body.length < shortest) {
        shortestBody = postArr[i];
        shortest = postArr[i].body.length;
      }
    }
    return shortestBody
  }
  catch (err) {
    console.warn(err)
  }
}

const numCompleted = async function() {
  try {
    let response = await fetch('https://jsonplaceholder.typicode.com/todos');
    let data = await response.json();
    return data.filter(user => {
      return user.completed === true;
    }).length;
  }
  catch (err) {
    console.warn(err)
  }
}

const searchPosts = async function(searchWord) {
  try {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts')
    let data = await response.json()
    return data.filter(user => user.body.includes(searchWord))
  }
  catch (err) {
    console.log(err)
  }
}

const form = document.getElementById('inputs')
const body = document.getElementsByTagName('body')[0]
const userInput = document.getElementById('nameInput')

form.addEventListener('submit', async(e) => {
  e.preventDefault();
  try {
    let response = await fetch('https://cors-anywhere.herokuapp.com/https://jsonplaceholder.typicode.com/users')
    let data = await response.json()
    let userData = data.filter(user => user.name.includes(userInput.value))
    if (userData && userData.length < 2) {
      body.innerHTML += `
    <table>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>${userData[0].name.split(' ')[0]}</td>
          <td>${userData[0].name.split(' ')[1]}</td>
        </tr>
      </tbody>
    </table>
  `;
    }
    else {
      body.innerHTML += `
    <h2>Please input a name.</h2>
    `;
    }
    userInput.value = '';
  }
  catch (err) {
    console.warn(err)
    body.innerHTML += `
    <h2>No user found.</h2>
    `;
  }
});

module.exports = {
  // getPost,
  // getUsers,
  // getAddresses,
  // shortestPost,
  // numCompleted,
  // searchPosts,
};
