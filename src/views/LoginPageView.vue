<template>
 
                <div class="formularioLogin">
                    <form>

                        <h1>Log-in:</h1>

                        <label class="label_usernameL">username</label>
                        <br>
                        <input class="usernameL" type="text">
                        <br>
                        <label class="label_senhaL">senha</label>
                        <br>
                        <input class="senhaL" type="password">
                        <br>
                        <button class="entrarL">Entrar</button>
                    </form>
                    <p class="loginB">Ainda não tem cadastro? <a @click="$router.push('/cadastro')">Cadastre-se!</a></p>
                </div>
</template>

<script setup>

</script>

<style scoped>
.formularioLogin{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 200px;
}

.entrarL {
    background-color: #f39c12;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 8px;
    font-size: 16px;
    margin-top: 15px;
    margin-left: 38%;
}

.label_usernameL,
.usernameL,
.label_senhaL {
    text-align: left;
    color: white;
}

.loginB {
    text-align: center;
}

h1 {
     text-align: center;
    padding-top: 10px;
    margin-top: 5%;
    color: #f39c12;
    font-size: 24px;
    margin-bottom: 20px;
}

label {
    font-size: 18px;
    margin: 10px;
    color: #333;
}

input {
    width: 20vw;
    padding: 10px;
    border: 1px solid #aca9a9;
    border-radius: 3px;
    font-size: 16px;
    margin: 5px;
    transition: border-color 0.3s ease-in-out;
}

input:focus {
    border-color: #f39c12;
}

button:hover {
    background-color: #e68a0e;
}

form {
    background-color: #231f1e;
    width: 25vw;
    color: white;
    border-radius: 20px;
    border-color: #ffc107;
    padding: 20px;
}
</style>
