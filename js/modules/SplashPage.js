export default {
    //everything within the template needs to be in backticks and a section
    template: `
    <section> 
        <h1>Welcome to my Super Awsome App! </h1>
        <button @click="registerUser">Register</button>
    </section>
    `,

    data: function(){
        return {
            message: "Welcome to my Super Awsome App!"
        }
    }, 

    methods: {
        registerUser() {
            console.log('clicked register button')
        }
    }
}