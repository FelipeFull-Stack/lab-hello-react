import icon1 from "../images/icon1.png";
import icon2 from "../images/icon2.png";
import icon3 from "../images/icon3.png";
import icon4 from "../images/icon4.png";
import style from "../Block/style.module.css"


export function Block() {
    return (
        <>
            <div className={style.divPai}>
                <div className={style.divBlock}>
                    <img src={icon1} alt="icon1" />
                    <h2 className={style.subtitulo}>Declarative</h2>
                    <p className={style.paragrafo2}>
                        React makes it<br></br>painless to create<br></br>interactive UIs.
                    </p>
                </div>
                <div className={style.divBlock}>
                    <img src={icon2} alt="icon2" />
                    <h2 className={style.subtitulo}>Components</h2>
                    <p className={style.paragrafo2}>
                        Build encapsulated<br></br>components that<br></br>manage their state.
                    </p>
                </div>
                <div className={style.divBlock}>
                    <img src={icon3} alt="icon3" />
                    <h2 className={style.subtitulo}>Single-Way</h2>
                    <p className={style.paragrafo2}>
                        A set of immutable<br></br>values are passed to<br></br>the component's.
                    </p>
                </div>
                <div className={style.divBlock}>
                    <img src={icon4} alt="icon4" />
                    <h2 className={style.subtitulo}>JSX</h2>
                    <p className={style.paragrafo2}>
                        Statically-typed,<br></br>designed to run on<br></br>modern browsers.
                    </p>
                </div>
            </div>
        </>
    );
}
