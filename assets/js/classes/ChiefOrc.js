/**
 * ChiefOrc Class
*/

import Orc from './Orc.js';
import Creature from './Creature.js';

export default class ChiefOrc extends Orc {
    
    /*
        Properties
            _name : String
            _strength + 2 : Number
            _age : Number
            _isChief : Boolean
    */
    
    /*
        *Constructor
            *@param {String} name
            *@param {Number} strength
            *@param {Number} age
            *@param {Boolean} isChief
    */
    constructor(name, strength, age, isChief) {
        super(name, strength + 2, age);
        this.isChief = true;
        // super is Creature constructor function
    }
    
    /*
        *GiveOrder
            *@param {Object} someOrc
            *@param {Object} somebody
    */
    giveOrder(someOrc, somebody) {
        if (!(someOrc instanceof Orc))
            throw new Error("`someOrc` is not an Orc");
        if (!(somebody instanceof Creature))
            throw new Error("`somebody` is not a Creature");
        console.log(`${someOrc.name} !!! KILL this ${somebody.name} jerk !!!`);
    }
}