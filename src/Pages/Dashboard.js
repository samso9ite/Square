import React from "react";
import Account from "../layout/Account_menu";
import DesktopMenuBar from "../layout/DesktopMenu";
import MobileMenuBar from "../layout/MobileMenu";
import Notifications from "../layout/Notification";
import Search from "../layout/SearchBar";

const Dashboard = () => {
    return(
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
            <div className="content">
                <div className="grid grid-cols-12 gap-6">
                    <div className="col-span-12 2xl:col-span-9">
                        <div className="grid grid-cols-12 gap-6">
                            <div className="col-span-12 mt-8">
                                <div className="intro-y flex items-center h-10">
                                    <h2 className="text-lg font-medium truncate mr-5">
                                        Welcome Back Samson
                                    </h2>
                                    <a href="" className="ml-auto flex items-center text-primary"> <i data-lucide="refresh-ccw" className="w-4 h-4 mr-3"></i> Reload Data </a>
                                </div>
                                <div className="grid grid-cols-12 gap-6 mt-5">
                                    <div className="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
                                        <div className="report-box zoom-in">
                                            <div className="box p-5">
                                                <div className="flex">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-currency-bitcoin" width="34" height="34" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                        <path d="M6 6h8a3 3 0 0 1 0 6a3 3 0 0 1 0 6h-8" />
                                                        <line x1="8" y1="6" x2="8" y2="18" />
                                                        <line x1="8" y1="12" x2="14" y2="12" />
                                                        <line x1="9" y1="3" x2="9" y2="6" />
                                                        <line x1="13" y1="3" x2="13" y2="6" />
                                                        <line x1="9" y1="18" x2="9" y2="21" />
                                                        <line x1="13" y1="18" x2="13" y2="21" />
                                                      </svg>
                                                     {/* <i data-lucide="shopping-cart" className="report-box__icon text-primary"></i>  --> */}
                                                    {/* <!-- <i className="cc BTC-alt"></i> --> */}
                                                </div>
                                                <div className="text-3xl font-medium leading-8 mt-6">4.710</div>
                                                <div className="text-base text-slate-500 mt-1">Total Transactions</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
                                        <div className="report-box zoom-in">
                                            <div className="box p-5">
                                                <div className="flex">
                                                    {/* <!-- <i data-lucide="credit-card" className="report-box__icon text-pending"></i>  --> */}
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-currency-bitcoin" width="34" height="34" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
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
                                                <div className="text-3xl font-medium leading-8 mt-6">3.721</div>
                                                <div className="text-base text-slate-500 mt-1">Pending Transactions</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
                                        <div className="report-box zoom-in">
                                            <div className="box p-5">
                                                <div className="flex">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-currency-bitcoin" width="34" height="34" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
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
                                                <div className="text-3xl font-medium leading-8 mt-6">2.149</div>
                                                <div className="text-base text-slate-500 mt-1">Completed Transactions</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
                                        <div className="report-box zoom-in">
                                            <div className="box p-5">
                                                <div className="flex">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-currency-bitcoin" width="34" height="34" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
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
                                                <div className="text-3xl font-medium leading-8 mt-6">152.040</div>
                                                <div className="text-base text-slate-500 mt-1">Failed Transactions</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        <div className="col-span-12  grid-cols-12 gap-6 mt-8 text-center">
                            <a href="javascript:;" data-tw-toggle="modal" data-tw-target="#header-footer-slide-over-preview" className="btn btn-primary">Create New Trade </a> 
                        </div>   
                            <div className="col-span-12 grid grid-cols-12 gap-6 mt-8">
                                <div className="col-span-12 sm:col-span-6 2xl:col-span-3 intro-y">
                                    <div className="box p-5 zoom-in">
                                        <div className="flex items-center">
                                            <div className="w-2/4 flex-none">
                                                <div className="text-lg font-medium truncate">Bitcoin</div>
                                                <div className="text-slate-500 mt-1">Buy: #500</div>
                                                <div className="text-slate-500 mt-1">Sell: #500</div>
                                            </div>
                                            <div className="flex-none ml-auto relative">
                                                <div className="w-[90px] h-[90px]">
                                                    <canvas id="report-donut-chart-1"></canvas>
                                                </div>
                                                <div className="font-medium absolute w-full h-full flex items-center justify-center top-0 left-0"> 
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-currency-bitcoin" width="34" height="34" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
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
                                <div className="col-span-12 sm:col-span-6 2xl:col-span-3 intro-y">
                                    <div className="box p-5 zoom-in">
                                        <div className="flex items-center">
                                            <div className="w-2/4 flex-none">
                                                <div className="text-lg font-medium truncate">Ethereum</div>
                                                <div className="text-slate-500 mt-1">Buy: #500</div>
                                                <div className="text-slate-500 mt-1">Sell: #500</div>
                                            </div>
                                            <div className="flex-none ml-auto relative">
                                                <div className="w-[90px] h-[90px]">
                                                    <canvas id="report-donut-chart-2"></canvas>
                                                </div>
                                                <div className="font-medium absolute w-full h-full flex items-center justify-center top-0 left-0"> 
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-currency-ethereum" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                        <path d="M6 12l6 -9l6 9l-6 9z" />
                                                        <path d="M6 12l6 -3l6 3l-6 2z" />
                                                      </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="col-span-12 grid grid-cols-12 gap-6 mt-8">
                                <div className="col-span-12 sm:col-span-6 2xl:col-span-3 intro-y">
                                    <div className="box p-5 zoom-in">
                                        <div className="flex items-center">
                                            <div className="w-2/4 flex-none">
                                                <div className="text-lg font-medium truncate">Litecoin</div>
                                                <div className="text-slate-500 mt-1">Buy: #500</div>
                                                <div className="text-slate-500 mt-1">Sell: #500</div>
                                            </div>
                                            <div className="flex-none ml-auto relative">
                                                <div className="w-[90px] h-[90px]">
                                                    <canvas id="report-donut-chart-3"></canvas>
                                                </div>
                                                <div className="font-medium absolute w-full h-full flex items-center justify-center top-0 left-0"> 
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-currency-litecoin" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                        <path d="M18 19h-8.194a2 2 0 0 1 -1.98 -2.283l1.674 -11.717" />
                                                        <path d="M14 9l-9 4" />
                                                      </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-12 sm:col-span-6 2xl:col-span-3 intro-y">
                                    <div className="box p-5 zoom-in">
                                        <div className="flex items-center">
                                            <div className="w-2/4 flex-none">
                                                <div className="text-lg font-medium truncate">Dogecoin</div>
                                                <div className="text-slate-500 mt-1">Buy: #500</div>
                                                <div className="text-slate-500 mt-1">Sell: #500</div>
                                            </div>
                                            <div className="flex-none ml-auto relative">
                                                <div className="w-[90px] h-[90px]">
                                                    <canvas id="report-donut-chart"></canvas>
                                                </div>
                                                <div className="font-medium absolute w-full h-full flex items-center justify-center top-0 left-0"> 
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-currency-dogecoin" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
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
                            <div className="col-span-12 mt-6">
                                <div className="intro-y block sm:flex items-center h-10">
                                    <h2 className="text-lg font-medium truncate mr-5">
                                        Recent Activities
                                    </h2>
                                  
                                </div>
                                <div className="intro-y overflow-auto lg:overflow-visible mt-8 sm:mt-0">
                                    <table className="table table-report sm:mt-2">
                                        <thead>
                                            <tr>
                                                <th className="whitespace-nowrap">Reference</th>
                                                <th className="whitespace-nowrap">Status</th>
                                                <th className="text-center whitespace-nowrap">Type</th>
                                                <th className="text-center whitespace-nowrap">Coin</th>
                                                <th className="text-center whitespace-nowrap">Coin Amount</th><s></s>
                                                <th className="text-center whitespace-nowrap">Naira Amount</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="intro-x">
                                               
                                                <td className="text-center">13277</td>
                                                <td className="text-center">Completed</td>
                                                <td className="text-center">Sell</td>
                                                <td className="text-center">Bitcoin</td>
                                                <td className="text-center">0.213474843 BTC</td>
                                                <td className="text-center">#20,0000</td>
                                               
                                            </tr>
                                            <tr className="intro-x">
                                               
                                                <td className="text-center">13277</td>
                                                <td className="text-center">Completed</td>
                                                <td className="text-center">Sell</td>
                                                <td className="text-center">Bitcoin</td>
                                                <td className="text-center">0.213474843 BTC</td>
                                                <td className="text-center">#20,0000</td>
                                               
                                            </tr>
                                            <tr className="intro-x">
                                               
                                                <td className="text-center">13277</td>
                                                <td className="text-center">Completed</td>
                                                <td className="text-center">Sell</td>
                                                <td className="text-center">Bitcoin</td>
                                                <td className="text-center">0.213474843 BTC</td>
                                                <td className="text-center">#20,0000</td>
                                               
                                            </tr>
                                            <tr className="intro-x">
                                               
                                                <td className="text-center">13277</td>
                                                <td className="text-center">Completed</td>
                                                <td className="text-center">Sell</td>
                                                <td className="text-center">Bitcoin</td>
                                                <td className="text-center">0.213474843 BTC</td>
                                                <td className="text-center">#20,0000</td>
                                               
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="intro-y flex flex-wrap sm:flex-row sm:flex-nowrap items-center mt-3">
                                    <nav className="w-full sm:w-auto sm:mr-auto">
                                        <ul className="pagination">
                                            <li className="page-item">
                                                <a className="page-link" href="#"> <i className="w-4 h-4" data-lucide="chevrons-left"></i> </a>
                                            </li>
                                            <li className="page-item">
                                                <a className="page-link" href="#"> <i className="w-4 h-4" data-lucide="chevron-left"></i> </a>
                                            </li>
                                            <li className="page-item"> <a className="page-link" href="#">...</a> </li>
                                            <li className="page-item"> <a className="page-link" href="#">1</a> </li>
                                            <li className="page-item active"> <a className="page-link" href="#">2</a> </li>
                                            <li className="page-item"> <a className="page-link" href="#">3</a> </li>
                                            <li className="page-item"> <a className="page-link" href="#">...</a> </li>
                                            <li className="page-item">
                                                <a className="page-link" href="#"> <i className="w-4 h-4" data-lucide="chevron-right"></i> </a>
                                            </li>
                                            <li className="page-item">
                                                <a className="page-link" href="#"> <i className="w-4 h-4" data-lucide="chevrons-right"></i> </a>
                                            </li>
                                        </ul>
                                    </nav>
                                    <select className="w-20 form-select box mt-3 sm:mt-0">
                                        <option>10</option>
                                        <option>25</option>
                                        <option>35</option>
                                        <option>50</option>
                                    </select>
                                </div>
                            </div>
                             <div className="intro-y box mt-5">
                           
                            <div id="header-footer-slide-over" className="p-5">
                                <div className="preview">
                                  
                                   <div id="header-footer-slide-over-preview" className="modal modal-slide-over" data-tw-backdrop="static" tabindex="-1" aria-hidden="true">
                                        <div className="modal-dialog">
                                            <div className="modal-content">
                                                <a data-tw-dismiss="modal" href="javascript:;"> <i data-lucide="x" className="w-8 h-8 text-slate-400"></i> </a>
                                                {/* <!-- BEGIN: Slide Over Header --> */}
                                                <div className="modal-header">
                                                    <h2 className="font-medium text-base mr-auto">
                                                        Broadcast Message
                                                    </h2>
                                                    <button className="btn btn-outline-secondary hidden sm:flex"> <i data-lucide="file" className="w-4 h-4 mr-2"></i> Download Docs </button>
                                                    <div className="dropdown sm:hidden">
                                                        <a className="dropdown-toggle w-5 h-5 block" href="javascript:;" aria-expanded="false" data-tw-toggle="dropdown"> <i data-lucide="more-horizontal" className="w-5 h-5 text-slate-500"></i> </a>
                                                        <div className="dropdown-menu w-40">
                                                            <ul className="dropdown-content">
                                                                <li>
                                                                    <a href="javascript:;" className="dropdown-item"> <i data-lucide="file" className="w-4 h-4 mr-2"></i> Download Docs </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="modal-body">
                                                    <div>
                                                        <label for="modal-form-1" className="form-label">From</label>
                                                        <input id="modal-form-1" type="text" className="form-control" placeholder="example@gmail.com" />
                                                    </div>
                                                    <div className="mt-3">
                                                        <label for="modal-form-2" className="form-label">To</label>
                                                        <input id="modal-form-2" type="text" className="form-control" placeholder="example@gmail.com" /> 
                                                    </div>
                                                    <div className="mt-3">
                                                        <label for="modal-form-3" className="form-label">Subject</label>
                                                        <input id="modal-form-3" type="text" className="form-control" placeholder="Important Meeting" />
                                                    </div>
                                                    <div className="mt-3">
                                                        <label for="modal-form-4" className="form-label">Has the Words</label>
                                                        <input id="modal-form-4" type="text" className="form-control" placeholder="Job, Work, Documentation" />
                                                    </div>
                                                    <div className="mt-3">
                                                        <label for="modal-form-5" className="form-label">Doesn't Have</label>
                                                        <input id="modal-form-5" type="text" className="form-control" placeholder="Job, Work, Documentation" />
                                                    </div>
                                                    <div className="mt-3">
                                                        <label for="modal-form-6" className="form-label">Size</label>
                                                        <select id="modal-form-6" className="form-select">
                                                            <option>10</option>
                                                            <option>25</option>
                                                            <option>35</option>
                                                            <option>50</option>
                                                        </select>
                                                    </div>
                                                </div>
                                               <div className="modal-footer w-full absolute bottom-0">
                                                    <button type="button" data-tw-dismiss="modal" className="btn btn-outline-secondary w-20 mr-1">Cancel</button>
                                                    <button type="button" className="btn btn-primary w-20">Send</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="source-code hidden">
                                    <button data-target="#copy-header-footer-slide-over" className="copy-code btn py-1 px-2 btn-outline-secondary"> <i data-lucide="file" className="w-4 h-4 mr-2"></i> Copy example code </button>
                                    <div className="overflow-y-auto mt-3 rounded-md">
                                        <pre id="copy-header-footer-slide-over" className="source-preview"> <code className="html"> HTMLOpenTag!-- BEGIN: Slide Over Toggle --HTMLCloseTag HTMLOpenTagdiv className=&quot;text-center&quot;HTMLCloseTag HTMLOpenTaga href=&quot;javascript:;&quot; data-tw-toggle=&quot;modal&quot; data-tw-target=&quot;#header-footer-slide-over-preview&quot; className=&quot;btn btn-primary&quot;HTMLCloseTagShow Slide OverHTMLOpenTag/aHTMLCloseTag HTMLOpenTag/divHTMLCloseTag HTMLOpenTag!-- END: Slide Over Toggle --HTMLCloseTag HTMLOpenTag!-- BEGIN: Slide Over Content --HTMLCloseTag HTMLOpenTagdiv id=&quot;header-footer-slide-over-preview&quot; className=&quot;modal modal-slide-over&quot; data-tw-backdrop=&quot;static&quot; tabindex=&quot;-1&quot; aria-hidden=&quot;true&quot;HTMLCloseTag HTMLOpenTagdiv className=&quot;modal-dialog&quot;HTMLCloseTag HTMLOpenTagdiv className=&quot;modal-content&quot;HTMLCloseTag HTMLOpenTaga data-tw-dismiss=&quot;modal&quot; href=&quot;javascript:;&quot;HTMLCloseTag HTMLOpenTagi data-lucide=&quot;x&quot; className=&quot;w-8 h-8 text-slate-400&quot;HTMLCloseTagHTMLOpenTag/iHTMLCloseTag HTMLOpenTag/aHTMLCloseTag HTMLOpenTag!-- BEGIN: Slide Over Header --HTMLCloseTag HTMLOpenTagdiv className=&quot;modal-header&quot;HTMLCloseTag HTMLOpenTagh2 className=&quot;font-medium text-base mr-auto&quot;HTMLCloseTagBroadcast MessageHTMLOpenTag/h2HTMLCloseTag HTMLOpenTagbutton className=&quot;btn btn-outline-secondary hidden sm:flex&quot;HTMLCloseTag HTMLOpenTagi data-lucide=&quot;file&quot; className=&quot;w-4 h-4 mr-2&quot;HTMLCloseTagHTMLOpenTag/iHTMLCloseTag Download Docs HTMLOpenTag/buttonHTMLCloseTag HTMLOpenTagdiv className=&quot;dropdown sm:hidden&quot;HTMLCloseTag HTMLOpenTaga className=&quot;dropdown-toggle w-5 h-5 block&quot; href=&quot;javascript:;&quot; aria-expanded=&quot;false&quot; data-tw-toggle=&quot;dropdown&quot;HTMLCloseTag HTMLOpenTagi data-lucide=&quot;more-horizontal&quot; className=&quot;w-5 h-5 text-slate-500&quot;HTMLCloseTagHTMLOpenTag/iHTMLCloseTag HTMLOpenTag/aHTMLCloseTag HTMLOpenTagdiv className=&quot;dropdown-menu w-40&quot;HTMLCloseTag HTMLOpenTagul className=&quot;dropdown-content&quot;HTMLCloseTag HTMLOpenTagliHTMLCloseTag HTMLOpenTaga href=&quot;javascript:;&quot; className=&quot;dropdown-item&quot;HTMLCloseTag HTMLOpenTagi data-lucide=&quot;file&quot; className=&quot;w-4 h-4 mr-2&quot;HTMLCloseTagHTMLOpenTag/iHTMLCloseTag Download Docs HTMLOpenTag/aHTMLCloseTag HTMLOpenTag/liHTMLCloseTag HTMLOpenTag/ulHTMLCloseTag HTMLOpenTag/divHTMLCloseTag HTMLOpenTag/divHTMLCloseTag HTMLOpenTag/divHTMLCloseTag HTMLOpenTag!-- END: Slide Over Header --HTMLCloseTag HTMLOpenTag!-- BEGIN: Slide Over Body --HTMLCloseTag HTMLOpenTagdiv className=&quot;modal-body&quot;HTMLCloseTag HTMLOpenTagdivHTMLCloseTag HTMLOpenTaglabel for=&quot;modal-form-1&quot; className=&quot;form-label&quot;HTMLCloseTagFromHTMLOpenTag/labelHTMLCloseTag HTMLOpenTaginput id=&quot;modal-form-1&quot; type=&quot;text&quot; className=&quot;form-control&quot; placeholder=&quot;example@gmail.com&quot;HTMLCloseTag HTMLOpenTag/divHTMLCloseTag HTMLOpenTagdiv className=&quot;mt-3&quot;HTMLCloseTag HTMLOpenTaglabel for=&quot;modal-form-2&quot; className=&quot;form-label&quot;HTMLCloseTagToHTMLOpenTag/labelHTMLCloseTag HTMLOpenTaginput id=&quot;modal-form-2&quot; type=&quot;text&quot; className=&quot;form-control&quot; placeholder=&quot;example@gmail.com&quot;HTMLCloseTag HTMLOpenTag/divHTMLCloseTag HTMLOpenTagdiv className=&quot;mt-3&quot;HTMLCloseTag HTMLOpenTaglabel for=&quot;modal-form-3&quot; className=&quot;form-label&quot;HTMLCloseTagSubjectHTMLOpenTag/labelHTMLCloseTag HTMLOpenTaginput id=&quot;modal-form-3&quot; type=&quot;text&quot; className=&quot;form-control&quot; placeholder=&quot;Important Meeting&quot;HTMLCloseTag HTMLOpenTag/divHTMLCloseTag HTMLOpenTagdiv className=&quot;mt-3&quot;HTMLCloseTag HTMLOpenTaglabel for=&quot;modal-form-4&quot; className=&quot;form-label&quot;HTMLCloseTagHas the WordsHTMLOpenTag/labelHTMLCloseTag HTMLOpenTaginput id=&quot;modal-form-4&quot; type=&quot;text&quot; className=&quot;form-control&quot; placeholder=&quot;Job, Work, Documentation&quot;HTMLCloseTag HTMLOpenTag/divHTMLCloseTag HTMLOpenTagdiv className=&quot;mt-3&quot;HTMLCloseTag HTMLOpenTaglabel for=&quot;modal-form-5&quot; className=&quot;form-label&quot;HTMLCloseTagDoesn&#039;t HaveHTMLOpenTag/labelHTMLCloseTag HTMLOpenTaginput id=&quot;modal-form-5&quot; type=&quot;text&quot; className=&quot;form-control&quot; placeholder=&quot;Job, Work, Documentation&quot;HTMLCloseTag HTMLOpenTag/divHTMLCloseTag HTMLOpenTagdiv className=&quot;mt-3&quot;HTMLCloseTag HTMLOpenTaglabel for=&quot;modal-form-6&quot; className=&quot;form-label&quot;HTMLCloseTagSizeHTMLOpenTag/labelHTMLCloseTag HTMLOpenTagselect id=&quot;modal-form-6&quot; className=&quot;form-select&quot;HTMLCloseTag HTMLOpenTagoptionHTMLCloseTag10HTMLOpenTag/optionHTMLCloseTag HTMLOpenTagoptionHTMLCloseTag25HTMLOpenTag/optionHTMLCloseTag HTMLOpenTagoptionHTMLCloseTag35HTMLOpenTag/optionHTMLCloseTag HTMLOpenTagoptionHTMLCloseTag50HTMLOpenTag/optionHTMLCloseTag HTMLOpenTag/selectHTMLCloseTag HTMLOpenTag/divHTMLCloseTag HTMLOpenTag/divHTMLCloseTag HTMLOpenTag!-- END: Slide Over Body --HTMLCloseTag HTMLOpenTag!-- BEGIN: Slide Over Footer --HTMLCloseTag HTMLOpenTagdiv className=&quot;modal-footer w-full absolute bottom-0&quot;HTMLCloseTag HTMLOpenTagbutton type=&quot;button&quot; data-tw-dismiss=&quot;modal&quot; className=&quot;btn btn-outline-secondary w-20 mr-1&quot;HTMLCloseTagCancelHTMLOpenTag/buttonHTMLCloseTag HTMLOpenTagbutton type=&quot;button&quot; className=&quot;btn btn-primary w-20&quot;HTMLCloseTagSendHTMLOpenTag/buttonHTMLCloseTag HTMLOpenTag/divHTMLCloseTag HTMLOpenTag!-- END: Slide Over Footer --HTMLCloseTag HTMLOpenTag/divHTMLCloseTag HTMLOpenTag/divHTMLCloseTag HTMLOpenTag/divHTMLCloseTag HTMLOpenTag!-- END: Slide Over Content --HTMLCloseTag </code> </pre>
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
    );
};

export default Dashboard