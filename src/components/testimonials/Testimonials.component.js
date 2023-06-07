import {useTranslation} from 'react-i18next';
import {testimonials} from 'src/data/testimonials';
import Slider from 'src/components/common/slider/Slider';
import TestimonialCard from 'src/components/testimonial-card/TestimonialCard.component';
import styles from './Testimonials.module.scss';

const Testimonials = () => {
	const [t] = useTranslation('global');

	return (
		<div className={styles['container']}>
			<div className={styles['inner-container']}>
				<h2 className={styles['title']}>{t('testimonials.title')}</h2>
				<div className={styles['testimonials-container']}>
					<Slider>
						{testimonials.map((quote, index) => (
							<TestimonialCard quote={quote} key={index} />
						))}
					</Slider>
				</div>
			</div>
		</div>
	);
};

export default Testimonials;
