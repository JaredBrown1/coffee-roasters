import React from "react";

import {
	ContainerBackground,
	ChooseTitle,
	ChooseParagraph,
	PerkCardContainer,
	PerkCard,
} from "./styles/homePageBottomStyles";

const HomePageBottom = () => {
	return (
		<div>
			<div>
				<ContainerBackground>
					<ChooseTitle>Why Choose us?</ChooseTitle>
					<ChooseParagraph>
						A large part of our role is choosing which particular coffees will
						be featured
						<br /> in our range. This means working closely with the best coffee
						growers to give
						<br /> you a more impactful experience on every level.
					</ChooseParagraph>
				</ContainerBackground>
				<PerkCardContainer>
					<PerkCard>
						<h2>Best Quality</h2>
						<p>
							Discover an endless variety of the world's best artisan coffee
							from each of our roasters.
						</p>
					</PerkCard>
					<PerkCard>
						<h2>Exclusive benefits</h2>
						<p>
							Special offers and swag when you subscribe, including 30% off you
							first shipment
						</p>
					</PerkCard>
					<PerkCard>
						<h2>Free Shipping</h2>
						<p>
							We cover the cost and coffee is delivered fast. Peak freshness:
							guaranteed.
						</p>
					</PerkCard>
				</PerkCardContainer>
			</div>
		</div>
	);
};

export default HomePageBottom;
