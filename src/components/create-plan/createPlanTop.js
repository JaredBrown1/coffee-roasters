import React from "react";

import {
	CreatePlan,
	CreatePlanTitle,
	CreatePlanParagraph,
} from "./styles/createPlanTopStyles";

const CreatePlanTop = () => {
	return (
		<div>
			<div>
				<CreatePlan>
					<CreatePlanTitle>Create plan</CreatePlanTitle>
					<CreatePlanParagraph>
						Coffee the way you wanted it to be. For coffee delivered
						<br /> tomorrow, or next week. For whatever brew method you use. For
						<br /> choice, for convenience, for quality.
					</CreatePlanParagraph>
				</CreatePlan>
			</div>
			<div></div>
		</div>
	);
};

export default CreatePlanTop;
