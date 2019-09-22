import {
  callTokenTransaction,
  isAddress,
  isNumber,
  isString,
  sendTokenTransaction
} from "./initals";

/*
    Mints token in the specified address
    address to,
    uint256 tokenId
*/
export function mintToken(to, tokenId) {
  if (isAddress(to) && isNumber(tokenId)) {
    return sendTokenTransaction("mint", to, tokenId);
  }
}

/*
    Burns Token if the sender is the owner
    uint256 tokenId
*/
export function burnToken(tokenId) {
  if (isNumber(tokenId)) {
    return sendTokenTransaction("burn", tokenId);
  }
}

/*
    Sets token URI for a specific token id if sender is the token owner
    uint256 tokenId, string uri
*/
export function setTokenUri(tokenId, uri) {
  if (isNumber(tokenId) && isString(uri)) {
    sendTokenTransaction("setTokenURI", tokenId, uri);
  }
}
/*
    Gets all the tokens held by the function caller
*/
export function getTokensIdsForSenderAddress() {
  return new Promise((resolve, reject) => {
    callTokenTransaction("getTokensForSender").then(array => {
      resolve(array.map(ele => parseInt(ele)));
    });
  });
}

export function balanceOf(address) {
  return new Promise((resolve, reject) => {
    if (isAddress(address)) {
      callTokenTransaction("balanceOf", address)
        .then(e => resolve(parseInt(e)))
        .catch(reject);
    }
  });
}

// To get owner of a certain token id
export function ownerOf(tokenId) {
  return new Promise((resolve, reject) => {
    if (isNumber(tokenId)) {
      callTokenTransaction("ownerOf", tokenId)
        .then(resolve)
        .catch(reject);
    }
  });
}

export function getTokenUri(tokenId) {
  return new Promise((resolve, reject) => {
    if (isNumber(tokenId)) {
      callTokenTransaction("tokenURI", tokenId)
        .then(resolve)
        .catch(reject);
    }
  });
}

export function transferToken(fromAddress, toAddress, tokenId) {
  if (isAddress(fromAddress) && isAddress(toAddress) && isNumber(tokenId)) {
    return sendTokenTransaction(
      "safeTransferFrom",
      fromAddress,
      toAddress,
      tokenId
    );
  }
}
