const BasicERC721 = artifacts.require("ERC721/BasicERC721");

module.exports = function(deployer) {
    deployer.deploy(BasicERC721, "GenoBank Token", "GBT");
};
