import React from "react";

import {
	CreatePlan,
	CreatePlanTitle,
	CreatePlanParagraph,
	CreatePlanStepsContainer,
	PlanStep,
	PlanStepNum,
	PlanName,
	PlanParagraph,
} from "./styles/createPlanTopStyles";

const CreatePlanTop = () => {
	return (
		<div>
			<CreatePlan>
				<CreatePlanTitle>Create plan</CreatePlanTitle>
				<CreatePlanParagraph>
					Coffee the way you wanted it to be. For coffee delivered
					<br /> tomorrow, or next week. For whatever brew method you use. For
					<br /> choice, for convenience, for quality.
				</CreatePlanParagraph>
			</CreatePlan>

			<CreatePlanStepsContainer>
				<PlanStep>
					<PlanStepNum>01</PlanStepNum>
					<PlanName>
						Pick your
						<br /> coffee
					</PlanName>
					<PlanParagraph>
						Select from our evolving range of artisan
						<br /> coffees. Our beans are ethically sourced
						<br /> and we pay fair prices for them. There are <br /> new coffees
						in all profiles every month
						<br /> for you to try out.
					</PlanParagraph>
				</PlanStep>
				<PlanStep>
					<PlanStepNum>02</PlanStepNum>
					<PlanName>
						Choose the
						<br /> frequency
					</PlanName>
					<PlanParagraph>
						Customize your oder frequency,
						<br /> quantity, even your roast style and grind
						<br /> type. Pause, skip or cancel your
						<br /> subscription with no commitment
						<br /> through our online portal.
					</PlanParagraph>
				</PlanStep>
				<PlanStep>
					<PlanStepNum>03</PlanStepNum>
					<PlanName>
						Receive and
						<br /> enjoy!
					</PlanName>
					<PlanParagraph>
						We ship your package within 48 hours,
						<br /> freshly roasted. Sit back and enjoy
						<br /> award-winning world-class coffees
						<br /> curated to provide a distinct tasting experience.
					</PlanParagraph>
				</PlanStep>
			</CreatePlanStepsContainer>
		</div>
	);
};

export default CreatePlanTop;
