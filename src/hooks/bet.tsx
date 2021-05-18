import React, {
  createContext,
  useState,
  useCallback,
  useContext,
  useMemo
} from 'react'
import { api } from '../services/api'

interface Team {
  id: number
  name: string
  photo_url: string
}

export interface Bet {
  fixture_id: number
  bookmaker: string
  match_date: Date
  label: string
  value: string
  price: number
  name: string
  league: Omit<Team, 'photo_url'>
  localTeam: Team
  visitorTeam: Team
  handicap: string | null
  total: string | null
}

interface AddTicket {
  betValues: number[]
  has_multiple: boolean
  bettor_name: string
  price: number
}

interface Ticket {
  id: string
  code: string
  code_id: number
}

interface BetContextData {
  bets: Bet[]
  addToTicket: (item: Bet) => void
  removeFromTicket: (fixture_id: number) => void
  createTicket: (item: AddTicket) => Promise<Ticket>
  handleChangePrice: (
    event: React.ChangeEvent<HTMLInputElement>,
    value: number
  ) => void
  total: number
}

const BetContext = createContext<BetContextData | null>(null)

const BetProvider: React.FC = ({ children }) => {
  const [bets, setBets] = useState<Bet[]>([])

  const total = useMemo(() => {
    return bets.reduce((acumulator, { value }) => acumulator * Number(value), 1)
  }, [bets])

  const removeFromTicket = useCallback(
    (fixture_id: number) => {
      const findBet = bets.find(bet => bet.fixture_id === fixture_id)

      if (findBet) {
        const newBets = bets.filter(
          bet => bet.fixture_id !== findBet.fixture_id
        )
        setBets(newBets)
      }
    },
    [bets]
  )

  const handleChangePrice = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>, value: number): void => {
      event.preventDefault()

      console.log(event.target.name)

      const arrayBets = bets

      arrayBets[Number(event.target.name)].price = value

      setBets([...arrayBets])
    },
    [bets]
  )

  const addToTicket = useCallback(
    (bet: Bet) => {
      const arrayBets = bets
      const findBet = bets.find(b => b.fixture_id === bet.fixture_id)

      if (findBet) {
        findBet.name = bet.name
        findBet.label = bet.label
        findBet.value = bet.value
        findBet.handicap = bet.handicap
        findBet.total = bet.total

        setBets([...arrayBets])
      } else {
        setBets([...bets, bet])
      }
    },
    [bets]
  )

  const createTicket = useCallback(
    async ({ betValues, has_multiple, bettor_name, price }: AddTicket) => {
      const filtredBets = bets.map((bet, index) => ({
        fixture_id: bet.fixture_id,
        bookmaker: bet.fixture_id,
        match_date: bet.match_date,
        label: bet.label,
        value: bet.value,
        name: bet.name,
        league: bet.league ? bet.league.name : '',
        local_team: bet.localTeam.name,
        visitor_team: bet.visitorTeam.name,
        price: betValues[index],
        handicap: bet.handicap,
        total: bet.total
      }))

      const response = await api.post('tickets/bets', {
        user_name: bettor_name,
        has_multiple,
        price,
        bets: filtredBets
      })

      setBets([])

      return response.data
    },
    [bets]
  )

  const value = React.useMemo(
    () => ({
      addToTicket,
      bets,
      removeFromTicket,
      createTicket,
      total,
      handleChangePrice
    }),
    [
      addToTicket,
      bets,
      removeFromTicket,
      createTicket,
      total,
      handleChangePrice
    ]
  )

  return <BetContext.Provider value={value}>{children}</BetContext.Provider>
}

function useBet (): BetContextData {
  const context = useContext(BetContext)

  if (!context) {
    throw new Error('useBet must be used within a BetProvider')
  }

  return context
}

export { BetProvider, useBet }
