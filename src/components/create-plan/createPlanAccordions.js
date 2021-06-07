import React from "react";

import { DetailsContainer } from "./styles/createPlanBottomStyles";

import { ExpandMore } from "@material-ui/icons";
import {
	Accordion,
	AccordionSummary,
	AccordionDetails,
} from "@material-ui/core";

const PlanAccordion = (props) => {
	return (
		<Accordion
			style={{
				width: "730px",
				padding: "30px",
				boxShadow: "none",
				backgroundColor: "#fefcf7",
			}}
		>
			<AccordionSummary
				style={{ fontSize: "40px", fontFamily: "Fraunces", color: "#83888F" }}
				expandIcon={<ExpandMore />}
			>
				{props.summary}
			</AccordionSummary>
			<DetailsContainer>
				<AccordionDetails
					style={{
						display: "flex",
						flexDirection: "column",
						width: "228px",
						height: "250px",
						backgroundColor: "#f4f1eb",
						borderRadius: "10px",
						margin: "15px",
					}}
				>
					<h1 style={{ fontSize: "24px", fontFamily: "Fraunces" }}>
						{props.titleOne}
					</h1>
					<p
						style={{
							fontSize: "16px",
							fontFamily: "Barlow regular",
						}}
					>
						{props.summaryOne}
					</p>
				</AccordionDetails>
				<AccordionDetails
					style={{
						display: "flex",
						flexDirection: "column",
						width: "228px",
						height: "250px",
						backgroundColor: "#f4f1eb",
						borderRadius: "10px",
						margin: "15px",
					}}
				>
					<h1 style={{ fontSize: "24px", fontFamily: "Fraunces" }}>
						{props.titleTwo}
					</h1>
					<p
						style={{
							fontSize: "16px",
							fontFamily: "Barlow regular",
						}}
					>
						{props.summaryTwo}
					</p>
				</AccordionDetails>
				<AccordionDetails
					style={{
						display: "flex",
						flexDirection: "column",
						width: "228px",
						height: "250px",
						backgroundColor: "#f4f1eb",
						borderRadius: "10px",
						margin: "15px",
					}}
				>
					<h1 style={{ fontSize: "24px", fontFamily: "Fraunces" }}>
						{props.titleThree}
					</h1>
					<p
						style={{
							fontSize: "16px",
							fontFamily: "Barlow regular",
						}}
					>
						{props.summaryThree}
					</p>
				</AccordionDetails>
			</DetailsContainer>
		</Accordion>
	);
};

export default PlanAccordion;
