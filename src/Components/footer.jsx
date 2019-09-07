import React from 'react';
import styled from 'styled-components';
import { Col, Container, Row, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { CONTACT_INFO } from '../Config/contactInfo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import img from '../Images/blueHeader.svg';

const FooterWrapper = styled.div`
background-image: url(${img});
overflow: hidden;
padding: 10px;
background-size: cover;
  background-repeat: no-repeat;
`

const Icons = styled(FontAwesomeIcon)`
margin: 10px 15px 10px 15px;
color: #f2fdff;
`
const CopyRightText = styled.p`
color: #f2fdff;
`

class Footer extends React.Component {
    render() {
        return (
            <FooterWrapper>
                <Row className='justify-content-md-center'>
                    {CONTACT_INFO.map((contact) => {
                        return (
                            <OverlayTrigger
                                placement='top'
                                overlay={
                                    <Tooltip id={`tooltip-top`}>
                                        {contact.name}
                                    </Tooltip>
                                }>
                                <a href={contact.link}>
                                    <Icons icon={contact.icon} size='lg' />
                                </a>
                            </OverlayTrigger>
                        )
                    })}
                </Row>
                <Row className='justify-content-md-center'>
                    <CopyRightText>© Angela Chen, 2019</CopyRightText>
                </Row>


            </FooterWrapper>
        )
    }
}

export default Footer;