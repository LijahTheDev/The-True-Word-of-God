import { ScrollProps } from 'framer'
import dynamic from 'next/dynamic'
import { useContext } from 'react'
import styled from 'styled-components'
import { UIContext } from '../context/UIContext'
import MenuItem from './MenuItem'

const Scroll = dynamic<Partial<ScrollProps>>(() => import('framer').then((framer) => framer.Scroll), { ssr: false })

const MenuScroll = styled(Scroll)`
    height: 100%;
    z-index: 30;
`

const Menu: React.FC = () => {
    const { menuOpen } = useContext(UIContext);

    return (
        <MenuScroll
            initial={{ opacity: "0%", translateY: "100px", scale: 0, }}
            animate={{ opacity: "100%", translateY: "0px", scale: 1 }}
            exit={{ opacity: 0, translateY: "100px", scale: 0 }}
            whileTap={{ scale: 0.95 }}
            position="relative"
            width="100%"
            visible={menuOpen}
        >
            <MenuItem title="The Scriptures" image="/reading.jpg" />
            <MenuItem title="Search" image="/space.jpg" />
        </MenuScroll>
    )
}

export default Menu