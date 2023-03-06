const Bach = artifacts.require("./Bach.sol");

contract("Bach", (accounts) => {
    it('safeMint', async () => {
        let bach = await Bach.deployed();
        await bach.safeMint(accounts[0]);
        assert.equal((await bach.balanceOf(accounts[0])).toString(), "1", "safeMint does not work");
    })
}) 