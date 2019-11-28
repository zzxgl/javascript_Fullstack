var tree = {
    value: 1,
    left: {
        value: 2,
        left: {
            value: 4
        }
    },
    right: {
        value: 3,
        left: {
            value: 5,
            left: {
                value: 7
            },
            right: {
                value: 8
            }
        },
        right: {
            value: 6
        }
    }
}

// //   前序遍历
// var preOrder = function (node) {
//     if (node) {
//         console.log(node.value)
//         preOrder(node.left)
//         preOrder(node.right)
//     }
// }
// preOrder(tree)

// //  中序遍历
// var midOrder = function (node) {
//     if (node) {
//         midOrder(node.left)
//         console.log(node.value)
//         midOrder(node.right)
//     }
// }
// midOrder(tree)

// //  后序遍历 
// var backOrder = function (node) {
//     if (node) {
//         backOrder(node.left)
//         console.log(node.value)
//         backOrder(node.right)
//     }
// }
// backOrder(tree)

// 非递归 深度优先 广度优先 
var preOrderUnRecur = function (node) {
  if (!node) {
    throw new Error('Empty Tree')
  }
  var stack = []
  stack.push(node)
  while(stack.length !== 0){
    node = stack.pop()
    console.log(node.value)
    if (node.right) {
      stack.push(node.right)
    }
    if (node.left) {
      stack.push(node.left)
    }
  }
}
preOrderUnRecur(tree)

// 广度优先
function BreadthFirstUnRecur(node) {
    let stack = []
    stack.push(node)
    while (stack.length !== 0) {
        let n = stack.shift()
        console.log(n.value)
        if (n.left) {
            stack.push(n.left)
        }
        if (n.right) {
            stack.push(n.right)
        }
    }
}
BreadthFirstUnRecur(tree)
