import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import InfoCard from '../Components/infoCard'
import MastHead from '../Components/mastHead'
import { PROJECTS } from '../Config/projects'

const ExperienceCards = styled(Col)`
    display: flex;
    padding-bottom: 20px;
`

class Projects extends React.Component {
    render() {
        return (
            <div>
            <MastHead
                section={'PROJECTS'}
                darkTitle={'something about interestes'}
                blueTitle={'like making stuff'}
                description={'something like description'}
            />
            <br />
            <br />
            <Container>
                <Row>
                    {PROJECTS.map((job) => {
                        return (
                            <ExperienceCards lg={4}>
                                <InfoCard
                                    experience={job}
                                />
                            </ExperienceCards>
                        )
                    })}
                </Row>
                <br />
                <br />
            </Container>
            </div>
        )
    }
}

export default Projects;