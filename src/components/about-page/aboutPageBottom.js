import React from "react";

import Logo1 from "./styles/illustration-australia.svg";
import Logo2 from "./styles/illustration-canada.svg";
import Logo3 from "./styles/illustration-uk.svg";

import {
	UncompromiseContainer,
	UncompImage,
	UncompTitle,
	UncompParapraph,
	HQTitle,
	HQContainer,
	LocationCard,
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
			<div>
				<HQTitle>Our headquarters</HQTitle>
				<HQContainer>
					<LocationCard>
						<img src={Logo3} alt="logo" />
						<h1>United Kingdom</h1>
						<p>68 Asfordby Rd</p>
						<p>Alcaston</p>
						<p>SY6 1YA</p>
						<p>+44 1242 918425</p>
					</LocationCard>
					<LocationCard>
						<img src={Logo2} alt="logo" />
						<h1>Canada</h1>
						<p>1528 Eglinton Avenue</p>
						<p>Toronto</p>
						<p>Ontario M4P 1A6</p>
						<p>+1 416 485 2997</p>
					</LocationCard>
					<LocationCard>
						<img src={Logo1} alt="logo" />
						<h1>Australia</h1>
						<p>36 Swanson Street</p>
						<p>Kewell</p>
						<p>Victoria</p>
						<p>+61 4 9928 3629</p>
					</LocationCard>
				</HQContainer>
			</div>
		</div>
	);
};

export default AboutBottom;
