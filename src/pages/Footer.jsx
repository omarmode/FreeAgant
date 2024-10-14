import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "rgb(0, 45, 99)",
        padding: "1px 0",
        color: "white",
        fontSize: "14px",
      }}
    >
      <Container>
        <Row className="align-items-center">
          <Col md={4} style={{ textAlign: "left" }}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="97"
                viewBox="0 0 1174.38 279.28"
                class="fe-GlobalFooter-logo fe-u-marginBottom--smallest"
                aria-hidden="true"
                focusable="false"
              >
                <path
                  d="M801.7 124.39c-7.36-11.41-20.1-17.95-35.73-17.95-32.29 0-60.64 31.15-59.95 68.75.55 29.96 19.94 53.98 46.92 53.98 15.3 0 28.12-7.46 35.59-17.45l-1.31 9.77c-2.66 19.77-17.07 28.24-35.55 28.24-16.15 0-30.73-6.35-43.51-19.52l-4.33 32.22c12.74 11.26 32.02 16.83 49.23 16.83 33.99 0 62.68-17.44 68.46-60.33l9.76-72.63c1.81-13.45 4.18-26.15 8.51-37.33h-19.08c-8.56 0-17.1 6.88-19 15.4Zm-37.4 75.68c-13.39 0-23.42-12.12-23.69-27.21-.34-18.7 13.52-36.46 30.73-36.46 14.02 0 23.87 12.88 24.14 27.54.32 17.21-13.11 36.13-31.17 36.13ZM425.3 142.83c0-22.19-18.3-35.99-45.15-36.38-42.04-.58-65.98 32.7-65.98 67.15s22.47 55.57 58.85 55.57c16.93 0 30.82-2.53 44.64-8.18l4.14-30.95c-11.29 6.23-26.55 11.29-43.79 11.29-18.68 0-28.03-8.47-29-20.15 5.6.66 11.73 1.1 18 1.1 27.96 0 58.29-7.95 58.29-39.46Zm-75.26 16.2c2.48-15.21 15.27-27.27 28.21-27.27 8.56 0 13.38 3.67 13.38 10.48 0 13.43-19.72 18.53-41.59 16.79ZM466.97 181.2c5.6.66 11.73 1.1 18 1.1 27.96 0 58.29-7.95 58.29-39.46 0-22.19-18.3-35.99-45.15-36.38-42.04-.58-65.98 32.7-65.98 67.15s22.47 55.57 58.85 55.57c16.93 0 30.82-2.53 44.64-8.18l4.14-30.95c-11.29 6.23-26.54 11.29-43.79 11.29-18.68 0-28.03-8.47-29-20.15Zm29.24-49.44c8.56 0 13.38 3.67 13.38 10.48 0 13.43-19.72 18.53-41.59 16.79 2.48-15.21 15.27-27.27 28.21-27.27ZM952.04 142.83c0-22.19-18.3-35.99-45.15-36.38-42.04-.58-65.98 32.7-65.98 67.15s22.47 55.57 58.85 55.57c16.93 0 30.82-2.53 44.64-8.18l4.14-30.95c-11.29 6.23-26.54 11.29-43.79 11.29-18.68 0-28.03-8.47-29-20.15 5.6.66 11.73 1.1 18 1.1 27.96 0 58.29-7.95 58.29-39.46Zm-75.26 16.2c2.48-15.21 15.27-27.27 28.21-27.27 8.56 0 13.38 3.67 13.38 10.48 0 13.43-19.72 18.53-41.59 16.79ZM1038.82 106.44c-16.35 0-28.82 6.81-37.07 18.55.2-8.67-6.85-16-15.52-16h-16.66c1.96 11.23.68 24.97-.98 37.33l-10.8 80.31h33.97l9.12-67.74c1.65-12.3 9.84-22.08 23.21-22.08 14.04 0 17.49 11.46 16.21 21.02l-9.26 68.8h33.97l10.42-77.51c3.59-26.71-12.93-42.68-36.63-42.68ZM1136.14 137.02h10.6c18.22 0 28.25-11.26 27.61-28.03h-34.45l4.73-35.18h-30.32l-2.47 18.38c-1.97 14.64-11.67 18.81-22.68 18.81l-3.51 26.02h16.97l-6.05 44.99c-3.4 25.18 7.16 47.14 42.05 47.14 8.71 0 18.26-1.49 22.89-3.4l3.91-29.09c-5.28 1.7-12.27 2.76-17.15 2.76-13.81 0-19.59-7.06-17.72-20.81l5.59-41.59ZM177.02 140.36l5.43-40.37h35.5c18.23 0 33.29-7.57 32.66-31.61h-98.48l-21.28 158.24h34.57l7.62-56.63h28.39c19.27 0 29.93-11.87 29.26-29.64h-53.67ZM319.2 107.72c-2.56-.85-5.97-1.27-9.15-1.27-10.62 0-23.6 4.93-33.47 18.55.12-8.62-6.9-16-15.52-16h-16.65c1.96 11.23.69 24.93-.98 37.33l-10.8 80.31h33.98l7.77-57.8c3.05-22.69 15.66-30.75 30.52-30.75 3.18 0 6.67.42 10.08 1.06l4.23-31.43Z"
                  fill="#fff"
                ></path>
                <path
                  d="m685.97 154.55-19.98-86.17h-40.78l-82.58 158.24h37.39l16.57-32.96h32.9c12.86 0 23.27-6.71 27.39-17.56l10.47 50.52h39.26c-6.87-12.72-12.2-35.71-20.63-72.08Zm-74.45 9.42 30.34-60.36 12.51 60.36h-42.85ZM56.39 57.19H85.5c25.07 0 41.31 9.74 50.41 24.09.95-18.07-8.93-31.48-30.25-41.34L55.34 16.77C43.97 11.54 34.85 5.53 32.85 0c-11.37 15.57-6.86 42.49 23.54 57.19Z"
                  fill="#fff"
                ></path>
                <path
                  d="M85.5 68.39H27.95C16.94 68.39 5.08 67.26.5 62.6c-3.17 18.34 8.65 38.92 43.51 38.92h38.01c15.87 0 26.01 6.09 27.95 14.26-4.09-2.04-14.19-3.07-23.7-3.07H45.96c5.36 17.51 18.51 27.64 40.31 27.64h22.18c12.17 0 18.75 1.31 22.78 5.4 10.22-49.6-5.73-77.37-45.71-77.37Z"
                  fill="#fff"
                ></path>
              </svg>
            </div>
          </Col>
          <Col md={8} style={{ textAlign: "left" }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <a
                href="#"
                style={{
                  color: "white",
                  margin: "0 10px",
                  textDecoration: "none",
                }}
              >
                Privacy Notice
              </a>
              <a
                href="#"
                style={{
                  color: "white",
                  margin: "0 10px",
                  textDecoration: "none",
                }}
              >
                Terms of Service
              </a>
              <a
                href="#"
                style={{
                  color: "white",
                  margin: "0 10px",
                  textDecoration: "none",
                }}
              >
                Support Access
              </a>
              <a
                href="#"
                style={{
                  color: "white",
                  margin: "0 10px",
                  textDecoration: "none",
                }}
              >
                Knowledge Base
              </a>
              <a
                href="#"
                style={{
                  color: "white",
                  margin: "0 10px",
                  textDecoration: "none",
                }}
              >
                Cookie Notice
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
