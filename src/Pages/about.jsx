import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import styled from 'styled-components';
import Profile from '../Images/profile.jpg'

const Wrapper = styled(Container)`
    padding-top: 8%;
`
const DarkerSection = styled.div`
background-color: #f3f7f9;
padding-bottom: 10px;
`

const Img = styled.img`
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
                                <Img src={Profile} />
                            </Col>
                            <Col>
                                <h5>Angela</h5>
                                <h6>[an-juh-luh]</h6>
                                <br />
                                <p>A computer science student at the University of Waterloo, former Pan American silver medalist and SHAD Fellow with a broad spectrum of interests including software design and sports. Driven by a curious nature with a dream to be on the forefront of technological innovation. Oftentimes can be found playing sports, going for a run, trying unique food, and exploring photography. Loves to discover new interests and hobbies in order to find ways to live life the fullest.</p>
                            </Col>
                            {/* Me by the numbers - of course im going to quantify things, Im a math student! 
                            - 2 years into university
                            - 10 countries visited
                            - 51 badminton medals earned
                            - 226 km ran in 2018
                            - 4 Hackathons attended */}
                        </Row>
                    </Wrapper>
                </DarkerSection>
            </div>
        );
    }
}

export default About;
