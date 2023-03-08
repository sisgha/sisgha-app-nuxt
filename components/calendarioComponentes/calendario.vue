<template>
  <div class="calendario bordaEstilizada">
    <!-- Nome do Mes -->
    <nomeDoMes :nomeDesteMes="nomeDesteMes" />

    <!-- Semanas -->
    <div class="semana">
      <div v-for="semana in semanaItens" :key="semana.id">
          <h3>{{ semana.id }}</h3>
      </div>
    </div>

    <!-- Mes -->
    <div class="diasDoMes">
       <!-- Dias do mes anterior -->
       <div v-for="diasVaziosAnteriores in diasNoMesAnterior" :key="diasVaziosAnteriores.id">
        <div :id="diasVaziosAnteriores.id" class="diaEmBranco"></div>
      </div>
      
      <!-- Dias do mes atual -->
      <div v-for="dias in diasNoMesAtual" :key="dias.id">
        <dia :numeroDoDia="dias.nomeDoItem" :diaID="dias.id" />
      </div>
      
      <!-- Dias do mes posterior -->
      <div v-for="diasVaziosPosteriores in diasNoMesPosterior" :key="diasVaziosPosteriores.id">
        <div :id="diasVaziosPosteriores.id" class="diaEmBranco"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import "@/assets/styles/bordaEstilizada.css"

import dayjs from 'dayjs'

import nomeDoMes from "@/components/calendarioComponentes/nomeDoMes.vue"
import dia from "@/components/calendarioComponentes/dia.vue"

export default {
  name: "calendario",
  components: {
    nomeDoMes,
    dia
  },
  data() {
    return {
      /* Mes */
      meses: new Array("Janeiro","Fevereiro","Marco","Abril","Maio","Junho","Julho","Agosto","Septembro","Outubro","Novembro","Dezembro"),
      nomeDesteMes: "",
      diasNoMesAnterior: [{id: ""}],
      diasNoMesAtual: [{id: "", nomeDoItem: ""}],
      diasNoMesPosterior: [{id: ""}],

      /* Semana */
      semanaItens: new Array({id: "Dom"}, {id: "Seg"}, {id: "Ter"}, {id: "Qua"}, {id: "Qui"}, {id: "Sex"}, {id: "Sáb"}),
    }
  },
  methods: {
    /* Setar nome do mes */
    async nomeDoMes() {
      const mesAtual = dayjs().startOf("month").toDate()
      const checarMesAtual = parseInt(dayjs(mesAtual).format("MM"))
      this.nomeDesteMes = this.meses[(checarMesAtual - 1)].toUpperCase()
    },

    /* Setar mes atual */
    async mesAtual() {
      const dataAtual = dayjs().startOf("day").toDate()
      const checarMesAtual = dayjs(dataAtual).format("YYYY-MM-DD")
      let diasNoMes = dayjs(`${checarMesAtual}`).daysInMonth()
      this.diasNoMesAtual.shift()
      for(let i = 1; i < (diasNoMes + 1); i++) {
        this.diasNoMesAtual.push({id: `${i}`, nomeDoItem: `itemN${i}`})
      }
      /* Renderizar itens */
      document.addEventListener("DOMContentLoaded", function() {
        document.getElementById(`itemN${parseInt(dayjs(dataAtual).format("DD"))}`)?.classList.add("numeroDoDiaAtual")
      })
    },

    /* Setar mes anterior */
    async mesAnterior() {
      const dataAtual = dayjs().startOf("day").toDate()
      const mesAtual = dayjs().startOf("month").toDate()
      const formatarMes = dayjs(mesAtual).format("MM")
      let mesAnterior
      if(parseInt(formatarMes) == 1) {
        mesAnterior = dayjs(dataAtual).format(`YYYY-${12}-${2}`)
      } else {
        mesAnterior = dayjs(dataAtual).format(`YYYY-${parseInt(formatarMes) - 1}-${2}`)
      }
      const pegarDiasAnteriores = dayjs(mesAnterior).daysInMonth()
      let calcMesAnterior = this.diasNoMesAtual.length - pegarDiasAnteriores

      this.diasNoMesAnterior.shift()
      for(let i = 1; i < (calcMesAnterior + 1); i++) {
        this.diasNoMesAnterior.push({id: `${i}`})
      }
    },

    /* Setar mes posterior */
    async mesPosterior() {
      const dataAtual = dayjs().startOf("day").toDate()
      const mesAtual = dayjs().startOf("month").toDate()
      const formatarMes = dayjs(mesAtual).format("MM")
      let mesPosterior
      if(parseInt(formatarMes) == 1) {
        mesPosterior = dayjs(dataAtual).format(`YYYY-${12}-${2}`)
      } else {
        mesPosterior = dayjs(dataAtual).format(`YYYY-${parseInt(formatarMes) + 1}-${2}`)
      }
      const pegarDiasPosteriores = dayjs(mesPosterior).daysInMonth()
      const calcMesPosterior = this.diasNoMesAtual.length - pegarDiasPosteriores

      this.diasNoMesPosterior.shift()
      for(let i = 1; i < (calcMesPosterior + 1); i++) {
        this.diasNoMesPosterior.push({id: `${i}`})
      }
    },
  },
  mounted() {
    this.nomeDoMes()
    this.mesAtual()
    this.mesAnterior()
    this.mesPosterior()
     
  }
}
</script>

<style scoped>
  .calendario {
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 425px;
    height: 350px;
    /* width: 30vw;
    height: 60vh; */

    padding-top: 1%;
    padding-bottom: 1%;
  }

  /* Dias no mes */
  .diasDoMes {
    display: flex;
    flex-wrap: wrap;

    width: 100%;
    gap: 2%;

    justify-content: center;
    align-items: center;
  }

  /* Dias vazios */
  .diaEmBranco {
      display: flex;

      
      min-width: 45px !important;
      
      min-height: 45px !important;

      gap: 5% 5%;

      justify-content: center;
      align-items: center;

      padding: 0.3%;
      border-radius: 100%;

      background-color: #D9E5DF;
  }

  /* Semana */
  .semana {
    display: flex;
    flex-direction: row;

    width: 95%;
    height: 8%;

    justify-content: space-between;
    align-items: center;
  }
</style>