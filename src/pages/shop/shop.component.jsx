import React from 'react'
import ShopData from './shopData'
import CollectionPreview from '../../components/collection-preview/collection-preview.component'
class ShopPage extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            collections:ShopData
        }
    }

    render(){
        return (
            <div>
                {
                    this.state.collections.map(({id,...rest})=>{
                        return(
                            <div className="shop-page">
                                <CollectionPreview key={id} {...rest}/>
                            </div>
                        )
                    })
                }
            </div>
        )
    }

}

export default ShopPage