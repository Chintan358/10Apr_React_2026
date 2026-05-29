export const Auth = () => {
    return <main className="main">

        <section className="breadcrumb">
            <ul className="breadcrumb__list flex container">
                <li><a href="index.html" className="breadcrumb__link">Home</a></li>
                <li><span className="breadcrumb__link">{'>'}</span></li>
                <li><span className="breadcrumb__link">Login / Register</span></li>
            </ul>
        </section>


        <section className="login-register section--lg">
            <div className="login-register__container container grid">
                <div className="login">
                    <h3 className="section__title">Login</h3>
                    <form className="form grid">
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="form__input"
                        />
                        <input
                            type="password"
                            placeholder="Your Password"
                            className="form__input"
                        />
                        <div className="form__btn">
                            <button className="btn">Login</button>
                        </div>
                    </form>
                </div>
                <div className="register">
                    <h3 className="section__title">Create an Account</h3>
                    <form className="form grid">
                        <input
                            type="text"
                            placeholder="Username"
                            className="form__input"
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="form__input"
                        />
                        <input
                            type="password"
                            placeholder="Your Password"
                            className="form__input"
                        />
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            className="form__input"
                        />
                        <div className="form__btn">
                            <button className="btn">Submit & Register</button>
                        </div>
                    </form>
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