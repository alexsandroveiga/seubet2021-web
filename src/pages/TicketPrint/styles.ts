import styled from 'styled-components'

export const Container = styled.div`
  background: #f0f0f0;
  min-height: 100vh;
`

export const Content = styled.div`
  background: #fff;
  min-height: 100vh;
  max-width: 400px;
  margin: 0 auto;
  color: #000;
  padding: 1rem;
  font-family: Verdana, Geneva, Tahoma, sans-serif;

  header {
    text-align: center;
    text-transform: uppercase;
  }

  .info {
    font-size: 0.625rem;
    margin: 1rem 0;
  }

  .matches {
    header {
      border-bottom: 1px solid #000;
      font-size: 0.8rem;
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
        font-size: 0.8rem;
        font-weight: 600;
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
`
