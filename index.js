const form = document.getElementById('form');

async function searchUser(userInput){
  const url = 'https://jsonplaceholder.typicode.com/users';
  const response = await fetch(url);
  const users = await response.json();
  
  const user =  users.filter(user => user.name.includes(userInput))[0];
  
  return user;
}


function displayUser(e){
    e.preventDefault();
    
    const userSec = document.getElementById('user');
    const table = document.createElement('table');
    userSec.appendChild(table);
    
    const input = form.userInput.value;
    
    searchUser(input).then(user => {
        for (let prop in user) {
          const tr = document.createElement('tr');
          const td1 = document.createElement('td');
          const td2 = document.createElement('td');
          
          table.appendChild(tr);
          tr.appendChild(td1);
          tr.appendChild(td2);
          
          td1.innerText = prop;
          td2.innerText = user[prop];
          
        }
    });
    
    form.userInput.value = '';
}

form.addEventListener('submit', displayUser);



