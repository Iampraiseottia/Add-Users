const name = document.getElementById('name');
const email = document.getElementById('email');
const message = document.querySelector('.message');
const userList = document.getElementById('users');
const form = document.querySelector('.add');

form.addEventListener('submit', onSubmit);
function onSubmit(e){
    e.preventDefault();
    var error = document.getElementById('error');

    if(name.value === '' || email.value === ''){
        console.error('Please fill in the Fields!');
        error.innerHTML = '<h4>Please fill in the fields</h4>';
        error.style.color = 'red';
        error.style.marginTop = '-10px';
        error.style.marginBottom = '-60px';
        setTimeout(() => error.remove(), 4000);
    }
    else{
        const listUsers = document.createElement('li');
        listUsers.appendChild(document.createTextNode(`${name.value} : ${email.value}`));
        userList.appendChild(listUsers);
        name.value = '';
        email.value = '';
        listUsers.style.listStyle = 'none';
        listUsers.style.marginTop = '20px';
        listUsers.style.height = '30px';
        listUsers.style.background = 'lightcyan';
        listUsers.style.padding = '10px';
        listUsers.style.width = 'auto';
        listUsers.style.color = 'black';
        listUsers.style.fontWeight = '600';
        listUsers.style.marginBottom = '10px';
    }
}