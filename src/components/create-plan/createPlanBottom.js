import React from "react";

import PlanAccordion from "./createPlanAccordions";

import {
	Container,
	StepsContainer,
	AccordionsContainer,
	Steps,
} from "./styles/createPlanBottomStyles";

const CreatePlanBottom = () => {
	return (
		<Container>
			<StepsContainer>
				<Steps>
					<h3 style={{ paddingRight: "15px", color: "#0e8784" }}>01</h3>
					<h3>Preferences</h3>
				</Steps>
				<Steps>
					<h3 style={{ paddingRight: "15px", color: "#0e8784" }}>02</h3>
					<h3>Preferences</h3>
				</Steps>
				<Steps>
					<h3 style={{ paddingRight: "15px", color: "#0e8784" }}>03</h3>
					<h3>Preferences</h3>
				</Steps>
				<Steps>
					<h3 style={{ paddingRight: "15px", color: "#0e8784" }}>04</h3>
					<h3>Preferences</h3>
				</Steps>
				<Steps>
					<h3 style={{ paddingRight: "15px", color: "#0e8784" }}>05</h3>
					<h3>Preferences</h3>
				</Steps>
			</StepsContainer>
			<AccordionsContainer>
				<PlanAccordion
					summary="How do you drink your coffee?"
					titleOne="Capsule"
					summaryOne="Compatible with Nespresso systems and similar brewers"
					titleTwo="Filter"
					summaryTwo="For pour over or drop methods like Aeropress, Chemex, and v60"
					titleThree="Espresso"
					summaryThree="Dense and finely ground beans for an intense, flavorful experience"
				/>
				<PlanAccordion
					summary="What type of coffee?"
					titleOne="Single Origin"
					summaryOne="Distinct, high quality coffee from a specific family-owned farm"
					titleTwo="Decaf"
					summaryTwo="Just like regular coffee, except the caffeine has been removed"
					titleThree="Blended"
					summaryThree="Combination of two or three dark roasted beans of organic coffees"
				/>
				<PlanAccordion
					summary="How much would you like?"
					titleOne="250g"
					summaryOne="Perfect for the solo drinker. Yields about 12 delicious cups"
					titleTwo="500g"
					summaryTwo="Perfect option for a couple. Yields about 40 delectable cups"
					titleThree="1000g"
					summaryThree="Perfect for offices and events. Yields about 90 delightful cups"
				/>
				<PlanAccordion
					summary="Want us to grind them?"
					titleOne="Wholebean"
					summaryOne="Best choice if you cherish the full sensory experience"
					titleTwo="Filter"
					summaryTwo="For drip or pour-over coffee methods such as v60 or Aeropress"
					titleThree="Cafetiere"
					summaryThree="Course ground beans specially suited for french press coffee"
				/>
				<PlanAccordion
					summary="How often should we deliver?"
					titleOne="Every Week"
					summaryOne="$7.20 per shipment. Includes free first-class shipping"
					titleTwo="Every 2 weeks"
					summaryTwo="$9.60 per shipment. Includes free priority shipping"
					titleThree="Every month"
					summaryThree="$12.00 per shipment. Includes priority shipping"
				/>
			</AccordionsContainer>
		</Container>
	);
};

export default CreatePlanBottom;
