/**
 * Stack
 *
 * Create a stack data structure. The stack
 * should be a class with methods 'push', 'pop', and
 * 'peek'.  Adding an element to the stack should
 * store it until it is removed.
 *
 * Examples:
 * const s = new Stack();
 * s.push(1);
 * s.push(2);
 * s.pop(); // returns 2
 * s.pop(); // returns 1
 */

class Stack {
    constructor(){
        this.numbers= [];
    }

    push(num){
        this.numbers.push(num);
    }
 
    pop(){
        return this.numbers.pop();
    }

    peek(){
        return this.numbers[this.numbers.length-1];

    }



}


module.exports = Stack;