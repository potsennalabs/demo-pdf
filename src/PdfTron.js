import { useEffect, useRef } from "react";
import WebViewer from "@pdftron/webviewer";

export const PdfTron = () => {
  const viewer = useRef(null);

  useEffect(() => {
    WebViewer(
      {
        path: "/lib",
        initialDoc: "/08862451.pdf",
      },
      viewer.current
    ).then((instance) => {
      const { docViewer } = instance;
      // you can now call WebViewer APIs here...
    });
  }, []);

  return (
    <div className="PdfTron">
      <div className="webviewer" ref={viewer} style={{ height: "100vh" }}></div>
    </div>
  );
};
