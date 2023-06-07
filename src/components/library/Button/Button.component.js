import styles from './Button.module.scss';

const Button = ({children, type}) => {
	return (
		<button className={`${styles['container']} ${styles[`${type}`]}`}>
			{children}
		</button>
	);
};

export default Button;
