import styled from 'styled-components'

export const Container = styled.div`
  background: ${props => props.theme.colors.background};
  position: relative;
  padding: 0.5rem 1rem 1rem;
  color: ${props => props.theme.colors.text};

  > header {
    border: 0;
    padding: 0;
    display: flex;
    margin: 0 0 1rem;
    justify-content: space-between;
    align-items: center;
    border: 0;

    .pin {
      background: ${props => props.theme.colors.primary};
      font-size: 0.625rem;
      padding: 0.25rem;
      border-radius: 0.25rem;
      font-weight: 600;
      display: flex;
      align-items: center;
      text-transform: uppercase;

      svg {
        display: block;
        margin-right: 0.25rem;
      }
    }

    div {
      font-size: 0.8rem;
      font-weight: 500;
      display: flex;
      align-items: center;

      img {
        height: 1rem;
        width: auto;
        margin-right: 0.5rem;
      }
    }
  }

  & + div {
    border-top: 1px solid ${props => props.theme.colors.background};
  }

  &.inactive {
    opacity: 0.5;
  }

  .date {
    font-size: 0.625rem;
    align-self: center;
    font-weight: 500;
    margin-left: 1rem;
    text-align: center;
    display: none;

    h1 {
      font-size: 0.5rem;
      font-weight: 500;
    }
  }

  > header .date {
    display: flex;
    align-items: center;

    svg {
      color: ${props => props.theme.colors.text};
      margin-right: 0.25rem;
    }
  }

  .teams {
    display: flex;
    align-items: center;
    margin: 0 0 1rem;

    .info {
      font-size: 0.625rem;
      align-self: center;
      font-weight: 500;
      margin-left: 1rem;
      text-align: center;

      h1 {
        font-size: 0.8rem;
        font-weight: 500;
      }

      svg {
        display: block;
        color: ${props => props.theme.colors.primary};
        font-size: 24px;
        margin: 0 auto;
      }

      > .date {
        display: flex;
        align-items: center;

        svg {
          color: ${props => props.theme.colors.text};
          margin-right: 0.25rem;
        }
      }
    }

    .team {
      flex: 1;
      text-align: center;

      picture {
        width: 3rem;
        height: 3rem;
        display: flex;
        margin: 0 auto 0.5rem;

        img {
          width: 3rem;
          height: 3rem;
        }
      }

      h1 {
        font-size: 0.8rem;
        font-weight: 600;
        line-height: 1;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
      }
    }
  }

  .odds {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 1rem;
    padding: 0;

    .odd {
      text-align: center;
      display: flex;
      align-items: stretch;
      justify-content: center;
      height: 2rem;
      background: ${props => props.theme.colors.background};
      border-radius: 1rem;

      a {
        text-decoration: none;
        color: ${props => props.theme.colors.primary};
        font-size: 0.7rem;
        font-weight: 700;
        align-self: center;
      }

      h1 {
        font-size: 0.7rem;
        padding: 0 0.75rem;
      }

      button {
        border-radius: 1rem;
        background: transparent;
        color: ${props => props.theme.colors.text};
        display: inline-flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        position: relative;
        font-size: 0.7rem;
        font-weight: 700;
        cursor: pointer;
        outline: 0;
        width: 100%;
        border-radius: 1rem;
        border: 0;

        span {
          font-size: 0.5rem;
        }

        &.active {
          border: 1px solid ${props => props.theme.colors.primary};
        }
      }
    }
  }
`
