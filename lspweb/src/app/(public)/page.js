"use client";
import Image from "next/image";
import { Button, Typography, Box } from "@mui/material";
import styles from "./page.module.css";
import Footer from "./component/footer";

export default function Home() {
  return (
    <>
      <div className={styles["box-banner"]}>
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6">
              <div className={styles["banner-img"]}>
                <img
                  className={`${styles.gambarbanner}`}
                  src="https://www.crayon.co/hs-fs/hubfs/CRAY_Homepage_13.png?width=366&height=550&name=CRAY_Homepage_13.png"
                />
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div className={styles["desc-banner"]}>
                <Typography
                  sx={{
                    fontSize: "52px",
                    fontWeight: 700,
                    paddingBottom: "10px",
                    color: "#040924",
                  }}
                >
                  Win More Business.
                  <br /> Keep More Customers.
                </Typography>
                <Typography sx={{ fontSize: "24px", color: "#040924" }}>
                  Crayon is the #1 competitive intelligence platform that helps
                  you track your competitors and enable your revenue team in
                  real-time.
                </Typography>
                <Button
                  sx={{
                    background: "#2dc3d0",
                    borderRadius: "8px",
                    padding: "17px 30px",
                    color: "#040924",
                    fontWeight: 700,
                    marginTop: "17px",
                    minWidth: "250px",
                    // textTransform: "lowercase !important",
                  }}
                  variant="contained"
                  color="success"
                >
                  See in action
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles["inform-section"]}>
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6">
              <div className={styles["informsection-img"]}>
                <img
                  className={`${styles.gambarinformsection}`}
                  src="https://www.crayon.co/hs-fs/hubfs/PMA%20Pulse%202023_HomepageImage.png?width=542&height=450&name=PMA%20Pulse%202023_HomepageImage.png"
                />
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div className={styles["desc-informsection"]}>
                <Typography
                  sx={{
                    fontSize: "48px",
                    lineHeight: "1.15",
                    fontWeight: 700,
                  }}
                >
                  We know what it takes to beat the competition
                </Typography>
                <Typography sx={{ fontSize: "24px", paddingTop: "15px" }}>
                  See for yourself why Crayon is a 3x PMA Pulse leader and 11x
                  G2 grid leader. Take a demo to see how our customers use
                  Crayon to beat their competitors.
                </Typography>
                <Button
                  sx={{
                    background: "#2dc3d0",
                    borderRadius: "8px",
                    padding: "17px 30px",
                    color: "#040924",
                    fontWeight: 700,
                    marginTop: "20px",
                    minWidth: "250px",
                    // textTransform: "lowercase !important",
                  }}
                  variant="contained"
                  color="success"
                >
                  Schedule a demo
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles["benefit-box"]}>
        <Typography
          sx={{
            fontWeight: 700,
            color: "white",
            fontSize: "36px",
            textAlign: "center",
            paddingTop: "35px",
            paddingBottom: "35px",
          }}
        >
          Supercharge your competitive intelligence discipline
        </Typography>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 mb-4">
              <div className={styles["benefit-card"]}>
                <div className={styles["benefit-img"]}>
                  <img src="https://www.crayon.co/hs-fs/hubfs/capture-icon.png?width=130&height=130&name=capture-icon.png" />
                </div>
                <Typography
                  sx={{
                    textAlign: "center",
                    color: "#040924",
                    fontWeight: 600,
                    fontSize: "24px",
                    paddingTop: "10px",
                  }}
                >
                  UNPARALLELED INTELLIGENCE
                </Typography>
                <Typography
                  sx={{
                    textAlign: "center",
                    color: "#6F7375",
                    fontSize: "20px",
                    paddingTop: "15px",
                  }}
                >
                  Outsmart the competition and drive revenue growth with a
                  platform that automatically gathers, organizes, and amplifies
                  crucial data from millions of sources.
                </Typography>
                <Typography
                  sx={{
                    textAlign: "center",
                    fontSize: "20px",
                    paddingTop: "25px",
                    color: "#2dc3d0",
                    cursor: "pointer",
                    textDecoration: "none",
                    transition: "all .15s ease",
                    fontWeight: 500,
                  }}
                >
                  Learn More
                </Typography>
              </div>
            </div>
            <div className="col-lg-4 mb-4">
              <div className={styles["benefit-card"]}>
                <div className={styles["benefit-img"]}>
                  <img src="https://www.crayon.co/hs-fs/hubfs/capture-icon.png?width=130&height=130&name=capture-icon.png" />
                </div>
                <Typography
                  sx={{
                    textAlign: "center",
                    color: "#040924",
                    fontWeight: 600,
                    fontSize: "24px",
                    paddingTop: "10px",
                  }}
                >
                  UNPARALLELED INTELLIGENCE
                </Typography>
                <Typography
                  sx={{
                    textAlign: "center",
                    color: "#6F7375",
                    fontSize: "20px",
                    paddingTop: "15px",
                  }}
                >
                  Outsmart the competition and drive revenue growth with a
                  platform that automatically gathers, organizes, and amplifies
                  crucial data from millions of sources.
                </Typography>
                <Typography
                  sx={{
                    textAlign: "center",
                    fontSize: "20px",
                    paddingTop: "25px",
                    color: "#2dc3d0",
                    cursor: "pointer",
                    textDecoration: "none",
                    transition: "all .15s ease",
                    fontWeight: 500,
                  }}
                >
                  Learn More
                </Typography>
              </div>
            </div>
            <div className="col-lg-4 mb-4">
              <div className={styles["benefit-card"]}>
                <div className={styles["benefit-img"]}>
                  <img src="https://www.crayon.co/hs-fs/hubfs/capture-icon.png?width=130&height=130&name=capture-icon.png" />
                </div>
                <Typography
                  sx={{
                    textAlign: "center",
                    color: "#040924",
                    fontWeight: 600,
                    fontSize: "24px",
                    paddingTop: "10px",
                  }}
                >
                  UNPARALLELED INTELLIGENCE
                </Typography>
                <Typography
                  sx={{
                    textAlign: "center",
                    color: "#6F7375",
                    fontSize: "20px",
                    paddingTop: "15px",
                  }}
                >
                  Outsmart the competition and drive revenue growth with a
                  platform that automatically gathers, organizes, and amplifies
                  crucial data from millions of sources.
                </Typography>
                <Typography
                  sx={{
                    textAlign: "center",
                    fontSize: "20px",
                    paddingTop: "25px",
                    color: "#2dc3d0",
                    cursor: "pointer",
                    textDecoration: "none",
                    transition: "all .15s ease",
                    fontWeight: 500,
                  }}
                >
                  Learn More
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles["insight-box"]}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            // minHeight: "400px",
            // height: "100%",
          }}
        >
          <img
            className={styles["imginsight"]}
            src="https://www.crayon.co/hs-fs/hubfs/bg-top-pattern.png?width=2718&height=4160&name=bg-top-pattern.png"
          />
        </div>
        <Box className={styles["box-infoinsight"]}>
          <div className="container">
            <div className="row">
              <div className="col-lg-6 mb-5">
                <div className={styles["insight-img"]}>
                  <img src="https://www.crayon.co/hs-fs/hubfs/ProductImagery_Homepage-01.png?width=550&height=584&name=ProductImagery_Homepage-01.png" />
                </div>
              </div>
              <div className="col-lg-6 mb-5">
                <div className={styles["desc-insight"]}>
                  <Typography sx={{ fontSize: "40px" }}>
                    Way more data,
                    <br />
                    Way less time
                  </Typography>
                  <Typography
                    sx={{
                      color: "#040924",
                      fontSize: "17px",
                      paddingTop: "20px",
                    }}
                  >
                    Manual research is not only time-consuming—it’s also risky.
                    When you rely on human effort, you’re prone to missed
                    opportunities and undetected threats.
                    <br />
                    <br />
                    With Crayon, you can automatically capture your competitors’
                    movements in real time. Tap into more than one hundred
                    different data types across millions of competitive
                    intelligence sources to stay on top of product updates,
                    messaging pivots, executive team changes, and more.
                    <br />
                    <br />
                    Learn more about Crayon’s approach to Competitive
                    Intelligence and What We Track.
                  </Typography>
                </div>
              </div>

              <div className="col-lg-6 mb-5">
                <div className={`${styles.forDesktop}`}>
                  <div className={styles["desc-insight"]}>
                    <Typography sx={{ fontSize: "40px" }}>
                      Way more data,
                      <br />
                      Way less time
                    </Typography>
                    <Typography
                      sx={{
                        color: "#040924",
                        fontSize: "17px",
                        paddingTop: "20px",
                      }}
                    >
                      Manual research is not only time-consuming—it’s also
                      risky. When you rely on human effort, you’re prone to
                      missed opportunities and undetected threats.
                      <br />
                      <br />
                      With Crayon, you can automatically capture your
                      competitors’ movements in real time. Tap into more than
                      one hundred different data types across millions of
                      competitive intelligence sources to stay on top of product
                      updates, messaging pivots, executive team changes, and
                      more.
                      <br />
                      <br />
                      Learn more about Crayon’s approach to Competitive
                      Intelligence and What We Track.
                    </Typography>
                  </div>
                </div>
                <div className={`${styles.forMobile}`}>
                  <div className={styles["insight-img"]}>
                    <img src="https://www.crayon.co/hs-fs/hubfs/ProductImagery_Homepage-01.png?width=550&height=584&name=ProductImagery_Homepage-01.png" />
                  </div>
                </div>
              </div>

              <div className="col-lg-6 mb-5">
                <div className={`${styles.forDesktop}`}>
                  <div className={styles["insight-img"]}>
                    <img src="https://www.crayon.co/hs-fs/hubfs/ProductImagery_Homepage-01.png?width=550&height=584&name=ProductImagery_Homepage-01.png" />
                  </div>
                </div>
                <div className={`${styles.forMobile}`}>
                  <div className={styles["desc-insight"]}>
                    <Typography sx={{ fontSize: "40px" }}>
                      Way more data,
                      <br />
                      Way less time
                    </Typography>
                    <Typography
                      sx={{
                        color: "#040924",
                        fontSize: "17px",
                        paddingTop: "20px",
                      }}
                    >
                      Manual research is not only time-consuming—it’s also
                      risky. When you rely on human effort, you’re prone to
                      missed opportunities and undetected threats.
                      <br />
                      <br />
                      With Crayon, you can automatically capture your
                      competitors’ movements in real time. Tap into more than
                      one hundred different data types across millions of
                      competitive intelligence sources to stay on top of product
                      updates, messaging pivots, executive team changes, and
                      more.
                      <br />
                      <br />
                      Learn more about Crayon’s approach to Competitive
                      Intelligence and What We Track.
                    </Typography>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 mb-5">
                <div className={styles["insight-img"]}>
                  <img src="https://www.crayon.co/hs-fs/hubfs/ProductImagery_Homepage-01.png?width=550&height=584&name=ProductImagery_Homepage-01.png" />
                </div>
              </div>
              <div className="col-lg-6 mb-5">
                <div className={styles["desc-insight"]}>
                  <Typography sx={{ fontSize: "40px" }}>
                    Way more data,
                    <br />
                    Way less time
                  </Typography>
                  <Typography
                    sx={{
                      color: "#040924",
                      fontSize: "15px",
                      paddingTop: "20px",
                    }}
                  >
                    Manual research is not only time-consuming—it’s also risky.
                    When you rely on human effort, you’re prone to missed
                    opportunities and undetected threats.
                    <br />
                    <br />
                    With Crayon, you can automatically capture your competitors’
                    movements in real time. Tap into more than one hundred
                    different data types across millions of competitive
                    intelligence sources to stay on top of product updates,
                    messaging pivots, executive team changes, and more.
                    <br />
                    <br />
                    Learn more about Crayon’s approach to Competitive
                    Intelligence and What We Track.
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        </Box>
      </div>
      <div className={styles["best-product"]}>
        <Typography
          sx={{
            color: "#040924",
            fontWeight: 500,
            fontSize: "36px",
            textAlign: "center",
            paddingBottom: "50px",
          }}
        >
          Our Best Resources
        </Typography>
        <div className="container">
          <div className="row">
            <div className="col col-lg-6">
              <div className={styles["img-bestproduct"]}>
                <img src="https://www.crayon.co/hs-fs/hubfs/guide-to-ci-cover-page.png?width=284&height=357&name=guide-to-ci-cover-page.png" />
              </div>
            </div>
            <div className="col col-lg-6">
              <div>
                <Typography
                  sx={{
                    color: "#040924",
                    fontSize: "36px",
                    paddingBottom: "20px",
                  }}
                >
                  Ujikompetensi Bla Bla
                </Typography>
                <Typography
                  sx={{
                    color: "#6F7375;",
                    fontSize: "17px",
                    paddingBottom: "20px",
                  }}
                >
                  With a strong competitive intelligence program, you can
                  provide your marketing, sales, product, and executive teams
                  with a powerful, strategic advantage. Knowing what your
                  competitors are up to will help you beat them every time.
                </Typography>
              </div>
              <div className={styles["info-bestproduct"]}>
                <img
                  className={styles["imgproduct"]}
                  src="https://www.crayon.co/hs-fs/hubfs/book-gray.png?width=90&height=90&name=book-gray.png"
                />
                <Typography
                  sx={{
                    color: "#44474c",
                    padding: "10px",
                  }}
                >
                  1000 asesi
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
