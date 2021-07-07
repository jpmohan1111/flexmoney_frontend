import React, { useState, Suspense } from "react";
import { useHistory, useParams } from "react-router-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

// import Homepage from "./container/HomePage/HomePage";
// import Footer from "./component/Footer/Footer";
// import Header from "./component/Header/Header";

import PageNotFound from "./container/PageNotFound/PageNotFound";
import InternalServerError from "./container/InternalServerError/InternalServerError";
import StickyBar from "./component/StickyBar/StickyBar";
import loader from "./images/loader.gif";

import retry from "./retry";

const ContactUs = React.lazy(() =>
  retry(() => import("./container/ContactUs/ContactUs"))
);

// import Announcement from "./component/Announcement/Announcement";
// import AboutUs from "./container/AboutUs/AboutUs";

const Homepage = React.lazy(() =>
  retry(() => import("./container/HomePage/HomePage"))
);
const Footer = React.lazy(() =>
  retry(() => import("./component/Footer/Footer"))
);
const Header = React.lazy(() =>
  retry(() => import("./component/Header/Header"))
);

const Announcement = React.lazy(() =>
  retry(() => import("./component/Announcement/Announcement"))
);
const AboutUs = React.lazy(() =>
  retry(() => import("./container/AboutUs/AboutUs"))
);

const Careers = React.lazy(() =>
  retry(() => import("./container/Careers/Careers"))
);
const Lenders = React.lazy(() =>
  retry(() => import("./container/Lenders/Lenders"))
);
// const Merchants = React.lazy(() =>
//   retry(() => import("./container/Merchants/Merchants"))
// );
const Merchants = React.lazy(() =>
  retry(() => import("./container/Merchants/Merchants"))
);
const InTheNews = React.lazy(() =>
  retry(() => import("./container/InTheNews/InTheNews"))
);
const NewsPage = React.lazy(() =>
  retry(() => import("./container/NewsPage/NewsPage"))
);

const DefaultLayout = (props) => {
  const [show, setShow] = useState(true);
  const { idd } = useParams();
  return (
    <>
      <Suspense
        fallback={
          <div
            style={{ height: "100vh", width: "100%" }}
            className="d-f f-c j-c a-c"
          >
            <img className="loader" src={loader} />
          </div>
        }
      >
        {/* {show ? <Announcement onClick={() => setShow(false)} /> : null} */}
        <div className="d-f f-c jc-sb mn-h100">
          <div>
            <Header />

            <Switch>
              <Route exact path="/" component={Homepage} />
              <Route exact path="/aboutus" component={AboutUs} />
              <Route exact path="/careers" component={Careers} />
              <Route exact path="/lenders" component={Lenders} />
              <Route exact path="/merchants" component={Merchants} />
              <Route exact path="/in-the-news" component={InTheNews} />
              <Route exact path="/in-the-news/:id">
                <NewsPage history={props.history} key="idd" />
              </Route>
              <Route exact path="/contactus" component={ContactUs} />
              <Route exact path="/404" component={PageNotFound} />
              <Route exact path="/500" component={InternalServerError} />

              <Redirect to="/404"></Redirect>
            </Switch>
          </div>
          <Footer history={props.history} />
        </div>

        <StickyBar history={props.history} />
      </Suspense>
    </>
  );
};

export default DefaultLayout;
