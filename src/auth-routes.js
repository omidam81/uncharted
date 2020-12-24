import  {lazy } from 'react';
const Main = lazy(() => import('./views/auth-pages/Main'));
const PersonalInfo = lazy(() => import('./views/auth-pages/PersonalInfo'));
const CompanyInfo = lazy(() => import('./views/auth-pages/CompanyInfo'));
const CompanyAddress = lazy(() => import('./views/auth-pages/CompanyAddress'));
const EmailValidation = lazy(() => import('./views/auth-pages/EmailValidation'));
const FleetInfo = lazy(() => import('./views/auth-pages/FleetInfo'));
const ConfirmFleetInfo = lazy(() => import('./views/auth-pages/ConfirmFleetInfo'));
const ExperienceInfo = lazy(() => import('./views/auth-pages/ExperienceInfo'));
const TechnicalInfo = lazy(() => import('./views/auth-pages/TechnicalInfo'));

var Routes = [
    {
        exact:true,
        path: "/main",
        name: "Main",
        component: Main,
        layout: "/auth"
    },

    {
        exact:false,
        path: "/personal-info",
        name: "Personal Info",
        component: PersonalInfo,
        layout: "/auth"
    },
    {
        exact:false,
        path: "/company-info",
        name: "Company Info",
        component: CompanyInfo,
        layout: "/auth"
    },

    {
        exact:false,
        path: "/company-address",
        name: "Company Address",
        component: CompanyAddress,
        layout: "/auth"
    },

    {
        exact:false,
        path: "/validate-email",
        name: "Validate Email",
        component: EmailValidation,
        layout: "/auth"
    },

    {
        exact:false,
        path: "/fleet-info",
        name: "Fleet Info",
        component: FleetInfo,
        layout: "/auth"
    },
    {
        exact:false,
        path: "/confirm-fleet-info",
        name: "Confirm Fleet Info",
        component: ConfirmFleetInfo,
        layout: "/auth"
    },

    {
        exact:false,
        path: "/experience-info",
        name: "Experience Info",
        component: ExperienceInfo,
        layout: "/auth"
    },
    {
        exact:false,
        path: "/technical-info",
        name: "Technical Info",
        component: TechnicalInfo,
        layout: "/auth"
    },
];
export default Routes;
