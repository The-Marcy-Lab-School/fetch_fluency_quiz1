# Code Fluency Quiz: Fetch API + Asynchronous HTTP Requests

## Directions
For the following questions, use the [JSON Placeholder API](https://jsonplaceholder.typicode.com).
Because we are testing in Node, we will be using the `node-fetch` module. This will allow us to use the `window.fetch` function in Node as we typically do in the browser. We import this module on line 1 of `app.js`. 

Install necessary dependencies with `npm install`. Write your solutions to the problem below in `app.js`. Test your solutions with `npm test`.

## 

1. Write a function, `getPost`, that makes a GET request to the `/posts` route and returns a **Promise** that resolves to a parsed JSON object that corresponds to the user post with the given `id`:
  ```js
  getPost(2);
  /* returns
  {
    userId: 1,
    id: 2,
    title: "qui est esse",
    body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
  }
  */
  ```

2. Write a function, `getUsers`, that returns a Promise that resolves to an array of the first and last names of all ten users.

3. Write a function, `getAddresses`, that returns a Promise that resolves to an array of all user addresses. Addresses should be formatted as comma separated strings containing the `"street"`, `"suite"`, and `"city"` in that order.

4. Write a function, `shortestPost`, that returns a Promise that resolves to the user post object with the shortest body.

5. This database has 200 `todos`. Write a function called `numCompleted` returns a Promise that resolves to the number of tasks that are marked complete.

6. Write a function called `searchPosts` that takes a string argument (`searchWord`) and returns a Promise that resolves to an array containing all of the posts have the search word in the body of the post.

7. In the `index.html` file, create a form with a text input and a submit button. When you submit a users name (first or last), the text input should clear and a table with the user's data should appear below the form. If no user is found, a message saying, "No User Found" should appear below the form.
