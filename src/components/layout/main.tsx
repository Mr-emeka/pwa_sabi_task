import React, { FC, ReactElement, ReactNode } from 'react'
import { BottomNavigationBar, TopNavigationBar } from "../../container"


type IProps = {
    children: ReactNode
}

const MainLayout: FC<IProps> = ({ children }): ReactElement => {
    return <div>
        <TopNavigationBar />
        <main>
            {children}
        </main>
        <BottomNavigationBar />
    </div>

}

export { MainLayout };