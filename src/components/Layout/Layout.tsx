import AppAside from "./AppAside";
import AppContent from "./AppContent";
import AppHeader from "./AppHeader";
import AppSidebar from "./AppSidebar";

const Layout = () => {
  return (
    <>
      <AppSidebar />
      <div className="wrapper d-flex flex-column h-full bg-light dark:bg-transparent">
        <AppHeader />
        <div className="body overflow-auto px-3 pb-3">
          <AppContent />
        </div>
      </div>
      <AppAside />
    </>
  );
};

export default Layout;
