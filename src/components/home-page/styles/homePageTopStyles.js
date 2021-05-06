import styled from "styled-components";

import Image1 from "./image-hero-coffeepress.jpg";

export const HeaderContainer = styled.div`
	border-radius: 20px;
	text-align: left;
	background-image: url(${Image1});
	height: 600px;
`;

export const HeaderContent = styled.div`
	padding-top: 60px;
	padding-left: 100px;
`;

export const CoffeeContainer = styled.div`
	display: flex;
`;

export const Title = styled.h1`
	color: #fefcf7;
	font-size: 72px;
	line-height: 72px;
	font-family: "Fraunces", sans-serif;
`;

export const Paragraph = styled.p`
	color: #fff;
	font-size: 16px;
	line-height: 26px;
	font-family: "Barlow", sans-serif;
`;

export const PlanButton = styled.button`
	background-color: #0e8784;
	width: 217px;
	height: 56px;
`;
