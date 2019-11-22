import { expect } from 'chai';
import TennisGame from '../src/index';

let game;
describe('Tennis Game Test', () => {
    beforeEach(() => {
        game = new TennisGame("Tom", "Jerry");
    });
        
    it('Love all', () => {
        makeScore(0,0);
        expect(game.getScore()).to.equal('Love all');
    });

    it('Fifteen love', () => {
        makeScore(1,0);
        expect(game.getScore()).to.equal('Fifteen love');
    });

    it('Thirty love', () => {
        makeScore(2,0);
        expect(game.getScore()).to.equal('Thirty love');
    });

    it('Forty love', () => {
        makeScore(3,0);
        expect(game.getScore()).to.equal('Forty love');
    });

    it('Love Fifteen', () => {
        makeScore(0,1);
        expect(game.getScore()).to.equal('Love fifteen');
    });

    it('Love Thirty', () => {
        makeScore(0,2);
        expect(game.getScore()).to.equal('Love thirty');
    });

    it('Love Forty', () => {
        makeScore(0,3);
        expect(game.getScore()).to.equal('Love forty');
    });

    it('Player1 wins', () => {
        makeScore(4,0);
        expect(game.getScore()).to.equal('Tom wins');
    });

    it('Player2 wins', () => {
        makeScore(2,4);
        expect(game.getScore()).to.equal('Jerry wins');
    });

    it('Deuce', () => {
        makeScore(3,3);
        expect(game.getScore()).to.equal('Deuce');
    });

    it('Player1 advance', () => {
        makeScore(4,3);
        expect(game.getScore()).to.equal('Advantage Tom');
    });

    it('Deuce', () => {
        makeScore(4,4);
        expect(game.getScore()).to.equal('Deuce');
    });

    it('Player2 advance', () => {
        makeScore(4,5);
        expect(game.getScore()).to.equal('Advantage Jerry');
    });

    it('Player2 wins', () => {
        makeScore(4,6);
        expect(game.getScore()).to.equal('Jerry wins');
    });

    it('Player1 wins', () => {
        makeScore(7,5);
        expect(game.getScore()).to.equal('Tom wins');
    });
})

const makeScore = (score1, score2) => {
    for(let i = 0; i < score1; i++) {
        game.player1Score();
    }
    for(let i = 0; i < score2; i++) {
        game.player2Score();
    }
} 