import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../features/modal/modalSlice";


const CartContainer = () => {
 const dispatch = useDispatch();
 const { cartItems, total, amount } = useSelector((store) => store.cart);
 
 if (amount < 1) {
    return(
        <section className="cart">
            <header>
                <h2>Your Bag</h2>
                <h4 className="empty-cart">Is currently empty</h4>
            </header>
        </section>
    );
 }
    return(
        <section className="cart"> 
          <header>
            <h2>Your Bag</h2>
          </header>
          <div>
            {CartItem.map((item) => {
                return <CartItem key={item.id} {...item} />;
            })}
          </div>
          <footer>
            <hr />
            <div className="cart-total">
              <h4>
                total <span>${total.tofixed(2)}</span>
              </h4>
            </div>
            <button className="btn clear-btn" onClick={() => dispatch(openModal)}>
                clear cart
            </button>
          </footer>
        </section>
    );
};

export default CartContainer;