class LinkedList {
    constructor(arr) {
        for (let i = 0; i < arr.length; i++) {
            if (i === 0) {
                this.head = new Node(arr[i])
            } else {
                let node = new Node(arr[i])
                node.next = this.head
                this.head = node
            }
        }
    }

    print() {
        let node = this.head
        while (node) {
            console.log(node.value)
            node = node.next
        }
    }

}

class Node {
    constructor(value, next) {
        this.value = (value===undefined ? 0 : value)
        this.next = (next===undefined ? null : next)
    }

}


const linkedList = new LinkedList([3, 5, 7, 9, 11])
linkedList.print()