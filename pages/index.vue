<template>
    <!-- Fontes -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap" rel="stylesheet">
    
    <main>
        <div class="container1">
            <div class="conteudo">
                <!-- Login Professor / DAPE -->
                <div class="cadastro">
                    <div class="logo">
                        <img src="@/assets/SisghaLogo1.svg" alt="SISGHA">
                    </div>
                    <!-- Matricula -->
                    <input class="fonte inserirMatricula" type="text" placeholder="Matrícula">
    
                    <!-- Senha -->
                    <div class="inputDeSenha">
                        <input :type="inputType" class="fonte inserirSenha" placeholder="Senha">
                        <!-- Botão de visualizar senha -->
                        <div class="modoDeVisualizarSenha" @click="togglePassword()">
                            <img class="iconeVisualizarSenha" src="@/assets/EyeOn.svg" alt="Mostrar senha" v-if="isPassword">
                            <img class="iconeEsconderSenha" src="@/assets/EyeOff.svg" alt="Esconder senha" v-else>
                        </div>
                    </div>
    
                    <!-- Botão de login -->
                    <a href="./curso">
                        <button class="botaoDeLogin">
                                <h3 class="fonte">
                                    Entrar
                                </h3>
                        </button>
                    </a>
    
                    <!-- Esqueceu a senha -->
                    <p class="fonte recuperarSenha">
                        Esqueceu a senha? <span class="botaoRecuperarSenha">Clique aqui</span>.
                    </p>
                </div>
    
                <!-- Login Aluno -->
                <div class="cartaoDoAluno">
                    <div class="iconeDoAluno">
                        <img class="iconeDeUsuario" src="@/assets/UserIcon.svg" alt="Icone de Usuário">
                    </div>
                    <div class="divider"></div>
                    <div class="descricaoDoCartao">
                        <p class="fonte textoDoCartao">Caso seja um aluno, clique aqui.</p>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
    export default {
        // Exportar para "App"
        name: 'TelaDeEntrar',
        // Codigo
        data() {
            return {
                inputType: 'password',
            }
        },
        computed: {
            isPassword() {
                return this.inputType === 'password';
            }
        },
        methods: {
            togglePassword() {
                this.inputType = this.isPassword ? 'text' : 'password';
            }
        }
    }
</script>

<style>
* {
    margin: 0;
}
main {
    display: grid;
    justify-content: center;
    justify-items: center;
}
.container1 {
    width: 100vw;
    height: 100vh;
    
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
/* Definição da fonte */
.fonte {
        font-family: 'Inter', sans-serif;
}

/* Cofigurar Conteudo*/
    .conteudo {
        display: flex;
        flex-direction: column;

        margin-left: auto;
        margin-right: auto;

        justify-content: center;
        justify-items: center;



    }

/* Caixa de login */
    .cadastro {
        display: flex;
        flex-direction: column;
        justify-content: center;

        width: 380px;
        height: 350px;

        padding-top: 10px;
        
        border-radius: 9px;
        box-shadow: 0 0 5px #00000025;

        background-color: rgb(255, 255, 255);
    }

    /* Logomarca */
    .logo,
    .logo img{
        display: flex;

        width: 200px;
        height: 70px;

        margin-left: auto;
        margin-right: auto;
    }
    .logo {
        margin-bottom: 20px;
    }

    /* Matricula e Senha*/
    .inserirMatricula, 
    .inserirSenha {
        height: 50px;
        width: 250px;

        border-style: none;
        border-radius: 9px;
        box-shadow: 0 0 5px #00000025;

        text-align: left;
        font-weight: 500;

        padding-left: 25px;
        outline: 0;
    }
    .inserirMatricula {
        margin-bottom: 15px;
    }
    .inputDeSenha {
        width: 276px;
    }
    
    /* Icone de senha */
    .modoDeVisualizarSenha{
        width: 26px;
        height: 18px;

        transform: translate(235px, -50px);

        position: relative;
        top: 18px;

        justify-content: center;
        justify-items: center;

        cursor: pointer;
    }
    .iconeVisualizarSenha {
        width: 26px;
        height: 18px;
    }
    .iconeEsconderSenha {
        width: 26px;
        height: 18px;
    }

    /* Botao de Login */
    .botaoDeLogin {
        width: 275px;
        height: 50px;

        margin-top: 5px;
        margin-bottom: 15px;

        border-style: none;
        border-radius: 9px;
        box-shadow: 0 0 5px #00000025;

        background-color: #39A048;

        cursor: pointer;

        transition-timing-function: ease-in-out;
        transition: all 500ms;
    }
    .botaoDeLogin h3 {
        font-weight: 600;
        color: white;
    }
    .botaoDeLogin:hover {
        background-color: #3AD250;

        cursor: pointer;

        transition: all 500ms;
    }

    /* Recuperar Senha */
    .titulo, .recuperarSenha {
        text-align: center;

        cursor: default;
    }
    .recuperarSenha {
        color: #757575;
    }
    .botaoRecuperarSenha {
        color: #39A048;

        cursor: pointer;

        transition-timing-function: ease-in-out;
        transition: all 500ms;
    }
    .botaoRecuperarSenha:hover {
        color: #3AD250;

        cursor: pointer;

        transition: all 500ms;
    }

    /* Ajustes do Cartao */
    .inserirMatricula,
    .inputDeSenha,
    .cadastro a {
        margin-left: auto;
        margin-right: auto;
    }
    
    /* Cartao do Aluno */
    .cartaoDoAluno {
        display: flex;
        width: 380px;

        margin-top: 40px;

        cursor: pointer;
    }
    .iconeDoAluno,
    .descricaoDoCartao {
        display: flex;
        background-color: #39A048;

        transition-timing-function: ease-in-out;
        transition: all 500ms;
    }
    .descricaoDoCartao:hover {
        background-color: #3AD250;

        transition: all 500ms;
    }
    .iconeDoAluno {
        width: 45px;
        height: 45px;

        margin-left: 1.5px;
    }
    .iconeDeUsuario {
        width: 25px;
        height: 25px;

        margin-left: 10px;
        margin-right: 10px;
        margin-top: 9px;
        margin-bottom: 9px;
    }
    .divider {
        width: 4px;
        height: 45px;

        background-color: white;
    }
    .descricaoDoCartao {
        width: 335px;
        height: 45px;

        margin-right: 1.5px;
    }
    .textoDoCartao {
        color: white;

        margin-top: 13px;
        margin-bottom: 13px;
        margin-left: 50px;
    }
</style>