/// <reference path='fourslash.ts' />

////type A = 'a' | 'b' | 'c' | 'd' | 'e';
////type B = 1 | 2 | 3;
////type C = '@' | '!';
////type D = `${A}${Uppercase<A>}${B}${C}`;
////
////[|const names: { [K in D]: K } = {};|]

verify.codeFix({
    index: 0,
    description: ts.Diagnostics.Add_missing_properties.message,
    newRangeContent:
`const names: { [K in D]: K } = {
    "aA1@": "aA1@",
    "aA1!": "aA1!",
    "aA2@": "aA2@",
    "aA2!": "aA2!",
    "aA3@": "aA3@",
    "aA3!": "aA3!",
    "aB1@": "aB1@",
    "aB1!": "aB1!",
    "aB2@": "aB2@",
    "aB2!": "aB2!",
    "aB3@": "aB3@",
    "aB3!": "aB3!",
    "aC1@": "aC1@",
    "aC1!": "aC1!",
    "aC2@": "aC2@",
    "aC2!": "aC2!",
    "aC3@": "aC3@",
    "aC3!": "aC3!",
    "aD1@": "aD1@",
    "aD1!": "aD1!",
    "aD2@": "aD2@",
    "aD2!": "aD2!",
    "aD3@": "aD3@",
    "aD3!": "aD3!",
    "aE1@": "aE1@",
    "aE1!": "aE1!",
    "aE2@": "aE2@",
    "aE2!": "aE2!",
    "aE3@": "aE3@",
    "aE3!": "aE3!",
    "bA1@": "bA1@",
    "bA1!": "bA1!",
    "bA2@": "bA2@",
    "bA2!": "bA2!",
    "bA3@": "bA3@",
    "bA3!": "bA3!",
    "bB1@": "bB1@",
    "bB1!": "bB1!",
    "bB2@": "bB2@",
    "bB2!": "bB2!",
    "bB3@": "bB3@",
    "bB3!": "bB3!",
    "bC1@": "bC1@",
    "bC1!": "bC1!",
    "bC2@": "bC2@",
    "bC2!": "bC2!",
    "bC3@": "bC3@",
    "bC3!": "bC3!",
    "bD1@": "bD1@",
    "bD1!": "bD1!",
    "bD2@": "bD2@",
    "bD2!": "bD2!",
    "bD3@": "bD3@",
    "bD3!": "bD3!",
    "bE1@": "bE1@",
    "bE1!": "bE1!",
    "bE2@": "bE2@",
    "bE2!": "bE2!",
    "bE3@": "bE3@",
    "bE3!": "bE3!",
    "cA1@": "cA1@",
    "cA1!": "cA1!",
    "cA2@": "cA2@",
    "cA2!": "cA2!",
    "cA3@": "cA3@",
    "cA3!": "cA3!",
    "cB1@": "cB1@",
    "cB1!": "cB1!",
    "cB2@": "cB2@",
    "cB2!": "cB2!",
    "cB3@": "cB3@",
    "cB3!": "cB3!",
    "cC1@": "cC1@",
    "cC1!": "cC1!",
    "cC2@": "cC2@",
    "cC2!": "cC2!",
    "cC3@": "cC3@",
    "cC3!": "cC3!",
    "cD1@": "cD1@",
    "cD1!": "cD1!",
    "cD2@": "cD2@",
    "cD2!": "cD2!",
    "cD3@": "cD3@",
    "cD3!": "cD3!",
    "cE1@": "cE1@",
    "cE1!": "cE1!",
    "cE2@": "cE2@",
    "cE2!": "cE2!",
    "cE3@": "cE3@",
    "cE3!": "cE3!",
    "dA1@": "dA1@",
    "dA1!": "dA1!",
    "dA2@": "dA2@",
    "dA2!": "dA2!",
    "dA3@": "dA3@",
    "dA3!": "dA3!",
    "dB1@": "dB1@",
    "dB1!": "dB1!",
    "dB2@": "dB2@",
    "dB2!": "dB2!",
    "dB3@": "dB3@",
    "dB3!": "dB3!",
    "dC1@": "dC1@",
    "dC1!": "dC1!",
    "dC2@": "dC2@",
    "dC2!": "dC2!",
    "dC3@": "dC3@",
    "dC3!": "dC3!",
    "dD1@": "dD1@",
    "dD1!": "dD1!",
    "dD2@": "dD2@",
    "dD2!": "dD2!",
    "dD3@": "dD3@",
    "dD3!": "dD3!",
    "dE1@": "dE1@",
    "dE1!": "dE1!",
    "dE2@": "dE2@",
    "dE2!": "dE2!",
    "dE3@": "dE3@",
    "dE3!": "dE3!",
    "eA1@": "eA1@",
    "eA1!": "eA1!",
    "eA2@": "eA2@",
    "eA2!": "eA2!",
    "eA3@": "eA3@",
    "eA3!": "eA3!",
    "eB1@": "eB1@",
    "eB1!": "eB1!",
    "eB2@": "eB2@",
    "eB2!": "eB2!",
    "eB3@": "eB3@",
    "eB3!": "eB3!",
    "eC1@": "eC1@",
    "eC1!": "eC1!",
    "eC2@": "eC2@",
    "eC2!": "eC2!",
    "eC3@": "eC3@",
    "eC3!": "eC3!",
    "eD1@": "eD1@",
    "eD1!": "eD1!",
    "eD2@": "eD2@",
    "eD2!": "eD2!",
    "eD3@": "eD3@",
    "eD3!": "eD3!",
    "eE1@": "eE1@",
    "eE1!": "eE1!",
    "eE2@": "eE2@",
    "eE2!": "eE2!",
    "eE3@": "eE3@",
    "eE3!": "eE3!"
};`
});
