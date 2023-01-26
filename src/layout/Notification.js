import React from 'react';

const Notifications = () => {
    return(
        <div className="intro-x dropdown mr-4 sm:mr-6">
            <div className="dropdown-toggle notification notification--bullet cursor-pointer" role="button" aria-expanded="false" data-tw-toggle="dropdown"> <i data-lucide="bell" className="notification__icon dark:text-slate-500"></i> </div>
            <div className="notification-content pt-2 dropdown-menu">
                <div className="notification-content__box dropdown-content">
                    <div className="notification-content__title">Notifications</div>
                    <div className="cursor-pointer relative flex items-center ">
                        <div className="w-12 h-12 flex-none image-fit mr-1">
                            <img alt="Midone - HTML Admin Template" className="rounded-full" src="dist/images/profile-3.jpg" />
                            <div className="w-3 h-3 bg-success absolute right-0 bottom-0 rounded-full border-2 border-white"></div>
                        </div>
                        <div className="ml-2 overflow-hidden">
                            <div className="flex items-center">
                                <a href="javascript:;" className="font-medium truncate mr-5">Al Pacino</a> 
                                <div className="text-xs text-slate-400 ml-auto whitespace-nowrap">01:10 PM</div>
                            </div>
                            <div className="w-full truncate text-slate-500 mt-0.5">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classNameical Latin literature from 45 BC, making it over 20</div>
                        </div>
                    </div>
                    <div className="cursor-pointer relative flex items-center mt-5">
                        <div className="w-12 h-12 flex-none image-fit mr-1">
                            <img alt="Midone - HTML Admin Template" className="rounded-full" src="dist/images/profile-4.jpg" />
                            <div className="w-3 h-3 bg-success absolute right-0 bottom-0 rounded-full border-2 border-white"></div>
                        </div>
                        <div className="ml-2 overflow-hidden">
                            <div className="flex items-center">
                                <a href="javascript:;" className="font-medium truncate mr-5">Sean Connery</a> 
                                <div className="text-xs text-slate-400 ml-auto whitespace-nowrap">01:10 PM</div>
                            </div>
                            <div className="w-full truncate text-slate-500 mt-0.5">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem </div>
                        </div>
                    </div>
                    <div className="cursor-pointer relative flex items-center mt-5">
                        <div className="w-12 h-12 flex-none image-fit mr-1">
                            <img alt="Midone - HTML Admin Template" className="rounded-full" src="dist/images/profile-2.jpg" />
                            <div className="w-3 h-3 bg-success absolute right-0 bottom-0 rounded-full border-2 border-white"></div>
                        </div>
                        <div className="ml-2 overflow-hidden">
                            <div className="flex items-center">
                                <a href="javascript:;" className="font-medium truncate mr-5">Johnny Depp</a> 
                                <div className="text-xs text-slate-400 ml-auto whitespace-nowrap">01:10 PM</div>
                            </div>
                            <div className="w-full truncate text-slate-500 mt-0.5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#039;s standard dummy text ever since the 1500</div>
                        </div>
                    </div>
                    <div className="cursor-pointer relative flex items-center mt-5">
                        <div className="w-12 h-12 flex-none image-fit mr-1">
                            <img alt="Midone - HTML Admin Template" className="rounded-full" src="dist/images/profile-5.jpg" />
                            <div className="w-3 h-3 bg-success absolute right-0 bottom-0 rounded-full border-2 border-white"></div>
                        </div>
                        <div className="ml-2 overflow-hidden">
                            <div className="flex items-center">
                                <a href="javascript:;" className="font-medium truncate mr-5">Russell Crowe</a> 
                                <div className="text-xs text-slate-400 ml-auto whitespace-nowrap">05:09 AM</div>
                            </div>
                            <div className="w-full truncate text-slate-500 mt-0.5">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem </div>
                        </div>
                    </div>
                    <div className="cursor-pointer relative flex items-center mt-5">
                        <div className="w-12 h-12 flex-none image-fit mr-1">
                            <img alt="Midone - HTML Admin Template" className="rounded-full" src="dist/images/profile-9.jpg" />
                            <div className="w-3 h-3 bg-success absolute right-0 bottom-0 rounded-full border-2 border-white"></div>
                        </div>
                        <div className="ml-2 overflow-hidden">
                            <div className="flex items-center">
                                <a href="javascript:;" className="font-medium truncate mr-5">Kevin Spacey</a> 
                                <div className="text-xs text-slate-400 ml-auto whitespace-nowrap">01:10 PM</div>
                            </div>
                            <div className="w-full truncate text-slate-500 mt-0.5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#039;s standard dummy text ever since the 1500</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default Notifications