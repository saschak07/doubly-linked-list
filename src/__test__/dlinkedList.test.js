const { test, expect } = require('@jest/globals')
const doublyLinkedList = require('../dLinkedList/dLinkedList')

test('instantiates a blank doubly linked list',() => {
    const testLinkedList = new doublyLinkedList()
    expect(testLinkedList.toString()).toBe('')
})

test('prepending to the doubly linked list',() => {
    const testLinkedList = new doublyLinkedList()
    let data = [1,2,3,4]
    data.forEach(number => testLinkedList.prepend(number))
    expect(testLinkedList.toString()).toBe('4,3,2,1')
})
test('appending to the doubly linked list',() => {
    const testLinkedList = new doublyLinkedList()
    let data = [1,2,3,4]
    data.forEach(number => testLinkedList.append(number))
    expect(testLinkedList.toString()).toBe('1,2,3,4')
})
test('deleting from head',() => {
    const testLinkedList = new doublyLinkedList()
    let data = [1,2,3,4]
    data.forEach(number => testLinkedList.append(number))
    testLinkedList.delete(1)
    expect(testLinkedList.toString()).toBe('2,3,4')
})

test('deleting from tail',() => {
    const testLinkedList = new doublyLinkedList()
    let data = [1,2,3,4]
    data.forEach(number => testLinkedList.append(number))
    testLinkedList.delete(4)
    expect(testLinkedList.toString()).toBe('1,2,3')
})
test('deleting from middle',() => {
    const testLinkedList = new doublyLinkedList()
    let data = [1,2,3,4]
    data.forEach(number => testLinkedList.append(number))
    testLinkedList.delete(2)
    expect(testLinkedList.toString()).toBe('1,3,4')
})
test('should reverse the linked list',() => {
    const testLinkedList = new doublyLinkedList()
    let data = [1,2,3,4]
    data.forEach(number => testLinkedList.append(number))
    testLinkedList.reverse()
    expect(testLinkedList.toString()).toBe('4,3,2,1')
})