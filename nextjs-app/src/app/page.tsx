import Image from "next/image";
import Navbar from "./navbar";
import LoginForm from "./login-form";
import Footer from "./footer";

export default function Home() {
  return (
    <main className="h-screen container-xxl bg-white p-0">
      <Navbar/>
      <div className="flex flex-row flex-wrap m-10">
        <LoginForm />
      </div>
      <Footer/>
    </main>
  );
}
