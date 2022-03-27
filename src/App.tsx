import {Routes, Route} from 'react-router-dom';
import {routes} from './app/router/routes';
import NotFound from "./components/views/NotFound";
import PageHome from "./components/views/public/PageHome";
import PageLogin from "./components/views/public/PageLogin";
import PageRegister from "./components/views/public/PageRegister";
import ViewPhysiotherapyDashboardTab from "./components/views/physiotherapy/dashboard/ViewPhysiotherapyDashboardTab";
import ViewPhysiotherapyDashboardAnotherTab
    from "./components/views/physiotherapy/dashboard/ViewPhysiotherapyDashboardAnotherTab";
import ViewPhysiotherapyDashboardYetAnotherTab
    from "./components/views/physiotherapy/dashboard/ViewPhysiotherapyDashboardYetAnotherTab";
import ViewPhysiotherapyDashboardThisIsATab
    from "./components/views/physiotherapy/dashboard/ViewPhysiotherapyDashboardThisIsATab";
import ViewMyAccount from "./components/views/physiotherapy/account/ViewMyAccount";
import ViewMyProfile from "./components/views/physiotherapy/account/ViewMyProfile";

function App() {
    return (
        <Routes>
            <Route path="*" element={<NotFound/>}/>
            <Route path={routes.home} element={<PageHome/>}/>
            <Route path={routes.login} element={<PageLogin/>}/>
            <Route path={routes.register} element={<PageRegister/>}/>
            <Route path={routes.tab} element={<ViewPhysiotherapyDashboardTab/>}/>
            <Route path={routes.anotherTab} element={<ViewPhysiotherapyDashboardAnotherTab/>}/>
            <Route path={routes.yetAnotherTab} element={<ViewPhysiotherapyDashboardYetAnotherTab/>}/>
            <Route path={routes.thisIsATab} element={<ViewPhysiotherapyDashboardThisIsATab/>}/>
            <Route path={routes.account} element={<ViewMyAccount/>}/>
            <Route path={routes.profile} element={<ViewMyProfile/>}/>
        </Routes>

    );
}

export default App;
