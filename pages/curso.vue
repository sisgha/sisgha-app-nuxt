<template>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap" rel="stylesheet">

    <div class="container2">
        <!-- -= Tela de Cadastro de Curso =- -->
        <div class="telaDeCadastroDeCurso" id="telaDeCadastroDeCurso">
            <div class="caixaDeCadastro" id="caixaDeCadastro">
                <h4 class="fonte">Cadastrar Curso</h4>
                <!-- Input do nome do curso -->
                <div class="nomeExtensoDoCurso">
                    <p class="fonte">Nome do curso</p>
                    <input type="text" placeholder="---">
                </div>
                <!-- Input do nome ABREVIADO do curso -->
                <div class="nomeAbreviadoDoCurso">
                    <p class="fonte">Nome abreviado do curso</p>                
                    <input type="text" placeholder="---">
                </div>
                <!-- Input de Modalidade do Curso -->
                <div class="escolherModalidadeDoCurso">
                    <p class="fonte tituloDaCaixa">Nome abreviado do curso</p> 
                    <div class="campoDeInput" v-on:click="caixaDeModalidades()">
                        <p class="fonte textoDoInput">Nenhum</p>
                    </div>
                    <div class="opcoesDeModalidade" id="opcoesDeModalidade">
                        </div>
                </div>
                <!-- Botoes de cadastrar e excluir-->
            <div class="botoesDaCaixa">
                <button class="finalizarCadastro" v-on:click="abrirCadastro()">
                    <h3 class="fonte">Cadastrar</h3>
                </button>
                <button class="cancelarCadastro" v-on:click="abrirCadastro()">
                    <h3 class="fonte">Cancelar</h3>
                </button>
            </div>

            </div>
        </div>

        <!-- -= Tela de Editar Curso =- -->
        <div class="telaDeEditarCurso"></div>

        <!-- -= Tela De Curso =- -->
        <div class="telaDeCurso" id="telaDeCurso">
            <div class="caixaDeCursos" id="caixaDeCursos">
                <cursoGerado />
            </div>
            <!-- Botoes de novo cadastro e excluir-->
            <div class="botoes">
                <button class="cadastrarNovoCurso" v-on:click="abrirCadastro()">
                    <h3 class="fonte">Cadastrar Novo Curso</h3>
                </button>
                <button class="excluirCursos">
                    <h3 class="fonte">Excluir</h3>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
    import nenhumConteudo from '../components/nenhumConteudo.vue'
    import cursoGerado from '../components/cursoGerado.vue'
    export default {
        name: 'TelaDeCursos',
        components: {
            nenhumConteudo,
            cursoGerado,
        },
        data() {
            return {
                cadastrarCurso: false,
                mostrarModalidades: false,
            }
        },
        methods: {
            abrirCadastro() {
                if(this.cadastrarCurso == false) {
                    this.cadastrarCurso = true;
                    document.getElementById('telaDeCadastroDeCurso').style.display = 'flex';
                    document.getElementById('telaDeCurso').style.filter = 'blur(8px)';
                } else if(this.cadastrarCurso == true) {
                    this.cadastrarCurso = false;
                    this.mostrarModalidades = false;
                    document.getElementById('telaDeCadastroDeCurso').style.display = 'none';
                    document.getElementById('telaDeCurso').style.filter = 'blur(0px)';
                }
                if(this.mostrarModalidades == true) {
                    this.mostrarModalidades = false;
                    document.getElementById('opcoesDeModalidade').style.height = '0px';
                    document.getElementById('caixaDeCadastro').style.height = '425px';
                } else if (this.mostrarModalidades == false) {
                    document.getElementById('opcoesDeModalidade').style.height = '0px';
                    document.getElementById('caixaDeCadastro').style.height = '425px';
                }
            },
            caixaDeModalidades() {
                if(this.mostrarModalidades == false) {
                    this.mostrarModalidades = true;
                    if(this.mostrarModalidades == true) {
                        document.getElementById('opcoesDeModalidade').style.height = '60px';
                    }
                } else if(this.mostrarModalidades == true) {
                    this.mostrarModalidades = false;
                    if(this.mostrarModalidades == false) {
                        document.getElementById('opcoesDeModalidade').style.height = '0px';
                    }
                }
            },
        },
    }
    
</script>

