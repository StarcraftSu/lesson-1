import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import CartItem from '../cart-item/cart-item.component'
import { createStructuredSelector } from 'reselect'
import { selectCartItems } from '../../redux/cart/cart.selectors'
import { toggleCartHidden } from '../../redux/cart/cart.actions'
import CustomButton from '../button/button.component'

import  './cart-dropdown.styles.scss'

const CartDropdown = ({cartItems,history, dispatch})=>(
    <div className='cart-dropdown'>
        <div className='cart-itmes'>
            {
                cartItems.length
                ?
                (
                    cartItems.map(item=>(
                        <CartItem key={item.id} item={item}/>
                    ))
                )
                :
                <span className='empty-message'>Your cart is empty</span>
            }
        </div>
        <CustomButton onClick={
            () => {
                history.push('/checkout')
                dispatch(toggleCartHidden())
            }
        }>GO TO CHECKOUT</CustomButton>
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems:selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown)) //如果不提供conne ct的第二个参数，connect会把dispatch传递给组件