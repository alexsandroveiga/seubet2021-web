import { ButtonHTMLAttributes, ReactElement, ReactNode } from 'react'
import { Loading } from '../Loading'

import { Container } from './styles'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean
  children: ReactNode
}

export function Button ({ children, loading, ...rest }: ButtonProps): ReactElement {
  return (
    <Container type="button" {...rest}>
      {loading
        ? (
        <Loading style={{ height: '16px' }} size={2} background="transparent" />
          )
        : children}
    </Container>
  )
}
