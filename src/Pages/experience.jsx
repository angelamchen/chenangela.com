import React from 'react';
import { JOB_EXPERIENCE, SKILLS_LANGUAGES, SKILLS_TECHNOLOGIES } from '../Config/experience'
import { Col, Container, Row, OverlayTrigger, Tooltip } from 'react-bootstrap';
import styled from 'styled-components';
import InfoCard from '../Components/infoCard'

const Wrapper = styled(Container)`
  padding-top: 10%;
  padding-bottom: 10%;
`

const Title = styled.h1`
color: #57BBBF;
font-size: 3.5em;
display: flex;
`

const ExperienceCards = styled(Col)`
    display: flex;
    padding-bottom: 20px;
`
const Icon = styled.img`
width: 100px;
height: relative;
filter: grayscale(100%);

&:hover {
    filter: none;
}
`
const Skill = styled.span`
padding: 10px;
`

const SkillTitle = styled.h4`
padding-top: 50px;
padding-right: 50px;
`

const SkillsSection = styled(Row)`
padding: 30px;`

class Experience extends React.Component {
    render() {
        return (
            <Wrapper>
                <Title>Experience</Title>

                <br />
                <Col lg={12}>
                    <Row>
                        <Col lg={2}>
                            <SkillTitle>Languages</SkillTitle>
                        </Col>
                        <Col lg={10}>
                            <SkillsSection className='justify-content-md-center'>
                                {SKILLS_LANGUAGES.map((lang) => {
                                    return (
                                        <Skill>
                                        <OverlayTrigger
                                            placement='top'
                                            overlay={
                                                <Tooltip id={`tooltip-top`}>
                                                    {lang.name}
                                                </Tooltip>
                                            }
                                        >
                                            <Icon src={lang.icon} />
                                        </OverlayTrigger>
                                        </Skill>
                                    )
                                })}
                            </SkillsSection>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={2}>
                            <SkillTitle>Technologies</SkillTitle>
                        </Col>
                        <Col lg={10}>
                            <SkillsSection className='justify-content-md-center'>
                                {SKILLS_TECHNOLOGIES.map((tech) => {
                                    return (
                                        <Skill>
                                        <OverlayTrigger
                                            placement='top'
                                            overlay={
                                                <Tooltip id={`tooltip-top`}>
                                                    {tech.name}
                                                </Tooltip>
                                            }>
                                            <Icon src={tech.icon} />
                                        </OverlayTrigger>
                                        </Skill>
                                    )
                                })}
                            </SkillsSection>
                        </Col>
                    </Row>
                </Col>
                <br />
                <br />
                <Row>
                    {JOB_EXPERIENCE.map((job) => {
                        return (
                            <ExperienceCards lg={4}>
                                <InfoCard
                                    jobExperience={job}
                                />
                            </ExperienceCards>
                        )
                    })}
                </Row>
            </Wrapper>
        );
    }
}

export default Experience;