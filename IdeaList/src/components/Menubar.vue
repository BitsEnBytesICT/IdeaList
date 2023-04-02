<template>
    <div class="bg-[#7486C1] top-0 min-h-[3.5rem] w-full rounded-br-lg">
        <div class="flex items-center justify-between w-full h-full">
            <a class="text-2xl ml-[2rem]">BaseProjectVue</a>
            <!-- <div>
                <router-link class="bg-gray-300 px-2 py-1 w-1/4 rounded mr-[2rem]" to="/">Logout</router-link>
            </div> -->
        </div>
    </div>
</template>

<script>
    export default {
        name: "Menubar",
        data() {
            return {
                open: false,
                dimmer: true,
                right: false,
                logo: require('../assets/LogoBits.png'),
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