import Navbar from "./_components/Navbar";
import Sidebar from "./_components/Sidebar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='h-screen'>
      <Sidebar />

      <div className='flex flex-col h-full lg:ml-64'>
        <Navbar />
        <main className='flex-1 pt-14 lg:pt-20 px-4 h-[calc(100vh-3rem)] overflow-auto bg-'>
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
