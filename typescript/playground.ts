interface IUserDetails {
  name: string;
  age: number;
}

function createUser(age: number, name: string): IUserDetails {
  return {
    age,
    name
  }
}

createUser(25, 'John')

interface IParams {
  user: string,
  delay: number
}

const waitForUser = (user: string, delay: number): Promise<string> => {
  return new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve(user)
    }, delay)
  })
}

const getUserFromServer = (): Promise<string> => {
  const userList: string[] = ['John', 'Jane', 'Jack'];
  const randomUser: string = userList[Math.floor(Math.random() * userList.length)]
  return waitForUser(randomUser, 1000)
}

getUserFromServer() //?

const sum = (a: number, b: any): any => a + b

sum(1, 2) //?
sum(1, 'cat') //?

const updateNumber = (): void => {
  let number: number = 100
  number = number + 1 //?
}

updateNumber() //?