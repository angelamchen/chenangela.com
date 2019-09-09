import React from 'react';
import { Col, Container, Button } from 'react-bootstrap';
import styled from 'styled-components';
import { NavLink } from "react-router-dom";
import img from '../Images/cliff.jpg';

const IntroSection = styled(Col)`
    color: white;
    top: 35%;
    position: fixed;
`

const LearnMoreButton = styled(Button)`
border-radius: 20px;
padding-right: 15px;
padding-left: 15px;
background-color: white;
color: black;
border: none;

&:hover {
    background-color: #5da1a3;
}
`

const Name = styled.h1`
font-size: 5em;
`

const Wrapper = styled(Container)`
  height: -webkit-fill-available;
  padding-top: 65px;
`

const BackgroundImg = styled.div`
background-image: url(${img});
overflow:hidden;
min-height: 100%;
  width: 100%;
  height: auto;
  position: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`

class Home extends React.Component {
    render() {
        return (
            <BackgroundImg>
                <Wrapper>
                    <IntroSection>
                        <h6>HEY, MY NAME IS</h6>
                        <Name>ANGELA CHEN</Name>
                        <br />
                        <h6>PROGRAMMER, VARSITY ATHLETE, HOBBIEST</h6>
                        <h6>BASED IN TORONTO, CANADA</h6>
                        <br />
                        <NavLink to='About'>
                            <LearnMoreButton> Learn More</LearnMoreButton>
                        </NavLink>
                    </IntroSection>
                </Wrapper>
            </BackgroundImg>
        )
    }
}

export default Home;