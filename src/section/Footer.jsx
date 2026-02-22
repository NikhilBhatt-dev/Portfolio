const Footer = () => {
    return (
        <footer className="c-space flex flex-wrap items-center justify-center gap-5 border-t border-black-300 pb-4 pt-7 text-center sm:justify-between sm:text-left">
            <div className="flex flex-wrap justify-center gap-2 text-white-500 sm:justify-start">
                <p>Terms & Conditions</p>
                <p>|</p>
                <p>Privacy Policy</p>
            </div>

            <div className="flex w-full justify-center gap-3 sm:w-auto">
                <div className="social-icon">
                    <a
                        href="https://github.com/NikhilBhatt-dev"
                        target="_blank"
                        rel="noreferrer"
                        className="flex h-full w-full items-center justify-center"
                    >
                        <img src="/assets/github.svg" alt="github" className="h-1/2 w-1/2 object-contain" />
                    </a>
                </div>
                <div className="social-icon">
                    <a
                        href="https://www.linkedin.com/in/nikhil-bhatt-485046295/"
                        target="_blank"
                        rel="noreferrer"
                        className="flex h-full w-full items-center justify-center"
                    >
                        <img src="/assets/linkedin.svg" alt="linkedin" className="h-1/2 w-1/2 object-contain" />
                    </a>
                </div>
                <div className="social-icon">
                    <img src="/assets/instagram.svg" alt="instagram" className="w-1/2 h-1/2" />
                </div>
            </div>

            <p className="w-full text-white-500 sm:w-auto">© 2026 Nikhil Bhatt. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
