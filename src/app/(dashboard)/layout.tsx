import Navbar from "./_components/Navbar";
import Sidebar from "./_components/Sidebar";

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='h-screen'>
      <Sidebar />

      <div className='flex flex-col h-full lg:ml-64'>
        {/* <Navbar /> */}
        <main className='flex-1 pt-14 lg:pt-22 px-4 lg:px-8 h-[calc(100vh-3rem)] overflow-auto bg-'>
          {children}
        </main>
      </div>
    </div>
  );
};


