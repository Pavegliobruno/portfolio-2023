import styles from './Contact.module.scss';
import {FaLinkedinIn, FaGithub} from 'react-icons/fa';
import {MdEmail} from 'react-icons/md';

const socialMedia = [
	{
		icon: <MdEmail />,
		url: 'mailto:pavegliobruno@gmail.com',
	},
	{
		icon: <FaGithub />,
		url: 'https://github.com/Pavegliobruno',
	},
	{
		icon: <FaLinkedinIn />,
		url: 'https://www.linkedin.com/in/pavegliobruno/',
	},
];

const Contact = () => {
	return (
		<div className={styles['container']}>
			<div className={styles['inner-container']}>
				<div className={styles['social-media-container']}>
					{socialMedia.map((social, index) => (
						<a
							className={styles['social-media-icon']}
							href={social.url}
							target='_blank'
							rel='noreferrer noopener'
							key={index}
						>
							{social.icon}
						</a>
					))}
				</div>
			</div>
		</div>
	);
};

export default Contact;
