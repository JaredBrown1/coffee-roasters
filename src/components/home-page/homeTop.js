import React from "react";

import {
	CoffeeContainer,
	HeaderContainer,
	HeaderContent,
	Title,
	Paragraph,
	PlanButton,
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
			<CoffeeContainer>
				<div>
					<img src="#" alt="coffee" />
					<h2>Gran Espresso</h2>
					<p>
						Light and flavorful blend with cocoa and black pepper for an intense
						experience
					</p>
				</div>
				<div>
					<img src="#" alt="coffee" />
					<h2>Gran Espresso</h2>
					<p>
						Light and flavorful blend with cocoa and black pepper for an intense
						experience
					</p>
				</div>
				<div>
					<img src="#" alt="coffee" />
					<h2>Gran Espresso</h2>
					<p>
						Light and flavorful blend with cocoa and black pepper for an intense
						experience
					</p>
				</div>
				<div>
					<img src="#" alt="coffee" />
					<h2>Gran Espresso</h2>
					<p>
						Light and flavorful blend with cocoa and black pepper for an intense
						experience
					</p>
				</div>
			</CoffeeContainer>
		</div>
	);
};

export default HomePageTop;
