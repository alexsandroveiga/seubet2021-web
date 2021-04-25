import styled from 'styled-components'

export const Container = styled.div`
  background: #fff;
  min-height: 100vh;

  > button {
    position: absolute;
    top: 1rem;
    left: 1rem;
    background: #000;
    color: #fff;
    width: 2rem;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      display: block;
    }
  }
`

export const Content = styled.div`
  background: #fff;
  min-height: 100vh;
  max-width: 400px;
  margin: 0 auto;
  color: #000;
  padding: 1rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

  header {
    text-align: center;
    text-transform: uppercase;
  }

  .info {
    margin: 1rem 0;
  }

  .matches {
    header {
      border-bottom: 1px solid #000;

    }

    .match {
      padding: 1rem 0;

      & + div {
        border-top: 1px dashed #000
      }

      .teams {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        width: 100%;  
        font-weight: bold;
        margin-bottom: 0.5rem;

        .versus {
          text-align: center;
        }

        .away {
          text-align: right;
        }
      }

      .info {
        margin: 0;
      }
    }
  }

  footer {
    border-top: 1px dashed #000;
    padding-top: 1rem;
  }
`
