import './reset.scss';
import './globals.scss';
import Header from './header/Header';

export const metadata = {
	title: 'Game review app',
	description: 'Game review app. Made with Strapi and Next 13.',
}

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<main className='App' >
					<Header />
					{children}
				</main>
			</body>
		</html>
	)
}
