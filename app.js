const fetch = require('node-fetch');

// get post json with post ID
async function getPostJSON(postID) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postID}`);
  const json = await response.json();
  return json
}
// console.log(getPostJSON(2))

// Question #1
async function getPost(number) {
  const posts = await getPostJSON(number);
  return posts
}


// get users json of all ten users
async function getUsersJSON() {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users`)
  const json = await response.json()
  return json
}
console.log(getUsersJSON());

// Question #2
async function getUsers() {
  const data = await getUsersJSON()
  return data.map(users => users.name)
}
// console.log(getUsers())

// Questions #3
async function getAddresses() {
  const data = await getUsersJSON()

  return data.map(users => {
    return `${users.address.street}, ${users.address.suite}, ${users.address.city}`
  })
}
// console.log(getAddresses())

// get all posts
async function getAllPostsJSON() {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts`)
  const json = await response.json()
  return json
}
console.log(getAllPostsJSON())

// Question #4
async function shortestPost() {
  const data = await getAllPostsJSON();
  const postBody = await data.map(posts => posts.body)
  return postBody.reduce((a, b) => a.length <= b.length ? a : b)
}
// console.log(shortestPost())

async function getTodosJSON() {
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos`)
  const json = await response.json()
  return json
}
console.log(getTodosJSON())

// Question #5
async function numCompleted() {
  const data = await getTodosJSON();
  return data.filter(todos => todos.completed)
}

// Question #6
async function searchPosts(searchWord) {
  const data = await getAllPostsJSON();
  return data.filter(posts => posts.body.includes(searchPosts))
}

// Question #7
// async function userArray(input) {
//   const userData = await getUsersJSON();
//   return userData.filter(users => users.name.includes(input))
// }
// console.log(userArray('Ervin'));

// const userForm = document.getElementById("user-search")

// userForm.addEventListener("submit", async(e) => {
//   e.preventDefault();

//   const userInput = userForm[0].value
//   const userdata = await userArray(userInput);
//   console.log(userdata[0].name)

//   let username = ""

//   if (userdata[0].name.includes(userInput)) {
//     username = userdata[0].name
//   }
//   console.log(username)

//   if (username) {
//     document.body.innerHTML += `
//     <table>
//       <thead>
//         <tr>
//           <th>name</th>
//         </tr>
//       </thead>
//       <tbody>
//         <tr>
//           <td>${userdata[0].name}</td>
//         </tr>
//       </tbody>
//     </table>  `
//   }
//   else {
//     document.body.innerHTML += '<p>No User Found</p>';
//   }
// })

module.exports = {
  getPost,
  getUsers,
  getAddresses,
  shortestPost,
  numCompleted,
  searchPosts,
};
