import {useTranslation} from 'react-i18next';
import {Carousel} from 'react-responsive-carousel';
import {FaGithub} from 'react-icons/fa';
import {BiGlobe} from 'react-icons/bi';
import styles from './ProjectCard.module.scss';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const ProjectCard = ({project}) => {
	const [t] = useTranslation('global');

	return (
		<div className={styles['project-container']}>
			<div className={styles['project-card']}>
				<div className='imgDiv'>
					<Carousel
						showThumbs={false}
						autoPlay={false}
						showStatus={false}
						infiniteLoop={true}
						renderIndicator={false}
					>
						{project &&
							project.img.map((img, index) => (
								<div className={styles['image']} key={index}>
									<img src={img} />
								</div>
							))}
					</Carousel>
				</div>
				<div className={styles['info-container']}>
					<span className={styles['project-title']}>{project.name}</span>
					<span> {t(`projects.${project.description}`)}</span>
					<div className={styles['links-container']}>
						{project.web && (
							<a href={project.web} target='_blank' rel='noreferrer noopener'>
								<BiGlobe />
							</a>
						)}
						{project.github && (
							<a
								href={project.github}
								target='_blank'
								rel='noreferrer noopener'
							>
								<FaGithub />
							</a>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;
