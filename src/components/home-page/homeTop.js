import React from "react";

import GranEspresso from "./styles/image-gran-espresso.png";
import Planalto from "./styles/image-planalto.png";
import Piccollo from "./styles/image-piccollo.png";
import Danche from "./styles/image-danche.png";

import {
	CoffeeContainer,
	CoffeeParagraph,
	CoffeeTitle,
	BackgroundTitle,
	HeaderContainer,
	HeaderContent,
	Title,
	Paragraph,
	PlanButton,
	Image,
} from "./styles/homePageTopStyles";

const HomePageTop = () => {
	return (
		<div>
			<HeaderContainer>
				<HeaderContent>
					<Title>
						Great coffee
						<br /> made simple.
					</Title>
					<Paragraph>
						Start your mornings with the world's best coffees. Try our
						<br /> expertly curated artisan coffees from our best roasters
						<br />
						delivered directly to your door, at your schedule.
					</Paragraph>
					<PlanButton>Create Your Plan</PlanButton>
				</HeaderContent>
			</HeaderContainer>
			<BackgroundTitle>our collection</BackgroundTitle>
			<CoffeeContainer>
				<div>
					<Image src={GranEspresso} alt="coffee" />
					<CoffeeTitle>Gran Espresso</CoffeeTitle>
					<CoffeeParagraph>
						Light and flavorful blend with cocoa
						<br /> and black pepper for an intense
						<br /> experience.
					</CoffeeParagraph>
				</div>
				<div>
					<Image src={Planalto} alt="coffee" />
					<CoffeeTitle>Planalto</CoffeeTitle>
					<CoffeeParagraph>
						Brazilian dark roast with rich and
						<br /> velvety body, and hints of fruits and
						<br /> nuts.
					</CoffeeParagraph>
				</div>
				<div>
					<Image src={Piccollo} alt="coffee" />
					<CoffeeTitle>Piccollo</CoffeeTitle>
					<CoffeeParagraph>
						Mild and smooth blend featuring
						<br /> notes of toasted almond and dried
						<br />
						cherry.
					</CoffeeParagraph>
				</div>
				<div>
					<Image src={Danche} alt="coffee" />
					<CoffeeTitle>Danche</CoffeeTitle>
					<CoffeeParagraph>
						Ethiopian hand-harvested blend
						<br /> densely packed with vibrant fruit
						<br />
						notes.
					</CoffeeParagraph>
				</div>
			</CoffeeContainer>
		</div>
	);
};

export default HomePageTop;
