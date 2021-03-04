import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container,
    Jumbotron,
    Form,
    FormGroup,
    Label,
    Input,
    Button,
    Alert
} from 'reactstrap';



export default function Orcamento() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (

        <>
            <Navbar color="info" dark expand="md">
                <Container>
                    <NavbarBrand href="/">RM Eletronica</NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="mr-auto" navbar>
                            <NavItem>
                                <NavLink href="/orcamento">Orçamento</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>

            <Jumbotron className="pg-orcamento">
                <style>
                    {`.pg-orcamento{
                    background-color: #f5fbfa;
                    color: #17a2b8;
                    padding-top: 50px;
                    padding-bottom: 100px;
                    margin-bottom: 0rem !important;
                }`}
                </style>
                <Container>
                    <h1 className="display-4 text-center">Nossos consultores estão prontos para lhe ajudar!</h1>
                    <p className="lead text-center mb-4">Deixe seus contatos abaixo que retornaremos com uma proposta específica para sua necessidade.</p>

                </Container>
            </Jumbotron>
        </>
    );
}