import Header from "./components/Header";
import Search from "./components/Search";
import User from "./components/User";
import { useRef, useState } from "react";
import ThemeProvider from "./context/ThemeContext";
function App() {
  const [userName, setUserName] = useState<string>("");
  const saveName = useRef<string>("");

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen  p-6 bg-background dark:bg-[#141D2F]">
      <ThemeProvider>
        <Header />
        <Search
          userName={userName}
          setUserName={setUserName}
          saveName={saveName}
        />
        <User saveName={saveName} />
      </ThemeProvider>
    </div>
  );
}

export default App;
