require('chai').should();
const {Molkky} = require('../Molkky.js');

describe('Molkky.js', () => {

    it('score should be at 0 at first', () => {
        const m = new Molkky();
        m.getScore().should.be.equal(0);
    });
    it('score of player should be equal to number of pin', () => {
        const m = new Molkky();
        m.oneDown(9);
        m.getScore().should.be.equal(9);
    });
    it('after 2 throws score of player should be equal to number of pins added', () => {
        const m = new Molkky();
        m.nDown(3);
        m.getScore().should.be.equal(3);
    });
    it('victory if score is 50', () => {
        const m = new Molkky();
        m.nDown(50);
        m.victory.should.be.true;
    });
});