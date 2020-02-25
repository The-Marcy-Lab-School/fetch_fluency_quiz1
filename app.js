const fetch = require('node-fetch');

const baseUrl = "https://jsonplaceholder.typicode.com";

const getReq = async (route)  =>{
  const request = await fetch(baseUrl + route);
  const data = await request.json();
  return data;
};

const getPost = async (id) => {
  return getReq('/posts/' + id);
};

const getUsers = async() => {
  const data = await ('/users');
  return data.map((user) => user.name);
};

const getAddresses = async() => {
  const data = await getReq('/users');
  return data.map(function(user){
    const address = user.address;
    return address.street + address.suite + address.city;
  });
};

const shortestPost = async() => {
  const data = await getReq('/posts');
  return data.sort(function(a, b){ 
    return b - a;
  })[0];
};

const numCompleted = async() => {
  let data = await getReq('/todos');
  data = data.filter(function(task){
    return task.completed;
  });
  return data.length;
};

const searchPosts = async(word) => {
  let data = await getReq('/posts');
  return data.filter(function(post){
    return post.body.includes(word);
  });
};

module.exports = {
  // getPost,
  // getUsers,
  // getAddresses,
  // shortestPost,
  // numCompleted,
  // searchPosts,
};