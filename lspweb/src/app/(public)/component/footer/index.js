import styles from "./footer.module.css";
import { Typography } from "@mui/material";
export default function Footer() {
  return (
    <div className={styles["footer-box"]}>
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <img src="https://www.crayon.co/hubfs/Horizontal_4C_WHTWordmark-1.svg" />
          </div>
          <div className="col-lg-9">
            <div className="row">
              <div className="col-lg-3">
                {" "}
                <ul>
                  <li>Gathering Intel</li>
                  <li>Gathering Intel</li>
                  <li>Gathering Intel</li>
                  <li>Gathering Intel</li>
                  <li>Gathering Intel</li>
                  <li>Gathering Intel</li>
                </ul>
              </div>
              <div className="col-lg-3">
                {" "}
                <ul>
                  <li>Gathering Intel</li>
                  <li>Gathering Intel</li>
                  <li>Gathering Intel</li>
                  <li>Gathering Intel</li>
                  <li>Gathering Intel</li>
                  <li>Gathering Intel</li>
                </ul>
              </div>
              <div className="col-lg-3">
                {" "}
                <ul>
                  <li>Gathering Intel</li>
                  <li>Gathering Intel</li>
                  <li>Gathering Intel</li>
                  <li>Gathering Intel</li>
                  <li>Gathering Intel</li>
                  <li>Gathering Intel</li>
                </ul>
              </div>
              <div className="col-lg-3">
                {" "}
                <ul>
                  <li>Gathering Intel</li>
                  <li>Gathering Intel</li>
                  <li>Gathering Intel</li>
                  <li>Gathering Intel</li>
                  <li>Gathering Intel</li>
                  <li>Gathering Intel</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            borderTop: "2px solid #2dc3d0",
            fontSize: "14px",
            marginTop: "30px",
            paddingTop: "30px",
            height: "10px",
            color: "white",
          }}
        ></div>
        <Typography
          sx={{ fontSize: "13px", textAlign: { xs: "center", md: "left" } }}
        >
          &copy; 2023 LSP-STIAMI
        </Typography>
      </div>
    </div>
  );
}
