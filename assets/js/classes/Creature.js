/**
 * Creature Class
*/

export default class Creature {
    
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
        this.name = name;
        this.strength = strength;
        this.age = age;
    }
    
    /*
        *SaySomething
            *@param {String} sentence
    */
    saySomething(sentence) {
        console.log(this._name + " say : " + sentence);
    }
    
    /*
        *Identity
            *@param none
    */
    identity() {
        console.log(`NAME : ${this._name}, STRENGTH : ${this._strength}, AGE : ${this._age}`);
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