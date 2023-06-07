import React, {useState} from 'react';
import {Element} from 'react-scroll';
import Navbar from 'src/components/navbar/Navbar.component';
import Hero from 'src/components/hero/Hero.component';
/* import AboutMe from 'src/components/about-me/AboutMe.component';
import Projects from 'src/components/projects/Projects.component';
import Testimonials from 'src/components/testimonials/Testimonials.component';
import Contact from 'src/components/contact/Contact.component';
import Footer from 'src/components/footer/Footer.component'; */

const index = () => {
	const [starsBackgroundEnabled, setStarsBackgroundEnabled] = useState(true);

	return (
		<div>
			<Navbar setStarsBackgroundEnabled={setStarsBackgroundEnabled} />
			<Hero starsBackgroundEnabled={starsBackgroundEnabled} />
			{/* <Element name='about'>
				<AboutMe />
			</Element>
			<Element name='projects'>
				<Projects />
			</Element>
			<Element name='testimonials'>
				<Testimonials />
			</Element>
			<Element name='contact'>
				<Contact />
			</Element>
			<Footer /> */}
		</div>
	);
};

export default index;
