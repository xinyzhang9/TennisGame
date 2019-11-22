import { expect } from 'chai';
import TennisGame from '../src/index';

let game = new TennisGame("Tom", "Jerry");

describe('Tennis Game Test', () => {
    // construct the game
    it('Love all', () => {
        makeScore(0,0);
        expect(game.getScore()).to.equal('Love all');
    });

    it('Fifteen love', () => {
        makeScore(1,0);
        expect(game.getScore()).to.equal('Fifteen love');
    })
})

const makeScore = (score1, score2) => {
    for(let i = 0; i < score1; i++) {
        game.player1Score();
    }
    for(let i = 0; i < score2; i++) {
        game.player2Score();
    }
} 