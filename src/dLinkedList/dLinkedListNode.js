/**
 * class used to instantiate doubly linked list node
 * @author saswata
 */
class doublyLinkedListNode{
    /**
     * parameterized contrsuctor for doubly linked list node
     * @param {*} data 
     */
    constructor(data){
        this.data =  data
        this.previous = null
        this.next = null
    }

    toString(){
        return `${this.data}`
    }
}
module.exports = doublyLinkedListNode