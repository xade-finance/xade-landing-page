import "../styles/style1.css";
import "../styles/style2.css";
import "../styles/style3.css";
import "../styles/style4.css";

const Main = () => {
return (
      <>
      <section className="smart-scroll">
      <div className="container-fluid">
        <nav className="navbar navbar-expand-md navbar-dark">
          <a className="navbar-brand heading-black" href="#">
            <div className="name">XADE</div>
          </a>
          <button
            className="navbar-toggler navbar-toggler-right border-0"
            type="button"
            data-toggle="collapse"
            data-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars text-white" />
            <span data-feather="grid" />
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav ml-auto desktop-arrangement-navbar">
              <div>
                <li className="nav-item">
                  <a className="nav-link page-scroll" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link page-scroll" href="#faq">
                    FAQs
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link page-scroll"
                    href="https://medium.com/@XadeFinance/what-is-xade-and-why-do-you-need-it-b483f46ba5a1"
                  >
                    Blog
                  </a>
                </li>
              </div>
              <div>
                <li className="Community">
                  <a
                    className="nav-link page-scroll"
                    target="_blank"
                    href="https://discord.gg/H7U3nB4Aa8"
                  >
                    <div className="tack">Community</div>
                  </a>
                </li>
                &nbsp; &nbsp;
                <li className="webapp">
                  <a
                    className="nav-link page-scroll"
                    target="_blank"
                    href="https://app.xade.finance"
                  >
                    <div className="greytack">Webapp</div>
                  </a>
                </li>
              </div>
            </ul>
          </div>
        </nav>
      </div>
    </section>
    {/* section1 */}
    <div className="video-container">
      <video autoPlay="true" muted="true" loop="true">
        <source src="https://www.xade.finance/Media/Video.mov" type="video/mp4" />
      </video>
      <div className="caption">
        <div className="header1">A new era of banking</div>
        <br />
        <div className="subhead2">
          The super decentralised bank which provides all banking services on
          chain powered by our in-house DeFi protocols{" "}
        </div>
        <br />
        <br />
        <br />
        <br />
        <div className="button69">
          <a
            href="https://app.xade.finance"
            style={{ textDecoration: "none", color: "black" }}
          >
            Get Started
          </a>
        </div>
        <div className="button89">
          <a
            href="https://medium.com/@XadeFinance/what-is-xade-and-why-do-you-need-it-b483f46ba5a1"
            style={{ textDecoration: "none", color: "white" }}
          >
            What is Xade?
          </a>
        </div>
      </div>
    </div>
    <div>
      <div className="ultimate-wrapper-astendo">
        <div className="header-articles">
          <p className="explore-articles">Explore features</p>
          <div className="headers-post-parent">
            <p className="headers-post">Payments</p>
            <p className="headers-post">Savings</p>
            <p className="headers-post">Investments</p>
            <p className="headers-post">Borrowing</p>
          </div>
        </div>
        <div className="wrap-overflow">
          <div className="article-box">
            <div className="left-flex-article">
              <img src="https://www.xade.finance/Media/Illustration.svg" />
              <p>Global payments</p>
            </div>
            <div className="right-flex-article">
              <p>
                Send payments all around the globe in multiple stablecoins with
                close to zero fees through our advanced blockchain technology
              </p>
            </div>
          </div>
          <div className="article-box" style={{ backgroundColor: "#d1ff4e" }}>
            <div className="left-flex-article">
              <img src="https://www.xade.finance/Media/Illustration-2.svg" />
              <p>Stable savings</p>
            </div>
            <div className="right-flex-article">
              <p>
                Earn up to 8.1% APY with our stable savings account which is
                designed to provide a yield more than your common regional
                inflation rate
              </p>
            </div>
          </div>
          <div className="article-box" style={{ backgroundColor: "#4eeaff" }}>
            <div className="left-flex-article">
              <img src="https://www.xade.finance/Media/Illustration-3.svg" />
              <div className="featurehead pro-trading">
                <p>Pro Trading</p>
              </div>
            </div>
            <div className="right-flex-article">
              <div className="featurecontent">
                <p>
                  Trade more than 5000 markets including stocks, crypto,
                  commodities with 10x leverage and short selling using perpetual
                  futures{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="article-box" style={{ backgroundColor: "#fFd84e" }}>
            <div className="left-flex-article">
              <img src="https://www.xade.finance/Media/Illustration-4.svg" />
              <p>Secured Loans</p>
            </div>
            <div className="right-flex-article">
              <p>
                Get secured loans against multiple real world tokenized assets
                without any credit score check and at competitive rates with our
                super app
              </p>
            </div>
          </div>
        </div>
        <div className="article-wrapper-mobile">
          <div className="article-box">
            <div className="left-flex-article">
              <p>Global payments</p>
            </div>
            <div className="right-flex-article">
              <p>
                Send payments all around the globe in multiple stablecoins with
                close to zero fees through our advanced blockchain technology
              </p>
              <img src="https://www.xade.finance/Media/Illustration.svg" />
            </div>
          </div>
          <div className="article-box" style={{ backgroundColor: "#d1ff4e" }}>
            <div className="left-flex-article">
              <p>Stable savings</p>
            </div>
            <div className="right-flex-article">
              <p>
                Earn up to 8.1% APY with our stable savings account which is
                designed to provide a yield more than your common regional
                inflation rate
              </p>
              <img src="https://www.xade.finance/Media/Illustration-2.svg" />
            </div>
          </div>
          <div className="article-box" style={{ backgroundColor: "#4eeaff" }}>
            <div className="left-flex-article">
              <p>Pro Trading</p>
            </div>
            <div className="right-flex-article">
              <p>
                Trade more than 5000 markets including stocks, crypto, commodities
                with 10x leverage and short selling using perpetual futures{" "}
              </p>
              <img src="https://www.xade.finance/Media/Illustration-3.svg" />
            </div>
          </div>
          <div className="article-box" style={{ backgroundColor: "#fFd84e" }}>
            <div className="left-flex-article">
              <p>Secured Loans</p>
            </div>
            <div className="right-flex-article">
              <p>
                Get secured loans against multiple real world tokenized assets
                without any credit score check and at competitive rates with our
                super app
              </p>
              <img src="https://www.xade.finance/Media/Illustration-4.svg" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <br /> <br /> <br />
    <div className="bettermain">The Super Decentralised Bank</div>
    <br />
    <br />
    <div className="bettersub">
      <div className="text-centre">
        Xade is the hybrid solution between DeFi and traditional banks which
        provides all banking services powered by our in-house DeFi protocols with
        the user experience of a digital bank in the most transparent, efficient
        and secure manner.
      </div>
    </div>
    <div>
      <br />
      <br />
      <div className="more-features-center">
        <div className="more-features-top-elements">
          <div className="more-features-element">
            <img src="https://www.xade.finance/Media/uxicon.svg" className="dabbang" />
            <div className="betterhead">
              <p>Familiar user experience</p>
            </div>
            <p style={{ color: "#7b7b7b" }} className="bettercontent">
              We provide a simple, easy to understand user experience which is
              indistinguishable from a digital banking experience through our
              premium and modern interface.
            </p>
          </div>
          <div className="more-features-element">
            <img src="https://www.xade.finance/Media/innovative.svg" className="dabbang" />
            <div className="betterhead">
              <p>Innovative and sustainable </p>
            </div>
            <p className="bettercontent" style={{ color: "#7b7b7b" }}>
              We are powered by our own in-house DeFi protocols which are designed
              to replicate real world banking services in the most efficient and
              sustainable manner possible.
            </p>
          </div>
        </div>
        <div className="more-features-bottom-elements">
          <div className="more-features-element">
            <img src="https://www.xade.finance/Media/world icon.svg" className="dabbang" />
            <div className="betterhead">
              <p>Made for the real world use</p>
            </div>
            <p className="bettercontent" style={{ color: "#7b7b7b" }}>
              We have created our product to be a direct competitor to traditional
              banks and aim to bring real world elements such as inflation in
              countries and tangible assets on chain.
            </p>
          </div>
          <div className="more-features-element">
            <img src="https://www.xade.finance/Media/transparenticon.svg" className="dabbang" />
            <div className="betterhead">
              <p>Transparent and Non-Custodial</p>
            </div>
            <p className="bettercontent" style={{ color: "#7b7b7b" }}>
              {" "}
              We never take custody over your funds while being completely
              transparent and decentralized by keeping all our
              transactions,documents and codebase publicly accessible.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
    {/* faqs */}
    <div className="faqs">
      <div className="faqmain">Frequently asked questions</div>
      <div className="faqbox">
        <div className="faqhead">What is Xade?</div>
        <div className="faqcontent">
          Xade is the one stop solution for all your finances where all banking
          services are provided in a better,permissionless and efficient manner.
        </div>
      </div>
      <div className="faqbox">
        <div className="faqhead">How safe is Xade?</div>
        <div className="faqcontent">
          Xade is compeletely non-custodial and decentralised where all activity
          appears on chain. All the smart contracts are certified and audited.
        </div>
      </div>
      <div className="faqbox">
        <div className="faqhead">How is Xade different from banks?</div>
        <div className="faqcontent">
          Xade is compeletely autonomus with no human involvement while remaining
          compeletely non-custodial and on chain which makes us more efficient and
          accessible.
        </div>
      </div>
      <div className="faqbox">
        <div className="faqhead">How is Xade different from DeFi protocols?</div>
        <div className="faqcontent">
          Xade provides an easy to use and familiar user experience of a neobank
          powered by DeFi Protocols which are created to mirror financial services
          in a sustainable manner.
        </div>
      </div>
      <div className="faqbox">
        <div className="faqhead">What is Xade V0?</div>
        <div className="faqcontent">
          XADE V0 is a test launch for Xade Finance to get feedback about the user
          experience and test our infrastracture in real world situations.
        </div>
      </div>
    </div>
    {/*footer*/}
    <footer className="py-6">
      <div className="container">
        <div className="row">
          <div className="col-sm-5 mr-auto">
            <div id="footerxade">
              <h4>XADE</h4>
            </div>
            <p className="footerx">
              Xade is compeletely non-custodial and never takes control over the
              user's funds while remaining compeletely transparent since all the
              activity is available through the block explorers.
            </p>
          </div>
          <div className="col-sm-2">
            <h5>Media</h5>
            <ul className="list-unstyled">
              <li>
                <a
                  href="https://www.youtube.com/channel/UCK1Bgb4A2OvXDHuCHKI7c-g"
                  target="_blank"
                >
                  YouTube
                </a>
              </li>
              <li>
                <a href="https://github.com/xade-finance" target="_blank">
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://medium.com/@XadeFinance" target="_blank">
                  Medium
                </a>
              </li>
            </ul>
          </div>
          <div className="col-sm-2">
            <h5>Community</h5>
            <ul className="list-unstyled">
              <li>
                <a href="https://instagram.com/xade.finance?" target="_blank">
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://twitter.com/xadefinance/" target="_blank">
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/xade-finance/"
                  target="_blank"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://discord.gg/H7U3nB4Aa8" target="_blank">
                  Discord
                </a>
              </li>
            </ul>
          </div>
          <div className="col-sm-2">
            <h5>Contact Us</h5>
            <ul className="list-unstyled">
              <li>
                <a href="mailto:development@xade.finance" target="_blank">
                  Email
                </a>
              </li>
              <li>
                <a href="tel:+91 9836711182" target="_blank">
                  Phone
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-12 text-muted text-center small-xl">
            © 2022 Xade Technologies- All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
    {/*scroll to top*/}
    <div className="scroll-top">
      <i className="fa fa-angle-up" aria-hidden="true" />
    </div>
  </>
    
      );
};

export default Main;
