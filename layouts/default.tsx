import Head from 'next/head'
import dynamic from 'next/dynamic'
import { FrameProps } from "framer"
import Navbar from '../components/Navbar'

const Frame = dynamic<Partial<FrameProps>>(() => import('framer').then((framer) => framer.Frame), { ssr: false })

interface Props {
    title: string;
}

const Layout: React.FC<Props> = ({ title, children }) => {
    return (
        <div>
            <Head>
                <title>{title} | KJV Holy Bible</title>
                <link rel="icon" href="/favicon.ico" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Epilogue:wght@100;300;400;700&display=swap" rel="stylesheet" />
            </Head>

            <Navbar />

            <main>
                {children}
            </main>

            <footer>
                <Frame position="relative" width="100%" height="auto" backgroundColor="lightgrey">
                    <h2>Footer</h2>
                </Frame>
            </footer>
        </div>
    )
}

export default Layout