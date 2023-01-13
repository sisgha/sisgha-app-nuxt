<template>
    <div class="containerNenhumConteudo">
        <!-- Ilustracao -->
        <div class="ilustracao">
            <!-- Icone da Ilustracao -->
            <div class="icone">
                <img src="@/assets/EmptyIcon.svg" alt="Nenhum conteúdo">
            </div>
            <!-- Mensagem da Ilustracao -->
            <h1 class="mensagem">Nada foi encontrado.</h1>
        </div>
    </div>
</template>

<script>
    import "@/assets/styles/fontePadrao.css"
    
    export default {
        name: 'nenhumConteudo'
    }
</script>

<style scoped>
    * {
        margin: 0;
        padding: 0;
    }

    /* Ilustracao */
    .containerNenhumConteudo {
        display: flex;

        justify-content: center;
        justify-items: center;
    }
    .ilustracao {
        display: flex;
        flex-direction: column;

        justify-content: center;
        justify-items: center;
    }
    /* Icone da Ilustracao */
    .icone {
        margin-left: auto;
        margin-right: auto;
    }
    .icone, 
    .icone img {
        width: 100px;
        height: 130px;
    }
    
    /* Texto da ilustracao */
    .mensagem  {
        font-size: 150%;

        transform: translateY(-50%);

        justify-content: center;
        justify-items: center;
        
        margin-left: auto;
        margin-right: auto;
    }
</style>