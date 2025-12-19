function SocialMenu(){
    const social= ["facebook", "periscope", "pinterest", "twitter", "youtube"]
return<>{
    social.map(link=> 
        <a key={link} href={`./${link}`}>
            <img src={`./img/footer-${link}.png`} alt={link} />
        </a>)
}
</>}

export default SocialMenu;