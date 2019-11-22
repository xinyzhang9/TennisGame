class TennisGame {
    constructor(player1, player2) {
        this.player1 = player1;
        this.player2 = player2;
        this.score1 = 0;
        this.score2 = 0;
        this.scoreMap = ["love", "fifteen", "thirty", "forty"];
    }

    getScore() {
        let res;
        if(this.score1 === this.score2) {
            if(this.score1 < 3) {
                res = this.scoreMap[this.score1] + ' ' + 'all';
                return formatScore(res);
            } else {
                return "Deuce";
            }
        } else {
            if(this.score1 < 4 && this.score2 < 4) {
                res = this.scoreMap[this.score1] + ' ' + this.scoreMap[this.score2];
                return formatScore(res);
            } else {
                if(this.score1 - this.score2 === 1) {
                    return "Advantage " + this.player1;
                }
                if(this.score2 - this.score1 === 1) {
                    return "Advantage " + this.player2;
                }
            }
            if(this.score1 - this.score2 > 1) {
                return this.player1 + ' '+'wins';
            }
            if(this.score2 - this.score1 > 1) {
                return this.player2 + ' ' + 'wins';
            }
        }
    }

    player1Score() {
        this.score1 ++;
    }

    player2Score() {
        this.score2 ++;
    }

}

const formatScore= (score) => {
    return score[0].toUpperCase()+score.slice(1).toLowerCase();
}


export default TennisGame;