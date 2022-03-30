///// ENUM AND LITERAL TYPES /////

// ENUMARATIONS

// const beforeLoad = 'beforeLoad'
// const loading = 'loading'
// const loaded = 'loaded'

enum LoadingState {
  beforeLoad = 'beforeLoad',
  loading = 'loading',
  loaded = 'loaded'
}

const englishLoadingStates = {
  [LoadingState.beforeLoad]: 'before load'
}

const isLoading = (state: LoadingState) => state === LoadingState.loading

console.log(isLoading(LoadingState.beforeLoad))

// LITERAL TYPES

/*
  literal types allow you to specify exactly what values are allowed

    function rollDice(dice: number): number {
    
  this will change to:  1 | 2 | 3 only
*/

function rollDice(dice: 1 | 2 | 3): number {
  let pip = 0
  for (let i = 0; i < dice; i++) {
    pip += Math.floor(Math.random() * 5) + 1
  }
  return pip
}

// console.log(rollDice(4)) <-- this will throw an error
console.log(rollDice(1))

// overloading the sendEvent function
// to overload do not declare the function signature with curly braces

function sendEvent(event: 'addToCart', data: { productId: number }): void

function sendEvent(name: 'checkout', data: { cartCount: number }): void

function sendEvent(event: string, data: unknown): void {
  console.log(`event: ${event} data: ${JSON.stringify(data, null, 2)}`)
}

sendEvent('addToCart', { productId: 1 })
