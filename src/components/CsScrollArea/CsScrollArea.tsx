import * as React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useStoreGlobal } from "@/stores/global.state";

interface Iprops {
  rest?: number;
  children: React.ReactNode;
  border?: boolean;
  className?: string;
}

const CsScrollArea: React.FC<Iprops> = ({ border = false, rest = 0, children, className }) => {
  const storeGlobal = useStoreGlobal((state: any) => state); //eslint-disable-line

  const height = storeGlobal.globalHeight - rest + 20;
  const border_show = border ? "1px solid red" : "";

  return (
    <ScrollArea
      style={{
        height: height,
        border: border_show,
        overflow: "hidden", // Oculta las barras de scroll
        scrollbarWidth: "none", // Firefox
      }}
      className={`overflow-y-hidden overflow-x-hidden  ${className}`}>
      {children}
    </ScrollArea>
  );
}

export default CsScrollArea;
