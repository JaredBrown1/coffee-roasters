import React from "react";

import {
	Container,
	List,
	ListItem,
	SocialMedia,
	SocialMediaItem,
	Title,
} from "./styles/footerStyles";

const Footer = () => {
	return (
		<Container>
			<div>
				<Title>coffeeroasters</Title>
			</div>
			<div>
				<List>
					<ListItem>Home</ListItem>
					<ListItem>Aboute</ListItem>
					<ListItem>Create Your Plan</ListItem>
				</List>
			</div>
			<SocialMedia>
				<SocialMediaItem>FB</SocialMediaItem>
				<SocialMediaItem>TW</SocialMediaItem>
				<SocialMediaItem>IG</SocialMediaItem>
			</SocialMedia>
		</Container>
	);
};

export default Footer;
