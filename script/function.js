
const form = document.getElementById('postData');
form.addEventListener('submit', postDataFunc );

function postDataFunc(event) {
    event.preventDefault();
    const sucess = document.getElementById('sucesss');
    const userName = document.getElementById('name').value;
    const emailAddress = document.getElementById('email').value;
    const  phoneNumber = document.getElementById('phone').value;

    console.log("Hello " + emailAddress)
    
    const data = {name: userName,phone: phoneNumber,email: emailAddress ,isAuthenticated: "false"}
    fetch('http://127.0.0.1:3000/create', {
        method:'POST',
        headers: {
            'Accept':'application/json',
            'Content-Type': 'application/json'},
        body:JSON.stringify(data)
    }).then((res) => res.json())

    .then((data) => {
        console.log('sucess')
        sucess.style.display = 'inline'

    } )
    .catch((err)=> console.error('Error',err))


}