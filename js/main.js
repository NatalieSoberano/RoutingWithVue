// imports always go first at the top
import SplashPage from "./modules/SplashPage.js";
import AppPage from "./modules/AppPage.js";
import ErrorPage from "./modules/ErrorPage.js";

const router = new VueRouter({
    routes: [
        // Forward slash means were first hiting the route, look at the location bar in the browser and know what component to give back 
        // A component is esentially a section
        { path: '/', name: "splash", component: SplashPage},
        { path: '/app', name: "app", component: AppPage}, 
        // Catching anything that doesnt match - putting anything after the slash that we have not coded will take them to error page - what * means 
        { path: '*', name: "error", component: ErrorPage }
    ]
})

const vm = new Vue({
    data: [
    
    ], 

    created: function() {
        console.log('app is up and running')
    }, 

    methods: {

    },

    router //shoet hand for router: router
}).$mount("#app"); 