const fetch = require('node-fetch');

function getPost(postId){
  let post = fetch("https://jsonplaceholder.typicode.com/posts")
  .then(response => response.json())
  .then(json => json[postId - 1])
  return post
}

function getUsers(){
  let usernames = fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())
  .then(json => json.map(user => user.name))
  return usernames
}

function getAddresses(){
  let addresses = fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())
  .then(json => json.map(user => `${user.address.street}, ${user.address.suite}, ${user.address.city}`))
  return addresses
}

function shortestPost(){
  let shortest = fetch("https://jsonplaceholder.typicode.com/posts")
  .then(response => response.json())
  .then(json => {
    let short = ""
    for(let post of json){
      if (post.length < short){
        short = post
      }
    }
    return short
  })
  return shortest
}

function numCompleted(){
  let completedTasks = fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => json.filter(user => user.completed === true).length)
  return completedTasks
}

function searchPosts(word){
  const regex = new RegExp(`ReGeX${word}ReGeX`);
  let matchingPosts = fetch("https://jsonplaceholder.typicode.com/posts")
  .then(response => response.json())
  .then(json => json.filter(post => post.body.match(regex)))
  return matchingPosts
}

module.exports = {
  // getPost,
  // getUsers,
  // getAddresses,
  // shortestPost,
  // numCompleted,
  // searchPosts,
};