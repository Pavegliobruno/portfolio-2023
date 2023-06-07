import React, {useState} from 'react';
import {Link as ScrollLink} from 'react-scroll';
import {MdOutlineMenu, MdClose} from 'react-icons/md';
import Button from 'src/components/library/Button/Button.component';
import styles from './NavbarMobile.module.scss';

const NavbarMobile = ({links, isMobile, language, handleChangeLanguage}) => {
	const [displayMenu, setDisplayMenu] = useState(false);

	return (
		<>
			<Button
				small
				className={styles['alt-button']}
				onClick={() => setDisplayMenu(!displayMenu)}
			>
				<MdOutlineMenu />
			</Button>
			{displayMenu && (
				<div className={styles['mobile-menu']}>
					<Button
						small
						className={styles['alt-button']}
						onClick={() => setDisplayMenu(!displayMenu)}
					>
						<MdClose />
					</Button>

					<div className={styles['links-cont']}>
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
								onClick={() => setDisplayMenu(!displayMenu)}
							>
								{link.text}
							</ScrollLink>
						))}
						{language === 'es' ? (
							<Button
								small
								className={`${styles['alt-button']} ${styles['lenguage-button']}`}
								onClick={() => handleChangeLanguage('en')}
							>
								En
							</Button>
						) : (
							<Button
								small
								className={`${styles['alt-button']} ${styles['lenguage-button']}`}
								onClick={() => handleChangeLanguage('es')}
							>
								Es
							</Button>
						)}
					</div>
				</div>
			)}
		</>
	);
};

export default NavbarMobile;
