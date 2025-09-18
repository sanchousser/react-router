import { Outlet } from "react-router-dom";
import Header from "./Header";

export default function SharedLayout() {
  return (
    <>
      <header style={{ display: "flex", justifyContent: "space-between", margin: "0 40px" }}>
        <span>Store 💻</span>
        <Header />
      </header>

      <Outlet />
    </>
  );
}
