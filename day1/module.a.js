const add = (a, b) => a + b;
const odd = name => `hello ${name}`
exports.add = add;
module.exports = {
    add: add,
    odd: odd
};