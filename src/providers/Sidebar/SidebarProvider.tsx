import React, { FC, useCallback, useState } from "react";
import SidebarContext from "./SidebarContext";

const SidebarProvider: FC = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const open = useCallback(() => {
        setIsOpen(true);
    }, []);

    const onClose = useCallback(() => {
        setIsOpen(false);
    }, []);

    return (
        <SidebarContext.Provider
            value={{
                open,
                isOpen,
                onClose,
            }}
        >
            {children}
        </SidebarContext.Provider>
    );
};

export default SidebarProvider;
