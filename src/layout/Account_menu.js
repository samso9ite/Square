import React from 'react';

const Account = () => {
    return(
        <div className="intro-x dropdown w-8 h-8">
        <div className="dropdown-toggle w-8 h-8 rounded-full overflow-hidden shadow-lg image-fit zoom-in scale-110" role="button" aria-expanded="false" data-tw-toggle="dropdown">
            <img alt="Square Logo" src={require("../assets/images/profile-6.jpg").default} />
        </div>
        <div className="dropdown-menu w-56">
            <ul className="dropdown-content bg-primary/80 before:block before:absolute before:bg-black before:inset-0 before:rounded-md before:z-[-1] text-white">
                <li class="p-2">
                    <div class="font-medium">Al Pacino</div>
                    <div class="text-xs text-white/60 mt-0.5 dark:text-slate-500">DevOps Engineer</div>
                </li>
                <li>
                    <hr className="dropdown-divider border-white/[0.08]" /> 
                </li>
                <li>
                    <a href="" className="dropdown-item hover:bg-white/5"> <i data-lucide="user" className="w-4 h-4 mr-2"></i> Profile </a>
                </li>
                <li>
                    <a href="" className="dropdown-item hover:bg-white/5"> <i data-lucide="edit" className="w-4 h-4 mr-2"></i> Add Account </a>
                </li>
                <li>
                    <a href="" className="dropdown-item hover:bg-white/5"> <i data-lucide="lock" className="w-4 h-4 mr-2"></i> Reset Password </a>
                </li>
                <li>
                    <a href="" className="dropdown-item hover:bg-white/5"> <i data-lucide="help-circle" className="w-4 h-4 mr-2"></i> Help </a>
                </li>
                <li>
                    <hr className="dropdown-divider border-white/[0.08]" />
                </li>
                <li>
                    <a href="" className="dropdown-item hover:bg-white/5"> <i data-lucide="toggle-right" className="w-4 h-4 mr-2"></i> Logout </a>
                </li>
            </ul>
        </div>
    </div>
    )
};
export default Account 