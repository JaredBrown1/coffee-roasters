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
	padding: 50px;
	padding-right: 20px;
`;

export const CoffeeParagraph = styled.p`
	font-size: 16px;
	font-family: "Barlow regular", sans-serif;
	line-height: 26px;
	color: #333d4b;
`;

export const CoffeeTitle = styled.h2`
	font-size: 24px;
	font-family: "Barlow", sans-serif;
	line-height: 32px;
	color: #333d4b;
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
	padding-bottom: 30px;
`;

export const PlanButton = styled.button`
	background-color: #0e8784;
	width: 217px;
	height: 56px;
	color: #fff;
	font-size: 18px;
	border: none;
	border-radius: 10px;
`;

export const Image = styled.img`
	width: 255px;
	height: 193px;
`;

export const BackgroundTitle = styled.h1`
	font-size: 180px;
	margin-bottom: -135px;
	background: #c2cded;
	background: -webkit-linear-gradient(to bottom, #c2cded 0%, #f7f7f7 100%);
	background: -moz-linear-gradient(to bottom, #c2cded 0%, #f7f7f7 100%);
	background: linear-gradient(to bottom, #c2cded 0%, #f7f7f7 100%);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
`;
