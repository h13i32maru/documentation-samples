/**
 * this is MySuperClass.
 * @param {number} p - this is p.
 * @class
 */
function MySuperClass(p) {
  /**
   * this is superP.
   * @type {number}
   */
  this.superP = p;
}

/**
 * this is superMethod.
 * @param {number} p - this is p.
 * @return {string} this is result.
 */
MySuperClass.prototype.superMethod = function(p){};
