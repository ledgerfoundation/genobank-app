pragma solidity >=0.4.21 <0.6.0;

import "./ERC721.sol";
import "./ERC721Metadata.sol";
import "./ERC721Enumerable.sol";

contract BasicERC721  is ERC721, ERC721Metadata, ERC721Enumerable{

    constructor(string memory name, string memory symbol)
    public
    ERC721Metadata(name, symbol)
    {}

    function mint(address to, uint256 tokenId) public {
        _mint(to, tokenId);
    }

    function burn(uint256 tokenId) public {
        _burn(msg.sender, tokenId);
    }

    function setTokenURI(uint256 tokenId, string memory uri) public{
        require(ownerOf(tokenId) == msg.sender, "ERC721: Sender is not owner of this NFT");
        _setTokenURI(tokenId, uri);
    }

    function getTokensForSender() public view returns (uint256[] memory){
        return _tokensOfOwner(msg.sender);
    }
}
