import styled from 'styled-components'
import { shade } from 'polished'

export const Container = styled.button`
  background: ${props => props.theme.colors.primary};
  height: 4rem;
  border-radius: 2rem;
  border: 0;
  padding: 0 1rem;
  color: #fff;
  width: 100%;
  font-weight: 500;
  margin-top: 16px;
  transition: background-color 0.2s;

  &:hover {
    background: ${props => shade(0.2, props.theme.colors.primary)};
  }
`
