import React, { useState } from "react";
import "./styles.css";

interface ResumeViewerProps {
  resumeUrl: string;
  name: string;
}

export default function ResumeViewer({ 
  resumeUrl = "https://drive.google.com/file/d/17lEXXo8KHI_zRlFckyCg5Q2LUFczUlEq/view?usp=share_link",
  name = "Sahil Bhandari"
}: ResumeViewerProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Convert Google Drive share link to embed link
  const getEmbedUrl = (url: string) => {
    const fileId = url.match(/\/d\/(.*?)\/view/)?.[1];
    return fileId ? `https://drive.google.com/file/d/${fileId}/preview` : url;
  };

  const downloadUrl = resumeUrl.replace('/view', '/export?format=pdf');

  return (
    <>
      <div className="resume-actions">
        <button
          className="button-cover resume-view"
          onClick={() => setIsModalOpen(true)}
          type="button"
        >
          <span>👁️</span>
          <span>View My Resume</span>
        </button>
{/*         
        <a
          href={downloadUrl}
          download={`${name}_Resume.pdf`}
          className="button-cover resume-download"
          target="_blank"
          rel="noreferrer"
        >
          <span>⬇️</span>
          <span>Download PDF</span>
        </a> */}
      </div>

      {/* Modal Overlay */}
      {isModalOpen && (
        <div className="resume-modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="resume-modal" onClick={(e) => e.stopPropagation()}>
            <div className="resume-modal-header">
              <h3>{name}'s Resume</h3>
              <div className="modal-actions">
                <a
                  href={downloadUrl}
                  download={`${name}_Resume.pdf`}
                  className="download-btn"
                  target="_blank"
                  rel="noreferrer"
                  title="Download Resume"
                >
                  ⬇️
                </a>
                <button
                  className="close-btn"
                  onClick={() => setIsModalOpen(false)}
                  type="button"
                  title="Close Resume"
                >
                  ✕
                </button>
              </div>
            </div>
            
            <div className="resume-viewer-container">
              <iframe
                src={getEmbedUrl(resumeUrl)}
                title={`${name}'s Resume`}
                className="resume-iframe"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}