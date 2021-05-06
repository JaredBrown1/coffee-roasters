import React from "react";

import { Container, List, ListItem, Title } from "./styles/navBarStyles";

const NavBar = () => {
	return (
		<Container>
			<Title>
				<h1>coffeeroasters</h1>
			</Title>
			<div>
				<List>
					<ListItem>HOME</ListItem>
					<ListItem>ABOUT US</ListItem>
					<ListItem>CREATE YOUR PLAN</ListItem>
				</List>
			</div>
		</Container>
	);
};

export default NavBar;
