import styled, { css } from 'styled-components'
import { } from 'polished'

interface ContainerProps {
  isFocused: boolean
  isFilled: boolean
  isErrored: boolean
}

export const Container = styled.div<ContainerProps>`
  background: transparent;
  border-radius: 0;
  padding: 1rem 0;
  width: 100%;
  border-bottom: 1px solid rgba(255,255,255,0.05);
  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  ${(props) =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}

  ${(props) =>
    props.isFocused &&
    css`
      border-color: ${props => props.theme.colors.primary};
      color: ${props => props.theme.colors.primary};
    `}

  ${(props) =>
    props.isFilled &&
    css`
      color: ${props => props.theme.colors.primary};
    `}

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: ${props => props.theme.colors.text};

    &::placeholder {
      color: #aaa;
    }
  }

  svg {
    margin-right: 1rem;
    display: block;

    &:last-child {
      margin-right: 0;
    }
  }

  > button {
    border: 0;
    background: transparent;
    border-radius: 0;
    color: ${props => props.theme.colors.text};
    display: flex;
    padding: 0;
    margin: 0;

    svg {
      margin-right: 0;
    }

    &.active {
      color: ${props => props.theme.colors.primary}
    }
  }
`

export const Error = styled.div`
  display: flex;
  color: #c53030;
  align-items: center;
  font-size: 0.8rem;
  font-weight: 500;

  svg {
    margin-right: 0.25rem;
    display: block;
  }
`
