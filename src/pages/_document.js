import Document, {Html, Head, Main, NextScript} from 'next/document';

class MyDocument extends Document {
	render() {
		return (
			<Html>
				<Head>
					<meta charSet='utf-8' />
					<link rel='icon' href='/favicon.png' />
					<meta name='theme-color' content='#000000' />
					<link rel='preconnect' href='https://fonts.googleapis.com' />
					<link
						rel='preconnect'
						href='https://fonts.gstatic.com'
						crossOrigin='anonymous'
					/>
					<meta name='description' content='Portfolio 2023 - Paveglio Bruno' />
					<link rel='apple-touch-icon' href='/logo192.png' />
					<meta property='og:title' content='Paveglio Bruno' />
					<meta property='og:site_name' content='Paveglio Bruno' />
					<meta property='og:url' content='https://www.brunopaveglio.com/' />
					<meta
						property='og:description'
						content='Portfolio 2023 - Paveglio Bruno'
					/>
					<meta property='og:type' content='website' />
					<meta
						property='og:image'
						content='https://bruno-paveglio-2023.vercel.app/og.png'
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
