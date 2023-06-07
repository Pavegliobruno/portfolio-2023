import styles from './Button.module.scss';

const Button = ({children, type, className, small, onClick}) => {
	return (
		<button
			className={`${styles['container']} ${type && styles[type]} ${
				small && styles['small']
			} ${className && className}`}
			onClick={onClick}
		>
			{children}
		</button>
	);
};

export default Button;
