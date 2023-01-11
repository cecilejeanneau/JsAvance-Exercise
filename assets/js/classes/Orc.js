/**
 * Orc Class
*/

import Creature from './Creature.js';

export default class Orc extends Creature {
    
    /*
        Properties
            _name : String
            _strength : Number
            _age : Number
    */
    
    /*
        *Constructor
            *@param {String} name
            *@param {Number} strength
            *@param {Number} age
    */
    constructor(name, strength, age = null) {
        super(name, strength, age);
        // super is Creature constructor function
    }
    
    /*
        *Scream
            *@param {String} words
    */
    scream(words) {
        console.log(this.name + ' screams : ' + words.toUpperCase() + ' !!!');
    }
    
    /*
        *Bite
            *@param {Object} somebody
    */
    bite(somebody) {
        if (!(somebody instanceof Creature))
            throw new Error("`somebody` is not a Creature");
        console.log(`${this.name} bites ${somebody.name} to the neck !`);
    }
    
    
    /*
        *Setter for name value
            *@param {String} value
    */
    set name(value) {
        if(typeof value !== 'string')
            throw "Name need to be string type !"
        this._name = value;
    }
    
    /*
        *Getter for name value
    */
    get name() {
        return this._name;
    }
    
    /*
        *Setter for strength value
            *@param {Number} value
    */
    set strength(value) {
        if(typeof value !== 'number')
            throw "Strength need to be number type !"
        this._strength = value;
    }
    
    /*
        *Getter for strength value
    */
    get strength() {
        return this._strength;
    }
    
    /*
        *Setter for age value
            *@param {Number} value
    */
    set age(value) {
        if(typeof value !== 'number')
            throw "Age need to be number type !"
        this._age = value;
    }
    
    /*
        *Getter for age value
    */
    get age() {
        return this._age;
    }
}