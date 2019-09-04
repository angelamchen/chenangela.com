import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import styled from 'styled-components';
import Profile from '../Images/profile.jpg'

const Wrapper = styled(Container)`
    padding-top: 8%;
`

const Img = styled.img`
width: 350px;
height: relative;
`

const Title = styled.h1`
color: #57BBBF;
font-size: 3.5em;
`

class About extends React.Component {
    render() {
        return (
            <Wrapper>
                <Row>
                    <Title>ANGELA WHO?</Title>
                </Row>
                <Row>
                    <Col>
                        <h6>So many Angela's, what defines this one?</h6>
                    </Col>
                </Row>
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
                </Row>
            </Wrapper>
        );
    }
}

export default About;
