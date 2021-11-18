import { useEffect } from "react";
import { useParams } from "react-router";
import useHttp from "../../../hooks/use-http";
import { getSingleDownloads } from "../../../lib/api";
import LoadingSpinner from "../../UI/Spinner/LoadingSpinner";

// Import the main component
import { Viewer } from "@react-pdf-viewer/core";

// Plugin
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";

// Import the styles
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

// Import worker
import { Worker } from "@react-pdf-viewer/core";
import { Container } from "react-bootstrap";

import fileUrl from "./document(1).pdf";
import classes from "./Download.module.css";

const Download = () => {
  const params = useParams();

  const { downloadId } = params;

  // Create new plugin instance
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  const {
    sendRequest,
    status,
    data: loadedDownload,
    error,
  } = useHttp(getSingleDownloads, true);

  useEffect(() => {
    sendRequest(downloadId);
  }, [sendRequest, downloadId]);

  if (status === "pending") {
    return (
      <div className="text-center">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className="text-center h3">{error}</p>;
  }

  if (
    status === "completed" &&
    (!loadedDownload || loadedDownload.length === 0)
  ) {
    return (
      <div
        style={{
          margin: "auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p
          style={{
            color: "#262c2c",
            fontSize: "3rem",
            fontWeight: "bold",
          }}
        >
          Oops! File not found.
        </p>
      </div>
    );
  }

  return (
    <Container>
      <div className={classes.Download}>
        <h4 className="my-5">{loadedDownload.headingText}</h4>
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
          <Viewer fileUrl={fileUrl} plugins={[defaultLayoutPluginInstance]} />
        </Worker>
      </div>
    </Container>
  );
};

export default Download;
