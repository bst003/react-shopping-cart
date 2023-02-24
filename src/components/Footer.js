import "./Footer.scss";

const Footer = () => {
    return (
        <footer className="site-footer">
            <div className="site-footer__inner">
                <p>
                    Site created by{" "}
                    <a href="https://github.com/bst003" target="_blank">
                        bst003
                    </a>
                    , image credit goes to{" "}
                    <a href="https://unsplash.com/@quokkabottle" target="_blank">
                        quokkabottles on Unsplash
                    </a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
