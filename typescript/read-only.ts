interface Cat {
  name: string
  breed: string
}

// Utiltity Type Readonly<T> -- the readonly type can be used to make a property immutable

type ReadonlyCat = Readonly<Cat>

function makeCat(name: string, breed: string): ReadonlyCat {
  return {
    name,
    breed
  }
}

const garfield = makeCat('Garfield', 'Orange Tabby')

/*
  using the readonly type will prevent you from reassigning the properties of the object

  garfield.name = 'Jerry' <-- this will throw an error
*/

function makeCoordinate(x: number, y: number, z: number): readonly [number, number, number] {
  return [x, y, z]
}

const c1 = makeCoordinate(1, 2, 3)

// c1[0] = 4 // this will throw an error

const reallyConst = [1, 2, 3] as const
// reallyConst[0] = 50 this will work but is that really a constant?

// what you can do is cast that value as a constant and that will ensure immutability
