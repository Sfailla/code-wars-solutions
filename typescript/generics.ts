///// TYPESCRIPT GENERICS /////

function simpleStrState(initial: string): StringType {
  let str: string = initial
  return [
    () => str,
    (v: string) => {
      str = v
    }
  ]
}

// what if we replaced the string type with a custom (or generic) type?

function simpleState<T>(initial: T): [() => T, (v: T) => void] {
  let str: T = initial
  return [
    () => str,
    (v: T) => {
      str = v
    }
  ]
}

/**
 * Initially the generic type is unknown, but we can change it to any type
 *
 * simpleState()
 * signiture: simpleState<unknown>(initial: unknown): [() => unknown, (v: unknown) => void]
 *
 * simpleState(1)
 * signiture: simpleState<number>(initial: number): [() => number, (v: number) => void]
 *
 * simpleState('hello')
 * signiture: simpleState<string>(initial: string): [() => string, (v: string) => void]
 *
 * as soon as we add a parameter to the function, the generic type is coerced to the type of the parameter.
 */

const [stateGetter, stateSetter] = simpleState(10)
stateGetter() //?
stateSetter(20)
stateGetter() //?

const [state1Getter, state1Setter] = simpleState('hello')
state1Getter() //?
state1Setter('world')
state1Getter() //?

const [state2Getter, state2Setter] = simpleState<string | null>(null)
state2Getter() //?
state2Setter('world')
state2Getter() //?

function ranker<RankItem>(items: RankItem[], rank: (v: RankItem) => number): RankItem[] {
  interface Rank {
    item: RankItem
    rank: number
  }

  // if type returns an array of items we need to specify that in the interface or type
  const ranks: Rank[] = items.map(item => ({
    item,
    rank: rank(item)
  }))

  ranks.sort((a, b) => a.rank - b.rank)

  return ranks.map(rank => rank.item)
}

/**
 *  the interface doesn't have access to RankItem[] outside of the function but we can still define it outside using generic type
 * 
 *  interface Rank<RankItem> {
      item: RankItem
      rank: number
    }
 *  
 *  function ranker<RankItem>(items: RankItem[], rank: (v: RankItem) => number): RankItem[] {
      const ranks: Rank<RankItem>[] = items.map(item => ({
        item,
        rank: rank(item)
      }))

      ranks.sort((a, b) => a.rank - b.rank)

      return ranks.map(rank => rank.item)
    }
 * 
 */

interface Pokemon {
  name: string
  hp: number
}

const pokemon: Pokemon[] = [
  {
    name: 'Pikachu',
    hp: 100
  },
  {
    name: 'Bulbasaur',
    hp: 20
  }
]

const ranks = ranker(pokemon, ({ hp }) => hp)
ranks //?
