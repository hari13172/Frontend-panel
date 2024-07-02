import ProSidebar from "./ProSidebar";
import MainPanel from "./MainPanel";
import AppRoutes from "./Routes";

function Page() {
  return (
    <div className=" bg-page flex">
      <ProSidebar />
      <MainPanel />
    </div>
  );
}

export default Page;
