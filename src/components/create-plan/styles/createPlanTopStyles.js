import styled from "styled-components";

import Image1 from "./image-hero-blackcup.jpg";

export const CreatePlan = styled.div`
	background-image: url(${Image1});
	height: 450px;
	text-align: left;
	color: #fefcf7;
	border-radius: 10px;
	margin-bottom: 150px;
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

export const CreatePlanStepsContainer = styled.div`
	margin: 0 auto;
	border-radius: 10px;
	display: flex;
	justify-content: space-around;
	height: 653px;
	background-color: #2c343e;
`;

export const PlanStep = styled.div`
	width: 285px;
	height: 355px;
`;

export const PlanStepNum = styled.h1`
	padding-top: 80px;
	font-size: 72px;
	line-height: 72px;
	font-family: "Fraunces" sans-serif;
	color: #fdd6ba;
`;

export const PlanName = styled.h2`
	font-size: 32px;
	line-height: 36px;
	font-family: "Fraunces" sans-serif;
	color: #fefcf7;
`;

export const PlanParagraph = styled.p`
	font-size: 16px;
	line-height: 26px;
	font-family: "Barlow" sans-serif;
	color: #fefcf7;
`;
