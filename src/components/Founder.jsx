import React from "react";
import styled from "styled-components";

const Founder = () => {
  return (
    <Container>
      <Content>
        <Card>
          <h2>Founder’s Message</h2>
          <img src="/images/founder.png" alt="founder" />
          <FounderLogo src="/images/founder-logo.png" />
          <span>Mr. Jayesh H. Pandya</span>
          <p>
            “When a customer buys a home, he is giving up a major chunk of his
            life's savings to do so. It is imperative to give him exactly what
            he looks for in his home.”
          </p>
          <Text>
            We bring to our clients much wanted human values, integrity, trust
            and an assurance of responsibility all coupled with our expertise in
            construction, engineering & management. Our biggest assets have
            always been our small but highly trained team of professional
            managers and engineers who are backed by a very able team of
            administrators. We have a clear vision about building on our
            strengths and our achievements while holding dear to us our basic
            principles
          </Text>
        </Card>

        <img src="/images/logo-divider2.png" alt="logo" />
      </Content>
    </Container>
  );
};

export default Founder;

const Container = styled.div`
  padding: 50px 0;
  background: url("/images/back-founder.png");
  opacity: 1;
  background-position: top;
  background-size: cover;
`;

const Content = styled.div`
  max-width: 1260px;
  margin: auto;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1040px;
  height: 970px;
  margin: 0 auto;
  padding: 50px 0;
  background: rgba(255, 255, 255, 0.7);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  margin-bottom: 30px;

  h2 {
    font-family: "Cinzel";
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 150%;
    text-align: center;
    letter-spacing: 0.1em;
    color: #474747;
    margin-bottom: 30px;
  }

  img {
    display: block;
    margin: 0 auto;
    margin-bottom: 30px;
  }

  span {
    padding: 10px;
    background: rgba(255, 255, 255, 0.7);
    font-family: "Roboto Flex";
    font-style: normal;
    font-weight: 1000;
    font-size: 32px;
    line-height: 150%;
    text-align: center;
    letter-spacing: 0.1em;
    color: #474747;
  }

  p {
    font-family: "Roboto Flex";
    font-style: italic;
    font-weight: 671;
    font-size: 20px;
    line-height: 150%;
    width: 550px;
    text-align: center;
    letter-spacing: 0.03em;
    color: #474747;
    padding: 5px 10px 20px;
    background: rgba(255, 255, 255, 0.9);
    margin-bottom: 40px;
    margin-top: 20px;
  }
`;

const Text = styled.div`
  width: 785px;
  font-family: "Roboto Flex";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  text-align: justify;
  letter-spacing: 0.03em;
  color: #474747;
`;

const FounderLogo = styled.img``;
