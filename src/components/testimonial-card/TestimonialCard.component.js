import Image from 'next/image';
import {useTranslation} from 'react-i18next';
import {ImQuotesLeft, ImQuotesRight} from 'react-icons/im';
import styles from './TestimonialCard.module.scss';

const TestimonialCard = ({quote}) => {
	const [t] = useTranslation('global');
	const quoteLength = 390;

	return (
		<div className={styles['testimonial-container']}>
			<div className={styles['testimonial-card']}>
				<div className={styles['image']}>
					<Image src={quote.img} width={80} height={80} />
				</div>
				<span>
					{t(`testimonials.${quote.testimonial}`).slice(0, quoteLength)}
					{t(`testimonials.${quote.testimonial}`).length > quoteLength && (
						<>
							{'... '}
							<a
								className={styles['see-more']}
								href='https://www.linkedin.com/in/pavegliobruno/details/recommendations/'
								target='_blank'
								rel='noreferrer noopener'
							>
								{t(`testimonials.more`)}
							</a>
						</>
					)}
				</span>
				<span className={styles['name']}>{quote.name}</span>
				<ImQuotesLeft className={`${styles['quote']} ${styles['open']}`} />
				<ImQuotesRight className={`${styles['quote']} ${styles['close']}`} />
			</div>
		</div>
	);
};

export default TestimonialCard;
