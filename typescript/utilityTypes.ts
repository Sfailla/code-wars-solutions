///// UTILTIY TYPES ///// -- mostly for use in interfaces and function signatures

interface MyUser {
  name: string
  id: number
  email?: string
}

const merge = (user: MyUser, overrides: MyUserOptionals): MyUser => {
  return {
    ...user,
    ...overrides
  }
}

/* 
1. PARTIAL TYPE: Partial<T>
constructs a type with all properties of Type set to optional.
This utility will return a type that reperesents all subsets of a given type.
*/

/*
  Instead of defining this type we can use a partial to define the type.

  interface MyUserOptionals {
    name?: string
    id?: number
    email?: string
  }
*/

type MyUserOptionals = Partial<MyUser>

console.log(
  merge({ name: 'bob', id: 1, email: 'jon@gmail.com' }, { email: 'dontEmailMe@gmail.com' })
)

/*
  2. REQUIRED TYPE: Required<T>
    constructs a type with all properties of Type set to required.

    interface MyUser {
      name: string
      id: number
      email?: string
    }
*/

type MyUserRequired = Required<MyUser>

/*
    MyUser interface is now:

    interface MyUser {
      name: string
      id: number
      email: string
    }

    where email is no longer optional.
*/

/*
    3. PICK TYPE: Pick<T, K>
      constructs a type with a set of properties K (string literal or union of string literal) of type T.

*/

type EmailAndName = Pick<MyUser, 'email' | 'name'>

/*
    4. MAP TYPE: Record<K, T>
      constructs an object type whose property keys are K and whose property values are T
      this utilty can be used to map the properties of a type to another type.
*/

type UserWithoutId = Omit<MyUser, 'id'>

const mapById = (users: MyUser[]): Record<MyUser['id'], UserWithoutId> => {
  return users.reduce((acc, v) => {
    const { id, ...rest } = v
    return {
      ...acc,
      [id]: rest
    }
  }, {})
}

console.log(
  mapById([
    { id: 1, name: 'mr. foo' },
    { id: 2, name: 'mr. bar' }
  ])
)
