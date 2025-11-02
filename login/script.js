// script.js
document.getElementById("loginBtn").addEventListener("click", () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      document.getElementById("msg").innerText = "Login bem-sucedido!";
      console.log("Usuário:", userCredential.user);

      window.location.href = "main/main.html"
    })
    .catch((error) => {
      document.getElementById("msg").innerText = "Erro: " + error.message;
    });
}


);
