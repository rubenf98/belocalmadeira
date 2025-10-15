import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createBrowserHistory } from "history";

//public pages
import Homepage from "./components/pages/Homepage";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Login from "./components/pages/Login";
import Layout from "./components/Layout";
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

import ScrollToTop from "./components/common/ScrollToTop";
import BookingPage from "./components/pages/Activities/BookingPage";
import Visit from "./components/pages/Visit";
import Transfers from "./components/dashboard/pages/Transfer/Transfers";
import Terms from "./components/common/Terms";
import ActivityList from "./components/pages/Activities/ActivityList";

export const history = createBrowserHistory();

function Router() {
    return (
        <BrowserRouter history={history}>
            <ScrollToTop>
                <Routes>
                    <Route path="/activities/:activity/:id" element={<Layout><BookingPage /></Layout>} />
                    <Route path="/activities/:activity" element={<Layout><ActivityList /></Layout>} />
                    <Route exact path="/activities/biking" element={<Layout><Biking /></Layout>} />
                    <Route exact path="/activities/coasteering" element={<Layout><Coasteering /></Layout>} />


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
