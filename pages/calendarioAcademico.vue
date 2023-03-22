<template>
  <div class="container">
    <!-- Calendario Index -->
    <div class="calendarioIndex">
      <!-- Conteudo -->
      <div class="conteudoIndex">
        <!-- Calendario -->
        <div class="calendarioLetivo">
          <h3>Mês letivo</h3>
          <calendario/>
          <!-- Trocar/Ver calendario -->
          <div class="menuCalendario">
            <!-- Mes anterior -->
            <button class="botao trocarMes dimensao2 bordaEstilizada" id="mesAnterior">
              <img src="@/assets/FlechaEsquerda.svg" alt="Esquerda">
            </button>
            
            <!-- Visualizar calendario completo -->
            <button class="botao dimensao2 bordaEstilizada" id="visualizarCalendario">
              <h3>Visualizar Calendário</h3>
            </button>
            
            <!-- Mes posterior -->
            <button class="botao trocarMes dimensao2 bordaEstilizada" id="mesPosterior">
              <img src="@/assets/FlechaDireita.svg" alt="Direita">
            </button>
          </div>
        </div>
        
        <!-- Divider -->
        <div class="dividerCalendario"></div>
        
        <!-- Eventos -->
        <div class="eventosLetivo">
          <h3>Eventos</h3>
          <div class="todosOsEventos">
            <evento/>
          </div>

          <button id="cadastrarEvento" class="botao botaoVerde dimensao2 bordaEstilizada">
            <h3 class="corDaFonte">Cadastrar Evento</h3>
          </button>
        </div>
      </div>

      <div class="botoesDeCadastro">
        <button class="botao botaoVerde dimensao3 bordaEstilizada" id="cadastrarCalendario">
          <h3 class="corDaFonte">Cadastrar Calendario Letivo</h3>
        </button>
      </div>

    </div>
  </div>
</template>

<script>
/* Estilo */
import "@/assets/styles/bordaEstilizada.css"
import "@/assets/styles/botaoEstilizado.css"

/* Componentes */
import calendario from "@/components/calendarioComponentes/calendario.vue"
import evento from "@/components/calendarioComponentes/evento.vue"

/* Exportacao */
export default {
  name: "calenarioAcademico",
  components: {
    calendario,
    evento
  }
}
</script>

<style scoped>
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  /* -- Calendario Index -- */
  .calendarioIndex {
    display: flex;
    flex-direction: column;

    justify-content: center;
    align-items: center;
  }
  .conteudoIndex {
    display: flex;
    flex-direction: row;
    
    width: 100vw;
    height: max-content;

    justify-content: center;
    align-items: center;
  }
  /* - Config. Estilo - */
  .calendarioLetivo,
  .eventosLetivo {
    display: flex;
    flex-direction: column;

    width: max-content;
    height: 70vh;

    justify-content: space-between;
    align-items: center;
  }
  #cadastrarEvento {
    width: 100%;
  }
  .todosOsEventos {
    display: flex;
    flex-direction: column;

    width: 360px;
    height: 75%;

    overflow-y: scroll;
    overflow-x: hidden;
  }
  /* - Calendario - */
  /* Menu */
  .menuCalendario {
    display: flex;
    flex-direction: row;
    
    width: 100%;
    height: max-content;
    
    justify-content: space-between;
    align-items: center;
  }
  .trocarMes {
    width: 15%;
  }
  #visualizarCalendario {
    width: 60%;
  }
  
  /* - Divider - */
  .dividerCalendario {
    width: 0.2vw;
    height: 90%;

    margin: 2%;
    background-color: #39A048;
  }
  
</style>