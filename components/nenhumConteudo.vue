<template>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap" rel="stylesheet">

    <div class="container">
        <div class="ilustracao">
            <div class="icone">
                <img src="../assets/EmptyIcon.svg" alt="Nenhum conteúdo">
            </div>
            <h1 class="mensagem">Nada foi criado.</h1>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'nenhumConteudo'
    }
</script>

<style>
    * {
        margin: 0;
    }

    /* Conteudo */
    .container {
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
    .icone {
        margin-left: auto;
        margin-right: auto;
    }
    .icone, 
    .icone img {

        width: 100px;
        height: 130px;
    }
    
    /* Texto da ilustração */
    .mensagem  {
        color: #adadad;
        font-family: 'Inter', sans-serif;

        justify-content: center;
        justify-items: center;
        
        margin-left: auto;
        margin-right: auto;
    }
</style>