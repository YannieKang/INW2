var currentUser;

function createLogin(){
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    firebase.auth().createUserWithEmailAndPassword(email, password).then(user=>{
        console.log('Usuario', user);
        alert('Usuario criado e feito o loging');
    }).catch(err =>{
        console.log('erro', err);
    });

}

function loginEmail(){
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    firebase.auth().signInWithEmailAndPassword(email,password).then(()=>{
        alert('Usuario logado!!!');
    }).catch(err =>{
        console.error('Error', err)
    });
}



function deletaUsuario(){
    currentUser = firebase.auth().currentUser;
    if(currentUser){
        currentUser.delete().then(()=>{
        alert('Usuario excluido');
        })
    }
}