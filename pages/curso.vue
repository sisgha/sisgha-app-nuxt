<template>
    <div id="" class="container darkmodeOff">
        <!-- Fonte -->
        <div class="fontePadrao">
            <link rel="preconnect" href="https://fonts.googleapis.com">
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">        
        </div>

        <!-- Curso Index -->
        <div class="cursoIndex">
            <caixaDeCursos></caixaDeCursos>
            <!-- Botao de Cadastrar e Excluir Curso -->
            <div class="botoes">
                <button id="botaoDeCadastro" class="botao botaoDeCadastro bordaEstilizada" @click="cadastrarNovoCurso">
                    <h3>Cadastrar Curso</h3>
                </button>
                <div class="dividerBotoes"></div>
                <button id="botaoDeExcluir" class="botao botaoDeExcluir bordaEstilizada">
                    <h3>Excluir Curso</h3>
                </button>
            </div>
        </div>

        <!-- Formulario de Cadastro de Curso -->
        <div class="cursoCadastro" v-show="abrirCadastroDeCurso">
            <cadastroDeCurso/>
        </div>

        <!-- Formulario de Edicao de Curso -->
        <div class="cursoEdicao" v-show="abrirEdicaoDeCurso">
            <edicaoDeCurso/>
        </div>

    </div>
</template>

<script>
    import "@/assets/styles/fontePadrao.css"
    import "@/assets/styles/bordaEstilizada.css"
    import "@/assets/styles/botaoEstilizado.css"

    import caixaDeCursos from "~~/components/caixaDeCursos/caixaDeCursos.vue"
    import cadastroDeCurso from "~~/components/formulariosDeCadastro/cadastroDeCurso.vue"
    import edicaoDeCurso from "~~/components/formulariosDeEdicao/edicaoDeCurso.vue"

    export default {
        name: 'TelaDeCursos',
        head: {
            title: "SISGHA - Cursos"
        },
        components: {
            caixaDeCursos,
            cadastroDeCurso,
            edicaoDeCurso
        },
        data() {
            return {
                abrirCadastroDeCurso: false,
                abrirEdicaoDeCurso: false
            }
        },
        methods: {
            cadastrarNovoCurso() {
                if (this.abrirCadastroDeCurso == false) {
                    this.abrirCadastroDeCurso = true
                } else {
                    this.abrirCadastroDeCurso = false
                }
            },
        }
    }
    
</script>

<style>
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

    /* ----> Curso Index <----- */
    .cursoIndex {
        display: flex;
        flex-direction: column;

        width: 100vw !important;
        height: 100vh !important;

        position: absolute;
        z-index: 1 !important;

        justify-content: center;
        align-items: center;
    }

    /* Botao de Cadastro e Excluir */
    .botoes {
        position: absolute;
        bottom: 2vh;
    }

    /* -----> Curso Cadastro <----- */
    .cursoCadastro {
        display: flex;
        flex-direction: column;

        width: 100vw !important;
        height: 100vh !important;

        position: absolute;
        z-index: 10 !important;

        justify-content: center;
        align-items: center;

        backdrop-filter: blur(2px);
    }

    /* -----> Curso Edicao <----- */
    .cursoEdicao {
        display: flex;
        flex-direction: column;

        width: 100vw !important;
        height: 100vh !important;

        position: absolute;
        z-index: 20 !important;

        justify-content: center;
        align-items: center;

        backdrop-filter: blur(2px);
    }
</style>