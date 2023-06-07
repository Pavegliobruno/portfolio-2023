import {useTranslation} from 'react-i18next';
import {Link as ScrollLink} from 'react-scroll';
import StarfieldAnimation from 'src/components/starfield';
import Button from 'src/components/library/Button/Button.component';
import {FaLinkedinIn, FaGithub} from 'react-icons/fa';
import {MdEmail} from 'react-icons/md';
import styles from './Hero.module.scss';

const socialMedia = [
	{
		icon: <MdEmail />,
		url: 'mailto:pavegliobruno@gmail.com',
	},
	{
		icon: <FaGithub />,
		url: 'https://github.com/Pavegliobruno',
	},
	{
		icon: <FaLinkedinIn />,
		url: 'https://www.linkedin.com/in/pavegliobruno/',
	},
];

const Hero = ({starsBackgroundEnabled}) => {
	const [t] = useTranslation('global');

	return (
		<div className={styles['container']}>
			<h1 className={styles['title']}>Bruno Paveglio</h1>
			<h4 className={styles['subtitle']}>{t('hero.role')}</h4>
			<div className={styles['social-media-container']}>
				{socialMedia.map((social, index) => (
					<a
						className={styles['social-media-icon']}
						href={social.url}
						target='_blank'
						rel='noreferrer noopener'
						key={index}
					>
						{social.icon}
					</a>
				))}
			</div>
			<ScrollLink
				className={styles['link']}
				activeClass='active'
				to='about'
				spy={true}
				smooth={true}
				duration={500}
				offset={-90}
			>
				<Button type='alternative'>{t('hero.more')}</Button>
			</ScrollLink>
			{starsBackgroundEnabled && (
				<div className={styles['stars-background']}>
					<StarfieldAnimation
						lineWidth={0.0}
						depth={1000}
						numParticles={350}
						style={{
							position: 'absolute',
							width: '100%',
							height: '100%',
						}}
					/>
				</div>
			)}
		</div>
	);
};

export default Hero;
