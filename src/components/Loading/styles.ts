import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

interface ContainerProps {
  size?: number
  background?: string
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: ${props =>
    props.background ? props.background : props.theme.colors.background};
  color: #fff;

  .loader {
    border: ${props => (props.size ? `${props.size / 1}` : 8)}px solid #f3f3f3;
    border-top: ${props => (props.size ? `${props.size / 1}` : 8)}px solid
      ${props => props.theme.colors.primary};
    border-radius: 50%;
    width: ${props => (props.size ? `${props.size}rem` : '4rem')};
    height: ${props => (props.size ? `${props.size}rem` : '4rem')};
    animation: ${rotate} 2s linear infinite;
  }
`
