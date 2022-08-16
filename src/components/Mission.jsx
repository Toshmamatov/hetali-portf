import React from "react";
import styled from "styled-components";

const Mission = () => {
  return (
    <Container>
      <MissionTitle>ABOUT US</MissionTitle>
      <MissionImg src="/images/logo-divider.png" />
      <Content>
        <img src="/images/present.png" alt="present" />
        <Box>
          <BigCard>
            <span>Personalised</span>
            <p>
              Our core idealogy is to provide personalised homes to meet the
              very specific needs of residents.
            </p>
          </BigCard>
          <Card>
            <span>Commited</span>
          </Card>
          <Card>
            <span>Quality & Service Oriented</span>
          </Card>
          <Card>
            <span>Timely </span>
          </Card>
        </Box>
      </Content>
    </Container>
  );
};

export default Mission;

const Container = styled.div`
  max-width: 1260px;
  margin: auto;
`;

const MissionTitle = styled.div`
  font-family: "Cinzel";
  font-style: normal;
  font-weight: 400;
  margin-bottom: 40px;
  font-size: 32px;
  line-height: 150%;
  text-align: center;
  letter-spacing: 0.1em;
  color: #474747;
`;

const MissionImg = styled.img``;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 50px;
  padding-bottom: 50px;
  img {
    width: 540px;
    height: 400px;
  }
`;

const Box = styled.div``;

const BigCard = styled.div`
  width: 620px;
  height: 138px;
  background: #f5f5f5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  padding: 15px 20px;
  cursor: pointer;

  span {
    font-family: "Roboto Flex";
    font-style: normal;
    font-weight: 1000;
    font-size: 24px;
    line-height: 150%;
    letter-spacing: 0.1em;
    color: #474747;
  }

  p {
    font-family: "Roboto Flex";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 150%;
    letter-spacing: 0.03em;
    color: #474747;
  }
`;

const Card = styled.div`
  width: 600px;
  height: 60px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  padding: 15px 20px;
  margin-top: 22px;
  cursor: pointer;

  span {
    font-family: "Roboto Flex";
    font-style: normal;
    font-weight: 1000;
    font-size: 24px;
    line-height: 150%;
    letter-spacing: 0.1em;
    color: #919191;
  }
`;
