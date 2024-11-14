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
        return [current[0] + 2, current[1] - 1]
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
    //make an array of arrays??
    //[[4,4, 5,5][4,4, 5,5][4,4, 5,5][4,4, 5,5][4,4, 5,5][4,4, 5,5][4,4, 5,5][4,4, 5,5]]

    //make 8 arrays from original array (or as many as possible)
    //repeat until found
    
    let visitedSquares = []
    //then add each one to visited

    function allMoves(currentArray, visitedSquares) {
        if (currentArray.length > 8) {
            return
        }

        function checkVisited(square) {
            if (square[0] === 4 && square[1] === 2) {
                console.log(visitedSquares)
                console.log('CHECKING 4/2!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
            }
            let visitedString = JSON.stringify(visitedSquares)
            let squareString = JSON.stringify(square)
            
            console.log(squareString)
            let check = visitedString.indexOf(squareString)
            if (check != -1) {
                return true
            }
            return false
        }
        console.log(currentArray, 'top of function')
        // if (currentArray.length > 3) {
        //     return
        // }
        // if (currentArray[currentArray.length - 1][0] === finish[0] && currentArray[currentArray.length - 1][1] === finish[1]) {
        //     return
        // }

        //it keep calling this first

        //why dont they all get 0,0

        if (upTwoRight(currentArray[currentArray.length - 1]) !== null) {
            if (checkVisited(upTwoRight(currentArray[currentArray.length - 1])) === true) {
                console.log('finishing?')
                // if its visited i dont need to return just go to next if
            }
            else {
                console.log(currentArray, 'upTwoRight')
                let newArray = currentArray.slice([0])
                newArray.push(upTwoRight(newArray[newArray.length - 1]))
                if (newArray[newArray.length - 1][0] === finish[0] && newArray[newArray.length - 1][1] === finish[1]) {
                    foundArrays.push(newArray)
                    return
                }
                //do all moves 
                //if one of them finds it stop all functions for this array

                //make new visited squares only for this branch
                let newVisited = visitedSquares.slice([0])
                newVisited.push(newArray[newArray.length - 1])
                allMoves(newArray, newVisited)
            }
        }

        console.log(currentArray, 'should be 0,0 eventually')
        console.log(visitedSquares, 'should be nothing eventually')
        if (upTwoLeft(currentArray[currentArray.length - 1]) !== null) {
            if (checkVisited(upTwoLeft(currentArray[currentArray.length - 1])) === true) {
                // do nothing
            }
            else {
                console.log(currentArray, 'upTwoLeft')
                let newArray = currentArray.slice([0])
                newArray.push(upTwoLeft(newArray[newArray.length - 1]))
                if (newArray[newArray.length - 1][0] === finish[0] && newArray[newArray.length - 1][1] === finish[1]) {
                    foundArrays.push(newArray)
                    return
                }
                let newVisited = visitedSquares.slice([0])
                newVisited.push(newArray[newArray.length - 1])
                allMoves(newArray, newVisited)
            }
        }

        console.log(currentArray, 'DOWN TWO RIGHT SHOULD GET 4,2')
        if (downTwoRight(currentArray[currentArray.length - 1]) !== null) {
            if (checkVisited(downTwoRight(currentArray[currentArray.length - 1])) === true) {
                //do nothing
            }
            else {
                console.log(currentArray, 'downTwoRight')
                let newArray = currentArray.slice([0])
                newArray.push(downTwoRight(newArray[newArray.length - 1]))
                if (newArray[newArray.length - 1][0] === finish[0] && newArray[newArray.length - 1][1] === finish[1]) {
                    foundArrays.push(newArray)
                    return
                }
                let newVisited = visitedSquares.slice([0])
                newVisited.push(newArray[newArray.length - 1])
                allMoves(newArray, newVisited)
            }
        }

        if (downTwoLeft(currentArray[currentArray.length - 1]) !== null) {
            if (checkVisited(downTwoLeft(currentArray[currentArray.length - 1])) === true) {
                //do nothing
            }
            else {
                console.log(currentArray, 'downTwoLeft')
                let newArray = currentArray.slice([0])
                newArray.push(downTwoLeft(newArray[newArray.length - 1]))
                if (newArray[newArray.length - 1][0] === finish[0] && newArray[newArray.length - 1][1] === finish[1]) {
                    foundArrays.push(newArray)
                    return
                }
                let newVisited = visitedSquares.slice([0])
                newVisited.push(newArray[newArray.length - 1])
                allMoves(newArray, newVisited)
            }
        }

        if (rightTwoUp(currentArray[currentArray.length - 1]) !== null) {
            console.log(rightTwoUp(currentArray[currentArray.length - 1]), 'should be 2, 1')
            if (checkVisited(rightTwoUp(currentArray[currentArray.length - 1])) === true) {
                // do nothing
            }
            else {
                console.log(currentArray, 'rightTwoUp')
                let newArray = currentArray.slice([0])
                newArray.push(rightTwoUp(newArray[newArray.length - 1]))
                if (newArray[newArray.length - 1][0] === finish[0] && newArray[newArray.length - 1][1] === finish[1]) {
                    foundArrays.push(newArray)
                    return
                }
                let newVisited = visitedSquares.slice([0])
                newVisited.push(newArray[newArray.length - 1])
                allMoves(newArray, newVisited)
            }
        }

        if (rightTwoDown(currentArray[currentArray.length - 1]) !== null) {
            if (checkVisited(rightTwoDown(currentArray[currentArray.length - 1])) === true) {
                // do nothing
            }
            else {
                console.log(currentArray, 'rightTwoDown')
                let newArray = currentArray.slice([0])
                newArray.push(rightTwoDown(newArray[newArray.length - 1]))
                if (newArray[newArray.length - 1][0] === finish[0] && newArray[newArray.length - 1][1] === finish[1]) {
                    foundArrays.push(newArray)
                    return
                }
                let newVisited = visitedSquares.slice([0])
                newVisited.push(newArray[newArray.length - 1])
                allMoves(newArray, newVisited)
            }
        }

        if (leftTwoUp(currentArray[currentArray.length - 1]) !== null) {
            if (checkVisited(leftTwoUp(currentArray[currentArray.length - 1])) === true) {
                // do nothing
            }
            else {
                console.log(currentArray, 'leftTwoUp')
                let newArray = currentArray.slice([0])
                newArray.push(leftTwoUp(newArray[newArray.length - 1]))
                if (newArray[newArray.length - 1][0] === finish[0] && newArray[newArray.length - 1][1] === finish[1]) {
                    foundArrays.push(newArray)
                    return
                }
                let newVisited = visitedSquares.slice([0])
                newVisited.push(newArray[newArray.length - 1])
                allMoves(newArray, newVisited)
            }
        }

        if (leftTwoDown(currentArray[currentArray.length - 1]) !== null) {
            if (checkVisited(leftTwoDown(currentArray[currentArray.length - 1])) === true) {
                //do nothing
            }
            else {
                console.log(currentArray, 'leftTwoDown')
                let newArray = currentArray.slice([0])
                newArray.push(leftTwoDown(newArray[newArray.length - 1]))
                if (newArray[newArray.length - 1][0] === finish[0] && newArray[newArray.length - 1][1] === finish[1]) {
                    foundArrays.push(newArray)
                    return
                }
                let newVisited = visitedSquares.slice([0])
                newVisited.push(newArray[newArray.length - 1])
                allMoves(newArray, newVisited)
            }
        }
        console.log('what happens here')
    }

    allMoves([start], [])
    console.log(foundArrays, 'found arrays')
    //console.log(visitedSquares, 'all visited')

    //find shortest array in foundArrays
}

knightMoves([3, 4], [6, 1])

// [ 7 [0, 0, 0, 0, 0, 0, 0, 0],
//   6 [0, 0, 0, 0, 0, 0, 0, 0],
//   5 [0, 0, 0, 0, 0, 0, 0, 0],
//   4 [0, 0, 0, S, 0, 0, 0, 0],
//   3 [0, 0, 0, 0, 0, 1, 0, 1],
//   2 [0, 0, 0, 0, 1, 0, 0, 0],
//   1 [0, 0, 0, 0, 0, 0, F, 0],
//   0 [0, 0, 0, 0, 1, 0, 0, 0], ]
//      0  1  2  3  4  5  6  7