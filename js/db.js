let user = [];

function login() {
  const userName = document.getElementById("log-username").value;
  const password = document.getElementById("log-password").value;

  const users = user.find(
    (u) => u.userName === userName && u.password === password
  );

  if (users) {
    alert("¡Inicio de sesión exitoso!");
  } else {
    alert("Nombre de usuario o contraseña incorrectos.");
  }
}

function register() {
  const fullname = document.getElementById("reg-fullname");
  const mail = document.getElementById("reg-mail");
  const userName = document.getElementById("reg-username");
  const password = document.getElementById("reg-password");

  if (fullname && userName && (mail && password) !== "") {
    const newUser = {
      fullname: fullname,
      userName: userName,
      mail: mail,
      password: password,
    };

    user.push(newUser);
    alert("¡Registro exitoso! Por favor, inicia sesión.");
  } else {
    alert("Por favor, ingrese los campos completos.");
    z;
  }
}
