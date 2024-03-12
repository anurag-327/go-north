import Header from "@/components/ui/Header";
import Navbar from "@/components/ui/Navbar";
import Profile from "@/components/ui/Profile";
export default function Home() {
  return (
    <main className="relative flex flex-col items-center min-h-screen gap-10 px-8 py-6 overflow-hidden md:px-28 bg-opacity-40 bg-primary">
      <div className="absolute -z-10 left-10 top-32 blur-[120px] rounded-full w-96  h-96 overlay-1 bg-primary"></div>
      <div className="absolute -z-10 -right-40 top-48 blur-[100px] rounded-full w-[400px]  h-[400px] overlay-2 bg-overlay-1"></div>
      <Navbar />
      <Header />
      <Profile />
    </main>
  );
}
