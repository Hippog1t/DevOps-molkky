var assert= require('chai').assert

import Molkky from "./"

descrie ('molkky', function() {
    it ('game should start at 0 ", function () {
        const molkky = new Molkky();
        assert.equal(molkky.getscore(), 0)
    });
    

})