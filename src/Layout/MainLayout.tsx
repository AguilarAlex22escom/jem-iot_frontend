import { FC, ReactNode } from 'react';
import Header from './Header';

export const MainLayout: FC<{ children: ReactNode}> = ({children}) => {
    return(
        <>
            <Header />
            {children}
        </>
        
    );
}