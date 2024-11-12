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
        return [current[0] + 1, current[1] + 2]
    }
    function upTwoLeft(current) {
        if ((current[0] - 1) < 0 || (current[1] + 2) > 7) {
            return null
        }
        return [current[0] - 1, current[1] + 2]
    }
    function downTwoRight(current) {
        if ((current[0] + 1) > 7 || (current[1] - 2) < 0) {
            return null
        }
        return [current[0] + 1, current[1] - 2]
    }
    function downTwoLeft(current) {
        if ((current[0] - 1) < 0 || (current[1] - 2) < 0) {
            return null
        }
        return [current[0] - 1, current[1] - 2]
    }
    function rightTwoUp(current) {
        if ((current[0] + 2) > 7 || (current[1] + 1) > 7) {
            return null
        }
        return [current[0] + 2, current[1] + 1]
    }
    function rightTwoDown(current) {
        if ((current[0] + 2) > 7 || (current[1] - 1) < 0) {
            return null
        }
        return [current[0] += 2, current[1] -= 1]
    }
    function leftTwoUp(current) {
        if ((current[0] - 2) < 0 || (current[1] + 1) > 7) {
            return null
        }
        return [current[0] - 2, current[1] + 1]
    }
    function leftTwoDown(current) {
        if ((current[0] - 2) < 0 || (current[1] - 2) < 0) {
            return null
        }
        return [current[0] - 2, current[1] - 2]
    }
    // number of moves = array.length - 1

    let foundArrays = []
    let found = false
    //make an array of arrays??
    //[[4,4, 5,5][4,4, 5,5][4,4, 5,5][4,4, 5,5][4,4, 5,5][4,4, 5,5][4,4, 5,5][4,4, 5,5]]

    //make 8 arrays from original array (or as many as possible)
    //repeat until found

    function allMoves(currentArray) {
        if (upTwoRight(currentArray[currentArray.length - 1]) !== null) {
            let newArray = currentArray.slice([0])
            newArray.push(upTwoRight(newArray[newArray.length - 1]))
            if (newArray[newArray.length - 1][0] === finish[0] && newArray[newArray.length - 1][1] === finish[1]) {
                foundArrays.push(newArray)
                return null
            }
            //make new arrays with this array
            allMoves(newArray)
        }

        //make sure this doesnt change other array
        if (upTwoLeft(currentArray[currentArray.length - 1]) !== null) {
            let newArray = currentArray.slice()
            newArray.push(upTwoLeft(newArray[newArray.length - 1]))
            if (newArray[newArray.length - 1][0] === finish[0] && newArray[newArray.length - 1][1] === finish[1]) {
                foundArrays.push(newArray)
                return
            }
            //make new arrays with this array
            allMoves(newArray)
        }

        // downTwoRight(current)
        // downTwoLeft(current)
        // rightTwoUp(current)
        // rightTwoDown(current)
        // leftTwoUp(current)
        // leftTwoDown(current)
    }

    allMoves([start])
    console.log(foundArrays, 'found arrays')

    //find shortest array in foundArrays
}

knightMoves([0, 0], [0, 4])

// [ 7 [0, 0, 0, 0, 0, 0, 0, 0],
//   6 [0, 0, 0, 0, 0, 0, 0, 0],
//   5 [0, 0, 0, 0, 0, 0, 0, 0],
//   4 [0, 0, 0, 0, 0, 0, 0, 0],
//   3 [0, 0, 0, X, 0, 0, 0, 0],
//   2 [0, 0, 0, 0, 1, 0, 0, 0],
//   1 [0, 0, 0, 0, 0, 0, 0, 0],
//   0 [0, 0, 0, 0, 0, 0, 0, 0], ]
//      0  1  2  3  4  5  6  7