import { NavLink } from "react-router-dom";
import { Button } from "../styles/Button";
import styled from "styled-components";
import { FaDiscord, FaYoutube, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <Wrapper>
      <section className="contact-short">
        <div className="grid grid-two-column">
          <div>
            <h3>Ready To Get Started?</h3>
            <h3>Talk To Us Today</h3>
          </div>
          <div>
            <NavLink to="/">
              <Button className="btn">Get Started</Button>
            </NavLink>
          </div>
        </div>
      </section>
      <footer>
        <div className="container grid grid-four-column">
          <div className="footer-about">
            <h3>THE COder</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          </div>

          {/* 2 colum */}
          <div className="footer-subscribe">
            <h3 style={{ marginBottom: "1rem" }}>
              Subsribe to get important updates
            </h3>
            <form action="#">
              <input
                type="email"
                required
                placeholder="Email"
                autoComplete="off"
              />
              <input type="submit" value="Subscribe" />
            </form>
          </div>

          {/* 3rd column */}
          <div className="footer-social">
            <h3 style={{ marginBottom: "1rem" }}>Follow Us</h3>
            <div className="footer-social--icons">
              <div>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <FaDiscord className="icons" />
                </a>
              </div>
              <div>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <FaYoutube className="icons" />
                </a>
              </div>
              <div>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <FaInstagram className="icons" />
                </a>
              </div>
            </div>
          </div>
          {/* 4th column */}
          <div className="footer-contact">
            <h3>Call Us</h3>
            <p>+91 1234567890</p>
          </div>
        </div>
        {/* bottom section */}
        <div className="footer-bottom--section">
          <hr />
          <div className="container grid grid-two-column">
            <p>@{new Date().getFullYear()} The COder. All Rights Reserved</p>
            <div>
              <p>PRIVACY POLICY</p>
              <p>TERMS & CONDITIONS</p>
            </div>
          </div>
        </div>
      </footer>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .contact-short {
    padding: 5rem 10rem;
    max-width: 60vw;
    margin: auto;
    background-color: ${({ theme }) => theme.colors.bg};
    border-radius: 1rem;
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: translateY(50%);

    .grid div:last-child {
      justify-self: end;
      align-items: center;
    }
  }

  footer {
    padding: 14rem 0 9rem 0;
    background-color: ${({ theme }) => theme.colors.footer_bg};
    h3 {
      color: ${({ theme }) => theme.colors.hr};
    }
    p {
      color: ${({ theme }) => theme.colors.white};
    }
    .footer-social--icons {
      display: flex;
      gap: 2rem;

      div {
        padding: 1rem;
        border-radius: 50%;
        border: 2px solid ${({ theme }) => theme.colors.white};

        .icons {
          color: ${({ theme }) => theme.colors.white};
          font-size: 2.4rem;
          position: relative;
          cursor: pointer;
        }
      }
     
  }
  .footer-bottom--section {
    padding-top: 9rem;

    hr {
      margin-bottom: 2rem;
      color: ${({ theme }) => theme.colors.hr};
      height: 0.1px;
    }
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .contact-short {
      max-width: 95vw;
      padding: 2rem 0rem;
      display: flex;
      justify-content: center;
      align-items: center;

      .contact-short-btn {
        text-align: center;
        justify-self: flex-start;
      }
    }

    footer .footer-bottom--section {
      padding-top: 3.2rem;
    }
  }
`;

export default Footer;
