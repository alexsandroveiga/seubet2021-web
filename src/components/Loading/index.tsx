import { ReactElement } from 'react'

import { Container } from './styles'

interface LoadingProps {
  style?: React.CSSProperties
  size?: number
  background?: string
}

export function Loading ({ style, size, background }: LoadingProps): ReactElement {
  return (
    <Container style={style} size={size} background={background}>
      <div className="loader" />
    </Container>
  )
}
