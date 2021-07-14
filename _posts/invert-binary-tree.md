---
title: "How to Invert a Binary Tree"
excerpt: "Lets get to the root of the problem. Today we will write an algorithm that takes in a Binary Tree and inverts it. In other words, the function will swap every left node in the tree for its corresponding right node. This article will focus on implementing a solution in Python."
coverImage: "/assets/blog/posts/invert-binary-tree.jpg"
date: "2020-10-13T07:37:07.322Z"
author:
  name: Alexis Davalos
  picture: "/assets/blog/authors/alexis.jpeg"
ogImage:
  url: "/assets/blog/posts/invert-binary-tree.jpg"
topics:
  - "binary-trees"
  - "coding"
  - "python"
  - "big-o"
---

Lets get to the root of the problem. Today we will write an algorithm that takes in a Binary Tree and inverts it. In other words, the function will swap every left node in the tree for its corresponding right node. This article will focus on implementing a solution in **Python.**

## Problem Statement

> Write a function that takes in a Binary Tree and inverts it. In other words, the function should swap every left node in the tree for its corresponding right node. Each Binary Tree node has an integer value, a left child node, and a right child node. Children nodes can either be Binary Tree nodes themselves or None / null.

## Starter Code:

```python
# Tree Object Class
class Tree:
    def __init__(self, value):
        self.val = value
        self.left = None
        self.right = None

def invertBinaryTree(tree):
    # Write Solution Here
    return

# Tree Construction
tree = Tree(4)
tree.left = Tree(2)
tree.right = Tree(6)
tree.left.left = Tree(1)
tree.left.right = Tree(3)
tree.left.left.left = Tree(5)
tree.left.left.right = Tree(7)

```

First and foremost, this algorithm will implement a <a class="text-gray-700 font-bold hover:underline hover:text-blue-500 duration-200 transition-colors" href="https://en.wikipedia.org/wiki/Breadth-first_search" target="_blank">Breadth First Search </a>approach to solving this problem. Breadth-first search (BFS) is an algorithm for traversing or searching tree or graph data structures. It starts at the tree root, and explores all of the neighbor nodes at the present depth or level prior to moving on to the nodes at the next depth level.

One of the key characteristics of a **BFS** algorithm is that it utilizes a **Queue Data Structure** to traverse the Tree Structure level by level.