<style>
    * {
        margin: 0;
        padding: 0;
    }

    /* -= Estilização da Scrollbar =- */
    ::-webkit-scrollbar {
        width: 5px;
    }
    ::-webkit-scrollbar-track {
        background: #00532b15;
        border-radius: 0 90px 90px 0;
    }
    ::-webkit-scrollbar-thumb{
        background: #39A048;
        border-radius: 90px;
    }

    /* -= Conteudo =- */
    .container2 {
        display: flex !important;
        justify-content: center;
        justify-items: center;
    }

    /* -= Tela de Curso =- */
    .telaDeCurso {
        display: flex !important;
        flex-direction: column;
        position: absolute;
        z-index: 2;

        filter: blur(0px);

        justify-content: center;
        justify-items: center;

        width: 100vw;
        height: 100%;

    }
    .caixaDeCursos {
        display: flex;
        flex-direction: column !important;

        width: 350px;
        min-height: auto;
        max-height: 50vh !important;

        justify-content: initial;
        justify-items: center;

        overflow: auto;

        padding-left: 37px;
        padding-right: 37px;
        padding-top: 20px;
        padding-bottom: 20px;

        margin-top: 7%;
        margin-left: auto;
        margin-right: auto;

        background-color: white;

        border-radius: 9px;
        box-shadow: 0 0 5px #00000025;

        transform: translate(0, -75px);
    }
    /* Botao de Editar e Excluir Curso */
    .botoes {
        display: flex;
        position: fixed;

        justify-content: center;
        justify-items: center;

        left: 25%;
        right: 25%;
        top: 78%;

        transform: translate(0, 80px);
    }
    .cadastrarNovoCurso,
    .excluirCursos {
        display: flex;
        
        max-width: 233px;
        min-width: 190px;
        height: 45px;

        margin-left: 21px;
        margin-right: 21px;

        justify-content: center;
        justify-items: center;
    }

    .cadastrarNovoCurso {
        background-color: #39A048;

        border-style: none;
        border-radius: 9px;

        transition-timing-function: ease-in-out;
        transition: all 500ms;

        cursor: pointer;
    }
    .cadastrarNovoCurso h3 {
        color: white;

        margin-left: auto;
        margin-right: auto;
        margin-top: auto;
        margin-bottom: auto;
    }
    .cadastrarNovoCurso:hover {
        background-color: #3AD250;

        transition: all 500ms;
    }

    .excluirCursos {
        background-color: #FF4040;

        border-style: none;
        border-radius: 9px;

        transition-timing-function: ease-in-out;
        transition: all 500ms;

        cursor: pointer;
    }
    .excluirCursos h3 {
        color: white;

        margin-left: auto;
        margin-right: auto;
        margin-top: auto;
        margin-bottom: auto;
    }
    .excluirCursos:hover {
        background-color: #DC0000;

        transition: all 500ms;
    }

    /* -= Editar Curso =- */
    .telaDeEditarCurso {
        display: none;
        flex-direction: column;
        position: absolute;
        z-index: 3;

        justify-content: center;
        justify-items: center;

        width: 100vw;
        height: 100%;

        transform: translateY(50%);

        background-color: blue;
    }

    /* -= Cadastrar Curso =- */
    .telaDeCadastroDeCurso {
        display: none;
        flex-direction: column;
        position: absolute;
        z-index: 4;

        justify-content: center;
        justify-items: center;

        width: 100vw;
        height: 100%;

        background-color: rgba(0, 128, 0, 0.322);
    }
    .caixaDeCadastro h4{
        text-align: center;
        font-size: 17px;

        transform: translateY(-25px);
    }
    .caixaDeCadastro {
        display: flex;
        flex-direction: column;

        width: 350px;
        height: 425px;

        justify-content: center;
        justify-items: center;

        margin-left: auto;
        margin-right: auto;

        background-color: white;

        border-radius: 9px;
        box-shadow: 0 0 5px #00000025;
    }
    .nomeExtensoDoCurso,
    .nomeAbreviadoDoCurso,
    .escolherModalidadeDoCurso {
        display: flex;
        flex-direction: column;
        width: 250px;

        margin-left: auto;
        margin-right: auto;
        margin-bottom: 15px;

    }
    .nomeExtensoDoCurso p,
    .nomeAbreviadoDoCurso p,
    .escolherModalidadeDoCurso .tituloDaCaixa {
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 10px;

        color: #00532B70;
    }
    .nomeExtensoDoCurso input,
    .nomeAbreviadoDoCurso input,
    .campoDeInput {
        display: flex;
        width: 250px;
        height: 50px;

        font-family: 'Inter', sans-serif;

        border-style: none;
        border-radius: 9px;
        box-shadow: 0 0 5px #00000025;

        justify-content: center;
        justify-items: center;

        text-align: center;
        font-weight: 600;
        font-size: 17px;    

        outline: 0;
    }
    .campoDeInput p {
        text-align: center;
        font-weight: 600;
        font-size: 17px;  
        transform: translateY(12px);
    }

    .opcoesDeModalidade {
        width: 250px;
        height: 0px;

        overflow: auto;

        border-style: none;
        border-radius: 0 0 9px 9px;
        box-shadow: 0 0 5px #00000025;

        text-align: center;
        font-weight: 600;
        font-size: 17px;    

        outline: 0; 
    }

    .botoesDaCaixa {
        display: flex;

        justify-content: center;
        justify-items: center;
    }
    .finalizarCadastro,
    .cancelarCadastro {
        display: flex;
        
        width: 116px;
        height: 45px;

        margin-left: 10px;
        margin-right: 10px;

        justify-content: center;
        justify-items: center;

        transform: translateY(15px);
    }

    .finalizarCadastro {
        background-color: #39A048;

        border-style: none;
        border-radius: 9px;

        transition-timing-function: ease-in-out;
        transition: all 500ms;

        cursor: pointer;
    }
    .finalizarCadastro h3 {
        color: white;

        margin-left: auto;
        margin-right: auto;
        margin-top: auto;
        margin-bottom: auto;
    }
    .finalizarCadastro:hover {
        background-color: #3AD250;

        transition: all 500ms;
    }

    .cancelarCadastro {
        background-color: #FF4040;

        border-style: none;
        border-radius: 9px;

        transition-timing-function: ease-in-out;
        transition: all 500ms;

        cursor: pointer;
    }
    .cancelarCadastro h3 {
        color: white;

        margin-left: auto;
        margin-right: auto;
        margin-top: auto;
        margin-bottom: auto;
    }
    .cancelarCadastro:hover {
        background-color: #DC0000;

        transition: all 500ms;
    }
</style>