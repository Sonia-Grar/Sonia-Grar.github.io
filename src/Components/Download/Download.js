import "./Download.css";

const PDF_FILE_URL = "http://localhost:3000/CV.pdf";

function Download() {
  const downloadFileAtURL = (url) => {
    const fileName = url.split("/").pop();
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("download", fileName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  };

  return (
    <div className="App">
      <button onClick={() => downloadFileAtURL(PDF_FILE_URL)}>
        Télécharger
      </button>
    </div>
  );
}

export default Download;
