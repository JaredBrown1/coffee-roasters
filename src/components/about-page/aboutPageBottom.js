import React from "react";

import {
	UncompromiseContainer,
	UncompImage,
	UncompTitle,
	UncompParapraph,
} from "./styles/aboutPageBottomStyles";

import Image1 from "./styles/image-quality.jpg";

const AboutBottom = () => {
	return (
		<div>
			<div>
				<div>
					<UncompImage src={Image1} alt="uncompromised" />
				</div>
				<UncompromiseContainer>
					<UncompTitle>Uncompromising Quality</UncompTitle>
					<UncompParapraph>
						Although we work with growers who pay close attention to all stages
						of
						<br /> harvest and processing, we employ, on our end, a rigorous
						quality control
						<br /> program to avoid over-roasting or baking the coffee dry.
						Every bag of coffee is
						<br /> tagged with a roast date and batch number. Our goal is to
						roast consistent, <br /> user-friendly coffee, so that brewing is
						easy and enjoyable.
					</UncompParapraph>
				</UncompromiseContainer>
			</div>
			<div></div>
		</div>
	);
};

export default AboutBottom;
