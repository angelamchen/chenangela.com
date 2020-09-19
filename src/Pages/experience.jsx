import React from "react";
import {
  JOB_EXPERIENCE,
  SKILLS_LANGUAGES,
  SKILLS_TECHNOLOGIES,
} from "../Config/experience";
import { Col, Container, Row, OverlayTrigger, Tooltip } from "react-bootstrap";
import styled from "styled-components";
import InfoCard from "../Components/infoCard";
import MastHead from "../Components/mastHead";
import Footer from "../Components/footer";

const ExperienceCards = styled(Col)`
  display: flex;
  padding-bottom: 20px;
`;
const Icon = styled.img`
  width: 100px;
  height: relative;

  &:hover {
    filter: none;
  }
`;
const Skill = styled.span`
  padding: 10px;
`;

const SkillTitle = styled.h4`
  padding-top: 50px;
  padding-right: 50px;
`;

const SkillsSection = styled(Row)`
  padding: 30px;
`;

const DarkerSection = styled.div`
  background-color: #f3f7f9;
  padding-bottom: 5%;
`;

class Experience extends React.Component {
  render() {
    return (
      <div>
        <MastHead
          section={"EXPERIENCE / SKILLS"}
          darkTitle={"i've worked at some cool places"}
          blueTitle={"i've joined some amazing organizations"}
          description={
            "My experiences include a range of work experiences and extracurriculars. For jobs, I mainly have experience with software development, with focus on both backend development and frontend. Below you can explore and dive in through some of my past experiences and the skills I've gained out of them!"
          }
        />
        <br />
        <br />
        <Container>
          <Row>
            {JOB_EXPERIENCE.map((job) => {
              return (
                <ExperienceCards lg={4}>
                  <InfoCard page="experience" experience={job} height="150px" />
                </ExperienceCards>
              );
            })}
          </Row>
          <br />
          <br />
        </Container>

        <DarkerSection>
          <Row className="justify-content-md-center">
            <SkillTitle>Languages</SkillTitle>
          </Row>
          <SkillsSection className="justify-content-md-center">
            {SKILLS_LANGUAGES.map((lang) => {
              return (
                <Skill>
                  <OverlayTrigger
                    placement="top"
                    overlay={<Tooltip id={`tooltip-top`}>{lang.name}</Tooltip>}
                  >
                    <Icon src={lang.icon} />
                  </OverlayTrigger>
                </Skill>
              );
            })}
          </SkillsSection>
          <Row className="justify-content-md-center">
            <SkillTitle>Technologies</SkillTitle>
          </Row>
          <SkillsSection className="justify-content-md-center">
            {SKILLS_TECHNOLOGIES.map((tech) => {
              return (
                <Skill>
                  <OverlayTrigger
                    placement="top"
                    overlay={<Tooltip id={`tooltip-top`}>{tech.name}</Tooltip>}
                  >
                    <Icon src={tech.icon} />
                  </OverlayTrigger>
                </Skill>
              );
            })}
          </SkillsSection>
        </DarkerSection>
        <Footer />
      </div>
    );
  }
}

export default Experience;
