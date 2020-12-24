import  {lazy } from 'react';
const Main = lazy(() => import('./views/main/Main'));
const CompanyInfo = lazy(() => import('./views/main/CompanyInfo'));
const Experiences = lazy(() => import('./views/main/Experiences'));
const Experience = lazy(() => import('./views/main/Experience'));
const FleetAndTraning = lazy(() => import('./views/main/FleetAndTraning'));
const MarketingToolbox = lazy(() => import('./views/main/MarketingToolbox'));
const Profile = lazy(() => import('./views/main/Profile'));
const Account = lazy(() => import('./views/main/Account'));
const LoginAndSecurity = lazy(() => import('./views/main/LoginAndSecurity'));
const PersonalInfo = lazy(() => import('./views/main/PersonalInfo'));
const ProfileView = lazy(() => import('./views/main/ProfileView'));
const EditProfile = lazy(() => import('./views/main/EditProfile'));
 
var Routes = [
    {
        exact:true,
        path: "/main",
        name: "Home",
        component: Main,
        layout: "/"
    },
    {
        exact:false,
        path: "/company-info",
        name: "Home",
        component: CompanyInfo,
        layout: "/"
    },

    {
        exact:false,
        path: "/experiences",
        name: "Home",
        component: Experiences,
        layout: "/"
    },

    {
        exact:false,
        path: "/experience/:id",
        name: "Home",
        component: Experience,
        layout: "/"
    },

    {
        exact:false,
        path: "/fleet-and-training",
        name: "Home",
        component: FleetAndTraning,
        layout: "/"
    },

    {
        exact:false,
        path: "/marketing-toolbox",
        name: "Home",
        component: MarketingToolbox,
        layout: "/"
    },

    {
        exact:false,
        path: "/profile",
        name: "Home",
        component: Profile,
        layout: "/"
    },

    {
        exact:false,
        path: "/account",
        name: "Home",
        component: Account,
        layout: "/"
    },

    {
        exact:false,
        path: "/login-and-security",
        name: "Home",
        component: LoginAndSecurity,
        layout: "/"
    },
     
    {
        exact:false,
        path: "/personal-info",
        name: "Home",
        component: PersonalInfo,
        layout: "/"
    },
    {
        exact:false,
        path: "/view-profile",
        name: "Home",
        component: ProfileView,
        layout: "/"
    },

    {
        exact:false,
        path: "/edit-profile",
        name: "Home",
        component: EditProfile,
        layout: "/"
    },
     
 
];
export default Routes;
