import React from "react";
import { NavLink } from "react-router-dom";
import { PAGES } from '../Config/pages'
import styled from 'styled-components';
import { Row, Col, Container } from 'react-bootstrap';

const Wrapper = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: white;
  position: fixed;
  width: 100%;
  box-shadow: 0px 5px 5px #d4d4d4;
  z-index:1
`;

const NavItems = styled.li`
    display: inline-block;
    float: left;
`;

const NavLogo = styled.h2`
    display: block;
    text-align: center;
    padding-top: 10px;
`;

const NavLinks = styled(NavLink)`
    display: inline-block;
    color: black;
  text-align: center;
  padding: 20px 16px;
  text-decoration: none;
`;

const activeNavLink = {
    color: '#57BBBF'
}

class Navbar extends React.Component {

    render() {
        return (
            <Wrapper>
                <Container>
                    <Row>
                        <Col className='justify-content-md-left' lg={4}>
                            <NavItems><NavLogo>{'<AC>'}</NavLogo></NavItems>
                        </Col>
                        <Col className='justify-content-md-right'>
                            <Col>
                                <NavItems>
                                    <NavLinks exact to='/' activeStyle={activeNavLink}>Home</NavLinks>
                                </NavItems>
                            </Col>
                            {PAGES.map((page) => {
                                return (
                                    <Col>
                                        <NavItems>
                                            <NavLinks
                                                to={page.path}
                                                activeStyle={activeNavLink}>{page.name}</NavLinks>
                                        </NavItems>
                                    </Col>
                                )
                            })}
                        </Col>
                    </Row>
                </Container>
            </Wrapper>
        );
    }
}

export default Navbar