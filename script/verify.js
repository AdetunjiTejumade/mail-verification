const verify = document.getElementById('verify');
const sucess = document.getElementById('sucesss');
const fail = document.getElementById('danger');


const verifyEmail = (event) => {
    event.preventDefault()
    const code = document.getElementById('code').value;

    fetch('http://localhost:3000/verify?authKey=' + code + '')
    .then((res) => {return res.json()})
    .then((data) => {
        sucess.style.display ='inline'
    }).catch(err=>{
        fail.style.display = 'inline'
    })
}
verify.addEventListener('submit',verifyEmail )