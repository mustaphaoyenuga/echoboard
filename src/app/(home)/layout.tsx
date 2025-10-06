import Footer from "./_components/Footer";
import Navbar from "./_components/Navbar";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='h-full'>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default HomeLayout;
