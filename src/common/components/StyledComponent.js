import styled from "styled-components";

const Container = styled.div`
  padding: 20px;
  .display {
    display: flex;
  }
  .side-box {
    width: 105px;
    height: 70px;
    padding-bottom: 10px;
  }
  .day-box {
    display: flex;
    width: 100%
  }
  .button {
    background-color: #f5f5f5;
    border: solid;
    border-width: thin;
    border-color: lightgray;
    border-radius: 5px;
    height: 65px;
    margin: 3px;
    color: #B378D3;
  }
  .space-1 {
    width: 27px;
  }
  .space-2 {
    width: 190px;
  }
`

export { Container };
