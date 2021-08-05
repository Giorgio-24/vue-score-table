Vue.config.devtools = true;

var root = new Vue(
    {
        el: '#root',
        data: {
            players: [
                { name: 'Giova', score: 0, },
                { name: 'Simo', score: 20, },
                { name: 'Daniele', score: 15, },

            ],


        },
        methods: {



        },
    });