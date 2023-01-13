<template>
  <div id="cursoGerado" class="cursoGerado bordaEstilizada">
    <!-- Topo da Caixa -->
      <div class="topoDaCaixa">

         <!-- Ajuste de Margem da Caixa -->
         <div class="margemDaCaixa">
         </div>

         <!-- Nome do Curso -->
         <h4 class="nomeDoCurso">{{ nomeDoCurso }}</h4>

         <!-- Editar Curso -->
         <div class="editar">
            <img src="@/assets/EditIcon.svg" alt="Editar" >
         </div>
      </div>

      <!-- Informacoes da Caixa -->
      <p class="nomeAbreviadoDoCurso">{{ nomeAbreviadoDoCurso }}</p>
      <p class="modalidadeDoCurso">{{ modalidadeDoCurso }}</p>
  </div>
</template>

<script>
  import "@/assets/styles/fontePadrao.css"
  import "@/assets/styles/bordaEstilizada.css"

  export default {
      name: 'cursoGerado',
      data() {
          return {
              nomeDoCurso: 'Undefined',
              nomeAbreviadoDoCurso: 'Undefined',
              modalidadeDoCurso: 'Undefined'
          }
      },
      props: {
        editarCurso: Boolean
      },
      methods: {
        editarCursoExistente() {
          if (this.editarCurso == false) {
            this.editarCurso = true
            alert(editarCurso)
          } else {
            this.editarCurso = false
            alert(editarCurso)
          }
        }
      }
  }
</script>

<style scoped>
  * {
     margin: 0;
  }

  /* Estilo da Caixa */
 .cursoGerado {
   display: flex;
   flex-direction: column;

   width: 80%;
   height: 18vh;
   min-height: 100px !important;
   max-height: 125px !important;

   margin-top: 2%;
   margin-bottom: 2%;
   padding-left: 2%;
   padding-right: 2%;

   border-top: 4px solid #57B85F;
   border-radius: 0 0 9px 9px !important;

   justify-content: center !important;
   align-items: center !important;
 }

 /* Topo da Caixa */
 .topoDaCaixa {
   display: flex;
   flex-direction: row;

   width: 100%;
   height: 10px;

   justify-content: space-between;
   align-items: center;
 }

 .margemDaCaixa {
   width: 20px;
   height: 21px;
   cursor: pointer;
   background: none !important;
 }

 .editar,
 .editar img {
   width: 20px;
   height: 21px;
   cursor: pointer;
 }

 /* Ajustes */
 .nomeAbreviadoDoCurso {
   margin-top: 2.5%;
 }

</style>