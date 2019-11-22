class TennisGame {
    constructor(player1, player2) {
        this.player1 = player1;
        this.player2 = player2;
        this.score1 = 0;
        this.score2 = 0;
        this.scoreMap = ["love", "fifteen", "thirty", "forty"];
    }

    getScore() {
        if(this.hasWinner()) return this.getPlayerWithHigherScore() + ' ' + 'wins';
        if(this.atDeuce()) return "Deuce";
        if(this.atAll()) return formatScore(this.scoreMap[this.score1] + ' ' + 'all');
        if(this.hasAdvantage()) return "Advantage " + this.getPlayerWithHigherScore();
        return formatScore(this.scoreMap[this.score1] + ' ' + this.scoreMap[this.score2]);
    }

    hasWinner() {
        return (this.score1 >=4 || this.score2 >=4) && Math.abs(this.score1 - this.score2) > 1;
    }
    getPlayerWithHigherScore() {
        return this.score1 > this.score2 ? this.player1 : this.player2;
    }
    atDeuce() {
        return this.score1 >=3 && this.score2 >=3 && this.score1 === this.score2;
    }
    atAll() {
        return this.score1 < 3 && this.score2 < 3 && this.score1 === this.score2;
    }
    hasAdvantage() {
        return this.score1 >= 3 && this.score2 >= 3 && Math.abs(this.score1 - this.score2) === 1;
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