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
	StepsContainer,
	StepsCard,
	StepsTitle,
	StepNumber,
	StepCardTitle,
	StepCardParagraph,
	PlanButton,
	ButtonContainer,
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
			<div>
				<StepsTitle>How it works</StepsTitle>
				<StepsContainer>
					<StepsCard>
						<StepNumber>01</StepNumber>
						<StepCardTitle>
							Pick your
							<br /> coffee
						</StepCardTitle>
						<StepCardParagraph>
							Select from our evolving range of artisan
							<br /> coffees. Our beans are ethically sourced
							<br /> and we pay fair prices for them. There are <br /> new
							coffees in all profiles every month
							<br /> for you to try out.
						</StepCardParagraph>
					</StepsCard>
					<StepsCard>
						<StepNumber>02</StepNumber>
						<StepCardTitle>
							Choose the
							<br /> frequency
						</StepCardTitle>
						<StepCardParagraph>
							Customize your oder frequency,
							<br /> quantity, even your roast style and grind
							<br /> type. Pause, skip or cancel your
							<br /> subscription with no commitment
							<br /> through our online portal.
						</StepCardParagraph>
					</StepsCard>
					<StepsCard>
						<StepNumber>03</StepNumber>
						<StepCardTitle>
							Receive and
							<br /> enjoy!
						</StepCardTitle>
						<StepCardParagraph>
							We ship your package within 48 hours,
							<br /> freshly roasted. Sit back and enjoy
							<br /> award-winning world-class coffees
							<br /> curated to provide a distinct tasting experience.
						</StepCardParagraph>
					</StepsCard>
				</StepsContainer>
				<ButtonContainer>
					<PlanButton>Create your plan</PlanButton>
				</ButtonContainer>
			</div>
		</div>
	);
};

export default HomePageBottom;
