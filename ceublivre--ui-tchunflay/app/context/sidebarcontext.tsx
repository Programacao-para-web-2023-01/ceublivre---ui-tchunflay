import { ReactNode, createContext, useState } from "react";

type SidebarContextType = {
    isActive: boolean;
    toggleActive: () => void;
}

const SidebarContextDefaultVal: SidebarContextType = {
    isActive: false,
    toggleActive: ()=> {}
}

export const SidebarContext = createContext<SidebarContextType> (SidebarContextDefaultVal);

type Props = {
    children: ReactNode
}

export function SidebarProvider({children}:Props) {
    const [isActive, setActive] = useState<boolean>(false);

    const toggleActive = () =>{
        setActive(!isActive);
    }

    const value = {
        isActive,
        toggleActive
    }

    return(
        <SidebarContext.Provider value={value}>
            {children}
        </SidebarContext.Provider>
    );
}