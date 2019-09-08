import React from 'react';
import { Card, Row } from 'react-bootstrap';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Media = styled.div`
    overflow: hidden;
    border-radius: 15px 15px 0px 0px;
`

const Logo = styled.img`
margin-left: 50%;
transform: translateX(-50%);
height: ${props => props.height};
width: relative;
`

const Tools = styled.div`
border-radius: 15px;
padding: 0px 10px 0px 10px;
margin: 5px 0px 5px 10px;
background-color: ${props => props.color};
`

const Icons = styled(FontAwesomeIcon)`
color: white;
display: inline-block;
margin: 0px 5px 0px 5px;
`

const ToolsText = styled.p`
color: white;
display: inline-block;
height: 50%;
margin: 0px 3px 4px 5px;
font-size: 12px;
`

const Cards = styled(Card)`
box-shadow: 5px 10px 20px #d4d4d4;
border-radius: 15px;
border: none;

&:hover {
    transform: scale(1.01);
}
`

export default class InfoCard extends React.Component {
    render() {
        const experience = this.props.experience

        return (
            <Cards>
                <Media>
                    <Logo src={experience.image} alt="..." height={this.props.height}/>
                </Media>
                <Card.Body className='text-dark'>
                    <h4 className="card-title">{experience.name}</h4>
                    <h6>{experience.secondaryDescription}</h6>
                    {experience.descriptions.map((desc) => {
                        return (
                            <div>
                                <p className="card-text text-secondary">{desc.projectDescription}</p>
                                <Row>
                                    {(desc.tools).map((tool) => {
                                        return (

                                            <Tools color={experience.color}>
                                                <Icons icon={tool.icon} size="sm"/>
                                                <ToolsText>{tool.name}</ToolsText>
                                            </Tools>
                                        )
                                    })}
                                </Row>
                            </div>
                        )
                    })}
                </Card.Body>
            </Cards>
        );
    }
}