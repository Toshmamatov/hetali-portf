import React from "react";
import styled from "styled-components";

const Companies = () => {
  return (
    <Container>
      <Content>
        <Title>Group Companies</Title>
        <img src="/images/logo-divider.png" alt="" />

        <Cards>
          <Card>
            <img src="/images/plants.png" alt="plants" />
            <span>Agriculture</span>
          </Card>
          <Card>
            <img className="big-img" src="/images/fuel.png" alt="fuel" />
            <span>Fuel</span>
          </Card>
          <Card>
            <img src="/images/foods.png" alt="foods" />
            <span>Foods</span>
          </Card>
        </Cards>
      </Content>
    </Container>
  );
};

export default Companies;

const Container = styled.div`
  background: #fafafa;
  padding: 30px 0;
`;

const Content = styled.div`
  max-width: 1260px;
  margin: auto;
`;

const Title = styled.div`
  font-family: "Cinzel";
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 150%;
  margin-bottom: 40px;
  text-align: center;
  letter-spacing: 0.1em;
  color: #474747;
`;

const Cards = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 30px 10px;

  img {
    display: block;
    width: 300px;
    height: 370px;
    cursor: pointer;
  }

  span {
    font-family: "Roboto Flex";
    font-style: normal;
    font-weight: 1000;
    font-size: 24px;
    line-height: 150%;
    text-align: justify;
    letter-spacing: 0.1em;
    color: #474747;
  }

  .big-img {
    width: 485px;
    height: 370px;
  }
`;
