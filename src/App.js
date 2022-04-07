import LeftSide from './pages/leftSide/LeftSide';
import Main from './pages/main/Main';
import RightSide from './pages/rightSide/RightSide';
import styled from 'styled-components';
import { Context } from './context/context';
import { useContext } from 'react';

function App() {
    const { showNavMenuHandle, navMenu, rightSideModal, showRightSide } =
        useContext(Context);

    return (
        <>
            <Overlay></Overlay>
            <Container>
                <ToogleButton onClick={() => showNavMenuHandle(!navMenu)}>
                    {navMenu === true ? (
                        <img src="../images/times.svg" alt="menu" />
                    ) : (
                        <img src="../images/menu.svg" alt="times" />
                    )}
                </ToogleButton>
                <ToogleButton onClick={showRightSide}>
                    {rightSideModal === true ? (
                        <img src="../images/times.svg" alt="menu" />
                    ) : (
                        <img src="../images/globe.svg" alt="times" />
                    )}
                </ToogleButton>
                <LeftSide />
                <Main />
                <RightSide />
            </Container>
        </>
    );
}

export default App;

const Container = styled.div`
    position: relative;
    display: flex;
    border-radius: 1.2rem;
    column-gap: 1.2rem;
    max-width: 90vw;
    max-height: 80vh;
    min-height: 80vh;
    overflow-y: auto;
    margin: auto;
    top: 10vh;
    overflow-y: hidden;
    transition: all 0.4s ease;
    overflow: hidden;

    @media (max-width: 992px) {
        max-width: 90vw;
        max-height: 95vh;
        min-height: 95vh;
        top: 2.55vh;
    }
`;

const ToogleButton = styled.button`
    position: absolute;
    right: 0.8rem;
    top: 0.8rem;
    background-color: #e5e7ed;
    border: none;
    padding: 6px 10px;
    border-radius: 12px;
    z-index: 1000;
    display: none;

    &:nth-child(2) {
        top: 60px;
    }

    @media (max-width: 992px) {
        display: block;
    }
`;
const Overlay = styled.div`
    display: none;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.25);
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 100;

    @media (max-width: 992px) {
        display: ${({ theme }) =>
            theme.navMenu === true || theme.rightSideModal === true
                ? 'block'
                : 'none'};
    }
`;
