import React, {useState} from 'react';
import {useMediaQuery} from 'react-responsive';
import {useTranslation} from 'react-i18next';
import NavbarDesktop from './desktop/NavbarDesktop.component';
import NavbarMobile from './mobile/NavbarMobile.component';
import styles from './Navbar.module.scss';

const Navbar = ({setStarsBackgroundEnabled}) => {
	const [t, i18n] = useTranslation('global');
	const [language, setLanguage] = useState(i18n.language);
	const isMobile = useMediaQuery({maxWidth: 1024});

	const handleChangeLanguage = (lang) => {
		setStarsBackgroundEnabled(false);
		i18n.changeLanguage(lang);
		setLanguage(lang);
		setTimeout(() => {
			setStarsBackgroundEnabled(true);
		}, 100);
	};

	const links = [
		{
			text: t('navbar.about'),
			to: 'about',
			scroll: {mobile: 0, desktop: -100},
		},
		{
			text: t('navbar.projects'),
			to: 'projects',
			scroll: {mobile: 0, desktop: -20},
		},
		{
			text: t('navbar.testimonial'),
			to: 'testimonials',
			scroll: {mobile: 0, desktop: -20},
		},
		{text: t('navbar.contact'), to: 'contact', scroll: {mobile: 0, desktop: 0}},
	];

	return (
		<div className={styles['container']}>
			<a
				className={styles['link']}
				href={`/Paveglio-SoftwareDeveloper-2023-${i18n.language}.pdf`}
				target='_blank'
				rel='noreferrer noopener'
				aria-label='Resume/CV'
			>
				{t('navbar.resume')}
			</a>

			{isMobile ? (
				<NavbarMobile
					links={links}
					isMobile={isMobile}
					language={language}
					handleChangeLanguage={handleChangeLanguage}
				/>
			) : (
				<NavbarDesktop
					links={links}
					isMobile={isMobile}
					language={language}
					handleChangeLanguage={handleChangeLanguage}
				/>
			)}
		</div>
	);
};

export default Navbar;
