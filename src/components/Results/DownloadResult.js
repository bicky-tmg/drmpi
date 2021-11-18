const DownloadResult = (props) => {
  const fileUrl = props.file.fileUrl,
    semisterName = props.file.semister.semisterName,
    courseName = props.file.courses.courseName;

  const fileNameFromUrl = fileUrl
    .substring(fileUrl.lastIndexOf("/") + 1)
    .split("?")[0];
  const extension = fileNameFromUrl.split(".").pop();
  console.log(extension);
  const fileName = `${semisterName}-(${courseName}).${extension}`;

  async function downloadFileHandler(fileUrl, fileName) {
    const response = await fetch(fileUrl);
    const file = await response.blob();
    const blob = new Blob([file]);
    console.log(blob);

    const blobURL = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.style.display = "none";
    link.href = blobURL;
    link.setAttribute("download", fileName);
    if (typeof link.download === "undefined") {
      link.setAttribute("target", "_blank");
    }

    document.body.appendChild(link);
    // Dispatch click event on the link
    // This is necessary as link.click() does not work on the latest firefox
    link.dispatchEvent(
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
        view: window,
      })
    );

    // Remove link from body
    document.body.removeChild(link);
    setTimeout(function () {
      window.URL.revokeObjectURL(link);
    }, 100);
  }

  return (
    <button
      type="button"
      className="btn btn-link p-0 text-left"
      onClick={() => downloadFileHandler(fileUrl, fileName)}
    >
      {`${semisterName} - (${courseName})`}
    </button>
  );
};

export default DownloadResult;
