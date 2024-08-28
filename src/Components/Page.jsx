import Footer from "../Components/Footer";
import Header from "../Components/Header";
import SideBar from "../Components/SideBar";
import MovieList from "../Components/cine/MovieList";
import { useContext } from 'react';
import {ThemeContext} from '../context/context'



const Page = () => {
const {darkMode} = useContext(ThemeContext)

  return (
    <div className ={`h-full w-full ${darkMode ? "dark": ""}`}>
      <Header />
      <main>
        <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
          <SideBar />
          <MovieList />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Page;
