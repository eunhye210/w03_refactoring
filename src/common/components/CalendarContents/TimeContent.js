import styled from "styled-components";

const Content = styled.div`
  display: flex;
  .content-time {
    width: 100px;
    height: 45px;
    position: relative;
    text-align: right;
  }
  .time {
    position: relative;
    top: -6px;
    padding-right: 6px;
    color: gray;
  }
  .content-sub {
    border-top: 1px solid;
    border-right: 1px solid;
    width: 20px;
    height: 45px;
    border-color: lightgray;
  }
`

export default function TimeContent({ time }) {
  return (
    <Content>
      <div className="content-time">
        <span className="time">{time}</span>
      </div>
      <div className="content-sub"></div>
    </Content>
  );
}
