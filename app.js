const fetch = require('node-fetch');

function getPost(postId){
  let x = fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then(response => response.json())
    return x
}
function getUsers(){
    return fetch(`https://jsonplaceholder.typicode.com/users`)
      .then(response => response.json())
      .then(response => response.map(user => user.name))
}

function getAddresses(){
  return fetch(`https://jsonplaceholder.typicode.com/users`)
      .then(response => response.json())
      .then(response => response.map(user => `${user.adress.street}, ${user.adress.suite}, ${user.adress.city}`))
}

function shortestPost(){
 return fetch(`https://jsonplaceholder.typicode.com/posts`)

    .then(response => response.json())
    .then(users => users.reduce((a,b)=>{
      if(a.body.length > b.body.length){
        a = b
    }}))

}

function numCompleted(){
  let count = 0
  return fetch(`https://jsonplaceholder.typicode.com/todos`)
    .then(response => response.json())
    .then(users => users.forEach(user => function(){
      if (user.completed === true){
        count += 1
      }
      return count
    }))
}


function searchPosts(x){
  
  return fetch(`https://jsonplaceholder.typicode.com/posts`)
    .then(response => response.json())
    .then(response => response.filter(user => function(){
     body = user.body
     if (body.includes(x)) return user
    }))
}
module.exports = {
  getPost,
  getUsers,
  getAddresses,
  shortestPost,
  numCompleted,
  searchPosts,
};