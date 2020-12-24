import  {lazy } from 'react';
const Initial = lazy(() => import('./views/agreement-pages/Initial'));
const UploadDocuments = lazy(() => import('./views/agreement-pages/UploadDocuments'));
const CreditApplication = lazy(() => import('./views/agreement-pages/CreditApplication'));
const FinalAgreement = lazy(() => import('./views/agreement-pages/FinalAgreement'));
const ExperienceInfo = lazy(() => import('./views/agreement-pages/ExperienceInfo'));

var Routes = [
    {
        exact:true,
        path: "/initial",
        name: "Initial Agreements",
        component: Initial,
        layout: "/agreements"
    },
    {
        exact:false,
        path: "/upload-documents",
        name: "Upload Documents",
        component: UploadDocuments,
        layout: "/agreements"
    },

    {
        exact:false,
        path: "/credit-application",
        name: "Credit Application",
        component: CreditApplication,
        layout: "/agreements"
    },

    {
        exact:false,
        path: "/final-agreement",
        name: "Final Agreement",
        component: FinalAgreement,
        layout: "/agreements"
    },
 

    {
        exact:false,
        path: "/experience-info",
        name: "Experience Info",
        component: ExperienceInfo,
        layout: "/agreements"
    },
 
];
export default Routes;
