const doublyLinkedListNode = require('./dLinkedListNode')
/**
 * class for initializing a doubly linked list and methods 
 * implemented on the doubly linked list
 * 
 * @author saswata
 */
class doublyLinkedList{
    constructor(){
        this.head = null
        this.tail = null
    }
    /**
     * method to prepend a new node to the doubly linked list
     * with data insterted as the param
     * @param {*} data 
     */
    prepend(data){
        const node = new doublyLinkedListNode(data)
        if(this.head){
            this.head.previous = node
            node.next = this.head
        }
        this.head = node
        if(!this.tail){
            this.tail = node
        }
    }
    /**
     * method to append a new node to the doubly linked list
     * with data inserted as param
     * @param {*} data 
     */
    append(data){
        const node = new doublyLinkedListNode(data)
        if(!this.head && !this.tail){
            this.head = node
            this.tail = node
            return
        }
        this.tail.next = node
        node.previous = this.tail
        this.tail = node
    }
    /**
     * method to delete first node with data passed as param
     * @param {*} data 
     */
    delete(data){
        if(this.head.data === data){
            this.head = this.head.next
            this.head.previous = null
        }
        else if(this.tail.data === data){
            this.tail = this.tail.previous
            this.tail.next = null
        }
        else{
            let currentNode = this.head
            let previous = null
            let next  = null
            while(currentNode){
                if(currentNode.data === data){
                    next = currentNode.next
                    previous = currentNode.previous
                    previous.next = next
                    next.previous = previous
                    return
                }
                currentNode = currentNode.next
            }
        }
    }
    /**
     * method to reverse a doubly linked list
     */
    reverse(){
        let previous = null
        let next = null
        let currentNode = this.head
        this.tail = currentNode
        while(currentNode){
            next = currentNode.next
            currentNode.previous = next
            currentNode.next = previous
            previous = currentNode
            currentNode = next
            if(next){
                this.head = next
            }
        }
    }

    toString(){
        let currentNode = this.head
        let nodes = []
        while(currentNode){
            nodes.push(currentNode)
            currentNode = currentNode.next
        }
        if(this.tail){
            console.log(this.tail.data)
        }
       return nodes.map(node => node.toString()).toString()
    }
}
module.exports = doublyLinkedList