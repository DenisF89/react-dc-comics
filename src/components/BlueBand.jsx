import style from "./BlueBand.module.css"

function BlueBand() {
    return (
        <>
            <div className={style.fascia_blu}>
                <div className={style.boxed}>
                    <div className={style.card_shop}>
                        <img src="/img/buy-comics-digital-comics.png" alt="" />
                        <p>DIGITAL COMICS</p>
                    </div>
                    <div className={style.card_shop}>
                        <img src="/img/buy-comics-merchandise.png" alt="" />
                        <p>DC MERCHANDISE</p>
                    </div>
                    <div className={style.card_shop}>
                        <img src="/img/buy-comics-subscriptions.png" alt="" />
                        <p>SUBSCRIPTION</p>
                    </div>
                    <div className={style.card_shop}>
                        <img src="/img/buy-comics-shop-locator.png" alt="" />
                        <p>COMIC SHOP LOCATOR</p>
                    </div>
                    <div className={style.card_shop}>
                        <img src="/img/buy-dc-power-visa.svg" alt="" />
                        <p>DC POWER VISA</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BlueBand;