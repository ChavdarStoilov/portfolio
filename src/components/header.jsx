export default function Header() {
    return (
        <header
            id="fh5co-header"
            className="fh5co-cover js-fullheight"
            role="banner"
            data-stellar-background-ratio="0.5"
        >
            <div className="overlay"></div>
            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-md-offset-2 text-center">
                        <div className="display-t js-fullheight">
                            <div
                                className="display-tc js-fullheight animate-box"
                                data-animate-effect="fadeIn"
                            >
                                <div
                                    className="profile-thumb"
                                ></div>
                                <h1>
                                    <span>Chavdar Stoilov</span>
                                </h1>
                                <h3>
                                    <span>
                                        Python Web Developer / Python Back-End
                                        Developer
                                    </span>
                                </h3>
                                <ul className="fh5co-social-icons">
                                    <li>
                                        <a href="https://github.com/ChavdarStoilov">
                                            <i className="icon-github"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://linkedin.com/in/chavdar-stoilov-7a8088167">
                                            <i className="icon-linkedin2"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
