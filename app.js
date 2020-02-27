const fetch = require('node-fetch');

const url = `https://jsonplaceholder.typicode.com/`;

const getPost = (postID) => {
fetch(`${url}posts/${postID}`)
  .then(response => response.json())
  .then(json => {
    console.log(json);
    return json;
    })
}

getPost(8)

const getUsers = () => {
  fetch(`${url}/users`)
  .then(data => data.json())
  .then(users => users.forEach(user => {
    console.log(data.name);
    return users.name;
  }));
}

// getUsers();

const getAddresses = () => {
  fetch(`${url}/users`)
  .then(data => data.json())
  .then(users => users.forEach(user => {
    console.log(`${user.address.street}, ${user.address.suite}, ${user.address.city}`);
    return `${user.address.street}, ${user.address.suite}, ${user.address.city}`
  }))
}

const shortestPost = () => {
  fetch(`${url}/posts`)
  .then(data => data.json())
  .then(json => {
    const finalData = json.filter((a, b) => { a.length <= b.length ? a : b })
    console.log(finalData)
    return finalData;
  })
}

//check
const numCompleted = () => {
  fetch(`${url}/todos`)
    .then(data => data.json())
    .then(json => {
      const finalData = json.reduce(post => { post.completed = true })
    })
    console.log(finalData);
    return finalData;
}

const searchPosts = (searchWord) => { 
    fetch(`${url}/todos`)
    .then(data => data.json())
    .then(json => {
      console.log(json.filter(post => post.body.includes(searchWord)));
      return json.filter(post => post.body.includes(searchWord));
    })
}

// searchPosts("omnis");

const userData = document.getElementById("userData");
const button = document.getElementById("btn");
const input = document.getElementById("input");


button.addEventListener("click", (e) => {
  e.preventDefault();

  const data = getUsers();
  
})

// In the index.html file, create a form with a text input and a submit button. When you submit a users name (first or last),
// the text input should clear and a table with the user's data should appear below the form. If no user is found, a message 
// saying, "No User Found" should appear below the form.

module.exports = {
  // getPost,
  // getUsers,
  // getAddresses,
  // shortestPost,
  // numCompleted,
  // searchPosts,
};