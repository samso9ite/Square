import React from "react";
import Account from "../layout/Account_menu";
import DesktopMenuBar from "../layout/DesktopMenu";
import MobileMenuBar from "../layout/MobileMenu";
import Notifications from "../layout/Notification";
import Search from "../layout/SearchBar";

const Rates = () => {
    return (
        <div>
            <MobileMenuBar />
            {/*Top Bar  */}
            <div className="top-bar-boxed h-[70px] md:h-[65px] z-[51] border-b border-white/[0.08] mt-12 md:mt-0 -mx-3 sm:-mx-8 md:-mx-0 px-3 md:border-b-0 relative md:fixed md:inset-x-0 md:top-0 sm:px-8 md:px-10 md:pt-10 md:bg-gradient-to-b md:from-slate-100 md:to-transparent dark:md:from-darkmode-700">
                <div className="h-full flex items-center">
                    <a href="" className="logo -intro-x hidden md:flex xl:w-[180px] block">
                        <img alt="Square Logo" className="logo__image w-6" src={require("../assets/images/logo.svg").default} />
                        <span className="logo__text text-white text-lg ml-3"> Square </span> 
                    </a>
                    <nav aria-label="breadcrumb" className="-intro-x h-[45px] mr-auto">
                        <ol className="breadcrumb breadcrumb-light">
                            <li className="breadcrumb-item"><a href="#">Application</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Dashboard</li>
                        </ol>
                    </nav>
                    <Search />
                    <Notifications />
                    <Account />
                </div>
            </div>
            <div className="flex overflow-hidden">
            <DesktopMenuBar />
            <div class="content">
                <div class="grid grid-cols-12 gap-6">
                    <div class="col-span-12 2xl:col-span-9">
                        <div class="grid grid-cols-12 gap-6">
                          
                            <div class="col-span-12 grid grid-cols-12 gap-6 mt-8">
                                <div class="col-span-12 sm:col-span-4 2xl:col-span-3 intro-y">
                                    <div class="box p-5 zoom-in">
                                        <div class="flex items-center">
                                            <div class="w-2/4 flex-none">
                                                <div class="text-lg font-medium truncate">Bitcoin</div>
                                                <div class="text-slate-500 mt-1">Buy: #500</div>
                                                <div class="text-slate-500 mt-1">Sell: #500</div>
                                            </div>
                                            <div class="flex-none ml-auto relative">
                                                <div class="w-[90px] h-[90px]">
                                                    <canvas id="report-donut-chart-1"></canvas>
                                                </div>
                                                <div class="font-medium absolute w-full h-full flex items-center justify-center top-0 left-0"> 
                                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-currency-bitcoin" width="34" height="34" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                        <path d="M6 6h8a3 3 0 0 1 0 6a3 3 0 0 1 0 6h-8" />
                                                        <line x1="8" y1="6" x2="8" y2="18" />
                                                        <line x1="8" y1="12" x2="14" y2="12" />
                                                        <line x1="9" y1="3" x2="9" y2="6" />
                                                        <line x1="13" y1="3" x2="13" y2="6" />
                                                        <line x1="9" y1="18" x2="9" y2="21" />
                                                        <line x1="13" y1="18" x2="13" y2="21" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-span-12 sm:col-span-4 2xl:col-span-3 intro-y">
                                    <div class="box p-5 zoom-in">
                                        <div class="flex items-center">
                                            <div class="w-2/4 flex-none">
                                                <div class="text-lg font-medium truncate">Ethereum</div>
                                                <div class="text-slate-500 mt-1">Buy: #500</div>
                                                <div class="text-slate-500 mt-1">Sell: #500</div>
                                            </div>
                                            <div class="flex-none ml-auto relative">
                                                <div class="w-[90px] h-[90px]">
                                                    <canvas id="report-donut-chart-2"></canvas>
                                                </div>
                                                <div class="font-medium absolute w-full h-full flex items-center justify-center top-0 left-0"> 
                                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-currency-ethereum" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                        <path d="M6 12l6 -9l6 9l-6 9z" />
                                                        <path d="M6 12l6 -3l6 3l-6 2z" />
                                                      </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-span-12 sm:col-span-4 2xl:col-span-3 intro-y">
                                    <div class="box p-5 zoom-in">
                                        <div class="flex items-center">
                                            <div class="w-2/4 flex-none">
                                                <div class="text-lg font-medium truncate">Ripple</div>
                                                <div class="text-slate-500 mt-1">Buy: #500</div>
                                                <div class="text-slate-500 mt-1">Sell: #500</div>
                                            </div>
                                            <div class="flex-none ml-auto relative">
                                                <div class="w-[90px] h-[90px]">
                                                    <canvas id="report-donut-chart-3"></canvas>
                                                </div>
                                                <div class="font-medium absolute w-full h-full flex items-center justify-center top-0 left-0"> 
                                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-currency-ripple" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                        <circle cx="7" cy="12" r="3" />
                                                        <circle cx="17" cy="7" r="3" />
                                                        <circle cx="17" cy="17" r="3" />
                                                        <path d="M10 12h3l2 -2.5" />
                                                        <path d="M15 14.5l-2 -2.5" />
                                                      </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="col-span-12 grid grid-cols-12 gap-6 mt-8">
                                <div class="col-span-12 sm:col-span-4 2xl:col-span-3 intro-y">
                                    <div class="box p-5 zoom-in">
                                        <div class="flex items-center">
                                            <div class="w-2/4 flex-none">
                                                <div class="text-lg font-medium truncate">Litecoin</div>
                                                <div class="text-slate-500 mt-1">Buy: #500</div>
                                                <div class="text-slate-500 mt-1">Sell: #500</div>
                                            </div>
                                            <div class="flex-none ml-auto relative">
                                                <div class="w-[90px] h-[90px]">
                                                    <canvas id="report-donut-chart"></canvas>
                                                </div>
                                                <div class="font-medium absolute w-full h-full flex items-center justify-center top-0 left-0"> 
                                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-currency-litecoin" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                        <path d="M18 19h-8.194a2 2 0 0 1 -1.98 -2.283l1.674 -11.717" />
                                                        <path d="M14 9l-9 4" />
                                                      </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-span-12 sm:col-span-4 2xl:col-span-3 intro-y">
                                    <div class="box p-5 zoom-in">
                                        <div class="flex items-center">
                                            <div class="w-2/4 flex-none">
                                                <div class="text-lg font-medium truncate">Dogecoin</div>
                                                <div class="text-slate-500 mt-1">Buy: #500</div>
                                                <div class="text-slate-500 mt-1">Sell: #500</div>
                                            </div>
                                            <div class="flex-none ml-auto relative">
                                                <div class="w-[90px] h-[90px]">
                                                    <canvas id="report-donut-chart-3"></canvas>
                                                </div>
                                                <div class="font-medium absolute w-full h-full flex items-center justify-center top-0 left-0"> 
                                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-currency-dogecoin" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                        <path d="M6 12h6" />
                                                        <path d="M9 6v12" />
                                                        <path d="M6 18h6a6 6 0 1 0 0 -12h-6" />
                                                      </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                           
                        </div>
                    </div>
                
                </div>
            </div>
           </div>
        </div>  
    </div>
    )
};

export default Rates