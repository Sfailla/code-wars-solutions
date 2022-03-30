///// TYPESCRIPT OPTIONALS /////

function printIngredient(quantity: string, ingredient: string, extra?: string): void {
  console.log(`${quantity} ${ingredient} ${extra ? `${extra}` : ''}`)
}

printIngredient('1C', 'Flour')
printIngredient('1C', 'Flour', 'Something Else')

interface User {
  id: string
  info?: {
    email?: string
  }
}

function getEmail(user: User): string {
  if (user.info) {
    return user.info.email
  }
  return ''
}

function getEmail2(user: User): string {
  return user?.info?.email ?? ''
}

function addWithCallback(x: number, y: number, callback?: () => void) {
  console.log({ x, y })
  // this syntax will only invoke that callback if function or property exists
  callback?.()
}
