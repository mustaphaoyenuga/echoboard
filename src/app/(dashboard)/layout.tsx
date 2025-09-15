import BoardSidebar from "@/components/board/BoardSidebar";
import { Button } from "@/components/ui/button";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarProvider>
      <BoardSidebar />
      <SidebarInset>
        <header className='bg-white sticky top-0 shrink-0 border-b px-4 h-16 flex items-center gap-2'>
          <SidebarTrigger />
          <div className='flex-1 flex items-center justify-between'>
            <p className='text-xl font-bold tracking-wide'>Platform Launch</p>
            <Button>Add New Task</Button>
          </div>
        </header>
        <main className='min-h-screen bg-gray-50'>{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default DashboardLayout;
