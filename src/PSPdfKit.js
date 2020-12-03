import { useEffect } from "react";
import PSPDFKit from "pspdfkit";

export const PsPdfKit = () => {
  useEffect(() => {
    PSPDFKit.load({
      container: "#pspdfkit",
      document: "/08862451.pdf",
      baseUrl: "http://localhost:3000/pspdfkit-lib/",
      // TODO: insert your key
      licenseKey: "",
    })
      .then(function (instance) {
        console.log("PSPDFKit loaded", instance);
      })
      .catch(function (error) {
        console.error(error.message);
      });
  }, []);

  return (
    <div>
      <div id="pspdfkit" style={{ height: "100vh" }}></div>
    </div>
  );
};
