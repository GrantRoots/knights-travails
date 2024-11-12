#!/usr/bin/node

function knightMoves(start, finish) {
    if (Array.isArray(start) === false || Array.isArray(finish) === false) {
        throw Error('start/finish must be an array')
    }
    if (start.length !== 2 || finish.length !== 2) {
        throw Error('Invalid, start/finish is 2 numbers both 0-7')
    }
    //shortest way to get from one square to another
    //output each coordinate from start to finish

    //knight moves up/down 1 left/right 2 or up/down 2 left/right 1

    //store each possible move in an array from starting at start point
    //then each second possible move in array from first move point
    //add +1 move
    //repeat

    //then if one hits the target compare the number of moves between them
    // return the lowst number of moves

    //all moving functions
    function upTwoRight(current) {
        if ((current[0] + 1) > 7 || (current[1] + 2) > 7) {
            return null
        }
        let newX = current[0] + 1
        let newY = current[1] + 2
        return [newX, newY]
    }
    function upTwoLeft(current) {
        if ((current[0] - 1) < 0 || (current[1] + 2) > 7) {
            return null
        }
        current[0] -= 1
        current[1] += 2
        return current
    }
    function downTwoRight(current) {
        if ((current[0] + 1) > 7 || (current[1] - 2) < 0) {
            return null
        }
        current[0] += 1
        current[1] -= 2
        return current
    }
    function downTwoLeft(current) {
        if ((current[0] - 1) < 0 || (current[1] - 2) < 0) {
            return null
        }
        current[0] -= 1
        current[1] -= 2
        return current
    }
    function rightTwoUp(current) {
        if ((current[0] + 2) > 7 || (current[1] + 1) > 7) {
            return null
        }
        current[0] += 2
        current[1] += 1
        return current
    }
    function rightTwoDown(current) {
        if ((current[0] + 2) > 7 || (current[1] - 1) < 0) {
            return null
        }
        current[0] += 2
        current[1] -= 1
        return current
    }
    function leftTwoUp(current) {
        if ((current[0] - 2) < 0 || (current[1] + 1) > 7) {
            return null
        }
        current[0] -= 2
        current[1] += 1
        return current
    }
    function leftTwoDown(current) {
        if ((current[0] - 2) < 0 || (current[1] - 2) < 0) {
            return null
        }
        current[0] -= 2
        current[1] -= 2
        return current
    }
    // number of moves = array.length - 1

    let foundArrays = []
    //make an array of arrays??
    //[[4,4, 5,5][4,4, 5,5][4,4, 5,5][4,4, 5,5][4,4, 5,5][4,4, 5,5][4,4, 5,5][4,4, 5,5]]

    //make 8 arrays from original array (or as many as possible)
    //repeat until found

    function allMoves(currentArray) {

        if (upTwoRight(currentArray[currentArray.length - 1]) !== null) {
            currentArray.push(upTwoRight(currentArray[currentArray.length - 1]))
            if (currentArray[currentArray.length - 1][0] === finish[0] && currentArray[currentArray.length - 1][1] === finish[1]) {
                foundArrays.push(currentArray)
                return
            }
            //make new arrays with this array
            allMoves(currentArray)
        }

        upTwoLeft(current)
        downTwoRight(current)
        downTwoLeft(current)
        rightTwoUp(current)
        rightTwoDown(current)
        leftTwoUp(current)
        leftTwoDown(current)
    }

    allMoves([start])

    //find shortest array in foundArrays
}

knightMoves([0, 0], [2, 4])

// [ 7 [0, 0, 0, 0, 0, 0, 0, 0],
//   6 [0, 0, 0, 0, 0, 0, 0, 0],
//   5 [0, 0, 0, 0, 0, 0, 0, 0],
//   4 [0, 0, 0, 0, 0, 0, 0, 0],
//   3 [0, 0, 0, X, 0, 0, 0, 0],
//   2 [0, 0, 0, 0, 1, 0, 0, 0],
//   1 [0, 0, 0, 0, 0, 0, 0, 0],
//   0 [0, 0, 0, 0, 0, 0, 0, 0], ]
//      0  1  2  3  4  5  6  7