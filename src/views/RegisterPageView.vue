<template>
   <div class="singup">
              <div class="formulario">
                  <form>

                      <h1>Sign-in:</h1>

                      <label class="label_username">username</label>
                      <br>
                      <input class="username" type="text">
                      <br>
                      <label class="label_email">email</label>
                      <br>
                      <input class="email" type="email">
                      <br>
                      <label class="label_confirma_email">confirme o email</label>
                      <br>
                      <input class="confirma_email" type="email">
                      <br>
                      <label class="label_senha">senha</label>
                      <br>
                      <input class="senha" type="password">
                      <br>
                      <label class="label_confirma_senha">confirme sua senha</label>
                      <br>
                      <input class="confirma_senha" type="password">
                      <br>
                      <button class="criar">Criar Conta</button>

                      <p>Já tem uma conta? <a @click="$router.push('/login')">Fazer Login!</a></p>

                  </form>
              </div>
          </div>
</template>

<script setup>

</script>

<style scoped>
.singup{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 200px;
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

.criar {
    background-color: #f39c12;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 8px;
    font-size: 16px;
    cursor: pointer;
    margin-top: 15px;
    transition: background-color 0.3s ease-in-out;
    text-align: center;
}
.criar {
    border: 0px;
    margin-right: 8%;
    margin-top: 10px;
    border-radius: 11px;
    padding-left: 30px;
    padding-right: 30px;
}

.label_username {
    margin-right: 18%;
    color: white;
}

.label_email {
    margin-right: 24%;
    color: white;
}

.label_confirma_email {
    margin-right: 10%;
    color: white;
}

.label_senha {
    margin-right: 24%;
    color: white;
}

.label_confirma_senha {
    margin-right: 6%;
    color: white;
}

.username,
.email,
.confirma_email,
.senha,
.confirma_senha {
    border-radius: 11px;
    border: 0px;
    color: white;
}

</style>