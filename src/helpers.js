import Web3 from 'web3';
import Torus from '@toruslabs/torus-embed';
export let web3;
export let torus = new Torus();
export const init = () => {
    return torus.init({
        network: {
            host: 'ropsten'
        }
    })
}


