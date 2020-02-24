const fetch = require('node-fetch');

const baseUrl = "https://jsonplaceholder.typicode.com";

const getPost = async (id) => {
  return genericReq('/posts/' + id);
};

const getUsers = async() => {
  const json = await genericReq('/users');
  return json.map(function(user){return user.name});
};

const getAddresses = async() => {
  const json = await genericReq('/users');
  return json.map(function(user){
    const address = user.address;
    return address.street + address.suite + address.city;
  });
};

const shortestPost = async() => {
  const json = await genericReq('/posts');
  return json.sort(function(a, b){ return b - a})[0];
};

const numCompleted = async() => {
  let json = await genericReq('/todos');
  json = json.filter(function(task){return task.completed});
  return json.length;
};

const searchPosts = async(word) => {
  let json = await genericReq('/posts');
  return json.filter(function(post){return post.body.includes(word)});
};

async function genericReq(route) {
  const req = await fetch(baseUrl + route);
  const json = await req.json();
  return json;
}

module.exports = {
  getPost,
  getUsers,
  getAddresses,
  shortestPost,
  numCompleted,
  searchPosts,
};