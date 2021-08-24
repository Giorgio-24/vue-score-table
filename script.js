Vue.config.devtools = true;

var root = new Vue(
    {
        el: '#root',
        data: {
            players: [
                { name: 'Player 1', score: 0, modifyScore: false, addToScore: 0, },
                { name: 'Player 2', score: 0, modifyScore: false, addToScore: 0, },
                { name: 'Player 3', score: 0, modifyScore: false, addToScore: 0, },
                { name: 'Player 4', score: 0, modifyScore: false, addToScore: 0, },

            ],
            newPlayer: "",
            showOptions: false,
            areModifiesDone: false,
            showMaximumScore: false,
            maximumScore: 100,
            isDefaultModeOn: true,
            addToScore: 0,


        },
        methods: {
            addNewPlayer() {
                if (this.newPlayer.trim() !== "") {
                    this.players.push({ name: this.newPlayer.charAt(0).toUpperCase() + this.newPlayer.slice(1), score: 0, modifyScore: false, addToScore: 0, });
                    this.newPlayer = "";
                } else {
                    this.players.push({ name: `Player`, score: 0, modifyScore: false, addToScore: 0, });
                    this.newPlayer = "";
                }

            },
            deleteCurrentPlayer(player, index) {
                const x = this.players.splice(index, 1);
            },
            toggleMode() {
                this.isDefaultModeOn = !this.isDefaultModeOn;
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
                const y = this.players[index].addToScore;
                if (this.isDefaultModeOn === true) {
                    this.players[index].score = parseInt(x) + parseInt(1);
                } else {
                    if (y === 0 || !y) {
                        this.players[index].score = 0;
                    } else {
                        this.players[index].score = parseInt(x) + parseInt(y);
                    }
                };

            },
            removePoints(index) {
                const x = this.players[index].score;
                this.players[index].score = parseInt(x) + parseInt(-1);
            },
            toggleOptions() {
                this.showOptions = !this.showOptions;
            },
            toggleScoresModifiesStatus() {
                this.areModifiesDone = !this.areModifiesDone;
            },
            //^ FUNCTIONS AFFECTING ALL ELEMENTS.
            deleteAllPlayers() {
                this.players = [];
            },
            modifyAllPlayersScores() {

                const allScores = this.players.map((player) => {
                    player.modifyScore = true;

                    return player;
                });
            },
            allModifiesDone() {

                const allScores = this.players.map((player) => {
                    player.modifyScore = false;

                    return player;
                });
            },
            resetAllScores() {

                const resetAllScores = this.players.map((player) => {
                    player.score = 0;

                    return player;
                });
            },




        },
    });