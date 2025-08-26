import "./Popup.css";

export default function Popup({ isVisible }) {
  if (!isVisible) return null; // Don't render anything if popup is not visible

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <div className="glow-ring"></div>
        <h2>The Form Has Been Submitted Successfully</h2>
      </div>
    </div>
  );
}
