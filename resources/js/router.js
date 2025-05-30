import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createBrowserHistory } from "history";

//public pages
import Homepage from "./components/pages/Homepage";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Login from "./components/pages/Login";
import Layout from "./components/Layout";
import Canyoning from "./components/pages/Activities/Canyoning";
import Hiking from "./components/pages/Activities/Hiking";
import Coasteering from "./components/pages/Activities/Coasteering";
import Biking from "./components/pages/Activities/Biking";
import ThemeContainer from "./components/ThemeContainer";
import PainelLayout from "./components/dashboard/PainelLayout";
import DashboardContact from "./components/dashboard/pages/Contact/Contact";
import Blocked from "./components/dashboard/pages/Blocked/Blocked";
import DashboardReservations from "./components/dashboard/pages/Reservations/Reservations";
import DashboardPainel from "./components/dashboard/pages/Painel";
import Confirmation from "./components/pages/Confirmation";
import ConfirmationTour from "./components/pages/ConfirmationTour";

import ActivitiesContainer from "./components/pages/ActivitiesContainer";
import ScrollToTop from "./components/common/ScrollToTop";
import Level from "./components/pages/Activities/Level";
import Visit from "./components/pages/Visit";
import Transfers from "./components/dashboard/pages/Transfer/Transfers";
import HikingLevel from "./components/pages/Activities/HikingLevel";
import Terms from "./components/common/Terms";

export const history = createBrowserHistory();

function Router() {
    return (
        <BrowserRouter history={history}>
            <ScrollToTop>
                <Routes>
                    <Route exact path="/activities/hiking/:index" element={<Layout><HikingLevel /></Layout>} />
                    <Route exact path="/activities/canyoning/:index" element={<Layout><Level /></Layout>} />
                    <Route exact path="/activities/canyoning" element={<Layout><Canyoning /></Layout>} />
                    <Route exact path="/activities/hiking" element={<Layout><Hiking /></Layout>} />
                    <Route exact path="/activities/coasteering" element={<Layout><Coasteering /></Layout>} />
                    <Route exact path="/activities/biking" element={<Layout><Biking /></Layout>} />
                    <Route exact path="/activities" element={<Layout><ActivitiesContainer /></Layout>} />
                    <Route exact path="/terms" element={<Layout><Terms /></Layout>} />

                    <Route exact path="/about" element={<Layout><About /></Layout>} />
                    <Route exact path="/contact" element={<Layout><Contact /></Layout>} />
                    <Route exact path="/login" element={<ThemeContainer><Login /></ThemeContainer>} />
                    <Route exact path="/visit" element={<ThemeContainer><Visit /></ThemeContainer>} />

                    <Route exact path="/confirmationTransfer/:token" element={<Layout><ConfirmationTour /></Layout>} />
                    <Route exact path="/confirmation/:token" element={<Layout><Confirmation /></Layout>} />

                    <Route exact path="/painel/transfers" element={<PainelLayout><Transfers /></PainelLayout>} />

                    <Route exact path="/painel/bloqueado" element={<PainelLayout><Blocked /></PainelLayout>} />
                    <Route exact path="/painel/contacto" element={<PainelLayout><DashboardContact /></PainelLayout>} />
                    <Route exact path="/painel/reservas" element={<PainelLayout><DashboardReservations /></PainelLayout>} />
                    <Route exact path="/painel" element={<PainelLayout><DashboardPainel /></PainelLayout>} />

                    <Route exact path="/" element={<Layout><Homepage /></Layout>} />

                </Routes>
            </ScrollToTop>
        </BrowserRouter>
    );
};

export default Router;
