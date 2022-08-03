<template>
    <!-- Fontes -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap" rel="stylesheet">
    
    <!-- Tela de login -->
    <main>
        <div class="container">
            <div class="cadastro">
                <h2 class="fonte titulo">BEM-VINDO!</h2>
                <!-- Matricula -->
                <input class="fonte inserirMatricula" type="text" placeholder="Matrícula">

                <!-- Senha -->
                <div class="inputDeSenha">
                    <input :type="inputType" class="fonte inserirSenha" placeholder="Senha">
                    <!-- Botão de visualizar senha -->
                    <div class="modoDeVisualizarSenha" @click="togglePassword()">
                        <img class="iconeVisualizarSenha" src="../assets/EyeOn.svg" alt="Mostrar senha" v-if="isPassword">
                        <img class="iconeEsconderSenha" src="../assets/EyeOff.svg" alt="Esconder senha" v-else>
                    </div>
                </div>

                <!-- Botão de login -->
                <button class="botaoDeLogin">
                    <h3 class="fonte">Entrar</h3>
                </button>

                <!-- Esqueceu a senha -->
                <p class="fonte recuperarSenha">
                    Esqueceu a senha? <span class="botaoRecuperarSenha">Clique aqui</span>.
                </p>
            </div>

            <!-- Botão de login do aluno -->
            <div class="cartaoDoAluno">
                <div class="iconeDoAluno">
                    <img class="iconeDeUsuario" src="../assets/UserIcon.svg" alt="Icone de Usuário">
                </div>
                <div class="divider"></div>
                <div class="descricaoDoCartao">
                    <p class="fonte textoDoCartao">Caso seja um aluno, clique aqui.</p>
                </div>
            </div>

            <!-- Logo do IFRO -->
            <div class="logoDoIFRO">
                <img class="logoIFROJipa" src="../assets/LogoIFROJipa.svg" alt="Logotipo do IFRO - Campus Ji-Paraná">
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
.container {
    width: auto;
    height: auto;

    display: flex;
    flex-direction: column;
}
/* Definição da fonte */
.fonte {
        font-family: 'Inter', sans-serif;
}

/* Caixa de login */
    .cadastro {
        display: grid;
        justify-content: center;

        width: 417px;
        height: 350px;

        z-index: 1;
        position: relative;

        margin-left: auto;
        margin-right: auto;
        margin-top: 15%;
        padding-top: 30px;
        
        border-radius: 9px;
        box-shadow: 0 0 5px #00000025;

        background-color: rgb(255, 255, 255);
    }

    /* Matricula e Senha*/
    .inserirMatricula, .inserirSenha {
        height: 50px;

        border-style: none;
        border-radius: 9px;
        box-shadow: 0 0 5px #00000025;

        text-align: left;
        font-weight: 500;

        padding-left: 25px;
        outline: 0;
    }
    .inserirMatricula {
        width: 250px;
    }

    /* Icone de senha */
    .modoDeVisualizarSenha{
        width: 26px;
        height: 18px;

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
    /* Senha Input */
    .inserirSenha {
        width: 215px;
        position: relative;
        right: 8px;
    }
    .inputDeSenha {
        display: flex;
        justify-content: center;
        justify-items: center;
    }

    /* Botao de Login */
    .botaoDeLogin {
        width: 280px;
        height: 50px;

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
    
    /* Cartao do Aluno */
    .cartaoDoAluno {
        width: 417px;

        z-index: 2;
        position: relative;
        display: inline-flex;

        margin-top: 50px;

        cursor: pointer;
    }
    .iconeDoAluno,
    .descricaoDoCartao {
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
        width: 365px;
        height: 45px;

        margin-right: 1.5px;
    }
    .textoDoCartao {
        color: white;

        margin-top: 13px;
        margin-bottom: 13px;
        margin-left: 50px;
    }

    /* Logo do IFRO */
    .logoDoIFRO,
    .logoIFROJipa {
        display: flex;

        width: 230px;
        height: 52px;

        position: relative;
        top: 10px;
        left: 320px;
    }
</style>