import Head from 'next/head'
import {useRouter} from "next/router";
import {wrapper} from "../store";
import '/templates/falcon/assets/scss/theme.scss';
import '../styles/globals.css'
import Main from "../components/Main";
import CommonLayout from "../components/layouts/CommonLayout";
import AuthLayout from "../components/layouts/AuthLayout";

function MyApp({ Component, pageProps }) {

	const router = useRouter();

	return (<>
		<Head>
			<title>슈퍼브레인 GC</title>
		</Head>
		<Main>

			{router.pathname.includes("/auth") ?
				<AuthLayout>
					<Component {...pageProps} />
				</AuthLayout>
			:
				<CommonLayout>
					<Component {...pageProps} />
				</CommonLayout>
			}

		</Main>
	</>);

}

export default wrapper.withRedux(MyApp);
