
function A(x) {
    this.x = x;
}
A.prototype.x = 1;
function B(x) {
    this.x = x;
}
B.prototype = new A(2);
const b = new B(3);
delete b.x;
console.log(b.x); // 2