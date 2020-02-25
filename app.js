const fetch = require('node-fetch');

const requestMethod = (method, url , data) => {
	return fetch(url, {
		method: method,
		body: JSON.stringify(data),
		headers: data ? {'Content-Type': 'application/json'} : {},
	})		
};

const getPost = async(id) =>{
  const getData = await requestMethod('GET',`https://jsonplaceholder.typicode.com/posts/${id}`);
  const response = await getData.json();
  return response;
};


const getUsers = async() =>{
  const getData = await requestMethod('GET','https://jsonplaceholder.typicode.com/users');
  const response = await getData.json();
  const results = response.forEach((user)=> user.name);
  return results;
};


const getAddresses = async() =>{
  const getData = await requestMethod('GET','https://jsonplaceholder.typicode.com/users');
  const response = await getData.json();
  const results = response.forEach((user)=> `${user.address.street} ${user.address.suite} ${user.address.city}`);
  return results;
};

const shortestPost = async() =>{
  const getData = await requestMethod('GET','https://jsonplaceholder.typicode.com/posts') ;
  const response =  await getData.json() ;
  const shortestPost = response.reduce((a,b)=>{
    return a.length < b.length ? a : b ;
  });
  return shortestPost;
};

const numCompleted = async () => {
  const getData = await requestMethod('GET','https://jsonplaceholder.typicode.com/todos');
  const respone = await getData.json();
  const completedTasks = respone.filter((task)=> task.completed);
  return completedTasks;
};

const searchPosts = async (searchWord) => {
  const getData = await requestMethod('GET',`https://jsonplaceholder.typicode.com/posts=${searchWord}`);
  const respone = await getData.json();
  const results = respone.filter((user) =>{
    if(user.body.includes(searchWord)){
      return searchWord
    }
  });
  return results
  
}

const form = document.getElementById('form');
form.addEventListener('submit', async (e)=>{
  e.preventDefault()
  
  const username = form.username.value
  const getData = await requestMethod('GET','https://jsonplaceholder.typicode.com/users');
  let response = await getData.json();
  const results = response.map((users) =>{
    return {
      name: users.name,
      username: users.username
    };
  });
  console.log(response)
  const foundUser = results.find(function(user) {
    return user.name.split(' ').includes(username);
  });
  
  
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
    document.body.innerHTML += `<p>No User Found</p>`;
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