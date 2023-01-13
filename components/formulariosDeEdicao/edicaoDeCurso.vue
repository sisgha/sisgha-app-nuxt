<template>
  <div>
    <form id="cadastroDeCurso" class="bordaEstilizada" @submit="botaoDeEditar">
      <h3 class="tituloDoFormulario">Editar Curso</h3>

      <!-- Editar Nome do Curso -->
      <div class="nomeDoCurso inputsDeCadastro">
        <p class="textoDescritivo">Nome do curso</p>
        <input id="editarNomeDoCurso" class="inputEstilizado bordaEstilizada" type="text" placeholder="Nome">
      </div>
    
      <!-- Editar Nome Abreviado do Curso -->
      <div class="abreviacaoDoCurso inputsDeCadastro">
        <p class="textoDescritivo">Nome abreviado do curso</p>
        <input id="editarAbreviacaoDoCurso" class="inputEstilizado bordaEstilizada" type="text" placeholder="Abreviação">
      </div>
    
      <!-- Editar Modalidade do Curso -->
      <div class="modalidadeDoCurso inputsDeCadastro select">
        <p class="textoDescritivo">Modalidade do curso</p>
        <select name="modalidadeDoCurso" id="modalidadeDoCurso" class="inputEstilizado bordaEstilizada">
          <option value=""> Modalidade </option>
          <option value=""> Nada Definido. </option>
        </select>
      </div>

      <!-- Botao de Editar e Cancelar Edicao de Curso -->
      <div class="botoesDeEdicao">
        <button id="botaoDeEditar" class="botao botaoDeCadastro bordaEstilizada" type="submit">
            <h3>Editar</h3>
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
    name: "edicaoDeCurso",
    
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
  .botoesDeEdicao {
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