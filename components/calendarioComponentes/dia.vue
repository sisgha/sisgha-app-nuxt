<template>
  <div class="dia" :key="numeroDoDia">
    <h3 :id="numeroDoDia" class="numeroDoDia">{{ diaID }}</h3>
  </div>
</template>

<script lang="ts">
import dayjs from "dayjs/esm";
import relativeTime from "dayjs/esm/plugin/relativeTime";

export default {
  name: "dia",
  props: {
    numeroDoDia: String,
    diaID: String,
  },
  methods: {
    async marcarDiaAtual() {
      const dataAtual = dayjs().startOf("day").toDate()
      document.getElementById(`Dia${dayjs(dataAtual).format("DD")}-Mes${dayjs(dataAtual).format("MM")}-Ano${dayjs(dataAtual).format("YYYY")}`)?.classList.add("numeroDoDiaAtual")
    }
  },
  mounted() {
    this.marcarDiaAtual()
  }
}
</script>

<style scoped>
.dia {
    display: flex;
    
    /* width: 8vh; */
    min-width: 45px !important;
    /* height: 8vh; */
    min-height: 45px !important;

    gap: 5% 5%;
    
    justify-content: center;
    align-items: center;
    
    margin: 5%;
    border-radius: 100%;

    background-color: #90bda5;
}

.numeroDoDia {
  display: flex;

  min-width: 35px !important;
  min-height: 35px !important;

  justify-content: center;
  align-items: center;

  border-radius: 100%;
  border: 2px solid #ffffff00;

  background-color: #ffffff00;
  color: #fff !important;
}
.numeroDoDiaAtual {
  border: 2px solid #fff !important;
}
</style>