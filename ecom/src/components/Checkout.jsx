export const Checkout = () => {
    return <main className="main">

        <section className="breadcrumb">
            <ul className="breadcrumb__list flex container">
                <li><a href="index.html" className="breadcrumb__link">Home</a></li>
                <li><span className="breadcrumb__link">{'>'}</span></li>
                <li><span className="breadcrumb__link">Shop</span></li>
                <li><span className="breadcrumb__link">{'>'}</span></li>
                <li><span className="breadcrumb__link">Checkout</span></li>
            </ul>
        </section>


        <section className="checkout section--lg">
            <div className="checkout__container container grid">
                <div className="checkout__group">
                    <h3 className="section__title">Billing Details</h3>
                    <form className="form grid">
                        <input type="text" placeholder="Name" className="form__input" />
                        <input type="text" placeholder="Address" className="form__input" />
                        <input type="text" placeholder="City" className="form__input" />
                        <input type="text" placeholder="Country" className="form__input" />
                        <input type="text" placeholder="Postcode" className="form__input" />
                        <input type="text" placeholder="Phone" className="form__input" />
                        <input type="email" placeholder="Email" className="form__input" />
                        <h3 className="checkout__title">Additional Information</h3>
                        <textarea
                            name=""
                            placeholder="order note"
                            className="form__input textarea"
                        ></textarea>
                    </form>
                </div>
                <div className="checkout__group">
                    <h3 className="section__title">Cart Totals</h3>
                    <table className="order__table">
                        <thead>
                            <tr>
                                <th colspan="2">Products</th>
                                <th>Total</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>
                                    <img
                                        src="./assets/img/product-1-2.jpg"
                                        alt=""
                                        className="order__img"
                                    />
                                </td>
                                <td>
                                    <h3 className="table__title">Yidarton Women Summer Blue</h3>
                                    <p className="table__quantity">x 2</p>
                                </td>
                                <td><span className="table__price">$180.00</span></td>
                            </tr>
                            <tr>
                                <td>
                                    <img
                                        src="./assets/img/product-2-1.jpg"
                                        alt=""
                                        className="order__img"
                                    />
                                </td>
                                <td>
                                    <h3 className="table__title">LDB Moon Summer</h3>
                                    <p className="table__quantity">x 1</p>
                                </td>
                                <td><span className="table__price">$65.00</span></td>
                            </tr>
                            <tr>
                                <td>
                                    <img
                                        src="./assets/img/product-7-1.jpg"
                                        alt=""
                                        className="order__img"
                                    />
                                </td>
                                <td>
                                    <h3 className="table__title">Women Short Sleeve Loose</h3>
                                    <p className="table__quantity">x 2</p>
                                </td>
                                <td><span className="table__price">$35.00</span></td>
                            </tr>
                            <tr>
                                <td><span className="order__subtitle">Subtotal</span></td>
                                <td colspan="2"><span className="table__price">$280.00</span></td>
                            </tr>
                            <tr>
                                <td><span className="order__subtitle">Shipping</span></td>
                                <td colspan="2">
                                    <span className="table__price">Free Shipping</span>
                                </td>
                            </tr>
                            <tr>
                                <td><span className="order__subtitle">Total</span></td>
                                <td colspan="2">
                                    <span className="order__grand-total">$280.00</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="payment__methods">
                        <h3 className="checkout__title payment__title">Payment</h3>
                        <div className="payment__option flex">
                            <input
                                type="radio"
                                name="radio"
                                id="l1"
                                checked
                                className="payment__input"
                            />
                            <label for="l1" className="payment__label"
                            >Direct Bank Transfer</label
                            >
                        </div>
                        <div className="payment__option flex">
                            <input
                                type="radio"
                                name="radio"
                                id="l2"
                                className="payment__input"
                            />
                            <label for="l2" className="payment__label">Check Payment</label>
                        </div>
                        <div className="payment__option flex">
                            <input
                                type="radio"
                                name="radio"
                                id="l3"
                                className="payment__input"
                            />
                            <label for="l3" className="payment__label">Paypal</label>
                        </div>
                    </div>
                    <button className="btn btn--md">Place Order</button>
                </div>
            </div>
        </section>


        <section className="newsletter section">
            <div className="newsletter__container container grid">
                <h3 className="newsletter__title flex">
                    <img
                        src="./assets/img/icon-email.svg"
                        alt=""
                        className="newsletter__icon"
                    />
                    Sign in to Newsletter
                </h3>
                <p className="newsletter__description">
                    ...and receive $25 coupon for first shopping.
                </p>
                <form action="" className="newsletter__form">
                    <input
                        type="text"
                        placeholder="Enter Your Email"
                        className="newsletter__input"
                    />
                    <button type="submit" className="newsletter__btn">Subscribe</button>
                </form>
            </div>
        </section>
    </main>
}   