<template>
  <div :class="darkmodeActive">
    <!-- Fonte -->
    <div class="fontePadrao">
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">        
    </div>

    <!-- Header -->
    <header class="header bordaEstilizada">

      <!-- Opcoes -->
      <nav>
        <!-- Menu de Visitante -->
        <ul class="headerVisitante">
          <li>
            <ul class="outrasPlataformas">
              <li><a href="https://suap.ifro.edu.br/accounts/login/" target="_blank"> SUAP</a></li>
              <li><a href="https://virtual.ifro.edu.br/" target="_blank">AVA</a></li>
              <li><a href="https://portal.ifro.edu.br/" target="_blank">PORTAL</a></li>
            </ul>
          </li>

          <li>
            <div class="trocarTema" @click="alterarTema()">
              <img src="@/assets/Sol.svg" alt="Modo claro" v-if="!statusTema">
              <img class="lua" src="@/assets/Lua.svg" alt="Modo escurso" v-else>
            </div>
          </li>
        </ul>
      </nav>
    </header>
 
    <!-- Paginas -->
    <div class="contentLayout">
      <slot />
    </div>
  </div>
</template>

<script>
import "@/assets/styles/fontePadrao.css"
import "@/assets/styles/bordaEstilizada.css"
import "@/assets/styles/darkmodeStyle.css"

export default {
  data() {
    return {
      darkmodeActive: "darkmodeOff"
    }
  },
  computed: {
    statusTema() {
      return this.darkmodeActive === "darkmodeOff"
    }
  },
  methods: {
    alterarTema() {
      this.darkmodeActive = this.statusTema ? "darkmodeOn" : "darkmodeOff"
    },
  }

}
</script>

<style>
  /* ---- Ajustes Gerais ---- */

  /* Header */
  .header {
    display: flex !important;
    flex-direction: row !important;

    width: 100vw !important;
    height: 50px;

    align-items: center;
    justify-content: center;

    border-radius: 0 !important;

    position: absolute !important;
    z-index: 99;
  }
  .headerVisitante {
    display: flex;
    flex-direction: row;
    gap: 15%;
 
    width: 98vw;
    height: max-content;
    
    justify-content: space-between !important;
    align-items: center !important;

    font-weight: 500;
    list-style: none;
  }
  .outrasPlataformas {
    display: flex;
    flex-direction: row;
    gap: 15%;

    width: 30vw;
    height: max-content;

    font-weight: 500;
    list-style: none;
  }

  .headerOpcoes li,
  .outrasPlataformas li {
    width: max-content !important;
  }


  /* Icone */
  .trocarTema {
    display: flex;
    width: 5vh !important;
    height: 5vh !important;

    justify-content: center !important;
    align-items: center !important;
  }
  .trocarTema img {
    width: 5vh;
  }
  .trocarTema .lua {
    width: 3vh !important;
  }

  /* ---- Ajustes ---- */
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

  /* ---- Paginas ---- */
  .contentLayout {
    display: flex !important;
    position: absolute !important;
    z-index: 1;
  }

  /* - Estilização da Scrollbar - */
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
</style>