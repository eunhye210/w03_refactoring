import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  margin-top: -250px;
  margin-left: -210px;
  height: 500px;
  width: 420px;
  border: 1px solid;
  border-color: lightgray;
  background-color: #f5f5f5;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.3);
  border-radius: 5px;

  .content {
    margin: auto;
    height: 400px;
    width: 350px;
  }
  .view-type1 {
    display: flex;
    font-size: 20px;
    margin-bottom: 25px;
  }
  .view-type2 {
    font-size: 20px;
    margin-bottom: 25px;
  }
  .view-type3 {
    display: flex;
    font-size: 20px;
    margin-bottom: 30px;
  }
  .view-type4 {
    display: flex;
    justify-content: start;
    font-size: 20px;
    margin-top: 50px;
  }
  .submit-button1 {
    background: white;
    border: 1px solid;
    border-color: lightgray;
    border-radius: 5px;
    font-size: 20px;
    color: #B378D3;
    margin-left: 130px;
    height: 30px;
  }
  .submit-button2 {
    background: white;
    border: 1px solid;
    border-color: lightgray;
    border-radius: 5px;
    font-size: 20px;
    color: #B378D3;
    margin-right: 20px;
    height: 30px;
  }
  .display {
    margin-right: 5px;
  }
  .h1 {
    margin-top: 0;
  }
  .h1-1 {
    margin-top: 0;
    margin-bottom: 40px;
  }
  .close-button {
    background: none;
    border: none;
    font-size: 25px;
    padding: 0;
    margin-left: 360px;
    margin-top: 30px;
  }
`

export { Container };
