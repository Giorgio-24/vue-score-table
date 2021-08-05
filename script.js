Vue.config.devtools = true;

var root = new Vue(
    {
        el: '#root',
        data: {
            players: [
                { name: 'Giova', score: 0, modifyScore: false, },
                { name: 'Simo', score: 20, modifyScore: false, },
                { name: 'Daniele', score: 15, modifyScore: false, },
                { name: 'Pippo', score: 10, modifyScore: false, },

            ],
            newPlayer: "",
            showOptions: false,


        },
        methods: {
            addNewPlayer() {
                if (this.newPlayer.trim() !== "") {
                    this.players.push({ name: this.newPlayer, score: 0, modifyScore: false, });
                    this.newPlayer = "";
                } else {
                    this.players.push({ name: `Player`, score: 0, modifyScore: false, });
                    this.newPlayer = "";
                }

            },
            deleteCurrentPlayer(index) {
                const x = this.players.splice(index, 1);
            },
            toggleScoreModifier(index) {
                const taskStatus = this.players.map((player, playerIndex) => {
                    if (playerIndex === index) {
                        player.modifyScore = !player.modifyScore;
                    }
                    return player;
                });
            },
            isModifing(index) {
                return this.players[index].modifyScore;
            },
            addPoints(index) {
                const x = this.players[index].score;
                this.players[index].score = parseInt(x) + parseInt(1);
            },
            removePoints(index) {
                const x = this.players[index].score;
                this.players[index].score = parseInt(x) + parseInt(-1);
            },
            toggleOptions() {
                this.showOptions = !this.showOptions;
            },
            //^ FUNCTIONS AFFECTING ALL ELEMENTS.
            modifyAllPlayersScores() {

                const allScores = this.players.map((player) => {
                    player.modifyScore = !player.modifyScore;

                    return player;
                });
            },




        },
    });