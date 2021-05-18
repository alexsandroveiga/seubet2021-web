export interface Fixture {
  fixtureId: number
  leagueId: number
  leagueName: string
  countryId: number
  countryName: string
  fixtureDate: Date
  fixtureTime: string
  localTeamId: number
  localTeamName: string
  localTeamLogoPath: string
  visitorTeamId: number
  visitorTeamName: string
  visitorTeamLogoPath: string
  totalMarkets: number
  isBlocked: boolean
  isSpotlight: boolean
  odd: Odd[]
}

export interface Odd {
  value: string
  total: null
  label: string
  probability: string
  handicap: null
  dp3: string
  american: string
}
