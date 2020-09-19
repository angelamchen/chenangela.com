import React from "react";
import { Card, Row } from "react-bootstrap";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

const Media = styled.div`
  overflow: hidden;
  border-radius: 15px 15px 0px 0px;
`;
const Title = styled(Row)`
  color: black;
  margin-left: 0px;
`;

const Logo = styled.img`
  margin-left: 50%;
  transform: translateX(-50%);
  height: ${(props) => props.height};
  width: relative;
`;

const Tools = styled.div`
  border-radius: 15px;
  padding: 0px 10px 0px 10px;
  margin: 5px 0px 5px 10px;
  background-color: ${(props) => props.color};
`;

const Icons = styled(FontAwesomeIcon)`
  color: white;
  display: inline-block;
  margin: 0px 5px 0px 5px;
`;

const ToolsText = styled.p`
  color: white;
  display: inline-block;
  height: 50%;
  margin: 0px 3px 4px 5px;
  font-size: 12px;
`;

const Cards = styled(Card)`
  box-shadow: 5px 10px 20px #d4d4d4;
  border-radius: 15px;
  border: none;

  &:hover {
    transform: scale(1.01);
  }
`;

const CardDescription = styled.p`
  padding-top: 10px;
`;

const Link = styled(FontAwesomeIcon)`
margin-left: 15px;
color: #e0e0e0
font-size: 15px;

&:hover {
  font-size: 17px;
}
`;

export default class InfoCard extends React.Component {
  render() {
    const experience = this.props.experience;
    const page = this.props.page;

    let link;
    if (page === "projects" && experience.name !== "Smart Mirror") {
      link = (
        <a href={experience.link}>
          <Link icon={faLink} size="lg" />
        </a>
      );
    }

    return (
      <Cards>
        <Media>
          <Logo src={experience.image} alt="..." height={this.props.height} />
        </Media>
        <Card.Body className="text-dark">
          <Title>
            <h4 className="card-title">{experience.name}</h4>
            {link}
          </Title>
          <h6>{experience.secondaryDescription}</h6>
          {experience.descriptions.map((desc) => {
            return (
              <div>
                <CardDescription className="card-text text-secondary">
                  {desc.projectDescription}
                </CardDescription>
                <Row>
                  {desc.tools.map((tool) => {
                    return (
                      <Tools color={experience.color}>
                        <Icons icon={tool.icon} size="sm" />
                        <ToolsText>{tool.name}</ToolsText>
                      </Tools>
                    );
                  })}
                </Row>
              </div>
            );
          })}
        </Card.Body>
      </Cards>
    );
  }
}
