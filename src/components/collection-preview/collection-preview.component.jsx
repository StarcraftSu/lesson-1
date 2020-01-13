import React from 'react'
import './collection-preview.style.scss'
import CollectionItem from '../collection-item/collection-item.component'

const CollectionPreview = ({title,items}) => (
    <div className="collection-preview">
        <h1 className="title">{title.toUpperCase()}</h1>
        <div className="preview">
            {items //performance concern if the array is getting longer
                .filter((item,idx) => idx<4)
                .map(({id,...rest})=>(
                    <CollectionItem key={id} {...rest}/>
                ))}
        </div>
    </div>
)

export default CollectionPreview