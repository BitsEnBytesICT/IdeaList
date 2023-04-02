<template>
    <div class="mt-3">       
        <p class="text-8xl">404</p>
        <p class="mt-3">Pagina niet gevonden</p>
        <p class>Neem contact op met de systeembeheerder als deze fout zich vaker voordoet.</p>
    </div>
</template>

<script>
    export default {
        name: "404",
        data() {
            return {
                count: 0
            };
        },
        methods: {
            toggle(closeOnly) {
                if (!closeOnly) {
                    this.open = !this.open;
                    return;
                }
                this.open = false;
            }
        }
    };
</script>