
 // Definition for singly-linked list.
  function ListNode(val, next) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
  }
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let node = new ListNode()
    let tail = node

    while (list1 && list2) {
        if (list1.val <= list2.val) {
            tail.next = new ListNode(list1.val)
            list1 = list1.next
            tail = tail.next
        } else {
            tail.next = new ListNode(list2.val)
            list2 = list2.next
            tail = tail.next
        }
    }


    while (list1) {
        tail.next = new ListNode(list1.val)
        tail = tail.next
        list1 = list1.next
    }

    while (list2) {
        tail.next = new ListNode(list2.val)
        tail = tail.next
        list2 = list2.next
    }

    return node.next
};
