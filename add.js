const name = document.getElementById('name');
const email = document.getElementById('email');
const userList = document.getElementById('users');
const form = document.querySelector('.add');
const userName = document.getElementById('User-Name');
const phoneNumber = document.getElementById('Phone-Number');
const country = document.getElementById('Country');
const zipCode = document.getElementById('Zip-Code');

form.addEventListener('submit', onSubmit);
function onSubmit(e){
    e.preventDefault();
    var error = document.getElementById('error');

    if(name.value === '' || email.value === '' || userName.value === '' || phoneNumber.value === '' || country.value === '' || zipCode.value === ''){
        console.error('Please fill in the Fields!');
        error.innerHTML = '<h4>Please fill in the fields</h4>';
        error.style.color = 'white';
        error.style.marginTop = '10px';
        error.style.marginBottom = '15px';
        error.style.background = 'red';
        error.style.height = '25px';
        error.style.padding = '15px 20px';
        error.style.marginLeft = '180px';
        error.style.marginRight = '150px';

        setTimeout(() => error.remove(), 4000);
    }
    else{
        const listUsers = document.createElement('li');
        listUsers.appendChild(document.createTextNode(`${name.value.toUpperCase()} : ${email.value.toLowerCase()},  ${userName.value.toUpperCase()} : ${country.value.toUpperCase()}, ${zipCode.value} ${phoneNumber.value}`));
        userList.appendChild(listUsers);

        name.value = '';
        email.value = '';
        phoneNumber.value = '';
        country.value = '';
        zipCode.value = '';
        userName.value = '';

        listUsers.style.listStyle = 'none';
        listUsers.style.marginTop = '20px';
        listUsers.style.height = '45px';
        listUsers.style.background = 'lightcyan';
        listUsers.style.padding = '10px 200px';
        listUsers.style.width = 'auto';
        listUsers.style.color = 'black';
        listUsers.style.fontWeight = '600';
        listUsers.style.marginBottom = '10px';
        listUsers.style.letterSpacing = '1.5px';
    }
}