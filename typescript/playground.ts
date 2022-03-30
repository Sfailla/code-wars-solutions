interface IUser {
  name: string
  age: number
}

function createUser(age: number, name: string): IUser {
  return {
    age,
    name
  }
}

createUser(25, 'John')

interface IParams {
  user: IUser
  delay: number
}

const waitForUser = (user: string, delay: number): Promise<string | void> => {
  return new Promise((resolve, reject) => {
    if (user) {
      setTimeout(() => {
        resolve(user)
      }, delay)
    } else {
      reject('User is not defined')
    }
  })
}

const getUserFromServer: () => Promise<void> = async () => {
  const userList: string[] = ['John', 'Jane', 'Jack']
  const randomUser: string = userList[Math.floor(Math.random() * userList.length)]
  await waitForUser(randomUser, 1000)
}

getUserFromServer()

const sum = (a: number, b: any): any => a + b

sum(1, 2)
sum(1, 'cat')

const updateNumber = (): void => {
  let number: number = 100
  number = number + 1
}

updateNumber()
