/**
 * Urukhai Class
*/

import Orc from './Orc.js';
import Creature from './Creature.js';

export default class Urukhai extends Orc {
    
    /*
        Properties
            _name : String
            _strength + 10 : Number
    */
    
    /*
        *Constructor
            *@param {String} name
            *@param {Number} strength
    */
    constructor(name, strength) {
        super(name, strength + 10);
        // super is Creature constructor function
    }
    
    /*
        *Kill
            *@param {Object} somebody
    */
    kill(somebody) {
        if (!(somebody instanceof Creature))
            throw new Error("`somebody` is not a Creature");
        console.log(`${this.name} killed ${somebody.name} !!!`);
    }
}