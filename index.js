//Objeto de usuários
let users = {
    name: "",
    user: "",
    password: "",
    logged: false
}

//Array de objetos dos usuários
let usersSignIn = []

function startApp() {
    let option = ""
    while (option !== "4") {
        let result = 
        option = prompt("Selecione a opção desejada:" +
            "\n\n1) Entrar:" +
            "\n2) Cadastrar usuário:" +
            "\n3) Esqueci minhas credencias:" +
            "\n4) Sair:")

        switch (option) {
            case "1":
                result = login()
                if(result) {
                    alert("Login realizado com sucesso!")
                } else {
                    alert("Usuário ou senha incorretos!")
                }
                break
            case "2":
                result = register();
                if(!result) {
                    alert("Não foi possível realizar o cadastro!")
                } else {
                    alert("Usuário cadastrado com sucesso! 👍")
                }
                break
            case "3":
                break
            case "4":
                alert("Encerrando...")
                break
            default:
                alert("Selecione uma opção válida!")
                break
        }
    }
}

//Validando o usuário
function validateLogin(login, passwordSingIn) {
    let result = false
    for(let i = 0; i  < usersSignIn.length; i++) {
        console.log(usersSignIn[i])
        if(usersSignIn[i].user === login && usersSignIn[i].password === passwordSingIn){
            result = true
            usersSignIn[i].logged = true
        }   
    }
    return result
}

//Login usuário
function login() {
    let login          = prompt("Digite seu usuário:")
    let passwordSingIn = prompt("Sua senha:")

    return validateLogin(login, passwordSingIn)
}

//Registrar usuário
function register(){
    let result = false

    users.name     = prompt("Nome:");
    users.user     = prompt("Usuário:");
    users.password = prompt("Senha:");
    
    if(users.name !== "" && users.password !== ""){
        usersSignIn.push(users);
        result = true
    }

    return result 
}

//Inicia o sistema
startApp();

