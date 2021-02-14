import { FrameProps } from 'framer'
import dynamic from 'next/dynamic'
import styled from 'styled-components'

const Frame = dynamic<Partial<FrameProps>>(() => import('framer').then((framer) => framer.Frame), { ssr: false })

const Container = styled(Frame)`
    display: flex !important;
    justify-content: center;
    align-items: center;
`

const Text = styled.h1`
    color: #333;
    font-family: "Epilogue";
    font-weight: 700;
    text-transform: capitalize;
`

interface Props {
    text: string;
}

const Heading: React.FC<Props> = ({ text }) => {
    return (
        <Container position="relative" minWidth="100%" height="70px" backgroundColor="lightgreen">
            <Text>{text}</Text>
        </Container>
    )
}

export default Heading