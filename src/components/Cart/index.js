import Header from '../Header'
import CartListView from '../CartListView'

import CartContext from '../../context/CartContext'
import EmptyCartView from '../EmptyCartView'

import './index.css'

const Cart = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList, removeAllCartItems} = value
      const showEmptyView = cartList.length === 0
      // TODO: Update the functionality to remove all the items in the cart
      let sum = 0
      cartList.forEach(element => {
        sum += element.quantity * element.price
      })
      return (
        <>
          <Header />
          <div className="cart-container">
            {showEmptyView ? (
              <EmptyCartView />
            ) : (
              <div className="cart-content-container">
                <h1 className="cart-heading">My Cart</h1>
                <h3 onClick={removeAllCartItems} className="remove-all-button">
                  Remove all
                </h3>
                <CartListView />
                <div className="cart-summary-container">
                  <h2 className="color1">
                    Order Total: <span className="rs-text">Rs {sum}/-</span>
                  </h2>
                  <p className="color1">{cartList.length} items in cart</p>
                  <button className="checkout-button" type="button">
                    Checkout
                  </button>
                </div>
                {/* TODO: Add your code for Cart Summary here */}
              </div>
            )}
          </div>
        </>
      )
    }}
  </CartContext.Consumer>
)
export default Cart
