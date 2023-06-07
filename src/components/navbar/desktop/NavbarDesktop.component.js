import {Link as ScrollLink} from 'react-scroll';
import Button from 'src/components/library/Button/Button.component';
import styles from './NavbarDesktop.module.scss';

const NavbarDesktop = ({links, isMobile, language, handleChangeLanguage}) => {
	return (
		<>
			{links.map((link, index) => (
				<ScrollLink
					className={styles['link']}
					activeClass='active'
					to={link.to}
					spy={true}
					smooth={true}
					duration={500}
					offset={link.scroll[isMobile ? 'mobile' : 'desktop']}
					key={index}
				>
					{link.text}
				</ScrollLink>
			))}

			{language === 'es' ? (
				<Button
					small
					className={styles['alt-button']}
					onClick={() => handleChangeLanguage('en')}
				>
					En
				</Button>
			) : (
				<Button
					small
					className={styles['alt-button']}
					onClick={() => handleChangeLanguage('es')}
				>
					Es
				</Button>
			)}
		</>
	);
};

export default NavbarDesktop;
