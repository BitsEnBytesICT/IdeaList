<template>
    <div class="h-full">              
        <div><h1> Welkom </h1>
            STAP1
            hier komt je invoer veld met knop en daaronder de lijst met ideeën.
        </div>                    
    </div>
</template>

<script>
    //STAP1 de array met de ideeën (stop er een paar testideeën in) en een methode om een idee toe te voegen aan de array
    //STAP4 roep de methodes die je in de server hebt gemaakt aan om de ideeënlijst op te halen en een idee toe te voegen.
    export default {
        name: "Home",
        data() {
            return {
                count: 0,
                open: false,
                dimmer: true,
                right: false,
                logo: require('../assets/LogoBits.png'),
                itemData: [],
                recordNumber: 0,                
            };
        },
        async beforeMount() {

        },
        methods: {
            toggle(closeOnly) {
                if (!closeOnly) {
                    this.open = !this.open;
                    return;
                }
                this.open = false;
            },          
        },
    };
</script>

<style>
    html {
        background: #FAF7F7;
    }

    .fade-enter-active,
    .fade-leave-active {
        transition: opacity 1s ease-out;
    }

    .fade-enter,
    .fade-leave-to {
        opacity: 0;
    }
</style>