import style from "./BlueBand.module.css"
import shop from "../../data/shop.js"
import ShopItem from "./ShopItem.jsx"

function BlueBand() {
    return (
            <div className={style.fascia_blu}>
                <div className={"boxed "+style.boxed}>
                    {
                        shop.map(item =>    //Per ogni elemento in shop crea un component ShopItem con le props
                                <ShopItem   key={"shop_"+item.id} //Non viene passata come prop - key univoco per map
                                            href={item.title}
                                            src={item.src}
                                            alt={item.alt}
                                            title={item.title}
                                />
                        )
                    }
                </div>
            </div>
    )
}

export default BlueBand;