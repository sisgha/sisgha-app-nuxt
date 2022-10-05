<template>
    <div class="container">
        <div class="dadosDoCurso">
            <div class="topoDaCaixa">
                <h4 class="fonte nomeDoCurso">Undefined</h4>
                <div class="opcoesDaCaixa">
                    <img class="iconeDeEditar" id="editarCurso" src="../assets/EditIcon.svg" alt="Editar dados do curso.">
                    <span class="checkbox" id="checkbox" v-on:click="checkbox()"></span>
                    
                </div>
            </div>
            <p class="fonte nomeAbreviadoDoCursoGerado">Undefined</p>
            <p class="fonte modalidadeDoCurso">Undefined</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'cursoGerado',
        data() {
            return {
                checkboxAtivo: false
            }
        },
        methods: {
            checkbox() {
                if(this.checkboxAtivo == false) {
                    this.checkboxAtivo = true;
                    document.getElementById('checkbox').style.backgroundColor = "#57B85F";
                } else if (this.checkboxAtivo == true) {
                    this.checkboxAtivo = false;
                    document.getElementById('checkbox').style.backgroundColor = "#eee";
                }
            }
        }
    }
</script>

<style>
    * {
        margin: 0;
    }

    /* Fonte */
    .fonte {
        font-family: 'Inter', sans-serif;
    }
    .nomeDoCurso, 
    .nomeAbreviadoDoCursoGerado,
    .modalidadeDoCurso {
        color: black;
    }
    
    /* Box do curso */
    .dadosDoCurso {
        display: flex;
        flex-direction: column;

        width: 350px;
        height: 85px;

        border-top: 4px solid #57B85F;
        border-radius: 0 0 9px 9px;
        box-shadow: 0 0 5px #00000025;

        padding-top: 10px;
        padding-bottom: 10px;
        margin-top: 15px;
        margin-bottom: 15px;

    }

    /* Topo da caixa */
    .topoDaCaixa {
        display: inline-flex;
        justify-content: space-between;
    }
    .nomeDoCurso {
        text-align: center;

        margin-left: auto;
        margin-right: auto;

        position: relative;
        left: 3%;
    }
    .iconeDeEditar {
        width: 20px;
        height: 21px;

        transform: translateX(-10px);
    }
    .opcoesDaCaixa {
        width: 20px;
        height: 21px;

        cursor: pointer;
    }

    /* Estilizacao do checkbox */
    .caixaDeMarcacao {
        width: 20px;
        height: 20px;
    }
    .checkbox {
        display: none;
        width: 20px;
        height: 20px;
        border-radius: 5px;
        background-color: #eee;
        position: absolute;
    }
    
    /* Nome abrevidado do curso */
    .nomeAbreviadoDoCursoGerado {
        margin-top: 10px;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 10px;
    }

    /* Modalidade do curso */
    .modalidadeDoCurso {
        margin-left: auto;
        margin-right: auto;
    }
</style>