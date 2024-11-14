#!/usr/bin/node

function knightMoves(start, finish) {
    if (Array.isArray(start) === false || Array.isArray(finish) === false) {
        throw Error('start/finish must be an array')
    }
    if (start.length !== 2 || finish.length !== 2) {
        throw Error('Invalid, start/finish is 2 numbers both 0-7')
    }

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

    let foundArrays = []

    function allMoves(currentArray, visitedSquares) {
        //to save time
        if (currentArray.length > 5) {
            return
        }

        function checkVisited(square) {
            let visitedString = JSON.stringify(visitedSquares)
            let squareString = JSON.stringify(square)
            
            let check = visitedString.indexOf(squareString)
            if (check != -1) {
                return true
            }
            return false
        }

        if (upTwoRight(currentArray[currentArray.length - 1]) !== null) {
            if (checkVisited(upTwoRight(currentArray[currentArray.length - 1])) === true) {
                // if its visited i dont need to return just go to next if
            }
            else {
                let newArray = currentArray.slice([0])
                newArray.push(upTwoRight(newArray[newArray.length - 1]))
                if (newArray[newArray.length - 1][0] === finish[0] && newArray[newArray.length - 1][1] === finish[1]) {
                    foundArrays.push(newArray)
                    return
                }

                //make new visited squares only for this branch
                let newVisited = visitedSquares.slice([0])
                newVisited.push(newArray[newArray.length - 1])
                allMoves(newArray, newVisited)
            }
        }

        if (upTwoLeft(currentArray[currentArray.length - 1]) !== null) {
            if (checkVisited(upTwoLeft(currentArray[currentArray.length - 1])) === true) {
                // do nothing
            }
            else {
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

        if (downTwoRight(currentArray[currentArray.length - 1]) !== null) {
            if (checkVisited(downTwoRight(currentArray[currentArray.length - 1])) === true) {
                //do nothing
            }
            else {
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
            if (checkVisited(rightTwoUp(currentArray[currentArray.length - 1])) === true) {
                // do nothing
            }
            else {
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

    //find shortest array in foundArrays
    foundArrays
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