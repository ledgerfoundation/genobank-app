import Web3 from "web3";
import config from "../config";

let web3;
let OWN_ADDRESS;
let ERC_721_TOKEN;

export function connectToWeb3(provider) {
  return new Promise(resolve => {
    web3 = new Web3(provider);
    web3.eth.getAccounts().then(addresses => {
      OWN_ADDRESS = addresses[0];
      instantiateContract();
      resolve(OWN_ADDRESS);
    });
  });
}

export function getMetamaskProvider() {
  return new Promise((resolve, reject) => {
    if (window.ethereum) {
      window.ethereum
        .enable()
        .then(address => {
          let provider = window.ethereum;

          resolve(provider);
        })
        .catch(err => {
          reject(err);
        });
    } else if (!window.web3) {
      reject();
    } else if (window.web3.accounts[0].length !== 0) {
      let provider = window.web3.currentProvider;
      resolve(provider);
    }
  });
}

function instantiateContract() {
  ERC_721_TOKEN = new web3.eth.Contract(
    config.ERC721_ABI,
    config.ERC_721_ADDRESS
  );
}

export function isAddress(address) {
  return web3.utils.isAddress(address);
}

export function isNumber(number) {
  return typeof number === "number";
}

export function isString(string) {
  return typeof string === "string";
}

export function callTokenTransaction(functionName, ...args) {
  return new Promise((resolve, reject) => {
    ERC_721_TOKEN.methods[functionName](...args)
      .call({ from: OWN_ADDRESS, gasPrice: web3.utils.toWei("0", "gwei") })
      .then(resolve);
  });
}

export function sendTokenTransaction(functionName, ...args) {
  return new Promise((resolve, reject) => {
    ERC_721_TOKEN.methods[functionName](...args)
      .send({ from: OWN_ADDRESS, gasPrice: web3.utils.toWei("0", "gwei") })
      .then(resolve);
  });
}
