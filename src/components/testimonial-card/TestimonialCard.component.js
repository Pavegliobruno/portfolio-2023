import Image from 'next/image';
import {useTranslation} from 'react-i18next';
import {ImQuotesLeft, ImQuotesRight} from 'react-icons/im';
import styles from './TestimonialCard.module.scss';

const TestimonialCard = ({quote}) => {
	const [t] = useTranslation('global');

	return (
		<div className={styles['testimonial-container']}>
			<div className={styles['testimonial-card']}>
				<div className={styles['image']}>
					<Image src={quote.img} width={80} height={80} />
				</div>
				<span> {t(`testimonials.${quote.testimonial}`)}</span>
				<span className={styles['name']}>{quote.name}</span>
				<ImQuotesLeft className={`${styles['quote']} ${styles['open']}`} />
				<ImQuotesRight className={`${styles['quote']} ${styles['close']}`} />
			</div>
		</div>
	);
};

export default TestimonialCard;
