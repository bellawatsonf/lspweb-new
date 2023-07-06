import style from "./navbar.module.css";
import Link from "next/link";
export default function Navbar() {
  return (
    <div className="navigation">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-5">
            <img src="https://www.crayon.co/hubfs/Logo.svg" />
          </div>
          <div className="col">
            <ul className={`${style.menuList}`}>
              <li className={style["nav-item"]}>
                {" "}
                <Link href="/">Home</Link>
              </li>
              <li className={style["nav-item"]}>
                {" "}
                <Link href="/sertifikasi">Sertifikasi</Link>
              </li>
              <li className={style["nav-item"]}>
                <Link href="/asesor">Asesor</Link>
              </li>
              <li className={style["nav-item"]}>TUK</li>
              <li className={style["nav-item"]}>
                <Link href="/tentang">Tentang</Link>
              </li>
              <li className={style["nav-item"]}>
                <Link href="/login">Masuk</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
