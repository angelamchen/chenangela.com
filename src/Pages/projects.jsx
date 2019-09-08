import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import InfoCard from '../Components/infoCard'
import MastHead from '../Components/mastHead'
import { PROJECTS } from '../Config/projects'
import Footer from '../Components/footer'

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
                darkTitle={'i also enjoy working on'}
                blueTitle={'cool projects'}
                description={'Like most comp sci students, I like making fun techy stuff in my free time 😎. Whether it was because I wanted to learn something new, was participating in a competition, or wanted a solution to a problem so that I could be lazy, here are a list of some of my current and past projects!'}
            />
            <br />
            <br />
            <Container>
                <Row>
                    {PROJECTS.map((job) => {
                        return (
                            <ExperienceCards lg={6}>
                                <InfoCard
                                    key={job.name}
                                    experience={job}
                                    height='350px'
                                />
                            </ExperienceCards>
                        )
                    })}
                </Row>
                <br />
                <br />
            </Container>
            <Footer />
            </div>
        )
    }
}

export default Projects;