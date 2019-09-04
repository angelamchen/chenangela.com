import React from 'react';
import { JOB_EXPERIENCE } from '../Config/experience'
import { Col, Card, Container, Row } from 'react-bootstrap';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import RecipeReviewCard from '../Components/expansionBar'
const Wrapper = styled(Container)`
  height: -webkit-fill-available;
  padding-top: 10%;
`

const Logo = styled.img`
width: 200px;
height: relative;
border-radius: 8px 0px 0px 8px;
`

const ExperienceCard = styled(Card)`
    border-radius: 8px
    box-shadow: 3px 3px 3px #d4d4d4;
    margin-top: 10px;
`

const Title = styled.h1`
color: #57BBBF;
font-size: 3.5em;
`

class Experience extends React.Component {
    render() {
        return (
            <Wrapper>
                <Title>Experience</Title>
                <Row>
                    {JOB_EXPERIENCE.map((job) => {
                        return (
                            <Col lg={6}>
                                <RecipeReviewCard
                                    jobExperience={job}
                                />
                            </Col>
                        )
                    })}
                </Row>
            </Wrapper>
        );
    }
}

export default Experience;