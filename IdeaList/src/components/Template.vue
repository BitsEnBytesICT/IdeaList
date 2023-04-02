<template>
    <!-- Sidebar -->
        <div class="inline-flex w-full min-h-screen">
            <Sidebar v-if="!$route.meta.hideSidebar" />
    <!-- Menubar -->
        <div class="flex flex-col w-full" @click.prevent="toggle(true)">
            <Menubar v-if="!$route.meta.hideMenubar" />
    <!-- Page Content -->
        <div class="">
            <router-view></router-view>
        </div>
    </div>
    </div>
</template>

<script>
    export default {
        name: "App",
        data() {
            return {
                open: false,
                dimmer: true,
                right: false,
                logo: require('../assets/LogoBits.png')
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