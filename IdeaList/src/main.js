import { createApp } from "vue";
import { createRouter, createWebHistory } from 'vue-router/dist/vue-router';
import '@/assets/css/tailwind.css'
import Home from './components/Home.vue';
import Menubar from './components/Menubar.vue';
import Sidebar from './components/Sidebar.vue';
import PageNotFound from './components/404.vue';
import Template from './components/Template.vue';
import { createStore } from 'vuex'

const routes = [
  { path: '/', component: Home },
  { path: '/Home', component: Home},
  { path: '/:catchAll(.*)', component: PageNotFound},
]

const router = createRouter({
  history: createWebHistory("/"),
  routes,
})

const store = createStore({
  state () {
    return {
      showpopup: false,
      popupInteraction: false,
      tableData: [{Empty: ""}],
      tempTableData: [],
      searchUnsuccessfull: false,
      removeConfirm: false,
    }
  },
  mutations: {
    Closepopup(state){
      if (state.showpopup && !state.popupInteraction && !state.removeConfirm){
        state.showpopup = !state.showpopup;
      }
      else if (state.popupInteraction){
        state.popupInteraction = false;
      }

      state.searchUnsuccessfull = false;
    },
  }
});

const app = createApp(Template);

app.component('Menubar', Menubar);
app.component('Sidebar', Sidebar);

app.use(store);
app.use(router);

app.mount('#app');