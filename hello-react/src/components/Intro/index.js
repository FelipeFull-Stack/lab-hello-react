import logoIronhack from "../images/ironhack-logo-xs.png";
import logoMenu from "../images/menu-top-xs.png";
import style from "./style.module.css";

export function Intro() {
    return (
        <>
            <div className={style.divPai}>
                <div className={style.divMenu}>
                    <img id="imgLogoIronhack" src={logoIronhack} alt="Logo IronHack" ></img>
                    <img id="imgMenu" src={logoMenu} alt="Menu Logo" ></img>
                </div>
                <div className={style.divIntro}>
                    <h1 className="titulo">Say hello to ReactJs</h1>
                    <p className="paragrafo">You will learn how to use<br></br>the most popular frontend library,<br></br>and become a super Ninja developer.</p>
                    <button className={style.containter}>Awesome!</button>
                </div>
            </div>
        </>
    );
}

