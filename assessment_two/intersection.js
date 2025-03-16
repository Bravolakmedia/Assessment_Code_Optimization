// Problem: Find the node at which two singly linked lists intersect.
// Solution: Using two pointer approach
// I got the lengthA and lengthB of the two linked lists.
// I aligned the starting points of the two lists.
// I iterated the pointers one step at a time until they meet.
// The meeting point of the pointers marked the point of intersection. 
// If no intersection exists, it returns null.



class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function getIntersectionNode(headA, headB) {
    if (!headA || !headB) {
        return null;
    }

    let lengthA = getLength(headA);
    let lengthB = getLength(headB);

    
    while (lengthA < lengthB) {
        headB = headB.next;
        lengthB--;
    }
    while (lengthA > lengthB) {
        headA = headA.next;
        lengthA--;
    }


    while (headA !== headB) {
        headA = headA.next;
        headB = headB.next;
    }

    return headA; 
}

function getLength(head) {
    let length = 0;
    while (head !== null) {
        length++;
        head = head.next;
    }
    return length;
}

// Example 
const commonNode = new ListNode(8, new ListNode(4, new ListNode(5)));

const headA = new ListNode(4, new ListNode(1, commonNode));
const headB = new ListNode(5, new ListNode(6, new ListNode(1, commonNode)));

const intersection = getIntersectionNode(headA, headB);

if (intersection) {
    console.log("Intersection at node with value:", intersection.val);
} else {
    console.log("No intersection found.");
}
