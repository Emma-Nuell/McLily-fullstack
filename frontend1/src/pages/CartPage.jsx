import styled from "styled-components"
import { useCartContext } from "../context/cart-context"
import { Link } from "react-router-dom"
import { CartContent, PageHero } from "../components"

const CartPage = () => {
  const { cart } = useCartContext()
  if(cart.length < 1) {
    return (
      <Wrapper
        className='page-100'
        style={{ height: "100vh", background: "#fcfcfc" }}
      >
        <div className='empty'>
          <h2>Your cart is empty</h2>
          <Link to='/products' className='btn'>
            Fill it
          </Link>
        </div>
      </Wrapper>
    );
  }
  return (
    <main style={{minHeight: "100vh", background: "#fcfcfc"}}>
      <Wrapper>
        <CartContent />
      </Wrapper>
    </main>
  )
}

const Wrapper = styled.main`
  .empty{
text-align: center;
h2 {
margin-bottom: 1rem;
}
}
`
export default CartPage