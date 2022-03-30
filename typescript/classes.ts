///// TYPESCRIPT CLASSES /////

// IMPLEMENT DATABASE

interface Database {
  get(id: string): string
  set(id: string, value: string): void
}

class InMemoryDatabase implements Database {
  protected db: Record<string, string> = {}

  get(id: string): string {
    return this.db[id]
  }

  set(id: string, value: string): void {
    this.db[id] = value
  }
}

const myDb = new InMemoryDatabase()

const setName = (id: string, name: string): void => myDb.set(id, name)
const getName = (id: string): string => myDb.get(id)

setName('123', 'John')
getName('123') //?

setName('456', 'Jane')
getName('456') //?

/*
  MEMBER VISIBILITY

    there are 3 types of visibility which allow you to control the property of a class:
     
      1. public
      2. private
      3. protected -- similar to private, but allows inheritance

    example: 
    
      In the InMemoryDatabase class, the get() and set() methods are public, so they can be accessed from anywhere. however, the db property is not
      private, so it can be accessed from anywhere.  Class propertes are public by default. By changing the visbility of db now we can prevent it from being
      used like this:

      db['123'] = 'John'

      class InMemoryDatabase implements Database {
        private db: Record<string, string> = {}

        ...
      }

      now db['123'] will throw an error.
*/

// CLASS EXTENSION

interface Persistable {
  saveToString(): string
  restoreFromString(storedState: string): void
}

class PersistantMemoryDB extends InMemoryDatabase implements Persistable {
  // this will get every property of the InMemoryDatabase class
  saveToString(): string {
    return JSON.stringify(this.db)
  }

  restoreFromString(storedState: string): void {
    this.db = JSON.parse(storedState)
  }
}

const persistedDB = new PersistantMemoryDB()

persistedDB.set('123', 'John')
const saved = persistedDB.saveToString() //?

const restoreDB = new PersistantMemoryDB()

restoreDB.restoreFromString(saved)
restoreDB.get('123') //?
