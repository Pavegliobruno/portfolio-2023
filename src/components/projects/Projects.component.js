import {useTranslation} from 'react-i18next';
import {projects} from 'src/data/projects';
import Slider from 'src/components/common/slider/Slider';
import ProjectCard from 'src/components/project-card/ProjectCard.component';
import styles from './Projects.module.scss';

const Projects = () => {
	const [t] = useTranslation('global');

	return (
		<div className={styles['container']}>
			<div className={styles['inner-container']}>
				<h2 className={styles['title']}>{t('projects.title')}</h2>
				<div className={styles['projects-container']}>
					<Slider>
						{projects.map((project, index) => (
							<ProjectCard project={project} key={index} />
						))}
					</Slider>
				</div>
			</div>
		</div>
	);
};

export default Projects;
