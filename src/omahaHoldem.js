import {represent} from '@openhud/helpers';

// Generated by simulations
const data = new Map([
    [2, new Map(require('../data/omaha2.json'))],
    [3, new Map(require('../data/omaha3.json'))],
    [4, new Map(require('../data/omaha4.json'))],
    [5, new Map(require('../data/omaha5.json'))],
    [6, new Map(require('../data/omaha6.json'))],
    [7, new Map(require('../data/omaha7.json'))],
    [8, new Map(require('../data/omaha8.json'))],
    [9, new Map(require('../data/omaha9.json'))],
    [10, new Map(require('../data/omaha10.json'))],
    [11, new Map(require('../data/omaha11.json'))]
]);


const omahaHoldem = ({hand, players = 6}) => {
    if (!hand || hand.length !== 4) {
        throw new Error('Invalid omaha holdem hand');
    }
    if (!players || players < 2 || players > 11) {
        throw new Error('Invalid number of omaha players');
    }

    const handRep = represent({hand});

    return data.get(players).get(handRep);
};

export default omahaHoldem;