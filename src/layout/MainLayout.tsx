import { Outlet } from "react-router-dom";
import { useStoreGlobal } from "@/stores/global.state";
import { useEffect, useRef } from "react";

function MainLayout() {

  const storeGlobal = useStoreGlobal((state) => state);
  const principal = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const updateDimensions = () => {
      if (principal.current) {
        const elementData = principal.current.getBoundingClientRect();
        const result = Math.trunc(window.innerHeight - elementData.height) - 20;
        storeGlobal.setGlobalHeight(result);
      }
    };
    updateDimensions(); // Initial calculation

    window.addEventListener("resize", updateDimensions); // Add event listener for resize

    return () => {
      window.removeEventListener("resize", updateDimensions); // Clean up event listener on component unmount
    };
  }, []); //eslint-disable-line


  return (
    <div>
      <div ref={principal} />
      <Outlet />
    </div>
  );
}

export default MainLayout;
