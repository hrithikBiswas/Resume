import { createContext, useState } from 'react';
import { ThemeProvider as StyledProvider } from 'styled-components';

export const Context = createContext();

const ContextProvider = ({ children }) => {
    const [navTextName, setNavTextName] = useState('');
    const [rightSideModal, setRightSideModal] = useState(false);
    const [navMenu, setNavMenu] = useState(false);
    const navList = ['home', 'about', 'resume', 'work', 'blog', 'contact'];

    const getNavTextName = (navName) => {
        return navList.filter((item) => item === navName);
    };

    const showNavMenuHandle = (showMenu) => setNavMenu(showMenu);
    const showRightSide = () => setRightSideModal(!rightSideModal);

    return (
        <Context.Provider
            value={{
                navTextName,
                setNavTextName,
                getNavTextName,
                navMenu,
                showNavMenuHandle,
                showRightSide,
                rightSideModal,
            }}
        >
            <StyledProvider
                theme={{ navTextName, navMenu, showRightSide, rightSideModal }}
            >
                {children}
            </StyledProvider>
        </Context.Provider>
    );
};

export const ThemeConsumer = Context.Consumer;
export default ContextProvider;
