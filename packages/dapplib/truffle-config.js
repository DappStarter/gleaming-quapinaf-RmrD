require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess glimpse flame suspect notice crime remind concert gesture local fortune secret'; 
let testAccounts = [
"0x15fe68b1f5b8c090c14ef06d49a774ab944910d3090e8cdd9958e1ede929c14a",
"0x56c595810226f6774c669ca40ffa51f3f4aafe88bb82cf11a847509c81a37422",
"0x32b976e74e13ced809865ec7f5ed446e9ee3998d1f5f0f073951d5e3a0fde1f0",
"0x0fa1c7d5023ac6f57456a8c827c821bd32e899b4eaa15770b716deefb7a39287",
"0x832b2a27ec468d4f0ac874b35b0ed846dd8d51f502a8d7892f80447bb1a2f038",
"0x7e42b86d95dba9a3e9e25ae95fa80cbc0e47d7998c656961ef957cde6c4d1e71",
"0x6cd2111394af334fe609ad910ee2aaae6bc0253a57ef064cdde1e1bf802e1690",
"0x32922d8571ea31cb8ce83fff07f4e23f154d4c515253208a42b7f43109699067",
"0x4f1c275f5e9a0ab338ff7e57763dd542c4bdf106dce374cc35279ed3dab71fd7",
"0x374818c2b354f9cd549671a9a3df16feb546b0bce6db8f2a952f4854503756da"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

