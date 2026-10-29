const Footer = () => {
    return (
        <footer className="c-space flex flex-col items-center gap-5 border-t border-black-300 pb-6 pt-7 text-center sm:flex-row sm:flex-wrap sm:justify-between sm:text-left">
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
                <div className="social-icon">
                    <a
                        href="mailto:bhattnikhil158@gmail.com"
                        aria-label="Email bhattnikhil158@gmail.com"
                        className="flex h-full w-full items-center justify-center"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            className="h-1/2 w-1/2 text-white"
                            aria-hidden="true"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3 6.75A2.25 2.25 0 0 1 5.25 4.5h13.5A2.25 2.25 0 0 1 21 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 17.25V6.75Z"
                            />
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m3.75 6 8.25 6.75L20.25 6"
                            />
                        </svg>
                    </a>
                </div>
            </div>

            <p className="w-full text-sm text-white-500 sm:w-auto sm:text-base">© 2026 Nikhil Bhatt. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
