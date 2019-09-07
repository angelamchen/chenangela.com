import React from "react";
import { NavLink } from "react-router-dom";
import { PAGES } from '../Config/pages'
import styled from 'styled-components';
import { Row, Col, Container } from 'react-bootstrap';
import blueHeader from '../Images/blueHeader.svg'

const Wrapper = styled.ul`
  list-style-type: none;
  margin-top: 22px;
  padding: 0;
  overflow: hidden;
  background-color: white;
  position: fixed;
  width: 100%;
  z-index:1
`;

const Pattern = styled.div`
overflow: hidden;
position: fixed;
z-index:1;
height: 22px;
`

const Nav = styled(Row)`
    text-align: left;
`

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
            <div>
            <Wrapper>
                <Container>
                    <Row>
                        <Col lg={4}>
                            <NavItems><NavLogo>{'<AC>'}</NavLogo></NavItems>
                        </Col>
                        <Nav>
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
                        </Nav>
                    </Row>
                </Container>
            </Wrapper>
            <Pattern>
            <img src={blueHeader} alt='pattern'/>
            </Pattern>
            </div>
        );
    }
}

export default Navbar