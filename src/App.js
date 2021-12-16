import { Route, Switch, Redirect } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import HomePage from "./pages/HomePage";
import NoticePage from "./pages/NoticePage";
import Contact from "./pages/Contact";
import AcademicProgramsDetail from "./components/Programs/AcademicProgramsDetail/AcademicProgramsDetail";
import NoticeDetail from "./pages/NoticeDetail";
import ScholarshipPage from "./pages/ScholarshipPage";
import DownloadsPage from "./pages/DownloadsPage";
import Download from "./components/Downloads/Download/Download";
import ResultsPage from "./pages/ResultsPage";
import VacancyPage from "./pages/VacancyPage";
import VacancyDetail from "./pages/VacancyDetail";
import ShortTermProgramsDetail from "./pages/ShortTermProgramsDetail";
import Login from "./components/Login";

import { useSelector } from "react-redux";
import Dashboard from "./components/Dashboard/Dashboard";
import DNotice from "./components/Dashboard/Notice/DNotice";
import Course from "./components/Dashboard/Course/Course";
import MainCarousel from "./components/Dashboard/HomePage/MainCarousel/MainCarousel";

function App() {
  const { isLoggedIn } = useSelector((state) => state.auth);
  return (
    <Switch>
      <Route path="/Identity/Account/login" exact>
        {!isLoggedIn && <Login />}
        {isLoggedIn &&  <Redirect to="/drmpi-admin" />}
      </Route>
      <Route path="/drmpi-admin/:path?" exact>
        <Dashboard>
          <Switch>
            <Route path="/drmpi-admin" exact>
              {isLoggedIn && <DNotice />}
              {!isLoggedIn && <Redirect to="/Identity/Account/login" />}
            </Route>
            <Route path="/drmpi-admin/notice" exact>
              {isLoggedIn && <DNotice />}
              {!isLoggedIn && <Redirect to="/Identity/Account/login" />}
            </Route>
            <Route path="/drmpi-admin/courses" exact>
              {isLoggedIn && <Course />}
              {!isLoggedIn && <Redirect to="/Identity/Account/login" />}
            </Route>
            <Route path="/drmpi-admin/slider" exact>
              {isLoggedIn && <MainCarousel />}
              {!isLoggedIn && <Redirect to="/Identity/Account/login" />}
            </Route>
          </Switch>
        </Dashboard>
      </Route>
      <Route>
        <Layout>
          <Switch>
            <Route path="/" exact>
              <HomePage />
            </Route>
            <Route path="/notice" exact>
              <NoticePage />
            </Route>
            <Route path="/contact" exact>
              <Contact />
            </Route>
            <Route path="/courses/:courseId">
              <AcademicProgramsDetail />
            </Route>
            <Route path="/notice/:noticeId">
              <NoticeDetail />
            </Route>
            <Route path="/scholarship" exact>
              <ScholarshipPage />
            </Route>
            <Route path="/downloads" exact>
              <DownloadsPage />
            </Route>
            <Route path="/downloads/:downloadId">
              <Download />
            </Route>
            <Route path="/results" exact>
              <ResultsPage />
            </Route>
            <Route path="/vacancy" exact>
              <VacancyPage />
            </Route>
            <Route path="/vacancy/:vacancyId">
              <VacancyDetail />
            </Route>
            <Route path="/short-term-programs/:shortTermProgramsId">
              <ShortTermProgramsDetail />
            </Route>
          </Switch>
        </Layout>
      </Route>
    </Switch>
  );
}

export default App;
