import styled from 'styled-components'
import { rgba, backgrounds } from 'polished'

export const Container = styled.div`
  position: relative;
  min-height: 100vh;
  padding-top: 4rem;

  .header-image {
    height: 300px;
    background: url('https://seubet.net/static/media/hero.329d6af1.jpg');
    background-size: cover;
    background-position: center;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      bottom: 0rem;
      left: 0;
      ${props => backgrounds(`linear-gradient(${rgba(props.theme.colors.background, 0)}, ${rgba(props.theme.colors.background, 1)})`)}
    }
  }
`

export const Content = styled.div`
  padding: 1rem;
`
