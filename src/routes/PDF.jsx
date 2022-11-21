import { jsPDF } from "jspdf";

export default function PDF() {
  const handleGeneratePdf = () => {
    const doc = new jsPDF({
      format: "a4",
      unit: "px"
    });

    // Adding the fonts
    doc.setFont("Anton-Regular", "normal");

    doc.html(certificateTemplateRef.current, {
      async callback(doc) {
        // save the document as a PDF with name of Memes
        doc.save("Memes");
      }
    });
  };
  return(
    <button onClick={handleGeneratePdf}>
      generate pdf
    </button>
  )
}