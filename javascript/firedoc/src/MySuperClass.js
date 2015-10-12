/**
 * @module MySuperClass
 */

export default class MySuperClass {
  /**
   * this is MySuperClass.
   * @class MySuperClass
   * @constructor
   * @param {number} p - this is p.
   */
  constructor(p) {
    /**
     * this is p.
     * @property superP
     * @type {number}
     */
    this.superP = p;
  }

  /**
   * this is superMethod.
   * @method superMethod
   * @param {number} p - this is p.
   * @return {string} this is result.
   */
  superMethod(p){}
}

/**
 * this is MySuperClass.
 * @class MySuperClass
 * @constructor
 * @param {number} p - this is p.
 */
function MySuperClass(p) {
  /**
   * this is p.
   * @property superP
   * @type {number}
   */
  this.superP = p;
}

/**
 * this is superMethod.
 * @method superMethod
 * @param {number} p - this is p.
 * @return {string} this is result.
 */
MySuperClass.prototype.superMethod = function(p){};


