<template>
  <div>
    <div class="evento bordaEstilizada">
      <p id="duracaoEvento"> De {{ inicioDoEvento }} a {{ terminoDoEvento }}:</p>
      <p id="descricaoEvento">• {{ detalhesDoEvento }}</p>
    </div>
  </div>
</template>

<script>
import "@/assets/styles/bordaEstilizada.css"

export default {
  name: "evento",
  data() {
    return {
      inicioDoEvento: "NaN",
      terminoDoEvento: "NaN",
      detalhesDoEvento: "Undefined",
    }
  }
}
</script>

<style scoped>
  .evento {
    display: flex;
    flex-direction: column;

    width: 350px;
    height: 90px;

    margin-bottom: 3%;

    border-radius: 0 2vh 2vh 0 !important;

    background-color: #39A048;
  }

  .evento p {
    font-weight: bold;
    color: white !important;

    transform: translateX(5%);
  }
</style>