![Queue Data Structure](https://i1.faceprep.in/Companies-1/queue-operations.gif)

Our first step is then to initialize a queue within our **`invertBinaryTree`** function and establish our first base case.

## Variable Initialization:

```python
def invertBinaryTree(tree):
    # Initialize a queue to store tree nodes
    queue = []
    # Tree = None Base Case
    if tree == None:
        return None
    # Add root node into queue
    queue.append(tree)
```

In this snippet, we have initialized a queue to store our tree nodes. We have also established that if the input tree is equal to **`None`** we simply return **`None`**. Next, if our code passes this check, we can go ahead and add the **`Root`** node to our queue.

The next logical step would be to create a loop while there are nodes in our queue. Then we can grab the node off the queue and swap its children nodes.

```python
    # Loop while the queue has nodes
    while len(queue) > 0:
        # Grab node off the queue
        treeNode = queue.pop()
        # Swap the children nodes
        if treeNode != None:
            swapChildren(treeNode)
```

Next we will define a helper function to swap the `treeNode` left and right children nodes.

## Swapping Children Nodes

```python
# Swap left and right children nodes
def swapChildren(node):
    temp = node.left
    node.left = node.right
    node.right = temp

```

A compact little function to make our code a little cleaner. All this is doing is storing the node's left child in a `temp` variable, reassigning the left child to be the right and then the right node to be our temp variable. This way, we can swap without losing reference to either node.

## Leaf Nodes & Enqueuing Children

We can then add an else conditional statement that tells returns the control to the beginning of the while loop. The continue statement rejects all the remaining statements in the current iteration of the loop and moves the control back to the top of the loop.

In other words, because we only want to call our `swapChildren` function on nodes that have children, if we reach a leaf node we want to stop the iteration on its tracks and avoid enqueuing `None`.

However, if we successfully swap the children nodes then it is safe for us to enqueue them.

```python
    # Loop while the queue has nodes
    while len(queue) > 0:
        # Grab node off the queue
        treeNode = queue.pop()
        # Swap the children nodes
        if treeNode != None:
            swapChildren(treeNode)
        # Otherwise continue to next iteration
        else:
            continue
        # Add swapped children to the queue
        queue.insert(0, treeNode.left)
        queue.insert(0, treeNode.right)
```

> Remember a Queue must honor a `FIFO (First In First Out)` enqueuing and dequeuing order.

That is why when we grab nodes off our Queue, we use:

```python
queue.pop()
```

When we insert nodes into our queue, we use the insert method to shift our list over by passing in the target index of 0, which is the beginning of our queue and our children nodes.

```python
queue.insert(0, treeNode.left)
queue.insert(0, treeNode.right)
```

## Finishing Up

Last but not least, when our code has traversed the entire tree structure, we should break out of the loop and return our inverted tree.

## Final Solution Code:

```python
def invertBinaryTree(tree):
    # Initialize a queue to store tree nodes
    queue = []
    # Return None if input tree is None
    if tree == None:
        return None
    # Add root node into queue
    queue.append(tree)
    # Loop while the queue has nodes
    while len(queue) > 0:
        # Grab node off the queue
        treeNode = queue.pop()
        # Swap the children nodes
        if treeNode != None:
            swapChildren(treeNode)
        # Otherwise continue to next iteration
        else:
            continue
        # Add swapped children to the queue
        queue.insert(0, treeNode.left)
        queue.insert(0, treeNode.right)

    # Return the inverted tree
    return tree


# Swaps left and right node children
def swapChildren(node):
    left = node.left
    node.left = node.right
    node.right = left
```

## Checking Our Work

Finally, you've reached this point and, you're ready to see a beautifully crafted inverted binary tree. Let's print that sucker out to our console!

```python
print('Original', tree)
print('Inverted', invertBinaryTree(tree))
```

![Queue Data Structure](https://media.tenor.com/images/9eb2d92b8b784610d75da703e736e760/tenor.gif)

What happened? You likely saw something like this print out in your console:

```python
Original <__main__.Tree object at 0x108eb6f40>
Inverted <__main__.Tree object at 0x108eb6f40>
```

> This is due to the fact that **Python** is printing out the address in memory where our tree is stored instead of the tree itself.

Did you notice the address is the same for both statements? This is because we are mutating the original tree structure.

Now that we know what **Python** is doing, let's tell it how to correctly format our `Tree Class` when it is printed out in the console.

The approach we're going to take is to display our trees in the following list format:

```python
[[4], [2, 6], [1, 3], [5, 7]]
```

This would represent the following balanced tree, where each sub-array is a level/depth:

```python
         4
       /   \
      2     6
     / \   / \
    1   3 5   7
```

To achieve this format we're going to take advantage of the `__repr__()` constructor method. This is used to compute the "official" string representation of an object. So lets go ahead and update our Tree Class:

```python
class Tree:
    def __init__(self, value):
        self.val = value
        self.left = None
        self.right = None

    def __repr__(self):
        queue = []
        path = []
        if self == None:
            return f'Tree: (None)'
        # Grab Node Off Queue
        queue.append(self)
        while(len(queue) > 0):
            # Our Level Subarray
            level = []
            # Current Size of Queue = Level
            size = len(queue)
            # Stores Node Values in Current Level
            for _ in range(size):
                node = queue.pop()
                level.append(node.val)
                if node.left:
                    queue.insert(0, node.left)
                if node.right:
                    queue.insert(0, node.right)
            # Adds Level to Path
            path.append(level)

        # Return our mapped tree
        return f'Tree: {path}'

```

In a familiar **BFS** manner, we traversed through our tree structure, except this time we created an inner loop to keep track of each level in our tree and therefore the result should be a list with subarrays for every level of our tree.

The following print statements..

```python
print('Original', tree)
print('Inverted', invertBinaryTree(tree))
```

Will correctly print out our tree in this manner:

```python
Original Tree: [[4], [2, 6], [1, 3], [5, 7]]
Inverted Tree: [[4], [6, 2], [3, 1], [7, 5]]
```

## Conclusion

In the end, we've found a way to swap tree nodes in place and invert a Binary Tree! The results can be visualized like so:

```python
      Original          Inverted
          4                4
        /   \            /   \
       2     6          6     2
      / \   / \        / \   / \
     1   3 5   7      3   1 7   5
```

Thanks so much for reading up to this point. I hope you found this article useful and it brought you a little closer to understanding how to work with Binary Trees!

<p class="text-lg text-black text-bold">You can find the source code to this problem on <a class="text-gray-700  font-bold hover:underline hover:text-blue-500 duration-200 transition-colors" href="https://github.com/alexisdavalos/CodingChallenges/blob/solutions/BinaryTreeInversion/InvertBinaryTree.py">Github</a></p>

I've also compiled a solution in <a class="text-gray-700  font-bold hover:underline hover:text-blue-500 duration-200 transition-colors" href="https://github.com/alexisdavalos/CodingChallenges/blob/solutions/BinaryTreeInversion/InvertBinaryTree.js">Javascript</a>
