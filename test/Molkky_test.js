require('chai').should();
const {Molkky} = require('../Molkky.js');

describe('Molkky.js', () => {
    const m = new Molkky();
    it('score should be at 0 at first', () => {
        m.getScore().should.be.equal(0);
    });
    // it('score should be at 0 at first', () => {
    //     m.getScore().should.be.equal(0);
    // });
});