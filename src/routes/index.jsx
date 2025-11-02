import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

import Layout from "../components/layout/Layout";
import Loading from "../components/ui/Loading";

const Home = lazy(() => import("../pages/Home"));
const NotFound = lazy(() => import("../pages/NotFound"));

export default function AppRoutes() {
  return (
    <Suspense fallback={<Loading />}>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Suspense>
  );
}
