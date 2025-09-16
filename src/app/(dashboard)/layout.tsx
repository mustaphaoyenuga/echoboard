import BoardSidebar from "@/components/board/BoardSidebar";
import { Button } from "@/components/ui/button";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import Navbar from "./_components/Navbar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='h-screen'>
      <div className='w-64 z-50 shrink-0 hidden lg:block fixed top-0 left-0 bottom-0 border-r bg-gray-50'>
        Sidebar
      </div>

      {/* Main Content */}
      <div className='flex flex-col h-full lg:ml-64'>
        <Navbar />
        <main className='flex-1 pt-14 lg:pt-20 px-4 h-[calc(100vh-3rem)] overflow-auto bg-'>{children}</main>
      </div>
    </div>
  );
  // return (
  //   <SidebarProvider>
  //     <BoardSidebar />
  //     <SidebarInset>
  //       <header className='bg-white sticky top-0 shrink-0 border-b px-4 h-16 flex items-center gap-2'>
  //         <SidebarTrigger />
  //         <div className='flex-1 flex items-center justify-between'>
  //           <p className='text-xl font-bold tracking-wide'>Platform Launch</p>
  //           <Button>Add New Task</Button>
  //         </div>
  //       </header>
  //       <main className='min-h-screen bg-white'>{children}</main>
  //     </SidebarInset>
  //   </SidebarProvider>
  // );
};

export default DashboardLayout;
