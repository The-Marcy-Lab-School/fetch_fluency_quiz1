//const fetch = require('node-fetch');

async function getPost(postId){
  const url = 'https://jsonplaceholder.typicode.com/posts';
  const response = await fetch(url);
  const posts = await response.json();
  const post = posts.filter(post => post.id === postId);
  
  return post[0];
}

async function getUsers(){
  const url = 'https://jsonplaceholder.typicode.com/users';
  const response = await fetch(url);
  const users = await response.json();
  
  return users.map(user => user.name);
}

async function getAddresses(){
  const url = 'https://jsonplaceholder.typicode.com/users';
  const response = await fetch(url);
  const users = await response.json();
  
  return users.map(user => `${user.address.street}, ${user.address.suite}, ${user.address.city}`);
}

async function shortestPost(){
  const url = 'https://jsonplaceholder.typicode.com/posts';
  const response = await fetch(url);
  const posts = await response.json();
  
  return posts.sort(function(a, b){ return b.body.length - a.body.length})[0];
}

async function numCompleted(){
  const url = 'https://jsonplaceholder.typicode.com/todos';
  const response = await fetch(url);
  const arr = await response.json();
  
  return arr.filter(obj => obj.completed === true).length;
}

// async function searchPosts(searchWord){
//   const url = 'https://jsonplaceholder.typicode.com/posts';
//   const response = await fetch(url);
//   const posts = await response.json();
  
//   return posts.filter(post => post.body.includes(searchWord));
// }

// module.exports = {
//   getPost,
//   getUsers,
//   getAddresses,
//   shortestPost,
//   numCompleted,
//   searchPosts,
// };