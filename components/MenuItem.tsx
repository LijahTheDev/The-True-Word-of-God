import { FrameProps } from 'framer'
import styled from 'styled-components'
import dynamic from 'next/dynamic'
import { IoMdExit } from 'react-icons/io'

const Frame = dynamic<Partial<FrameProps>>(() => import('framer').then((framer) => framer.Frame), { ssr: false })

const MenuItemFrame = styled(Frame)``

const TitleFrame = styled(Frame)`
    background-color: rgba(0,0,0,0.2) !important;
    color: #fff;
    font-size: 2rem;
    font-family: 'Epilogue';
    display: flex !important;
    justify-content: center;
    align-items: center;
    text-align: center;
`

const leftIconMargin = { marginLeft: '10px' }

interface Props {
    image: string;
    title: string;
}

const MenuItem: React.FC<Props> = ({ image, title }) => {
    return (
        <MenuItemFrame width="100%" image={image}>
            <TitleFrame
                width="100%"
                whileHover={{ scale: 1.05 }}
            >
                <h3>{title}</h3>
                <IoMdExit style={leftIconMargin} />
            </TitleFrame>
        </MenuItemFrame>
    )
}

export default MenuItem