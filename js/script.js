const { createApp } = Vue


createApp({

    data(){
        return {
            message: `Hello world`,
            image: `https://www.macitynet.it/wp-content/uploads/2022/08/embracer-compra-diritti-hobbit-signore-degli-anelli-2.jpg`
        
        }
    }
}).mount(`#msg`);