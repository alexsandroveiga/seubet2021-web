import { ReactElement, useCallback } from 'react'
import { FiClock, FiStar } from 'react-icons/fi'

import { useBet, Bet } from '../../hooks/bet'
import {
  formatDate,
  formatHour
} from '../../utils/formatTimestamp'

import { Fixture } from '../../interfaces'

import { Container } from './styles'

export function Match (match: Fixture): ReactElement {
  const { addToTicket, bets, removeFromTicket, total } = useBet()
  const max_odds_value = 2000
  const handleClick = useCallback(
    ({
      price,
      bookmaker,
      fixture_id,
      value,
      label,
      league,
      name,
      localTeam,
      visitorTeam,
      match_date
    }: Bet) => {
      const findBet = bets.some(
        b => b.fixture_id === fixture_id && b.label === label
      )

      if (findBet) {
        removeFromTicket(fixture_id)
      } else {
        /* if (isBefore(new Date(match_date), Date.now())) {
          toast.error('Você não pode apostar em um evento que já foi iniciado')
          return
        } */

        const findBet = bets.find(b => b.fixture_id === fixture_id)

        if (total * (findBet ? 1 : Number(value)) > max_odds_value) {
          // toast.error(`Cotação máxima de ${max_odds_value}`)
          return
        }

        addToTicket({
          fixture_id,
          bookmaker,
          label,
          league,
          localTeam,
          visitorTeam,
          match_date,
          name,
          price,
          value,
          handicap: null,
          total: null
        })
      }
    },
    [addToTicket, bets, removeFromTicket, total, max_odds_value]
  )

  return (
    <Container>
      <header>
        {match.isSpotlight && (
          <div className="pin">
            <FiStar size={16} /> destaque
          </div>
        )}
        <em />
        <div className="date">
          <FiClock />
          {formatDate(new Date(match.fixtureDate).getTime() / 1000)}
          <> - </>
          {formatHour(new Date(match.fixtureDate).getTime() / 1000)}
        </div>
      </header>
      <div className="images">
        <picture><img src={match.localTeamLogoPath} /></picture>
        <picture><img src={match.visitorTeamLogoPath} /></picture>
      </div>
      <h1>{match.localTeamName} x {match.visitorTeamName}</h1>

      <div className="odds">
        {match.odd.map(odd => (
          <div className="odd">
            <button
              onClick={() => handleClick({
                bookmaker: 'bet365',
                fixture_id: match.fixtureId,
                handicap: odd.handicap,
                label: odd.label,
                league: {
                  id: match.leagueId,
                  name: match.leagueName
                },
                localTeam: {
                  id: match.localTeamId,
                  name: match.localTeamName,
                  photo_url: match.localTeamLogoPath
                },
                visitorTeam: {
                  id: match.visitorTeamId,
                  name: match.visitorTeamName,
                  photo_url: match.visitorTeamLogoPath
                },
                match_date: new Date('match.fixtureTime'),
                name: 'what',
                price: 0,
                total: odd.total,
                value: odd.value
              })}
              className={`${
                bets.some(
                  bet =>
                    bet.fixture_id === match.fixtureId &&
                    bet.label === odd.label
                )
                  ? 'active'
                  : ''
              } `}
            >
              {odd.value}
            </button>
          </div>
        ))}
        <div className="odd">
          <button>+{match.totalMarkets}</button>
        </div>
      </div>
    </Container>
  )
}
