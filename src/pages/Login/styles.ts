import styled from 'styled-components'

export const Container = styled.div`
  background: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text};
  min-height: 100vh;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Content = styled.div`
  position: relative;
  width: 100%;
  max-width: 500px;

  .links {
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
    padding: 0 1rem;

    a {
      color: #fff;
      font-weight: 500;
      text-decoration: none;
      display: inline-flex;
      align-items: center;

      svg {
        margin-right: 0.25rem;
        display: block;
      }
    }
  }

  
`
