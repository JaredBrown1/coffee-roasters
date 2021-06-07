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
			}}
		>
			<AccordionSummary
				style={{ fontSize: "40px", fontFamily: "Fraunces", color: "#83888F" }}
				expandIcon={<ExpandMore />}
			>
				{props.summary}
			</AccordionSummary>
			<DetailsContainer>
				<AccordionDetails style={{ display: "flex", flexDirection: "column" }}>
					<h1>{props.titleOne}</h1>
					{props.summaryOne}
				</AccordionDetails>
				<AccordionDetails style={{ display: "flex", flexDirection: "column" }}>
					<h1>{props.titleTwo}</h1>
					{props.summaryTwo}
				</AccordionDetails>
				<AccordionDetails style={{ display: "flex", flexDirection: "column" }}>
					<h1>{props.titleThree}</h1>
					{props.summaryThree}
				</AccordionDetails>
			</DetailsContainer>
		</Accordion>
	);
};

export default PlanAccordion;
