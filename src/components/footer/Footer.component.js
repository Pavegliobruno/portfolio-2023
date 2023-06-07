import {RiRegisteredLine} from 'react-icons/ri';
import styles from './Footer.module.scss';

const Footer = () => {
	return (
		<div className={styles['container']}>
			<span>Bruno Paveglio&nbsp;</span>
			<div className={styles['register']}>
				<RiRegisteredLine />
				&nbsp;2023
			</div>
		</div>
	);
};

export default Footer;
