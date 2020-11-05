/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    var pointerL1 = l1.next;
    var pointerL2 = l2.next;
    var pointerResult;
    var node = l1.val + l2.val
    
    var head = new ListNode(node)
    
    if(head.val > 9){
        head.val = head.val % 10;
        head.next = new ListNode(1);
    }
    else if(pointerL1 || pointerL2){
        head.next = new ListNode(0);
    }

   pointerResult = head;
    while(pointerL1 || pointerL2){
        pointerResult = pointerResult.next
        
        if(!pointerL1){
            pointerL1 = new ListNode(0);
        }
        if(!pointerL2){
            pointerL2 = new ListNode(0);
        }
        
        pointerResult.val = pointerResult.val + pointerL1.val + pointerL2.val;
        
        var pointerL1 = pointerL1.next;
        var pointerL2 = pointerL2.next;
        
        if(pointerResult.val > 9){
            pointerResult.val = pointerResult.val % 10;
            pointerResult.next = new ListNode(1);
        }
        else if(pointerL1 || pointerL2){
            pointerResult.next = new ListNode(0);
        }
    
    }
    
    return (head)
};

class ListNode {
    val;
    next;

     constructor(val){
        val = (val===undefined ? 0 : val)
        next = (next===undefined ? null : next)
    }
}