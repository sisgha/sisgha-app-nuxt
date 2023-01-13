<template>
  <div>
    <form id="cadastroDeCurso" class="bordaEstilizada" @submit="botaoDeCadastrar">
      <h3 class="tituloDoFormulario">Cadastrar Curso</h3>

      <!-- Inserir Nome do Curso -->
      <div class="nomeDoCurso inputsDeCadastro">
        <p class="textoDescritivo">Nome do curso</p>
        <input id="inserirNomeDoCurso" class="inputEstilizado bordaEstilizada" type="text" placeholder="Nome">
      </div>
    
      <!-- Inserir Nome Abreviado do Curso -->
      <div class="abreviacaoDoCurso inputsDeCadastro">
        <p class="textoDescritivo">Nome abreviado do curso</p>
        <input id="inserirAbreviacaoDoCurso" class="inputEstilizado bordaEstilizada" type="text" placeholder="Abreviação">
      </div>
    
      <!-- Inserir Modalidade do Curso -->
      <div class="modalidadeDoCurso inputsDeCadastro select">
        <p class="textoDescritivo">Modalidade do curso</p>
        <select name="modalidadeDoCurso" id="modalidadeDoCurso" class="inputEstilizado bordaEstilizada">
          <option value=""> Modalidade </option>
          <option value=""> Nada Definido. </option>
        </select>
      </div>

      <!-- Botao de Cadastrar e Cancelar Cadastro de Curso -->
      <div class="botoesDeCadastro">
        <button id="botaoDeCadastrar" class="botao botaoDeCadastro bordaEstilizada" type="submit">
            <h3>Cadastrar</h3>
        </button>
        <div class="dividerBotoes"></div>
        <button id="botaoDeCancelar" class="botao botaoDeExcluir bordaEstilizada">
            <h3>Cancelar</h3>
        </button>
     </div>
    </form>
    
  </div>
</template>

<script>
  import "@/assets/styles/fontePadrao.css"
  import "@/assets/styles/bordaEstilizada.css"
  import "@/assets/styles/botaoEstilizado.css"

  export default {
    name: "cadastroDeCurso",
    
  }
</script>

<style scoped>
  * {
    margin: 0;
    padding: 0;
  }

  /* Ajustes */
  .tituloDoFormulario {
    margin-bottom: 5% !important;
  }
  .botoesDeCadastro {
    margin-top: 5% !important;
    width: 75%;
  }
  .select {
    width: 90% !important;
  }

  /* Formulario */
  #cadastroDeCurso {
    display: flex;
    flex-direction: column;

    overflow: hidden;

    width: 30vw !important;
    min-width: 460px !important;
    height: 72vh !important;
    max-height: 600px !important;

    justify-content: center;
    align-items: center;
  }

  /* Estilizacao de Input */
  .inputEstilizado {
    width: 100%;
    height: 60px !important;
  }
  .inputsDeCadastro {
    display: flex;
    flex-direction: column;

    width: 85%;

    margin-top: 2%;
    margin-bottom: 2%;

    justify-content: center;
    align-items: center;
  }
  .inputsDeCadastro .textoDescritivo {
    margin-bottom: 1%;
  }

  
</style>