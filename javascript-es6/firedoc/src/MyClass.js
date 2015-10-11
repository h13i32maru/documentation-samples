import MySuperClass from './MySuperClass.js';

/**
 * @module MyClass
 */

export default class MyClass extends MySuperClass {
  /**
   * this is MyClass.
   * @class MyClass
   * @extends MySuperClass
   * @constructor
   * @param {number} p - this is p.
   */
  constructor(p) {
    super(p);
    /**
     * this is p.
     * @property p
     * @type {number}
     */
    this.p = p;
  }

  /**
   * this is method.
   * @method method
   * @param {number} p - this is p.
   * @return {string} this is result.
   */
  method(p) {
  }
}
