import SideBar from "./_components/side_bar/SideBar";

const Dashboardlayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className=" max-w-7xl mx-auto px-5 py-2">
      <div className=" flex gap-3">
        <SideBar />
        {children}
      </div>
    </div>
  );
};

export default Dashboardlayout;
