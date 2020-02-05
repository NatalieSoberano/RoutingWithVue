export default {
        template: `
        <section>
            <h1>You are on the main page! </h1>
            <form id="my-form">
                <lable for="username">Enter Username:</lable>
                <input v-model="uname" type="text" name="username" required placeholder="username">

                <lable for="password">Enter Password:</lable>
                <input v-model="pword" type="password" name="password" required placeholder="password">

                <input @click="submit" type="submit" value="submit">
            </form>
        </section>
    `,

    data: function() {
        return {
            uname: "", 
            pword: ""
        }
    }, 

    method: {
        submitData(){
            //hit the api with a Fetch call
            //refer to the mailForm example from last semester (node mailer example)

            debugger;
        }
    }
        
}