import React from "react";
import styled from "styled-components";

const Home = () => {
  return (
    <Container>
      <Content>
        <HomeTitle>ABOUT US</HomeTitle>
        <HomeImg src="/images/logo-divider.png" />
      </Content>
      <HomeBackImg src="/images/parents.png" />
      <Wrap>
        <HomeText>
          We endeavour to build homes which make it's residents happy and proud
          of their address. Residents are at heart of everything we do, we build
          homes to live in, not houses to stay in.
        </HomeText>
        <HomeImgln src="/images/logo-divider2.png" />
        <Box>
          <Card>
            <img src="/images/clock.png" alt="clock" />
            <p>
              Our track record has been impeccable with
              <b> project completion on time</b> and have surpassed expectations
              many a time, society members have positively received our
              redevelopment plans
              <b> modern and urbane designs</b> to their neighbours.
            </p>
          </Card>
          <Card>
            <img src="/images/star.png" alt="star" />
            <p>
              The Hetali Group is a redeveloper like no other with
              <b> profound focus on quality</b> and
              <b> long term satisfaction of its residents.</b>
            </p>
          </Card>
          <Card>
            <img src="/images/arrange.png" alt="arrange" />
            <p>
              They just don't endeavour but build homes which make it's
              residents proud of their address
              <b> by putting home-owners at the heart and soul of everything</b>
              they do from start to finish and post completion.
            </p>
          </Card>
          <Card>
            <img src="/images/building.png" alt="building" />
            <p>
              Hetali Group lives by the ethos of
              <b> building homes to live and not houses to stay in.</b>
            </p>
          </Card>
        </Box>
      </Wrap>
      <BackBlack></BackBlack>
      <LargeText>
        Established in 1992, Hetali Group is a leading real estate developer of
        residential spaces across Mumbai and have earned an unmatched reputation
        amongst its very loyal customers. The company's customer-centric values,
        project management proficiency and technical expertise are amplified
        with over 6.5 lakh sq.ft. built and almost 1 lakh sq.ft underway leading
        to more than families!
        <br />
        The Hetali Group promises a lifestyle second to none. In a span of over
        four decades, the group has proved to be one of the most reputed real
        estate builders in the western suburbs of Mumbai with residences in
        prime locations such as Andheri, Goregaon, Vile Parle and Juhu.
        <br />
        Spearheaded by Mr Jayesh Pandya, the company's central ideology is to
        provide homes customized to the customer's requirements and home’s that
        are superior in nature keeping in mind the needs of the modern home
        user.
      </LargeText>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  height: 100%;
  width: 100%;
  padding-top: 70px;
  /* position: relative; */

  &:before {
    content: "";
    top: 500px;
    z-index: -1;
    height: 1700px;
    left: 0;
    right: 0;
    bottom: 0;
    position: absolute;
    background: url("/images/back-home.png");
    background-position: top;
    background-size: cover;
  }
`;

const Content = styled.div`
  max-width: 1260px;
  margin: auto;
  padding: 40px 0;
`;

const HomeTitle = styled.div`
  font-family: "Cinzel";
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 150%;
  text-align: center;
  margin-bottom: 50px;
  letter-spacing: 0.1em;
  color: #474747;
`;

const HomeImg = styled.img``;

const Wrap = styled.div`
  max-width: 1260px;
  margin: auto;
`;

const HomeBackImg = styled.img`
  width: 100%;
  margin-bottom: 60px;
  /* position: relative;

  &:before {
    content: "";
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: absolute;
    background: url("/images/parents.png");
    background-position: top;
    background-size: cover;
    height: 214px;
  } */
`;

const HomeText = styled.div`
  width: 650px;
  font-family: "Roboto Flex";
  font-style: italic;
  font-weight: 1000;
  font-size: 20px;
  line-height: 150%;
  text-align: center;
  margin: 0 auto;
  letter-spacing: 0.03em;

  color: #474747;
`;

const HomeImgln = styled.img`
  margin-top: 30px;
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 40px;
`;

const Card = styled.div`
  padding: 30px 20px;
  gap: 50px;
  width: 420px;
  height: 324px;
  background: #fafafa;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  margin: 5px;
  cursor: pointer;

  img {
    display: block;
    margin: 0 auto;
    margin-bottom: 40px;
  }

  p {
    width: 380px;
    font-family: "Roboto Flex";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    letter-spacing: 0.03em;
    color: #474747;
  }
`;

const BackBlack = styled.div`
  background: rgba(0, 0, 0, 0.8);
  width: 100%;
  height: 140px;
  margin-top: 40px;
`;

const LargeText = styled.div`
  margin: 0 auto;
  padding-top: 30px;
  padding-bottom: 50px;
  width: 820px;
  font-family: "Roboto Flex";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 150%;
  text-align: justify;
  letter-spacing: 0.03em;
  color: #474747;
`;
