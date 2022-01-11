
function Footer() {
    return (
        <footer className="border-t border-gray-200 lg:p-12">
        <div>
            <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"  className="h-8 w-auto ml-9"/>
        </div>

            <div
                className="
          container
          flex flex-col flex-wrap
          px-4
          py-16
          mx-auto
          md:items-center
          lg:items-start
          md:flex-row
          p-12
        "
            >

                <div className="justify-between w-full mt-4 text-left lg:flex md:flex-start sm:flex-start">
                
                    <div className="w-full px-4 lg:w-1/3 md:w-1/2 sm:w-1/3">
                    
                        <h2 className="mb-2 font-bold tracking-widest text-gray-900">
                            COMPANY
                        </h2>
                        <ul className="mb-8 space-y-2 text-sm list-none">
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">Who We Are</a>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">Blog</a>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">Careers</a>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">Report Fraud</a>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">Contact</a>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">Investor Relations</a>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full px-4 lg:w-1/3 md:w-1/2">
                        <h2 className="mb-2 font-bold tracking-widest text-gray-900">
                        FOR FOODIES

                        </h2>
                        <ul className="mb-8 space-y-2 text-sm list-none">
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">Code of Conduct</a>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">Community</a>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">Blogger Help</a>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">Mobile Apps</a>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full px-4 lg:w-1/3 md:w-1/2">
                        <h2 className="mb-2 font-bold tracking-widest text-gray-900">
                        FOR RESTAURANTS
                        </h2>
                        <ul className="mb-8 space-y-2 text-sm list-none">
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">Add restaurant</a>
                            </li>
                            <h2 className="mb-2 font-bold tracking-widest text-gray-900">
                        FOR RESTAURANTS
                        </h2>
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">Zomato for Work</a>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full px-4 lg:w-1/3 md:w-1/2">
                        <h2 className="mb-2 font-bold tracking-widest text-gray-900">
                        FOR YOU
                        </h2>
                        <ul className="mb-8 space-y-2 text-sm list-none">
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">Privacy</a>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">Terms</a>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">Security</a>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">Sitemap</a>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full px-4 lg:w-1/3 md:w-1/2">
                        <h2 className="mb-2 font-bold tracking-widest text-gray-900">
                            Social Links
                        </h2>
                        <ul className="mb-8 space-y-2 text-sm list-none">
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">Facebook</a>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">Twiter</a>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">Instagram</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="flex justify-center ml-9 text-sm text-left">
                <p className="text-base text-gray-400 justify-center text-sm">
                    By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 2008-2022 © Zomato™ Ltd. All rights reserved.
                </p>
            </div>
        </footer>
    );

}
export default Footer;