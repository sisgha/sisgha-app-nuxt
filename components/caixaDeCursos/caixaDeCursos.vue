<template>
  <!-- Caixa de Cursos -->
  <div class="caixaDeCursos bordaEstilizada">

    <!-- Ilustracao de Erro/Conteudo Nao Encontrado -->
    <nenhumConteudo></nenhumConteudo>

    <!-- Caixa de Cursos Gerados -->
    <div class="caixaDeCursosGerados">
    </div>
  </div>
</template>

<script>
  import "@/assets/styles/bordaEstilizada.css"

  import cursoGerado from "~~/components/caixaDeCursos/cursoGerado.vue"
  import nenhumConteudo from "~~/components/nenhumConteudo.vue"

  export default {
    name: "caixaDeCursos",
    components: {
      cursoGerado,
      nenhumConteudo
    },
  }
</script>

<style scoped>
  * {
    margin: 0;
    padding: 0;
  }

  .caixaDeCursos {
    display: flex;
    flex-direction: column;

    overflow: auto;

    width: 34vw !important;
    min-width: 440px !important;
    min-height: 30% !important;
    height: auto !important;
    max-height: 60% !important;

    padding-top: 1.5%;
    padding-bottom: 1%;

    justify-content: initial !important;
    align-items: center;
  }

  .caixaDeCursosGerados {
    display: flex;
    flex-direction: column;

    width: 100% !important;
    height: auto;

    justify-content: center;
    align-items: center;
  }
</style>