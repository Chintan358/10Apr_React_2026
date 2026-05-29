

export const Shop = () => {


    return <main className="main">
        <section className="breadcrumb">
            <ul className="breadcrumb__list flex container">
                <li><a href="index.html" className="breadcrumb__link">Home</a></li>
                <li><span className="breadcrumb__link">{'>'}</span></li>
                <li><span className="breadcrumb__link">Shop</span></li>
            </ul>
        </section>

        <section className="products container section--lg">
            <p className="total__products">We found <span>688</span> items for you!</p>
            <div className="products__container grid">
                <div className="product__item">
                    <div className="product__banner">
                        <a href="details.html" className="product__images">
                            <img
                                src="assets/img/product-1-1.jpg"
                                alt=""
                                className="product__img default"
                            />
                            <img
                                src="assets/img/product-1-2.jpg"
                                alt=""
                                className="product__img hover"
                            />
                        </a>
                        <div className="product__actions">
                            <a href="#" className="action__btn" aria-label="Quick View">
                                <i className="fi fi-rs-eye"></i>
                            </a>
                            <a
                                href="#"
                                className="action__btn"
                                aria-label="Add to Wishlist"
                            >
                                <i className="fi fi-rs-heart"></i>
                            </a>
                            <a href="#" className="action__btn" aria-label="Compare">
                                <i className="fi fi-rs-shuffle"></i>
                            </a>
                        </div>
                        <div className="product__badge light-pink">Hot</div>
                    </div>
                    <div className="product__content">
                        <span className="product__category">Clothing</span>
                        <a href="details.html">
                            <h3 className="product__title">Colorful Pattern Shirts</h3>
                        </a>
                        <div className="product__rating">
                            <i className="fi fi-rs-star"></i>
                            <i className="fi fi-rs-star"></i>
                            <i className="fi fi-rs-star"></i>
                            <i className="fi fi-rs-star"></i>
                            <i className="fi fi-rs-star"></i>
                        </div>
                        <div className="product__price flex">
                            <span className="new__price">$238.85</span>
                            <span className="old__price">$245.8</span>
                        </div>
                        <a
                            href="#"
                            className="action__btn cart__btn"
                            aria-label="Add To Cart"
                        >
                            <i className="fi fi-rs-shopping-bag-add"></i>
                        </a>
                    </div>
                </div>
                <div className="product__item">
                    <div className="product__banner">
                        <a href="details.html" className="product__images">
                            <img
                                src="assets/img/product-2-1.jpg"
                                alt=""
                                className="product__img default"
                            />
                            <img
                                src="assets/img/product-2-2.jpg"
                                alt=""
                                className="product__img hover"
                            />
                        </a>
                        <div className="product__actions">
                            <a href="#" className="action__btn" aria-label="Quick View">
                                <i className="fi fi-rs-eye"></i>
                            </a>
                            <a
                                href="#"
                                className="action__btn"
                                aria-label="Add to Wishlist"
                            >
                                <i className="fi fi-rs-heart"></i>
                            </a>
                            <a href="#" className="action__btn" aria-label="Compare">
                                <i className="fi fi-rs-shuffle"></i>
                            </a>
                        </div>
                        <div className="product__badge light-green">Hot</div>
                    </div>
                    <div className="product__content">
                        <span className="product__category">Clothing</span>
                        <a href="details.html">
                            <h3 className="product__title">Colorful Pattern Shirts</h3>
                        </a>
                        <div className="product__rating">
                            <i className="fi fi-rs-star"></i>
                            <i className="fi fi-rs-star"></i>
                            <i className="fi fi-rs-star"></i>
                            <i className="fi fi-rs-star"></i>
                            <i className="fi fi-rs-star"></i>
                        </div>
                        <div className="product__price flex">
                            <span className="new__price">$238.85</span>
                            <span className="old__price">$245.8</span>
                        </div>
                        <a
                            href="#"
                            className="action__btn cart__btn"
                            aria-label="Add To Cart"
                        >
                            <i className="fi fi-rs-shopping-bag-add"></i>
                        </a>
                    </div>
                </div>
                <div className="product__item">
                    <div className="product__banner">
                        <a href="details.html" className="product__images">
                            <img
                                src="assets/img/product-3-1.jpg"
                                alt=""
                                className="product__img default"
                            />
                            <img
                                src="assets/img/product-3-2.jpg"
                                alt=""
                                className="product__img hover"
                            />
                        </a>
                        <div className="product__actions">
                            <a href="#" className="action__btn" aria-label="Quick View">
                                <i className="fi fi-rs-eye"></i>
                            </a>
                            <a
                                href="#"
                                className="action__btn"
                                aria-label="Add to Wishlist"
                            >
                                <i className="fi fi-rs-heart"></i>
                            </a>
                            <a href="#" className="action__btn" aria-label="Compare">
                                <i className="fi fi-rs-shuffle"></i>
                            </a>
                        </div>
                        <div className="product__badge light-orange">Hot</div>
                    </div>
                    <div className="product__content">
                        <span className="product__category">Clothing</span>
                        <a href="details.html">
                            <h3 className="product__title">Colorful Pattern Shirts</h3>
                        </a>
                        <div className="product__rating">
                            <i className="fi fi-rs-star"></i>
                            <i className="fi fi-rs-star"></i>
                            <i className="fi fi-rs-star"></i>
                            <i className="fi fi-rs-star"></i>
                            <i className="fi fi-rs-star"></i>
                        </div>
                        <div className="product__price flex">
                            <span className="new__price">$238.85</span>
                            <span className="old__price">$245.8</span>
                        </div>
                        <a
                            href="#"
                            className="action__btn cart__btn"
                            aria-label="Add To Cart"
                        >
                            <i className="fi fi-rs-shopping-bag-add"></i>
                        </a>
                    </div>
                </div>
                <div className="product__item">
                    <div className="product__banner">
                        <a href="details.html" className="product__images">
                            <img
                                src="assets/img/product-4-1.jpg"
                                alt=""
                                className="product__img default"
                            />
                            <img
                                src="assets/img/product-4-2.jpg"
                                alt=""
                                className="product__img hover"
                            />
                        </a>
                        <div className="product__actions">
                            <a href="#" className="action__btn" aria-label="Quick View">
                                <i className="fi fi-rs-eye"></i>
                            </a>
                            <a
                                href="#"
                                className="action__btn"
                                aria-label="Add to Wishlist"
                            >
                                <i className="fi fi-rs-heart"></i>
                            </a>
                            <a href="#" className="action__btn" aria-label="Compare">
                                <i className="fi fi-rs-shuffle"></i>
                            </a>
                        </div>
                        <div className="product__badge light-blue">Hot</div>
                    </div>
                    <div className="product__content">
                        <span className="product__category">Clothing</span>
                        <a href="details.html">
                            <h3 className="product__title">Colorful Pattern Shirts</h3>
                        </a>
                        <div className="product__rating">
                            <i className="fi fi-rs-star"></i>
                            <i className="fi fi-rs-star"></i>
                            <i className="fi fi-rs-star"></i>
                            <i className="fi fi-rs-star"></i>
                            <i className="fi fi-rs-star"></i>
                        </div>
                        <div className="product__price flex">
                            <span className="new__price">$238.85</span>
                            <span className="old__price">$245.8</span>
                        </div>
                        <a
                            href="#"
                            className="action__btn cart__btn"
                            aria-label="Add To Cart"
                        >
                            <i className="fi fi-rs-shopping-bag-add"></i>
                        </a>
                    </div>
                </div>
                <div className="product__item">
                    <div className="product__banner">
                        <a href="details.html" className="product__images">
                            <img
                                src="assets/img/product-5-1.jpg"
                                alt=""
                                className="product__img default"
                            />
                            <img
                                src="assets/img/product-5-2.jpg"
                                alt=""
                                className="product__img hover"
                            />
                        </a>
                        <div className="product__actions">
                            <a href="#" className="action__btn" aria-label="Quick View">
                                <i className="fi fi-rs-eye"></i>
                            </a>
                            <a
                                href="#"
                                className="action__btn"
                                aria-label="Add to Wishlist"
                            >
                                <i className="fi fi-rs-heart"></i>
                            </a>
                            <a href="#" className="action__btn" aria-label="Compare">
                                <i className="fi fi-rs-shuffle"></i>
                            </a>
                        </div>
                        <div className="product__badge light-blue">-30%</div>
                    </div>
                    <div className="product__content">
                        <span className="product__category">Clothing</span>
                        <a href="details.html">
                            <h3 className="product__title">Colorful Pattern Shirts</h3>
                        </a>
                        <div className="product__rating">
                            <i className="fi fi-rs-star"></i>
                            <i className="fi fi-rs-star"></i>
                            <i className="fi fi-rs-star"></i>
                            <i className="fi fi-rs-star"></i>
                            <i className="fi fi-rs-star"></i>
                        </div>
                        <div className="product__price flex">
                            <span className="new__price">$238.85</span>
                            <span className="old__price">$245.8</span>
                        </div>
                        <a
                            href="#"
                            className="action__btn cart__btn"
                            aria-label="Add To Cart"
                        >
                            <i className="fi fi-rs-shopping-bag-add"></i>
                        </a>
                    </div>
                </div>
                <div className="product__item">
                    <div className="product__banner">
                        <a href="details.html" className="product__images">
                            <img
                                src="assets/img/product-6-1.jpg"
                                alt=""
                                className="product__img default"
                            />
                            <img
                                src="assets/img/product-6-2.jpg"
                                alt=""
                                className="product__img hover"
                            />
                        </a>
                        <div className="product__actions">
                            <a href="#" className="action__btn" aria-label="Quick View">
                                <i className="fi fi-rs-eye"></i>
                            </a>
                            <a
                                href="#"
                                className="action__btn"
                                aria-label="Add to Wishlist"
                            >
                                <i className="fi fi-rs-heart"></i>
                            </a>
                            <a href="#" className="action__btn" aria-label="Compare">
                                <i className="fi fi-rs-shuffle"></i>
                            </a>
                        </div>
                        <div className="product__badge light-blue">-22%</div>
                    </div>
                    <div className="product__content">
                        <span className="product__category">Clothing</span>
                        <a href="details.html">
                            <h3 className="product__title">Colorful Pattern Shirts</h3>
                        </a>
                        <div className="product__rating">
                            <i className="fi fi-rs-star"></i>
                            <i className="fi fi-rs-star"></i>
                            <i className="fi fi-rs-star"></i>
                            <i className="fi fi-rs-star"></i>
                            <i className="fi fi-rs-star"></i>
                        </div>
                        <div className="product__price flex">
                            <span className="new__price">$238.85</span>
                            <span className="old__price">$245.8</span>
                        </div>
                        <a
                            href="#"
                            className="action__btn cart__btn"
                            aria-label="Add To Cart"
                        >
                            <i className="fi fi-rs-shopping-bag-add"></i>
                        </a>
                    </div>
                </div>
                <div className="product__item">
                    <div className="product__banner">
                        <a href="details.html" className="product__images">
                            <img
                                src="assets/img/product-7-1.jpg"
                                alt=""
                                className="product__img default"
                            />
                            <img
                                src="assets/img/product-7-2.jpg"
                                alt=""
                                className="product__img hover"
                            />
                        </a>
                        <div className="product__actions">
                            <a href="#" className="action__btn" aria-label="Quick View">
                                <i className="fi fi-rs-eye"></i>
                            </a>
                            <a
                                href="#"
                                className="action__btn"
                                aria-label="Add to Wishlist"
                            >
                                <i className="fi fi-rs-heart"></i>
                            </a>
                            <a href="#" className="action__btn" aria-label="Compare">
                                <i className="fi fi-rs-shuffle"></i>
                            </a>
                        </div>
                        <div className="product__badge light-green">-22%</div>
                    </div>
                    <div className="product__content">
                        <span className="product__category">Clothing</span>
                        <a href="details.html">
                            <h3 className="product__title">Colorful Pattern Shirts</h3>
                        </a>
                        <div className="product__rating">
                            <i className="fi fi-rs-star"></i>
                            <i className="fi fi-rs-star"></i>
                            <i className="fi fi-rs-star"></i>
                            <i className="fi fi-rs-star"></i>
                            <i className="fi fi-rs-star"></i>
                        </div>
                        <div className="product__price flex">
                            <span className="new__price">$238.85</span>
                            <span className="old__price">$245.8</span>
                        </div>
                        <a
                            href="#"
                            className="action__btn cart__btn"
                            aria-label="Add To Cart"
                        >
                            <i className="fi fi-rs-shopping-bag-add"></i>
                        </a>
                    </div>
                </div>
                <div className="product__item">
                    <div className="product__banner">
                        <a href="details.html" className="product__images">
                            <img
                                src="assets/img/product-8-1.jpg"
                                alt=""
                                className="product__img default"
                            />
                            <img
                                src="assets/img/product-8-2.jpg"
                                alt=""
                                className="product__img hover"
                            />
                        </a>
                        <div className="product__actions">
                            <a href="#" className="action__btn" aria-label="Quick View">
                                <i className="fi fi-rs-eye"></i>
                            </a>
                            <a
                                href="#"
                                className="action__btn"
                                aria-label="Add to Wishlist"
                            >
                                <i className="fi fi-rs-heart"></i>
                            </a>
                            <a href="#" className="action__btn" aria-label="Compare">
                                <i className="fi fi-rs-shuffle"></i>
                            </a>
                        </div>
                    </div>
                    <div className="product__content">
                        <span className="product__category">Clothing</span>
                        <a href="details.html">
                            <h3 className="product__title">Colorful Pattern Shirts</h3>
                        </a>
                        <div className="product__rating">
                            <i className="fi fi-rs-star"></i>
                            <i className="fi fi-rs-star"></i>
                            <i className="fi fi-rs-star"></i>
                            <i className="fi fi-rs-star"></i>
                            <i className="fi fi-rs-star"></i>
                        </div>
                        <div className="product__price flex">
                            <span className="new__price">$238.85</span>
                            <span className="old__price">$245.8</span>
                        </div>
                        <a
                            href="#"
                            className="action__btn cart__btn"
                            aria-label="Add To Cart"
                        >
                            <i className="fi fi-rs-shopping-bag-add"></i>
                        </a>
                    </div>
                </div>
                <div className="product__item">
                    <div className="product__banner">
                        <a href="details.html" className="product__images">
                            <img
                                src="assets/img/product-10-1.jpg"
                                alt=""
                                className="product__img default"
                            />
                            <img
                                src="assets/img/product-10-2.jpg"
                                alt=""
                                className="product__img hover"
                            />
                        </a>
                        <div className="product__actions">
                            <a href="#" className="action__btn" aria-label="Quick View">
                                <i className="fi fi-rs-eye"></i>
                            </a>
                            <a
                                href="#"
                                className="action__btn"
                                aria-label="Add to Wishlist"
                            >
                                <i className="fi fi-rs-heart"></i>
                            </a>
                            <a href="#" className="action__btn" aria-label="Compare">
                                <i className="fi fi-rs-shuffle"></i>
                            </a>
                        </div>
                        <div className="product__badge light-blue">-30%</div>
                    </div>
                    <div className="product__content">
                        <span className="product__category">Clothing</span>
                        <a href="details.html">
                            <h3 className="product__title">Colorful Pattern Shirts</h3>
                        </a>
                        <div className="product__rating">
                            <i className="fi fi-rs-star"></i>
                            <i className="fi fi-rs-star"></i>
                            <i className="fi fi-rs-star"></i>
                            <i className="fi fi-rs-star"></i>
                            <i className="fi fi-rs-star"></i>
                        </div>
                        <div className="product__price flex">
                            <span className="new__price">$238.85</span>
                            <span className="old__price">$245.8</span>
                        </div>
                        <a
                            href="#"
                            className="action__btn cart__btn"
                            aria-label="Add To Cart"
                        >
                            <i className="fi fi-rs-shopping-bag-add"></i>
                        </a>
                    </div>
                </div>
                <div className="product__item">
                    <div className="product__banner">
                        <a href="details.html" className="product__images">
                            <img
                                src="assets/img/product-11-1.jpg"
                                alt=""
                                className="product__img default"
                            />
                            <img
                                src="assets/img/product-11-2.jpg"
                                alt=""
                                className="product__img hover"
                            />
                        </a>
                        <div className="product__actions">
                            <a href="#" className="action__btn" aria-label="Quick View">
                                <i className="fi fi-rs-eye"></i>
                            </a>
                            <a
                                href="#"
                                className="action__btn"
                                aria-label="Add to Wishlist"
                            >
                                <i className="fi fi-rs-heart"></i>
                            </a>
                            <a href="#" className="action__btn" aria-label="Compare">
                                <i className="fi fi-rs-shuffle"></i>
                            </a>
                        </div>
                        <div className="product__badge light-blue">-22%</div>
                    </div>
                    <div className="product__content">
                        <span className="product__category">Clothing</span>
                        <a href="details.html">
                            <h3 className="product__title">Colorful Pattern Shirts</h3>
                        </a>
                        <div className="product__rating">
                            <i className="fi fi-rs-star"></i>
                            <i className="fi fi-rs-star"></i>
                            <i className="fi fi-rs-star"></i>
                            <i className="fi fi-rs-star"></i>
                            <i className="fi fi-rs-star"></i>
                        </div>
                        <div className="product__price flex">
                            <span className="new__price">$238.85</span>
                            <span className="old__price">$245.8</span>
                        </div>
                        <a
                            href="#"
                            className="action__btn cart__btn"
                            aria-label="Add To Cart"
                        >
                            <i className="fi fi-rs-shopping-bag-add"></i>
                        </a>
                    </div>
                </div>
                <div className="product__item">
                    <div className="product__banner">
                        <a href="details.html" className="product__images">
                            <img
                                src="assets/img/product-4-1.jpg"
                                alt=""
                                className="product__img default"
                            />
                            <img
                                src="assets/img/product-4-2.jpg"
                                alt=""
                                className="product__img hover"
                            />
                        </a>
                        <div className="product__actions">
                            <a href="#" className="action__btn" aria-label="Quick View">
                                <i className="fi fi-rs-eye"></i>
                            </a>
                            <a
                                href="#"
                                className="action__btn"
                                aria-label="Add to Wishlist"
                            >
                                <i className="fi fi-rs-heart"></i>
                            </a>
                            <a href="#" className="action__btn" aria-label="Compare">
                                <i className="fi fi-rs-shuffle"></i>
                            </a>
                        </div>
                        <div className="product__badge light-green">-22%</div>
                    </div>
                    <div className="product__content">
                        <span className="product__category">Clothing</span>
                        <a href="details.html">
                            <h3 className="product__title">Colorful Pattern Shirts</h3>
                        </a>
                        <div className="product__rating">
                            <i className="fi fi-rs-star"></i>
                            <i className="fi fi-rs-star"></i>
                            <i className="fi fi-rs-star"></i>
                            <i className="fi fi-rs-star"></i>
                            <i className="fi fi-rs-star"></i>
                        </div>
                        <div className="product__price flex">
                            <span className="new__price">$238.85</span>
                            <span className="old__price">$245.8</span>
                        </div>
                        <a
                            href="#"
                            className="action__btn cart__btn"
                            aria-label="Add To Cart"
                        >
                            <i className="fi fi-rs-shopping-bag-add"></i>
                        </a>
                    </div>
                </div>
                <div className="product__item">
                    <div className="product__banner">
                        <a href="details.html" className="product__images">
                            <img
                                src="assets/img/product-12-1.jpg"
                                alt=""
                                className="product__img default"
                            />
                            <img
                                src="assets/img/product-12-2.jpg"
                                alt=""
                                className="product__img hover"
                            />
                        </a>
                        <div className="product__actions">
                            <a href="#" className="action__btn" aria-label="Quick View">
                                <i className="fi fi-rs-eye"></i>
                            </a>
                            <a
                                href="#"
                                className="action__btn"
                                aria-label="Add to Wishlist"
                            >
                                <i className="fi fi-rs-heart"></i>
                            </a>
                            <a href="#" className="action__btn" aria-label="Compare">
                                <i className="fi fi-rs-shuffle"></i>
                            </a>
                        </div>
                    </div>
                    <div className="product__content">
                        <span className="product__category">Clothing</span>
                        <a href="details.html">
                            <h3 className="product__title">Colorful Pattern Shirts</h3>
                        </a>
                        <div className="product__rating">
                            <i className="fi fi-rs-star"></i>
                            <i className="fi fi-rs-star"></i>
                            <i className="fi fi-rs-star"></i>
                            <i className="fi fi-rs-star"></i>
                            <i className="fi fi-rs-star"></i>
                        </div>
                        <div className="product__price flex">
                            <span className="new__price">$238.85</span>
                            <span className="old__price">$245.8</span>
                        </div>
                        <a
                            href="#"
                            className="action__btn cart__btn"
                            aria-label="Add To Cart"
                        >
                            <i className="fi fi-rs-shopping-bag-add"></i>
                        </a>
                    </div>
                </div>
            </div>
            <ul className="pagination">
                <li><a href="#" className="pagination__link active">01</a></li>
                <li><a href="#" className="pagination__link">02</a></li>
                <li><a href="#" className="pagination__link">03</a></li>
                <li><a href="#" className="pagination__link">...</a></li>
                <li><a href="#" className="pagination__link">16</a></li>
                <li><a href="#" className="pagination__link icon">
                    <i className="fi-rs-angle-double-small-right"></i>
                </a></li>
            </ul>
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