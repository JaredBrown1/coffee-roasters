import React from "react";

import BeanLogo from "./styles/icon-coffee-bean.svg";
import GiftLogo from "./styles/icon-gift.svg";
import TruckLogo from "./styles/icon-truck.svg";

import {
	ContainerBackground,
	ChooseTitle,
	ChooseParagraph,
	PerkCardContainer,
	PerkCard,
	PerkCardTitle,
	PerkCardParagraph,
	Icons,
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
						<Icons src={BeanLogo} alt="icon" />
						<PerkCardTitle>Best Quality</PerkCardTitle>
						<PerkCardParagraph>
							Discover an endless variety of the world's
							<br /> best artisan coffee from each
							<br /> of our roasters.
						</PerkCardParagraph>
					</PerkCard>
					<PerkCard>
						<Icons src={GiftLogo} alt="icon" />
						<PerkCardTitle>Exclusive benefits</PerkCardTitle>
						<PerkCardParagraph>
							Special offers and swag when you
							<br /> subscribe, including 30% off your
							<br />
							first shipment
						</PerkCardParagraph>
					</PerkCard>
					<PerkCard>
						<Icons src={TruckLogo} alt="icon" />
						<PerkCardTitle>Free Shipping</PerkCardTitle>
						<PerkCardParagraph>
							We cover the cost and coffee is
							<br /> delivered fast. Peak freshness:
							<br />
							guaranteed.
						</PerkCardParagraph>
					</PerkCard>
				</PerkCardContainer>
			</div>
		</div>
	);
};

export default HomePageBottom;
