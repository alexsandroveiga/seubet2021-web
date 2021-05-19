import styled from 'styled-components'
import { rgba, backgrounds } from 'polished'

export const Container = styled.div`
  position: relative;
  min-height: 200vh;
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

  @media screen and (min-width: 822px) {
    .header-image {
      height: 500px;
      background-position: top center;
    }
  }

  @media screen and (min-width: 1024px) {
    .header-image {
      height: calc(70vh);
      background-position: top center;
    }
  }
`

export const Content = styled.div`
  padding: 1rem;
`
