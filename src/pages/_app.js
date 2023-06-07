import {useEffect} from 'react';
import i18next from 'i18next';
import {I18nextProvider} from 'react-i18next';
import global_es from 'src/translations/es/global.json';
import global_en from 'src/translations/en/global.json';
import 'src/styles/global.scss';

i18next.init({
	interpolation: {escapeValue: false},
	lng: 'en',
	resources: {
		es: {
			global: global_es,
		},
		en: {
			global: global_en,
		},
	},
});

function MyApp({Component, pageProps}) {
	useEffect(() => {
		document.title = `Bruno Paveglio`;
	}, []);

	return (
		<I18nextProvider i18n={i18next}>
			<Component {...pageProps} />
		</I18nextProvider>
	);
}

export default MyApp;
