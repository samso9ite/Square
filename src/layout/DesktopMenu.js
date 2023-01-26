import React from "react";

const DesktopMenuBar = () => {
    return (
        <nav className="side-nav">
            <ul>
                <li>
                    <a href="javascript:;.html" className="side-menu side-menu--active">
                        <div className="side-menu__icon"> <i data-lucide="home"></i> </div>
                        <div className="side-menu__title">
                            Dashboard 
                         
                        </div>
                    </a>
                  
                </li>
              
                <li>
                    <a href="transactions.html" className="side-menu">
                        <div className="side-menu__icon"> <i data-lucide="inbox"></i> </div>
                        <div className="side-menu__title"> Transactions </div>
                    </a>
                </li>
                <li>
                    <a href="side-menu-light-file-manager.html" className="side-menu">
                        <div className="side-menu__icon"> <i data-lucide="hard-drive"></i> </div>
                        <div className="side-menu__title"> Wallet </div>
                    </a>
                </li>
                <li>
                    <a href="side-menu-light-point-of-sale.html" className="side-menu">
                        <div className="side-menu__icon"> <i data-lucide="credit-card"></i> </div>
                        <div className="side-menu__title"> Rates </div>
                    </a>
                </li>
                <li>
                    <a href="side-menu-light-point-of-sale.html" className="side-menu">
                        <div className="side-menu__icon"> <i data-lucide="credit-card"></i> </div>
                        <div className="side-menu__title"> Contact </div>
                    </a>
                </li>
                <li>
                    <a href="side-menu-light-point-of-sale.html" className="side-menu">
                        <div className="side-menu__icon"> <i data-lucide="credit-card"></i> </div>
                        <div className="side-menu__title"> Logout </div>
                    </a>
                </li>
              
            
            </ul>
        </nav>
      )
};

export default DesktopMenuBar