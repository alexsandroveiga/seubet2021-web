import styled from 'styled-components'

export const Container = styled.div`
  position: relative;

  .header-image {
    height: 500px;
    background: url('https://seubet.net/static/media/hero.329d6af1.jpg');
    background-size: cover;
    background-position: center;
  }

  > header {
    height: 40vh;
    position: relative;
    background: #ff4343;
    overflow: hidden;
    padding-top: 3rem;

    &:after {
      background: #fff;
      border-radius: 0 0 50% 50%;
      width: 120%;
      height: 3rem;
      position: absolute;
      left: -10%;
      top: -2rem;
      content: '';
    }
  }
`
