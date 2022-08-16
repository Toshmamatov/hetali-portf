import React from "react";
import styled from "styled-components";

const Vision = () => {
  return (
    <Container>
      <Wrap>
        <h2>Vision</h2>
        <p>
          We aim to ensure top-class service to our stakeholders & diversify our
          business to other service-oriented sectors with the ultimate goal of
          achieving customer satisfaction & end-user interaction.
        </p>
      </Wrap>
    </Container>
  );
};

export default Vision;

const Container = styled.div`
  padding: 50px;
  background: url("/images/Vision.png");
  background-size: contain;
  margin-bottom: 30px;
`;

const Wrap = styled.div`
  h2 {
    font-family: "Cinzel";
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 150%;
    margin-bottom: 30px;
    text-align: center;
    letter-spacing: 0.1em;
    color: #fafafa;
  }
  p {
    font-family: "Roboto Flex";
    font-style: italic;
    font-weight: 1000;
    font-size: 20px;
    line-height: 150%;
    text-align: center;
    margin-bottom: 20px;
    letter-spacing: 0.03em;
    width: 800px;
    margin: 0 auto;
    color: #fafafa;
  }
`;
