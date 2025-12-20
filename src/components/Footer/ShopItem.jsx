import style from "./ShopItem.module.css";

function ShopItem(props){
    const {href,src,alt,title} = props;
    return(
            <a className={style.card_shop} href={href}>
                <img src={src} alt={alt} />
                <p>{title}</p>
            </a>
    )
}

export default ShopItem;