import LogoHeros from "./components/LogoHeros";
import Search from "./components/Search/Search";
import General from "./screens/General";
import Liked from "./screens/Liked";

import HerosProvider from "./context/HerosProvider";

function App() {
  return (
    <div className="w-full h-screen bg-bgStartrack text-white pt-4 px-16 pb-6">
      <LogoHeros />
      <HerosProvider>
        <Liked />
        <Search />
        <General />
      </HerosProvider>
    </div>
  );
}

export default App;
