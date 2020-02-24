const fetch = require('node-fetch');

const baseUrl = "https://jsonplaceholder.typicode.com";

const genericReq = async(route) => {
  const req = await fetch(baseUrl + route);
  const json = await req.json();
  return json;
};

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

module.exports = {
  getPost,
  getUsers,
  getAddresses,
  shortestPost,
  numCompleted,
  searchPosts,
};

const form = document.getElementById('nameSearchForm');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const desiredUserName = form.nameInput.value;
  let json = await genericReq('/users');
  json = json.map(
    function(user){
      return {
        name: user.name,
        username: user.username,
        email: user.email,
        address: user.address.street + user.address.suite + user.address.city,
        phone: user.phone,
        website: user.website
      };
    });
  const foundUser = json.find(function(user) {
    return user.name.split(' ').includes(desiredUserName);
  });

  console.log(foundUser);

  if (foundUser) {
    document.body.innerHTML += `
    <table>
      <thead>
        <tr>
          <th colspan="2">${foundUser.name}</th>
        </tr>
      </thead>
      <tbody id="userDataBody">
      </tbody>
    </table>
    `;

    for (const prop in foundUser){
      document.getElementById('userDataBody').innerHTML += `
      <tr>
      <td>${prop}</td>
      <td>${foundUser[prop]}</td>
      </tr>
      `;
    }

  } else {
    document.body.innerHTML += '<p>No User Found</p>';
  }

})