import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  min-height: 100vh;
  overflow-x: hidden;

  &:before {
    width: 100%;
    height: 52%;
    position: absolute;
    left: 0;
    top: 0;
    content: '';
    background: url('https://seubet.net/static/media/hero.329d6af1.jpg');
    background-size: cover;
    background-position: top center;
  }

  &:after {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    content: '';
    background: rgba(0, 0, 0, 0.6);
  }
`

export const Content = styled.div`
  position: relative;
  z-index: 1;
  height: 50vh;
  padding: 1rem;
  flex-direction: column;
  display: flex;
  justify-content: space-between;

  > header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .user {
      display: flex;
      align-items: center;
      
      p {
        font-size: 0.625rem;
        font-weight: 500;
      }

      h1 {
        font-size: 0.8rem;
        font-weight: 600;
      }

      > picture {
        width: calc(3rem - 4px);
        height: calc(3rem - 4px);
        display: flex;
        align-items: center;
        justify-content: center;
        background: #ef233c;
        border-radius: 50%;
        overflow: hidden;
        margin-right: 0.5rem;
        border: 2px solid #fff;
        -webkit-box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.1);
        -moz-box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.1);
        box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.1);

        img {
          width: auto;
          height: 3rem;
          display: block;
        }
      }
    }

    .actions {
      button {
        background: transparent;
        border: 0;
        border-radius: 0;
        color: #fff;
        position: relative;

        & + button {
          margin-left: 0.5rem;
        }

        &.has:after {
          width: 0.4rem;
          height: 0.4rem;
          position: absolute;
          border-radius: 50%;
          right: 0;
          top: 0;
          content: '';
          background: ${props => props.theme.colors.primary};
        }
      }  
    }
  }

  .balance {
    text-align: center;

    p {
      font-weight: 500
    }
  }
`

export const Transactions = styled.div`
  position: relative;
  z-index: 1;
  min-height: 50vh;
  padding: 1rem;
  background: #fff;
  color: #222222;

  &:after {
    content: '';
    position: absolute;
    border-radius: 50%;
    width: 500%;
    height: 500%;
    background: #fff;
    top: -1.6rem;
    left: -200%;
    z-index: -1;
  }

  > header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h1 {
      font-size: 1rem;
      font-weight: 600;
    }

    a {
      color: ${props => props.theme.colors.primary};
      text-decoration: none;
      font-size: 0.8rem;
      font-weight: 500
    }
  }
`
