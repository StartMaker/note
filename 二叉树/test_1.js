//创建二叉树
function Node(data) {
    this.data = data;
    this.left = null;
    this.right = null;
}
function BinaryTree() {
    myExtends(this,Node);
}
function myExtends (sub,sup){
    function F() {}
    F.prototype = new sup();
    sub.prototype = new F();
    F.constructor = sub;
}
BinaryTree.prototype = {
    insertNode: function (data_list) {
        this.data = data_list.shift?data_list.shift():undefined;
        insertNodes(this,data_list);
    }
};
function insertNodes (node, data_list) {
    if(node.data !== undefined){
        switch (data_list.length) {
            case 1:
                node.left = new Node(data_list.shift());
                node.right = undefined;
                delete node.left.left;
                delete node.left.right;
                break;
            case 2:
                node.left = new Node(data_list.shift());
                node.right = new Node(data_list.shift());
                delete node.left.left;
                delete node.left.right;
                delete node.right.left;
                delete node.right.right;
                break;
            case 0:
                delete node.left;
                delete node.right;
                break;
            default:
                node.left = new Node(data_list.shift ? data_list.shift():undefined);
                node.right = new Node(data_list.shift ? data_list.shift():undefined);
                insertNodes(node.left,data_list.slice(0,Math.floor((data_list.length-1)/2)));
                insertNodes(node.right,data_list.slice(Math.floor((data_list.length-1)/2),data_list.length));
                break;
        }
        data_list = null;
    }
    else if(node.data === undefined){
        node = undefined;
    }
}

let tree = new BinaryTree();
tree.insertNode([1,2,2,5,7,8,9,6,3,5,4,7,4,5,100,2,2,5,7,8,9,6,3,5,4,7,4,5,100]);
console.log(tree);
//遍历二叉树
function travel(node) {
    let height = 0;
    let maxHeight = 0;
    console.log(node);
    if(node.left){
        maxHeight ++;
        travel(node.left);
        maxHeight --;

    }
    if(node.right){
        maxHeight ++;
        travel(node.right);
        maxHeight --;
    }
    if(node.right&&node.left) {
        console.log(maxHeight);
        maxHeight --;
    }
}

travel(tree);

// let arr = [1,2,5.7,7,8];
// console.log(arr.shift());
// console.log(arr);