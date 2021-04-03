import React, { ButtonHTMLAttributes, ReactElement, ReactNode } from 'react'

import { Container } from './styles'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean
  children: ReactNode
}

export function Button ({ children, loading, ...rest }: ButtonProps): ReactElement {
  return (
    <Container type="button" {...rest}>
      {loading ? 'Carregando...' : children}
    </Container>
  )
}
