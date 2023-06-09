import {useTranslation} from 'react-i18next';
import Button from '../library/Button/Button.component';
// import Expandible from '../expandible/Expandible.module';
import styles from './AboutMe.module.scss';

const AboutMe = () => {
	const [t, i18n] = useTranslation('global');

	return (
		<div className={styles['container']}>
			<div className={styles['inner-container']}>
				<div className={styles['image-container']}>
					<img src='/profile.png' />
				</div>
				<div className={styles['data-container']}>
					<h2 className={styles['title']}>{t('about.title')}</h2>
					<div className={styles['description']}>
						<p>{t('about.first')}</p>
						<p>{t('about.second')}</p>
						{/* <Expandible
							header={<h4 className={styles['subtitle']}>More about me</h4>}
							body={
								<>
									<p>{t('about.first')}</p>
									<p>{t('about.second')}</p>
								</>
							}
							initialHeight={100}
						/> */}
					</div>
					<a
						href={`/Paveglio-SoftwareDeveloper-2023-${i18n.language}.pdf`}
						target='_blank'
						rel='noreferrer noopener'
						aria-label='Resume/CV'
					>
						<Button>{t('navbar.resume')}</Button>
					</a>
				</div>
			</div>
		</div>
	);
};

export default AboutMe;
