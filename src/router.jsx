import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
import Careers from "./pages/Careers";
import Home from "./pages/Home";
import HomeLayout from "./layouts/Home";
import CareersLayout from "./layouts/Careers";
import RecStaff from "./pages/DetailCareer/RecStaff";
import TnDStaff from "./pages/DetailCareer/TnDStaff";
import PayStaff from "./pages/DetailCareer/PayStaff";
import Uiux from "./pages/DetailCareer/Uiux";
import FE from "./pages/DetailCareer/FE";
import Account from "./pages/DetailCareer/Account";
import ProjProg from "./pages/DetailCareer/ProjProg";
import PubliRela from "./pages/DetailCareer/PubliRela";
import Adminis from "./pages/DetailCareer/Adminis";
import CreMar from "./pages/DetailCareer/CreMar";
import ProjMar from "./pages/DetailCareer/ProjMar";
import CreDes from "./pages/DetailCareer/CreDes";

function router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<HomeLayout />}>
          <Route exact path="/" element={<Home />} />
        </Route>
        <Route element={<CareersLayout />}>
          <Route path="/careers" element={<Careers />} />
          <Route path="/careers/recruitment" element={<RecStaff />} />
          <Route
            path="/careers/training-and-development"
            element={<TnDStaff />}
          />
          <Route path="/careers/payroll" element={<PayStaff />} />
          <Route path="/careers/uiux" element={<Uiux />} />
          <Route path="/careers/frontend-developer" element={<FE />} />
          <Route path="/careers/accounting" element={<Account />} />
          <Route path="/careers/project-and-program" element={<ProjProg />} />
          <Route path="/careers/public-relation" element={<PubliRela />} />
          <Route path="/careers/administration" element={<Adminis />} />
          <Route path="/careers/social-media" element={<CreMar />} />
          <Route path="/careers/project-marketing" element={<ProjMar />} />
          <Route path="/careers/creative-design" element={<CreDes />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default router;
