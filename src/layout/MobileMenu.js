import React from "react";

const MobileMenuBar = () => {
    return(
        <div className="mobile-menu md:hidden">
        <div className="mobile-menu-bar">
            <a href="" className="flex mr-auto">
                <img alt="Square Logo" className="w-6" src="dist/images/logo.svg" />
            </a>
            <a href="javascript:;" className="mobile-menu-toggler"> <i data-lucide="bar-chart-2" className="w-8 h-8 text-white transform -rotate-90"></i> </a>
        </div>
        <div className="scrollable">
            <a href="javascript:;" className="mobile-menu-toggler"> <i data-lucide="x-circle" className="w-8 h-8 text-white transform -rotate-90"></i> </a>
            <ul className="scrollable__content py-2">
                <li>
                    <a href="javascript:;.html" className="menu menu--active">
                        <div className="menu__icon"> <i data-lucide="home"></i> </div>
                        <div className="menu__title"> Dashboard </div>
                    </a>
                 </li>
                 <li>
                    <a href="transactions.html" className="menu">
                        <div className="menu__icon"> <i data-lucide="trello"></i> </div>
                        <div className="menu__title"> Transactions </div>
                    </a>
                 </li>
                 <li>
                    <a href="javascript:;" className="menu">
                        <div className="menu__icon"> <i data-lucide="trello"></i> </div>
                        <div className="menu__title"> Wallet </div>
                    </a>
                 </li>

                 <li>
                    <a href="javascript:;" className="menu">
                        <div className="menu__icon"> <i data-lucide="trello"></i> </div>
                        <div className="menu__title"> Rates </div>
                    </a>
                 </li>

                 <li>
                    <a href="javascript:;" className="menu">
                        <div className="menu__icon"> <i data-lucide="trello"></i> </div>
                        <div className="menu__title"> Contact </div>
                    </a>
                 </li>
        
                <li>
                    <a href="javascript:;" className="menu">
                        <div className="menu__icon"> <i data-lucide="trello"></i> </div>
                        <div className="menu__title"> Logout </div>
                    </a>
                 </li>
               
            </ul>
        </div>
    </div>
    )
}

export default MobileMenuBar