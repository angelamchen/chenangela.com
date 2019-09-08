import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import styled from 'styled-components';
import Profile from '../Images/profile.jpg'
import Footer from '../Components/footer'
import { IMAGES, DESCRIPTION } from '../Config/about'

const Wrapper = styled(Container)`
    padding-top: 8%;
`
const DarkerSection = styled.div`
    background-color: #f3f7f9;
    padding-bottom: 5%;
`

const LightSection = styled(Container)`
    padding: 20px;
    padding-top: 5%;
    padding-bottom: 6%;
`

const FunFacts = styled.li`
    padding: 5px;
`

const ProfilePicture = styled.img`
    width: 350px;
    height: relative;
`

const Title = styled.h1`
    color: #5da1a3;
    font-size: 3.5em;
`

const Description = styled.p`
    font-size: 1.25rem;
    color: #4e616c;
`

const Image = styled.img`
    width: 250px;
    height: relative;
    padding: 10px;
`

class About extends React.Component {
    render() {
        return (
            <div>
                <DarkerSection>
                    <Wrapper>
                        <Description>ABOUT ME</Description>
                        <Title>ANGELA WHO?</Title>
                        <Col>
                            <h6>So many Angela's, what defines this one?</h6>
                        </Col>
                        <br />
                        <Row>
                            <Col>
                                <ProfilePicture src={Profile} />
                            </Col>
                            <Col>
                                <h5>Angela</h5>
                                <h6>[an-juh-luh]</h6>
                                <br />
                                <p>{DESCRIPTION}</p>
                            </Col>
                        </Row>
                    </Wrapper>
                </DarkerSection>
                <LightSection>
                    <Description>Hold Up! There is more to me than just school and programming!</Description>
                    <ul>
                        <FunFacts>I ran the Scotiabank Toronto Waterfront half marathon with 2:04:15 time (almost died cause I didn't train but was proud nonetheless)</FunFacts>
                        <FunFacts>I'm part of the best team ever known as the Waterloo Warriors Badminton Varsity team (and we placed 2nd at OUAs!)</FunFacts>
                        <FunFacts>I placed 2nd for Women's Doubles at the 2017 Junior Pan American Badminton Championships! 🥈</FunFacts>
                        <FunFacts>I had a huge photopraphy phase and really like taking photos...</FunFacts>
                        <FunFacts>... and I also like jumping around a lot when I travel! Check more photography <a href='https://vsco.co/4ngelachen/'>here!</a></FunFacts>
                        <FunFacts>I'm quite the foodie as well! I enjoy going around to different cities to try all kinds of foods. View my food <a href=''>Instagram!</a></FunFacts>
                        <FunFacts>Sports is definately my thing, badminton, volleyball, track and field, basketball, you name it!</FunFacts>
                        <FunFacts>Of course, I'm a proud Raptors fan and witnessed "The Shot / Is this the dagger? / Game 7 Philly" live in section 500 (yes I bought tickets before the prices skyrocketed)</FunFacts>
                    </ul>
                    <Row className='justify-content-md-center'>
                        {IMAGES.map((image) => {
                            return (
                                <Image src={image.img} alt='' />
                            )
                        })}
                    </Row>
                </LightSection>
                <Footer />
            </div >
        );
    }
}

export default About;
