import styled from 'styled-components'

export const Container = styled.div`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  background: rgba(0, 0, 0, .8);
  position: fixed;
  width: 100%;
  z-index: 1;

  .user {
    height: 3rem;
    background: rgba(255, 255, 255, .4);
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 1.5rem;
    padding: 0 1rem 0 2px;
    overflow-x: hidden;
    color: ${props => props.theme.colors.text};
    transition: background .5s ease;

    &:hover {
      background: rgba(255, 255, 255, .3);
    }

    a {
      color: ${props => props.theme.colors.text};
      text-decoration: none
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

    > div {
      text-align: left;

      h1 {
        font-size: 0.8rem;
        font-weight: 600;
        line-height: 1;
        margin: 0;
        padding: 0;
      }

      span {
        font-size: 0.625rem;
        font-weight: 500;
      }
    }

    > button {
      background: transparent;
      border: 0;
      border-radius: 0;
      color: ${props => props.theme.colors.primary};
      margin-left: 0.5rem;
      cursor: pointer;
    }
  }
`

export const Hamburger = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 0.5rem;
  -webkit-box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.1);
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2px;
  padding: calc(1rem - 1px);
  background: #fff;

  em {
    width: 0.5rem;
    height: 0.5rem;
    background: #212529;
    display: block;
    border-radius: 0.1rem;
  }
`
