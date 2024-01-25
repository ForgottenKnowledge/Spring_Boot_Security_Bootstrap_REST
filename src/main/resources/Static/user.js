const url = 'http://localhost:8080/rest/user'
let loggedInUser = document.querySelector('#User');
let loggedUser = document.querySelector('#navBarUser')

// Информация о пользователе

fetch(url)
    .then(res => res.json())
    .then(data => {
        loggedUser.innerHTML = `<span class="align-middle font-weight-bold mr-1">${data.name}  </span></b>
                <span class="align-middle mr-1">with roles:  </span>
                <span>  ${data.roles.map(role => role.name === 'ROLE_USER' ? 'USER' : 'ADMIN')}</span>`;
        loggedInUser.innerHTML = `
                                <td>${data.id}</td>
                                <td>${data.name}</td>
                                <td>${data.lastName}</td>
                                <td>${data.age}</td>
                                <td>${data.phone}</td>
                                <td>${data.roles.map(role => role.name === 'ROLE_USER' ? 'USER' : 'ADMIN')}</td>
                                `;
    })