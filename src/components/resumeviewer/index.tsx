import React, { useState, useCallback, memo } from "react";
import "./styles.css";

interface ResumeViewerProps {
  resumeUrl: string;
  name: string;
}

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onShare: () => void;
  embedUrl: string;
  downloadUrl: string;
  name: string;
}

// Extract modal to separate memoized component
const ResumeModal = memo(({
  isOpen,
  onClose,
  onShare,
  embedUrl,
  downloadUrl,
  name
}: ResumeModalProps) => {
  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === "Escape") onClose();
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="resume-modal-overlay"
      onClick={onClose}
      onKeyDown={handleKeyDown}
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
    >
      <div
        className="resume-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="resume-modal-header">
          <h3 id="resume-modal-title">{name}'s Resume</h3>
          <div className="modal-actions">
            <button
              className="share-btn"
              onClick={onShare}
              type="button"
              title="Share Resume"
              aria-label="Share Resume"
            >
              🔗
            </button>
            <a
              href={downloadUrl}
              download={`${name}_Resume.pdf`}
              className="download-btn"
              target="_blank"
              rel="noopener noreferrer"
              title="Download Resume"
              aria-label="Download Resume"
            >
              ↓
            </a>
            <button
              className="close-btn"
              onClick={onClose}
              type="button"
              title="Close Resume"
              aria-label="Close Resume"
            >
              ✕
            </button>
          </div>
        </div>

        <div className="resume-viewer-container">
          <iframe
            src={embedUrl}
            title={`${name}'s Resume`}
            className="resume-iframe"
            loading="lazy"
            allow="fullscreen"
          />
        </div>
      </div>
    </div>
  );
});

ResumeModal.displayName = "ResumeModal";

const ResumeViewer = ({
  resumeUrl = "https://drive.google.com/file/d/17lEXXo8KHI_zRlFckyCg5Q2LUFczUlEq/view?usp=share_link",
  name = "Sahil Bhandari"
}: ResumeViewerProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Memoize URL transformations
  const { embedUrl, downloadUrl } = React.useMemo(() => {
    const fileId = resumeUrl.match(/\/d\/(.*?)\/view/)?.[1];
    return {
      embedUrl: fileId
        ? `https://drive.google.com/file/d/${fileId}/preview`
        : resumeUrl,
      downloadUrl: resumeUrl.replace('/view', '/export?format=pdf')
    };
  }, [resumeUrl]);

  // Memoize handlers
  const handleOpenModal = useCallback(() => {
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent background scroll
  }, []);

  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false);
    document.body.style.overflow = ''; // Restore scroll
  }, []);

  const handleShare = useCallback(async () => {
    const shareData = {
      title: `${name}'s Resume`,
      text: `Check out ${name}'s professional resume`,
      url: resumeUrl
    };

    try {
      // Check if Web Share API is available
      if (navigator.share && navigator.canShare?.(shareData)) {
        await navigator.share(shareData);
      } else {
        // Fallback: Copy to clipboard
        await navigator.clipboard.writeText(resumeUrl);
        alert('Resume link copied to clipboard!');
      }
    } catch (err) {
      // User cancelled or error occurred
      if ((err as Error).name !== 'AbortError') {
        console.error('Error sharing:', err);
        // Final fallback: try clipboard again
        try {
          await navigator.clipboard.writeText(resumeUrl);
          alert('Resume link copied to clipboard!');
        } catch (clipboardErr) {
          console.error('Clipboard error:', clipboardErr);
        }
      }
    }
  }, [name, resumeUrl]);

  // Cleanup on unmount
  React.useEffect(() => {
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <>
      <div className="resume-actions">
        <button
          className="button-cover resume-view"
          onClick={handleOpenModal}
          type="button"
          aria-label={`View ${name}'s resume`}
        >
          {/* <span role="img" aria-label="eye">👁️</span> */}
          <span>View My Resume</span>
        </button>
      </div>

      <ResumeModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onShare={handleShare}
        embedUrl={embedUrl}
        downloadUrl={downloadUrl}
        name={name}
      />
    </>
  );
};

export default memo(ResumeViewer);