const fetch = require('node-fetch');

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

module.exports = {
  getPost,
  getUsers,
  getAddresses,
  shortestPost,
  numCompleted,
  searchPosts
};
