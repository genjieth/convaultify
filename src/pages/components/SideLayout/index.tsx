import Sidebar from "../Sidebar";
import Loader from "../common/Loader";
import Footer from "../Footer";

import { useState, useEffect } from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <div className="bg-gray-100">
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="flex h-[calc(100vh-128px)] overflow-hidden">
            <Sidebar />
            <div className="mx-auto px-4 md:px-6 2xl:px-10 relative flex flex-1 flex-col overflow-y-auto pt-4 md:pt-6 2xl:pt-10">
              {children}
              <Footer />
            </div>
          </div>
        </>
      )}
    </div>
  );
}