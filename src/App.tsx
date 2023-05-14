import LogoHeros from "./components/LogoHeros";
import Search from "./components/Search/Search";
import General from "./screens/General";
import Liked from "./screens/Liked";

import { HeroContext, HeroProvider } from "./context/HeroContext";

function App() {
  return (
    <div className="w-full h-screen bg-bgStartrack text-white pt-4 px-16 pb-6">
      <HeroProvider>
        <LogoHeros />
        <Liked />
        <Search />
        <General />
      </HeroProvider>
    </div>
  );
}

export default App;
