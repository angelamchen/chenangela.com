import React from 'react';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';

const DarkerSection = styled.div`
background-color: #f3f7f9;
padding-bottom: 5%;
`

const Description = styled.p`
font-size: 1.25rem;
color: #4e616c;
`

const BlueTitle = styled.h1`
color: #5da1a3;
`

const Wrapper = styled(Container)`
  padding-top: 10%;
`

class MastHead extends React.Component {
    render() {
        const { section, darkTitle, blueTitle, description } = this.props
        return (
            <DarkerSection>
                <Wrapper>
                    <Description>{section}</Description>
                    <h1>{darkTitle}</h1>
                    <BlueTitle>{blueTitle}</BlueTitle>
                    <br />
                    <p>{description}</p>
                </Wrapper>
            </DarkerSection>
        )
    }
}

export default MastHead