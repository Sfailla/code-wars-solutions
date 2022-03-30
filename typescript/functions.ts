export function printToFile(text: string, callback: () => void): void {
  console.log(text)
  callback()
}

/**
 *  this is a little hard to read so we can refactor: anything after the : is a type declaration that can be extracted
 *
 *  export function arrayMutate(numbers: number[], mutate: (v: number) => number): number[] {
 *    return numbers.map(mutate)
 *  }
 *
 *  the type declaration can be exported and used in other similar function signatures
 *
 * */

type ReturnFunctionType = (v: number) => number

export function arrayMutate(numbers: number[], mutate: ReturnFunctionType): number[] {
  return numbers.map(mutate)
}

arrayMutate([1, 2, 3], v => v * 10) //?

///// FUNCTIONS RETURNING FUNCTIONS /////

export function createAdder(num: number): ReturnFunctionType {
  return (value: number) => num + value
}

createAdder(5)(10) //?
createAdder(10)(5) //?
createAdder(10)(20) //?
