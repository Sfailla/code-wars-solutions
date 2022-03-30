///// FUNCTION OVERLOADING /////

interface Coordinate {
  x: number
  y: number
}

function parseCoordinateFromObject(obj: Coordinate): Coordinate {
  return {
    ...obj
  }
}

function parseCoordinateFromNumbers(x: number, y: number): Coordinate {
  return {
    x,
    y
  }
}

function parseCoordinate(str: string): Coordinate
function parseCoordinate(obj: Coordinate): Coordinate
function parseCoordinate(x: number, y: number): Coordinate

function parseCoordinate(arg1: unknown, arg2?: unknown): Coordinate {
  let coord: Coordinate = {
    x: 0,
    y: 0
  }

  if (typeof arg1 === 'string') {
    ;(arg1 as string).split(',').forEach(str => {
      const [key, value] = str.split(':')
      coord[key as 'x' | 'y'] = parseInt(value, 10)
    })
  }
  // this type check is ok bc at run-time this will be an object even tho now it is a Coordinate
  else if (typeof arg1 === 'object') {
    // typescript will throw an error initially bc it doesn't know what arg1 is.  we can use the 'as' keyword to tell it what it is
    // coord = { ...arg1 }
    coord = { ...(arg1 as Coordinate) }
  } else {
    coord = {
      x: arg1 as number,
      y: arg2 as number
    }
  }

  return coord
}

/// USAGE ///

parseCoordinate('x:1,y:2') //?
parseCoordinate({ x: 1, y: 2 }) //?
parseCoordinate(1, 2) //?
