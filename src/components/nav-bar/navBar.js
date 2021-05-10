import React from "react";

import { Container, List, ListItem, Title } from "./styles/navBarStyles";

import { Link } from "react-router-dom";

const NavBar = () => {
	return (
		<Container>
			<Title>
				<h1>coffeeroasters</h1>
			</Title>
			<div>
				<List>
					<Link style={{ textDecoration: "none" }} to="/">
						<ListItem>HOME</ListItem>
					</Link>
					<Link style={{ textDecoration: "none" }} to="/about">
						<ListItem>ABOUT US</ListItem>
					</Link>

					<ListItem>CREATE YOUR PLAN</ListItem>
				</List>
			</div>
		</Container>
	);
};

export default NavBar;
