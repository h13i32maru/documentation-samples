/**
 * this is MyClass.
 * @param {number} p - this is p.
 * @class
 * @extends MySuperClass
 */
function MyClass(p) {
  /**
   * this is p.
   * @type {number}
   */
  this.p = p;
}

MyClass.prototype = Object.create(MySuperClass, {});

/**
 * this is method.
 * @param {number} p - this is p.
 * @return {number} this is result.
 */
MyClass.prototype.method = function(p){};
