/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let revertedListHead = revertList(head)

    if (n === 1) {
        revertedListHead = revertedListHead.next
        if (!revertedListHead) {
            return revertedListHead
        }
        const revertedAgain = revertList(revertedListHead)
        return revertedAgain
    }

    let newHead = new ListNode(0, revertedListHead)
    let count = 1
    while (count !== n - 1) {
        revertedListHead = revertedListHead.next
        count++
    }

    revertedListHead.next = revertedListHead.next.next
    const revertedAgain = revertList(newHead.next)
    return revertedAgain
};

const revertList = (head) => {
    let invertedNextNode = new ListNode(head.val)
    while (head.next) {
        invertedNextNode = new ListNode(head.next.val, invertedNextNode)
        head = head.next
    }

    return invertedNextNode
}