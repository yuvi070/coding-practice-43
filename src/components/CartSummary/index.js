// Write your code here
const CartSummary = props => {
  const {sum, cartLength} = props
  return (
    <div className="cart-summary-container">
      <h2 className="color1">
        Order Total: <span className="rs-text">Rs {sum}/-</span>
      </h2>
      <p className="color1">{cartLength} items in cart</p>
      <button className="checkout-button" type="button">
        Checkout
      </button>
    </div>
  )
}

export default CartSummary
