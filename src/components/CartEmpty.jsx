import EmptyCart from '../assets/img/empty-cart.png';
import { Link } from 'react-router-dom';

export function CartEmpty() {
    return (
        <>
            <div className="cart cart--empty">
                <h2>Корзина пустая <icon>😕</icon></h2>
                <p>Вероятней всего, вы не заказывали ещё пиццу.
                <br />Для того, чтобы заказать пиццу, перейди на главную страницу.
                </p>
                <img src={EmptyCart} alt="Empty cart" />
                <Link to="/" className="button button--black">
                <span>Вернуться назад</span>
                </Link>
            </div>
        </>
    )
}