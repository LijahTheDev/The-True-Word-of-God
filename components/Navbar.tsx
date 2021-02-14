import { FrameProps } from 'framer'
import dynamic from 'next/dynamic'
import styled from 'styled-components'
import { CgMenuRight } from 'react-icons/cg';
import Menu from './Menu'
import { useContext } from 'react';
import { UIContext } from '../context/UIContext';

const Frame = dynamic<Partial<FrameProps>>(() => import('framer').then((framer) => framer.Frame), { ssr: false })

const NavFrame = styled(Frame)`
    display: flex !important;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
    background-color: #fff !important;
`

const Text = styled.h1`
    color: #000;
    font-family: "Epilogue";
    font-size: 1rem;
`

const Light = styled.span`
    font-weight: 300;
`

const Bold = styled.span`
    font-weight: 900;
`

const NavButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: 50%;
    padding: .5rem;
    background-color: transparent;
    transition: all 1s ease-in-out;

    &:hover {
        background-color: rgba(0,0,0,0.1);
    }
`

const Navbar: React.FC = () => {
    const { menuOpen, toggleMenu } = useContext(UIContext);

    return (
        <nav>
            <NavFrame position="relative" minWidth="100%" height="70px">
                <Text>
                    <Bold>True Word</Bold><br />
                    <Light>of</Light>{' '}
                    <Bold>God</Bold>
                </Text>

                <NavButton onClick={toggleMenu}>
                    <CgMenuRight size={32} />
                </NavButton>
            </NavFrame>
            <Menu />
        </nav>
    )
}

export default Navbar