import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {Link as ScrollLink} from 'react-scroll';
import styles from './Navbar.module.scss';

const Navbar = ({setStarsBackgroundEnabled}) => {
	const [t, i18n] = useTranslation('global');
	const [language, setLanguage] = useState(i18n.language);

	const handleChangeLanguage = (lang) => {
		setStarsBackgroundEnabled(false);
		i18n.changeLanguage(lang);
		setLanguage(lang);
		setTimeout(() => {
			setStarsBackgroundEnabled(true);
		}, 100);
	};

	const links = [
		{text: t('navbar.about'), to: 'about'},
		{text: t('navbar.projects'), to: 'projects'},
		{text: t('navbar.testimonial'), to: 'testimonials'},
		{text: t('navbar.contact'), to: 'contact'},
	];

	return (
		<div className={styles['container']}>
			<a
				className={styles['link']}
				href='/Paveglio-SoftwareDeveloper-2023.pdf'
				target='_blank'
				rel='noreferrer noopener'
				aria-label='Resume/CV'
			>
				{t('navbar.resume')}
			</a>

			{links.map((link, index) => (
				<ScrollLink
					className={styles['link']}
					activeClass='active'
					to={link.to}
					spy={true}
					smooth={true}
					duration={500}
					offset={-80}
					key={index}
				>
					{link.text}
				</ScrollLink>
			))}

			{language === 'es' ? (
				<button
					className={styles['language-button']}
					onClick={() => handleChangeLanguage('en')}
				>
					En
				</button>
			) : (
				<button
					className={styles['language-button']}
					onClick={() => handleChangeLanguage('es')}
				>
					Es
				</button>
			)}
		</div>
	);
};

export default Navbar;
