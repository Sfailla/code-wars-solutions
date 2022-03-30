///// TYPESCRIPT TUPLES /////

/**
 *  TUPLES:
 *    A tuple is a TypeScript type that works like an array with some special considerations:
 *      -The number of elements of the array is fixed.
 *      -The type of the elements is known.
 *      -The type of the elements of the array need not be the same.
 */

type ThreeDCoordinates = [x: number, y: number, z: number]

function addThreeDCoordinates(c1: ThreeDCoordinates, c2: ThreeDCoordinates): ThreeDCoordinates {
  return [c1[0] + c2[0], c1[1] + c2[1], c1[2] + c2[2]]
}

addThreeDCoordinates([1, 2, 3], [4, 5, 6]) //?

type StringType = [() => string, (v: string) => void]

function simpleStringState(initial: string): StringType {
  let str: string = initial
  return [
    () => str,
    (v: string) => {
      str = v
    }
  ]
}

const [stringGetter, stringSetter] = simpleStringState('initial')
stringGetter() //?
stringSetter('new')
stringGetter() //?
