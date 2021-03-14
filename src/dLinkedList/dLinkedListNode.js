class doublyLinkedListNode{
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