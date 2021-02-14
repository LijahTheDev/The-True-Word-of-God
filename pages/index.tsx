import Heading from '../components/Heading'
import Layout from '../layouts/default'
import dynamic from 'next/dynamic'
import { FrameProps, PageProps } from 'framer'

const Page = dynamic<Partial<PageProps | FrameProps>>(() => import('framer').then((framer) => framer.Page), { ssr: false })
const Frame = dynamic<Partial<FrameProps>>(() => import('framer').then((framer) => framer.Frame), { ssr: false })

export default function Home() {
    return (
        <Layout title="Home">
            <Heading text="New Testament" />
            <Page position="relative" minWidth="100%" height="90vh">
                <Frame>

                </Frame>
            </Page>

            <Heading text="Old Testament" />
            <Page position="relative" minWidth="100%" height="90vh">
                <Frame>

                </Frame>
            </Page>
        </Layout>
    )
}
