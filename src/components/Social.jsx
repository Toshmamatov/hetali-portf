import React from "react";
import styled from "styled-components";

const Social = () => {
  return (
    <Container>
      <Content>
        <SocialTitle>Corporate Social Responsibility</SocialTitle>
        <SocialImg src="/images/logo-divider.png" />

        <Wrap>
          <Box>
            <BigCard>
              <span>Education for the under-privileged</span>
              <p>
                We believe that our future lies in the holistic educational
                foundation of the youth and we have nurtured that cause by
                providing the necessary books and monetary support to the
                children of Mumbai & also at several villages in Gujarat. As the
                Trustees of the H A Desai Boarding School in Matunga, Mumbai, we
                have been providing living and hospitality services to the
                academically bright students from the weaker of the society.
              </p>
            </BigCard>
            <Card>
              <span>Support for Rural Farmers</span>
            </Card>
            <Card>
              <span>Spiritual </span>
            </Card>
          </Box>
          <img src="/images/children.png" alt="present" />
        </Wrap>
      </Content>
    </Container>
  );
};

export default Social;

const Container = styled.div`
  background: #f5f7f8;
  padding: 70px 0;
`;

const Content = styled.div`
  max-width: 1260px;
  margin: auto;
`;

const SocialTitle = styled.div`
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

const SocialImg = styled.img``;

const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 50px;

  img {
    width: 540px;
    height: 550px;
  }
`;

const BigCard = styled.div`
  width: 600px;
  height: 390px;
  background: #fafafa;
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

const Box = styled.div``;

const Card = styled.div`
  width: 600px;
  height: 60px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  padding: 15px 20px;
  margin-top: 20px;
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
