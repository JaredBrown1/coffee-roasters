import styled from "styled-components";

import Image1 from "./image-hero-blackcup.jpg";

export const CreatePlan = styled.div`
	background-image: url(${Image1});
	height: 450px;
	text-align: left;
	color: #fefcf7;
	border-radius: 10px;
`;

export const CreatePlanTitle = styled.h1`
	font-size: 72px;
	line-height: 72px;
	font-family: "Fraunces" sans-serif;
	padding-top: 100px;
	padding-left: 80px;
`;

export const CreatePlanParagraph = styled.p`
	font-size: 16px;
	line-height: 26px;
	font-family: "Barlow" sans-serif;
	padding-left: 85px;
`;
