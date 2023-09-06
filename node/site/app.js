const firebaseConfig = {
  apiKey: "AIzaSyBrSgGDvHpdRQv3axcgg_tAWD6eCJinzzs",
  authDomain: "projeto2mibteste-a6649.firebaseapp.com",
  projectId: "projeto2mibteste-a6649",
  storageBucket: "projeto2mibteste-a6649.appspot.com",
  messagingSenderId: "40650118360",
  appId: "1:40650118360:web:b61682ba372cb60820f3ad"
};

  firerbase.initializeAoo(firebaseConfig);

  function logout(){
    firebaseConfig.auth().signOut().then(()=>{
      alert("Usuario deslogado");
    })
  }

  const emailField = document.getElementById('email');
  const passwordField = document.getElementById('password');
  const loginButton = document.getElementById('loginButton');

  loginButton.addEventListener('click', ()=>{
    const email = emailField.value;
    const password = passwordField.value;

    firebaseConfig.auth().signinWithEmailAndPassword(email, password)
    .then((userCredential) =>{
        //Usuario logado com sucesso
        const user = userCredential.user;
        console.log('Usuário logado:',user);
    })
    .catch((error)=>{
        //Tratar erros de autentificação
        const errorMessage = error.message;
        console.error('Erro de autentificação:',errorMessage);
    });
  });