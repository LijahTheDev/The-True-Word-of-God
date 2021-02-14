import React, { createContext, useState } from "react";

interface UIState {
    menuOpen: boolean;
    toggleMenu?: () => void;
    closeMenu?: () => void;
}

const initialState = {
    menuOpen: false,
};

export const UIContext = createContext<UIState>(initialState);

export const UIContextProvider: React.FC = ({ children }) => {
    const [state, setState] = useState(initialState);

    const toggleMenu = () => setState({ ...state, menuOpen: !state.menuOpen });

    const closeMenu = () => setState({ ...state, menuOpen: false });

    return (
        <UIContext.Provider value={{ ...state, toggleMenu, closeMenu }}>
            {children}
        </UIContext.Provider>
    );
};
