import "./App.css";
import { AllBoucketLists } from "./components/cards/AllBoucketLists";
import { CurrentBoucketList } from "./components/cards/CurrentBoucketList";
import { UnassignedBoucketItems } from "./components/cards/UnassignedBoucketItems";
import { useState } from "react";
import { Dashboard, GlobalStyle, Paper } from "./styles/style";
import { BoucketList } from "./types/types";

export function App(): JSX.Element {
  const [currentList, setCurrentList] = useState<BoucketList>();

  return (
    <>
      <GlobalStyle />
      <Paper>
        <h1>The Boucket List</h1>
        <h2> Dashboard </h2>
        <Dashboard>
          <AllBoucketLists
            currentList={currentList}
            setCurrentList={setCurrentList}
          />
          {/*
           *TODO 7: Uncomment
           */}
          {/* <CurrentBoucketList currentList={currentList} /> */}
          {/*
           *TODO 8: Uncomment
           */}
          {/* <UnassignedBoucketItems /> */}
        </Dashboard>
      </Paper>
    </>
  );
}
