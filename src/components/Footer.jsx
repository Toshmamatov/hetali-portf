import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Container>
      <Content>
        <Wrap>
          <FooterLogo src="/images/footer-logo.png" />
          <Lists>
            <List>
              <p>Quick Links</p>
              <li>Contact Us</li>
              <li>About Us</li>
              <li>Testimonial</li>
              <li>Gallery</li>
              <li>Site Map</li>
            </List>
            <List>
              <p>Flats in Mumbai</p>
              <li>1BHK Andheri West</li>
              <li>2 BHK Andheri West</li>
              <li>3 BHK Andheri West</li>
              <li>1BHK Goregaon East</li>
              <li>2BHK Goregaon East</li>
            </List>
            <List>
              <p>Projects in Mumbai</p>
              <li>Ongoing</li>
              <li>Upcoming</li>
              <li>Completed</li>
              <li>Hetali Blessings</li>
              <li>Hetali Anuchhaya</li>
            </List>
          </Lists>
        </Wrap>

        <img src="/images/footer-divider.png" alt="divider" />
        <span>Copyright © 2022 Hetali Enterprises - All Rights Reserved.</span>
      </Content>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  padding: 20px 0;
  background: #004a74;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
`;

const Content = styled.div`
  max-width: 1260px;
  margin: auto;

  span {
    display: block;
    font-family: "Roboto Flex";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 150%;
    text-align: center;
    color: #fafafa;
    text-align: center;
    margin-top: 15px;
  }
`;

const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const FooterLogo = styled.img``;

const Lists = styled.div`
  display: flex;
`;

const List = styled.ul`
  margin-left: 70px;
  list-style-type: none;

  p {
    font-family: "Roboto Flex";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 150%;
    margin-bottom: 10px;
    color: #ffffff;
  }

  li {
    cursor: pointer;
    font-family: "Roboto Flex";
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 150%;
    color: #ffffff;

    &:hover {
      opacity: 0.7;
    }
  }
`;
