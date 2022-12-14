<template>
    <div class="container">
        <!-- Fonte -->
        <div class="fontePadrao">
            <link rel="preconnect" href="https://fonts.googleapis.com">
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">        
        </div>
        <!-- Formulario de Login -->
        <form id="formularioDeLogin" class="bordaEstilizada" @submit="botaoDeLogin">
            <!-- SISGHA Logomarca -->
            <div class="logomarca">
                <img src="@/assets/SisghaLogo1.svg" alt="SISGHA">
            </div>

            <!-- Inserir Matricula -->
            <input id="inserirMatricula" class="inputEstilizado bordaEstilizada" type="text" placeholder="Matrícula">

            <!-- Inserir Senha -->
            <div class="inputDeSenha">
                <input id="inserirSenha" class="inputEstilizado bordaEstilizada" :type="visualizarSenha" placeholder="Senha">
                <!-- Visualizar e Ocultar Senha -->
                <div class="modoDeVisualizarSenha" @click="alterarInput()">
                    <img class="iconeVisualizarSenha" src="@/assets/EyeOn.svg" alt="Mostrar senha" v-if="tipoDeSenha">
                    <img class="iconeEsconderSenha" src="@/assets/EyeOff.svg" alt="Esconder senha" v-else>
                </div>
            </div>

            <!-- Botao de Login -->
            <button id="botaoDeLogin" class="bordaEstilizada" type="submit">
                <h3>Entrar</h3>
            </button>

            <!-- Botao de Recuperar Senha -->
            <p class="recuperarSenha">
                Esqueceu a senha? <span id="botaoRecuperarSenha">Clique aqui</span>.
            </p>
        </form>

        <!-- Login Aluno -->
        <nuxt-link to="/">
            <div class="cartaoDoAluno bordaEstilizada">
                <div class="iconeDoAluno">
                    <img class="iconeDeUsuario" src="@/assets/UserIcon.svg" alt="Icone de Usuário">
                </div>
                <div class="divider"></div>
                <div class="descricaoDoCartao">
                    <p class="fonte textoDoCartao">Entrar como aluno.</p>
                </div>
            </div>
        </nuxt-link>

        <!-- Detalhes de Fundo -->
        <div class="mancha1"></div>
        <div class="mancha2"></div>

    </div>

</template>

<script>
    import "@/assets/styles/fontePadrao.css"
    import "@/assets/styles/inputEstilizado.css"
    import "@/assets/styles/bordaEstilizada.css"
    import "@/assets/styles/botaoEstilizado.css"

    export default {
        name: "TelaDeEntrar",
        data() {
            return {
                visualizarSenha: "password"
            }
        },
        computed: {
            tipoDeSenha() {
                return this.visualizarSenha === "password"
            }
        },
        methods: {
            alterarInput() {
                this.visualizarSenha = this.tipoDeSenha ? "text" : "password"
            }
        }
    }
</script>

<style scoped>
    * {
        margin: 0;
        padding: 0;
    }
    
    .container {
        display: flex;
        flex-direction: column;

        width: 100vw !important;
        height: 100vh !important;

        justify-content: center;
        align-items: center;
    }
    /* Formulario */
    #formularioDeLogin {
        display: flex;
        flex-direction: column;
        background-color: #fff;
        height: 425px;

        transform: translateY(-3vh);

        padding-top: 7.5px;
        padding-bottom: 7.5px;

        justify-content: center;
        align-items: center;
    }

    /* Logomarca */
    .logomarca {
        display: flex;
        position: relative;

        width: 50%;
        height: 18%;

        justify-content: center;
        align-items: center;

        margin-bottom: 5%;
    }
    .logomarca img {
        width: 100%;
        height: 100%;
    }

    /* Estilizacao de Input */
    .inputEstilizado {
        height: 60px !important;
    }
    .inputDeSenha {
        display: flex;
        flex-direction: row;

        justify-content: center;
        align-items: center;

        margin-top: 5%;
    }

    .modoDeVisualizarSenha {
        display: flex;
        position: absolute;
        z-index: 10;

        width: 22px;
        height: 20px;
    }

    /* Botao de Login */
    #botaoDeLogin {
        background-color: #39A048;
        height: 60px !important;
        margin-top: 5%;
    }

    /* Recuperar Senha */
    .recuperarSenha {
        margin-top: 3%;
        color: #8ea591;
    }
    .recuperarSenha span {
        color: #39A048;
    }

    /* Entrar como Aluno */
    .cartaoDoAluno {
        display: flex;
        flex-direction: row;
        background-color: #39A048;

        height: 45px;

        align-items: center;
    }
    .descricaoDoCartao {
        display: flex;
        width: 100%;
        height: 100%;
        justify-content: center;
        align-items: center;
    }
    .cartaoDoAluno p {
        color: #fff;
    }
    .cartaoDoAluno .divider {
        width: 3px;
        height: 100%;
        background-color: #fff;
    }
    .cartaoDoAluno .iconeDoAluno {
        display: flex;
        width: 13%;
        height: 100%;
        justify-content: center;
        align-items: center;
    }
    
    /* Detalhes de Fundo */
    .mancha1,
    .mancha2 {
        display: flex;
        position: absolute;
        z-index: -1;
        
        width: 25vw;
        height: 40vh;

        background-color: #D9E5DF;
    }

    .mancha1 {
        left: 0;
        top: 0;
    }
    .mancha2 {
        right: 0;
        bottom: 0;
    }
    

    /* --- Versao Desktop --- */
    @media (min-width: 1000px) {
        #formularioDeLogin {
            width: 28vw;
        }

        /* Estilizacao de Inputs */
        .inputEstilizado {
            width: 19vw;
        }
        .inputDeSenha {
            width: 75%;
        }
        .modoDeVisualizarSenha {
            right: 20%;
        }

        /* Botao de Login */
        #botaoDeLogin {
            width: 20.8vw;
            height: 8vh;
            background-color: #39A048;
            margin-top: 5%;
        }

        /* Entrar como Aluno */
        .cartaoDoAluno {
            width: 28vw;
        }
        /* Detalhes de Fundo */
        .mancha1 {
            border-radius: 0 0 75% 0;
        }
        .mancha2 {
            border-radius: 75% 0 0  0;
        }
    }

    /* --- Versao Movel --- */
    @media (max-width: 992px) {
        #formularioDeLogin {
            width: 90vw;
        }

        /* Estilizacao de Inputs */
        .inputEstilizado {
            width: 70vw;
        }
        .inputDeSenha {
            width: 100%;
        }
        .modoDeVisualizarSenha {
            right: 16%;
        }

        /* Botao de Login */
        #botaoDeLogin {
            width: 75vw;
        }

        /* Entrar como Aluno */
        .cartaoDoAluno {
            width: 90vw;
        }

        /* Detalhes de Fundo */
        .mancha1 {
            border-radius: 0 0 40% 0;
        }
        .mancha2 {
            border-radius: 40% 0 0  0;
        }
    }
</style>