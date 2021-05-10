import styled from "styled-components";

import Image1 from "./image-hero-whitecup.jpg";

export const TopContainer = styled.div`
	background-image: url(${Image1});
	height: 450px;
	border-radius: 10px;
	text-align: left;
	color: #fefcf7;
`;

export const AboutTitle = styled.h1`
	font-size: 40px;
	line-height: 48px;
	font-family: "Fraunces" sans-serif;
	padding-top: 130px;
	padding-left: 90px;
`;

export const AboutParagraph = styled.p`
	font-size: 16px;
	line-height: 26px;
	font-family: "Barlos" sans-serif;
	padding-left: 90px;
`;
