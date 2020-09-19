import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import styled from "styled-components";
import Profile from "../Images/profile.jpg";
import Footer from "../Components/footer";
import { IMAGES, DESCRIPTION, TECH_DESC } from "../Config/about";

const Wrapper = styled(Container)`
  padding-top: 8%;
`;
const DarkerSection = styled.div`
  background-color: #f3f7f9;
  padding-bottom: 5%;
`;

const LightSection = styled(Container)`
  padding: 20px;
  padding-top: 5%;
  padding-bottom: 6%;
`;

const FunFacts = styled.li`
  padding: 5px;
`;

const ProfilePicture = styled.img`
  width: 350px;
  height: relative;
`;

const Title = styled.h1`
  color: #5da1a3;
  font-size: 3.5em;
`;

const Description = styled.p`
  font-size: 1.25rem;
  color: #4e616c;
`;

const Image = styled.img`
  width: 250px;
  height: 187.5px;
  padding: 10px;
`;

const IntroParagraph = styled.p`
  padding: 5px;
`;

const Intro = styled(Col)`
  padding-top: 10px;
`;

class About extends React.Component {
  render() {
    return (
      <div>
        <DarkerSection>
          <Wrapper>
            <Description>ABOUT ME</Description>
            <Title>ANGELA WHO?</Title>
            <h6>So many Angela's, what defines this one?</h6>
            <br />
            <Row>
              <Col lg={6} sm={12}>
                <ProfilePicture src={Profile} />
              </Col>
              <Intro lg={6} sm={12}>
                <h5>Angela</h5>
                <h6>[an-juh-luh]</h6>
                {DESCRIPTION.map((desc) => {
                  return <IntroParagraph>{desc}</IntroParagraph>;
                })}
              </Intro>
            </Row>
            <Row>
              <Col sm={12}>
                {TECH_DESC.map((desc) => {
                  return <IntroParagraph>{desc}</IntroParagraph>;
                })}
              </Col>
            </Row>
          </Wrapper>
        </DarkerSection>
        <LightSection>
          <Description>
            But wait! There is more to me than just programming!
          </Description>
          <p>I'm actually a huge sports girl, with a passion for food</p>
          <ul>
            <FunFacts>
              I ran the Scotiabank Toronto Waterfront half marathon with 2:04:15
              time (almost died cause I didn't train but was proud nonetheless)
            </FunFacts>
            <FunFacts>
              I'm part of the best team ever known as the Waterloo Warriors
              Badminton Varsity team (and we placed 2nd at OUAs!)
            </FunFacts>
            <FunFacts>
              I placed 2nd for Women's Doubles at the 2017 Junior Pan American
              Badminton Championships!
            </FunFacts>
            <FunFacts>
              I'm quite the foodie as well! I enjoy going around to different
              cities to try all kinds of foods. View my food{" "}
              <a href="https://https://www.instagram.com/fatassfoodie/">
                Instagram!
              </a>
            </FunFacts>
            <FunFacts>
              Sports is definitely my thing, badminton, volleyball, track and
              field, basketball, you name it!
            </FunFacts>
            <FunFacts>
              Of course, I'm a proud Raptors fan and witnessed Philly game 7
              "The Shot / Is this the dagger?" live in section 500 (last
              affordable game before the prices skyrocketed)
            </FunFacts>
          </ul>
          <p>I had a huge photography phase and really like taking photos...</p>
          <ul>
            <FunFacts>
              I mainly focus on taking photos of sceneries and food ...
            </FunFacts>
            <FunFacts>
              ... but I also like jumping around a lot in photos when I travel!
              Check more photography{" "}
              <a href="https://vsco.co/4ngelachen/">here!</a>
            </FunFacts>
          </ul>
          <Row className="justify-content-md-center">
            {IMAGES.map((image) => {
              return <Image src={image.img} alt="" />;
            })}
          </Row>
        </LightSection>
        <Footer />
      </div>
    );
  }
}

export default About;
