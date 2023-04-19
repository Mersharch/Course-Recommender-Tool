import Link from "next/link";
import Sidebar from "./Sidebar";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <div className="w-full bg-blue-600 text-white font-bold italic flex items-center justify-center h-10 md:h-14 lg:h-20 shadow-md shadow-gray-300">
      <Link href='/'>Course Recommender Tool</Link>
    </div>
      <main className="flex flex-col md:flex-row gap-5">
        <Sidebar />
        <div className="flex-1 pt-0">{children}</div>
      </main>
    </div>
  );
};

export default Layout;
