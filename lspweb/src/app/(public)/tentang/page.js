"use client";

import { Typography } from "@mui/material";
import styles from "./tentang.module.css";

export default function AboutUs() {
  return (
    <>
      <div className={`${styles.bannertentang}`}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <img
                className={`${styles.imgbannertentang}`}
                src="https://www.crayon.co/hs-fs/hubfs/new-bg.png?width=2566&height=781&name=new-bg.png"
              />
            </div>
            <div className="col-lg-6">
              <div>
                <Typography
                  sx={{
                    fontSize: "64px",
                    color: "#040924",
                    fontWeight: 600,
                    paddingBottom: "15px",
                  }}
                >
                  ABOUT US
                </Typography>

                <Typography
                  sx={{
                    color: "#6f7375",
                    fontSize: "20px",
                    paddingBottom: "60px",
                  }}
                >
                  {" "}
                  Learn more about our company, our team and our investors
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.describetentang}`}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <img src="https://www.crayon.co/hs-fs/hubfs/Boatcruise-Rounded.png?width=557&height=360&name=Boatcruise-Rounded.png" />
            </div>
            <div className="col-lg-6">
              <Typography sx={{ color: "#6f7375", paddingTop: "20px" }}>
                At Crayon, we believe Competitive Intelligence should provide
                valuable insights that your entire organization can leverage
                easily and confidently. That’s why we provide the most complete
                picture of what your competitors are up to, all in real time.
                Enterprise and mid-sized businesses work with Crayon to build a
                culture of Competitive Intelligence that goes beyond
                battlecards, inspiring their entire organization every single
                day.
                <br />
                <br />
                Crayon’s award-winning software and customer success team
                empowers you to create a sustainable advantage over your
                competition, so you can compete like you mean it.
              </Typography>
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.managementim}`}>
        <Typography
          sx={{
            fontSize: "36px",
            color: "white",
            // fontWeight: 600,
            paddingBottom: "55px",
            paddingTop: "15px",
            textAlign: "center",
          }}
        >
          Management Team
        </Typography>
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className={styles["boxmember"]}>
                <img
                  className={`${styles.imgtim}`}
                  src="https://www.crayon.co/hs-fs/hubfs/Jonah.jpg?width=400&height=400&name=Jonah.jpg"
                />
                <Typography
                  sx={{
                    fontSize: "20px",
                    color: "white",
                    fontWeight: 600,
                    paddingBottom: "15px",
                    paddingTop: "15px",
                  }}
                >
                  Jonah Lopin
                </Typography>

                <Typography
                  sx={{
                    color: "#6f7375",
                    fontSize: "17px",
                    paddingBottom: "10px",
                  }}
                >
                  {" "}
                  Founder, CEO
                </Typography>
              </div>
            </div>
            <div className="col-lg-4">
              <div className={styles["boxmember"]}>
                <img
                  className={`${styles.imgtim}`}
                  src="https://www.crayon.co/hs-fs/hubfs/Jonah.jpg?width=400&height=400&name=Jonah.jpg"
                />
                <Typography
                  sx={{
                    fontSize: "20px",
                    color: "white",
                    fontWeight: 600,
                    paddingBottom: "15px",
                    paddingTop: "15px",
                  }}
                >
                  Jonah Lopin
                </Typography>

                <Typography
                  sx={{
                    color: "#6f7375",
                    fontSize: "17px",
                    paddingBottom: "10px",
                  }}
                >
                  {" "}
                  Founder, CEO
                </Typography>
              </div>
            </div>
            <div className="col-lg-4">
              <div className={styles["boxmember"]}>
                <img
                  className={`${styles.imgtim}`}
                  src="https://www.crayon.co/hs-fs/hubfs/Jonah.jpg?width=400&height=400&name=Jonah.jpg"
                />
                <Typography
                  sx={{
                    fontSize: "20px",
                    color: "white",
                    fontWeight: 600,
                    paddingBottom: "15px",
                    paddingTop: "15px",
                  }}
                >
                  Jonah Lopin
                </Typography>

                <Typography
                  sx={{
                    color: "#6f7375",
                    fontSize: "17px",
                    paddingBottom: "10px",
                  }}
                >
                  {" "}
                  Founder, CEO
                </Typography>
              </div>
            </div>
            <div className="row mt-5 d-flex justify-content-center">
              <div className="col-lg-4">
                <div className={styles["boxmember"]}>
                  <img
                    className={`${styles.imgtim}`}
                    src="https://www.crayon.co/hs-fs/hubfs/Jonah.jpg?width=400&height=400&name=Jonah.jpg"
                  />
                  <Typography
                    sx={{
                      fontSize: "20px",
                      color: "white",
                      fontWeight: 600,
                      paddingBottom: "15px",
                      paddingTop: "15px",
                    }}
                  >
                    Jonah Lopin
                  </Typography>

                  <Typography
                    sx={{
                      color: "#6f7375",
                      fontSize: "17px",
                      paddingBottom: "10px",
                    }}
                  >
                    {" "}
                    Founder, CEO
                  </Typography>
                </div>
              </div>
              <div className="col-lg-4">
                <div className={styles["boxmember"]}>
                  <img
                    className={`${styles.imgtim}`}
                    src="https://www.crayon.co/hs-fs/hubfs/Jonah.jpg?width=400&height=400&name=Jonah.jpg"
                  />
                  <Typography
                    sx={{
                      fontSize: "20px",
                      color: "white",
                      fontWeight: 600,
                      paddingBottom: "15px",
                      paddingTop: "15px",
                    }}
                  >
                    Jonah Lopin
                  </Typography>

                  <Typography
                    sx={{
                      color: "#6f7375",
                      fontSize: "17px",
                      paddingBottom: "10px",
                    }}
                  >
                    {" "}
                    Founder, CEO
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
