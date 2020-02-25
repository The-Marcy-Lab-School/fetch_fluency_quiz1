import "getReq";

const form = document.getElementById('nameSearchForm');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const desiredUserName = form.name.value;
  let data = await getReq('/users');
  data = data.map(
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

  const foundUser = data.find(function(user) {
    return user.name.split(' ').includes(desiredUserName);
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