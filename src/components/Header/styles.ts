import styled, { css } from 'styled-components'
import { lighten } from 'polished'

interface HamburgerProps {
  isActive: boolean
}

export const Container = styled.div<HamburgerProps>`
  height: 4rem;
  padding: 0 1rem;
  background: ${props => props.theme.colors.background};
  position: fixed;
  width: 100%;
  z-index: 1;
  top: 0;  
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  overflow: hidden;
  transition: all .5s cubic-bezier(0.895, 0.03, 0.685, 0.22);
  left: 0;

  ${props => props.isActive && css`
    height: 100vh;
    overflow-y: scroll;
  `}

  .wrap {
    width: 100%;
    max-width: 1050px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    height: 4rem;
  }  

  .branding {
    font-size: 1.2rem;
    flex: 1;
    text-align: center;
    font-family: 'Poppins', sans-serif;
    color: ${props => props.theme.colors.text};

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
      cursor: pointer;

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

  @media screen and (min-width: 1024px) {
    .branding em {
      display: inline;
    }
  }
`

export const Hamburger = styled.button<HamburgerProps>`
  cursor: pointer;
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

export const Navigation = styled.nav`
  position: relative;
  min-height: calc(100vh - 4rem);
  width: 100%;
  color: ${props => props.theme.colors.text};
  padding: 0 0 1rem 0;

  section {
    & + section {
      margin-top: 1rem;
    }
  }

  header {
    padding: 0.5rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid ${props => lighten(0.06, props.theme.colors.background)};
  
    h1 {
      font-size: 0.8rem;
      font-weight: 600;
      color: ${props => props.theme.colors.text};
    }
  }

  ul {
    list-style: none;

    li {
      font-size: 0.8rem;
      font-weight: 600;
      display: flex;
      align-items: center;
      margin-top: 1rem;

      svg {
        color: ${props => props.theme.colors.primary};
        margin-right: 0.5rem;
        display: block;
      }
    }
  }
`
