import React, { ReactElement, useState } from 'react'
import { bottomNav } from '../../../controllers/bottomNavController'

const BottomNavigationBar = (): ReactElement => {
    const [activeTab, setActiveTab] = useState<string>('Buy')


    return <ul className="bottomNav">
        {bottomNav.map(({ title, key, icon }: { title: string, key: string, icon: any }) => {
            let props = { className: `${activeTab === title ? "bottomNav__icon bottom__icon--active" : 'bottom__icon'}` };
            return <li key={`${key}`} className={`${activeTab === title ? 'bottomNav__item bottomNav__item--active' : "bottomNav__item "}`}
                onClick={() => setActiveTab(title)}>

                {icon(props)}
                <span className={`${activeTab === title ? 'bottomNav__title bottomNav__title--active' : "bottomNav__title"}`}>
                    {title}
                </span></li>
        })}
    </ul>
}


export { BottomNavigationBar };