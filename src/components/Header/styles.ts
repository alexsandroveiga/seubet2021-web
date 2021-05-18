import styled from 'styled-components'
import { lighten } from 'polished'

interface HamburgerProps {
  isActive: boolean
}

export const Container = styled.div`
  height: 4rem;
  padding: 0 1rem;
  background: ${props => props.theme.colors.background};
  position: fixed;
  width: 100%;
  z-index: 1;
  top: 0;  
  display: flex;
  align-items: center;

  .wrap {
    width: 100%;
    max-width: 1050px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
  }  

  h1 {
    font-size: 1.2rem;
    flex: 1;
    text-align: center;
    font-family: 'Poppins', sans-serif;

    span {
      color: ${props => props.theme.colors.primary};
      font-weight: 900;
    }

    em {
      font-style: normal;
      display: none;
    }
  } 
        
  .actions {
    display: flex;
    flex: 1;
    justify-content: flex-end;

    button {
      width: 2rem;
      height: 2rem;
      border-radius: 40%;
      display: flex;
      align-items: center;
      justify-content: center;
      background: ${props => lighten(0.06, props.theme.colors.background)};
      color: ${props => props.theme.colors.text};
      position: relative;

      & + button {
        margin-left: 0.5rem;
      }

      img {
        width: 100%;
        height: 100%;
      }

      span {
        background: red;
        width: 0.75rem;
        height: 0.75rem;
        position: absolute;
        top: 0;
        right: 0;
        color: #fff;
        font-size: 0.625rem;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        font-weight: 600;
      }
    }
  }
`

export const Hamburger = styled.button<HamburgerProps>`
  flex: 1;
  justify-self: flex-start;
  display: flex;
  align-items: center;
  background: transparent;
  position: relative;
  transition: all .5s ease;
  color: ${props =>
    props.isActive
      ? props.theme.colors.primary
      : props.theme.colors.text}
`
