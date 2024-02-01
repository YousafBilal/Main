import React from "react";

// Admin Imports
import MainDashboard from "views/admin/default";
import NFTMarketplace from "views/admin/marketplace";
import Profile from "views/admin/profile";
import DataTables from "views/admin/tables";
import RTLDefault from "views/rtl/default";

// Auth Imports
import SignIn from "views/auth/SignIn";

// Icon Imports
import {
  MdHome,
  MdOutlineShoppingCart,
  MdBarChart,
  MdPerson,
  MdLock,
} from "react-icons/md";
import Usermanagement from "views/usermanagement/Usermanagement";
import Emailchanging from "views/emailchanging/EmailChanging";
import Account from "views/Account/Account";
import EmailVerification from "views/EmailVerification/EmailVerification";
import ChangePassword from "views/Change Password/ChangePassword";

const routes = [
  {
    name: "Dashboard",
    layout: "/admin",
    path: "default",
    icon: <MdHome className="h-6 w-6" />,
    component: <MainDashboard />,
  },
  {
    name: "Users",
    layout: "/admin",
    path: "nft-marketplace",
    icon: <MdPerson className="h-6 w-6" />,
    component: <NFTMarketplace />,
    secondary: true,
  },
  {
    name: "Data Tables",
    layout: "/admin",
    icon: <MdBarChart className="h-6 w-6" />,
    path: "data-tables",
    component: <DataTables />,
  },
  {
    name: "Profile",
    layout: "/admin",
    path: "profile",
    icon: <MdPerson className="h-6 w-6" />,
    component: <Profile />,
  },
  {
    name: "User Management",
    layout: "/admin",
    path: "usermanagemt",
    icon: <MdLock className="h-6 w-6" />,
    component: <Usermanagement />,
  },
  {
    name: "Email Changing",
    layout: "/admin",
    path: "EmailChanging",
    icon: <MdLock className="h-6 w-6" />,
    component: <Emailchanging />,
  },

  {
    name: "Account",
    layout: "/admin",
    path: "Account",
    icon: <MdLock className="h-6 w-6" />,
    component: <Account/>,
  },
  {
    name: "Email Verification",
    layout: "/admin",
    path: "Email Verification",
    icon: <MdLock className="h-6 w-6" />,
    component: <EmailVerification/>,
  },
  {
    name: "Change Password",
    layout: "/admin",
    path: "Change Password",
    icon: <MdLock className="h-6 w-6" />,
    component: <ChangePassword/>,
  },
  ];
export default routes;
