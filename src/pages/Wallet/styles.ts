import styled from 'styled-components'

export const Container = styled.div`
  position: relative;

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
