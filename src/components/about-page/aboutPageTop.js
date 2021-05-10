import React from "react";

import {
	TopContainer,
	AboutTitle,
	AboutParagraph,
} from "./styles/aboutPageTopStyles";

const AboutTop = () => {
	return (
		<div>
			<TopContainer>
				<AboutTitle>About Us</AboutTitle>
				<AboutParagraph>
					Coffeeroasters began its journey of exotic discovery in 1999,
					<br />
					highlighting stories of coffee from around the world. We have
					<br /> since been dedicated to bring the perfect cup - from bean to
					<br /> brew - in every shipment.
				</AboutParagraph>
			</TopContainer>
			<div>
				<div>Picture here</div>
				<div>
					<h1>Our commitment</h1>
					<p>
						We're built on a simple mission and a commitment to doing good along
						the
						<br /> way. We want to make it easy for you to discover and brew the
						world's best
						<br /> coffee at home. It all starts at the source. To locate the
						specific lots we want
						<br /> to purchase, we travel nearly 60 days a year trying to
						understand the
						<br /> challenges and opportunities in each of these places. We
						collaborate with
						<br /> exceptional coffee growers and empower a global community of
						farmers
						<br /> through with well above fair-trade benchamarks. We also offer
						training, support
						<br /> farm community initiatives, and invest in coffee plance
						science. Curating only
						<br /> the finest blends, we roast each lot to highlight tasting
						profiles distinctive to
						<br /> their native growing region.
					</p>
				</div>
			</div>
		</div>
	);
};

export default AboutTop;
