import React,{ useState } from 'react'
import MenuItem from '../menu-item/menu-item.component'
import './directory.style.scss'
import dummyData from './dummyData.json'
const DirectoryMenu = ()=>{
    const [sections,setSections] = useState(dummyData)
    return(
        <div className="directory-menu">
            {
                sections.map(item=>(
                    <MenuItem key={item.id} {...item}/>
                ))
            }
        </div>
    )
}

export default DirectoryMenu