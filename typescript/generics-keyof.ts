///// TYPESCRIPT GENERICS WITH KEYOF /////

function pluck<DataType, KeyType extends keyof DataType>(
  items: DataType[],
  key: KeyType
): DataType[KeyType][] {
  return items.map(item => item[key])
}

const dogs = [
  { name: 'Max', age: 10 },
  { name: 'Stella', age: 8 }
]

pluck(dogs, 'age') //?
pluck(dogs, 'name') //?

///// TYPESCRIPT GENERICS WITH KEYOF & PARAMETER /////

interface BaseEvent {
  time: number
  user: string
}

interface EventMap {
  addToCart: BaseEvent & { quantity: number; productId: string }
  checkout: BaseEvent
}

function sendEvent<Name extends keyof EventMap>(name: Name, data: EventMap[Name]): void {
  console.log([name, data])
}

sendEvent('addToCart', {
  time: 123,
  user: 'Max',
  quantity: 2,
  productId: '123'
})

sendEvent('checkout', {
  time: 123,
  user: 'Max'
})
