import React from "react";
import Account from "../layout/Account_menu";
import DesktopMenuBar from "../layout/DesktopMenu";
import MobileMenuBar from "../layout/MobileMenu";
import Notifications from "../layout/Notification";
import Search from "../layout/SearchBar";

const Transactions = () => {
    return(
        <div>
            <MobileMenuBar />
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
                <h2 class="intro-y text-lg font-medium mt-10">
                    Transaction List
                </h2>
                <div class="grid grid-cols-12 gap-6 mt-5">
                    <div class="intro-y col-span-12 flex flex-wrap xl:flex-nowrap items-center mt-2">
                        <div class="flex w-full sm:w-auto">
                            <div class="w-48 relative text-slate-500">
                                <input type="text" class="form-control w-48 box pr-10" placeholder="Search by invoice..." />
                                <i class="w-4 h-4 absolute my-auto inset-y-0 mr-3 right-0" data-lucide="search"></i> 
                            </div>
                            <select class="form-select box ml-2">
                                <option>Status</option>
                                <option>Waiting Payment</option>
                                <option>Confirmed</option>
                                <option>Packing</option>
                                <option>Delivered</option>
                                <option>Completed</option>
                            </select>
                        </div>
                        <div class="hidden xl:block mx-auto text-slate-500">Showing 1 to 10 of 150 entries</div>
                    
                    </div>
                    <div class="intro-y col-span-12 overflow-auto 2xl:overflow-visible">
                        <table class="table table-report sm:mt-2">
                            <thead>
                                <tr>
                                    <th class="whitespace-nowrap">Reference</th>
                                    <th class="whitespace-nowrap">Status</th>
                                    <th class="text-center whitespace-nowrap">Type</th>
                                    <th class="text-center whitespace-nowrap">Coin</th>
                                    <th class="text-center whitespace-nowrap">Coin Amount</th><s></s>
                                    <th class="text-center whitespace-nowrap">Naira Amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="intro-x">
                                
                                    <td class="text-center">SELL-13277</td>
                                    <td class="text-center">Completed</td>
                                    <td class="text-center">Sell</td>
                                    <td class="text-center">Bitcoin</td>
                                    <td class="text-center">0.213474843 BTC</td>
                                    <td class="text-center">#20,0000</td>
                                
                                </tr>
                                <tr class="intro-x">
                                
                                    <td class="text-center">BUY-13277</td>
                                    <td class="text-center">Completed</td>
                                    <td class="text-center">Sell</td>
                                    <td class="text-center">Bitcoin</td>
                                    <td class="text-center">0.213474843 BTC</td>
                                    <td class="text-center">#20,0000</td>
                                
                                </tr>
                                <tr class="intro-x">
                                
                                    <td class="text-center">SELL-13277</td>
                                    <td class="text-center">Completed</td>
                                    <td class="text-center">Sell</td>
                                    <td class="text-center">Bitcoin</td>
                                    <td class="text-center">0.213474843 BTC</td>
                                    <td class="text-center">#20,0000</td>
                                
                                </tr>
                                <tr class="intro-x">
                                
                                    <td class="text-center">BUY-13277</td>
                                    <td class="text-center">Completed</td>
                                    <td class="text-center">Sell</td>
                                    <td class="text-center">Bitcoin</td>
                                    <td class="text-center">0.213474843 BTC</td>
                                    <td class="text-center">#20,0000</td>
                                
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="intro-y col-span-12 flex flex-wrap sm:flex-row sm:flex-nowrap items-center">
                        <nav class="w-full sm:w-auto sm:mr-auto">
                            <ul class="pagination">
                                <li class="page-item">
                                    <a class="page-link" href="#"> <i class="w-4 h-4" data-lucide="chevrons-left"></i> </a>
                                </li>
                                <li class="page-item">
                                    <a class="page-link" href="#"> <i class="w-4 h-4" data-lucide="chevron-left"></i> </a>
                                </li>
                                <li class="page-item"> <a class="page-link" href="#">...</a> </li>
                                <li class="page-item"> <a class="page-link" href="#">1</a> </li>
                                <li class="page-item active"> <a class="page-link" href="#">2</a> </li>
                                <li class="page-item"> <a class="page-link" href="#">3</a> </li>
                                <li class="page-item"> <a class="page-link" href="#">...</a> </li>
                                <li class="page-item">
                                    <a class="page-link" href="#"> <i class="w-4 h-4" data-lucide="chevron-right"></i> </a>
                                </li>
                                <li class="page-item">
                                    <a class="page-link" href="#"> <i class="w-4 h-4" data-lucide="chevrons-right"></i> </a>
                                </li>
                            </ul>
                        </nav>
                        <select class="w-20 form-select box mt-3 sm:mt-0">
                            <option>10</option>
                            <option>25</option>
                            <option>35</option>
                            <option>50</option>
                        </select>
                    </div>
                  </div>
                <div id="delete-confirmation-modal" class="modal" tabindex="-1" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-body p-0">
                                <div class="p-5 text-center">
                                    <i data-lucide="x-circle" class="w-16 h-16 text-danger mx-auto mt-3"></i> 
                                    <div class="text-3xl mt-5">Are you sure?</div>
                                    <div class="text-slate-500 mt-2">
                                        Do you really want to delete these records? 
                                        <br />
                                        This process cannot be undone.
                                    </div>
                                </div>
                                <div class="px-5 pb-8 text-center">
                                    <button type="button" data-tw-dismiss="modal" class="btn btn-outline-secondary w-24 mr-1">Cancel</button>
                                    <button type="button" class="btn btn-danger w-24">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Transactions