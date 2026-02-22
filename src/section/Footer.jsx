const Footer = () => {
    return (
        <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
            <div className="text-white-500 flex gap-2">
                <p>Terms & Conditions</p>
                <p>|</p>
                <p>Privacy Policy</p>
            </div>

            <div className="flex gap-3">
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

            <p className="text-white-500">© 2026 Nikhil Bhatt. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
