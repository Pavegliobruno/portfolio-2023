import Document, {Html, Head, Main, NextScript} from 'next/document';

class MyDocument extends Document {
	render() {
		return (
			<Html>
				<Head>
					<meta charSet='utf-8' />
					<link rel='icon' href='/favicon.ico' />
					<meta name='theme-color' content='#000000' />
					<link rel='preconnect' href='https://fonts.googleapis.com' />
					<link
						rel='preconnect'
						href='https://fonts.gstatic.com'
						crossOrigin='anonymous'
					/>
					{/*  <meta name="description" content={siteConfig.description} />
          <link rel="apple-touch-icon" href="/logo192.png" />
          <meta property="og:title" content={ogConfig.title} />
          <meta property="og:site_name" content={ogConfig.site_name} />
          <meta property="og:url" content={ogConfig.url[CUSTOM_NODE_ENV]} />
          <meta property="og:description" content={ogConfig.description} />
          <meta property="og:type" content="website" />
          <meta property="og:image" content={`${ogConfig.url[CUSTOM_NODE_ENV]}/${ogConfig.image}`} /> */}
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