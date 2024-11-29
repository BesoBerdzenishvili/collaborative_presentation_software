import { useState } from "react";
import { Tooltip, OverlayTrigger } from "react-bootstrap";

const Tools = ({
  addStar,
  addCircle,
  addRect,
  addText,
  changeColor,
  handleExportPDF,
  handleZoomOut,
  handleZoomIn,
}) => {
  const renderTooltip = (message) => <Tooltip>{message}</Tooltip>;
  // remove comments
  return (
    <div className="d-flex align-items-center justify-content-around p-3 border">
      {/* Add Text */}
      <OverlayTrigger placement="bottom" overlay={renderTooltip("Add Text")}>
        <button className="btn btn-primary" onClick={addText}>
          Add Text
        </button>
      </OverlayTrigger>

      {/* Fill - Color Pickers */}
      <div className="d-flex align-items-center text-light">
        <label className="me-2">Color</label>
        <input
          type="color"
          className="form-control form-control-color"
          onChange={(e) => changeColor(e.target.value)}
        />
      </div>

      {/* Zoom In/Out */}
      <div className="d-flex align-items-center">
        <OverlayTrigger placement="bottom" overlay={renderTooltip("Zoom In")}>
          <button className="btn btn-secondary mx-1" onClick={handleZoomIn}>
            +
          </button>
        </OverlayTrigger>
        <OverlayTrigger placement="bottom" overlay={renderTooltip("Zoom Out")}>
          <button className="btn btn-secondary mx-1" onClick={handleZoomOut}>
            -
          </button>
        </OverlayTrigger>
      </div>

      {/* Undo/Redo */}
      <div className="d-flex align-items-center">
        <OverlayTrigger placement="bottom" overlay={renderTooltip("Undo")}>
          <button className="btn btn-warning mx-1">Undo</button>
        </OverlayTrigger>
        <OverlayTrigger placement="bottom" overlay={renderTooltip("Redo")}>
          <button className="btn btn-warning mx-1">Redo</button>
        </OverlayTrigger>
      </div>

      {/* Shapes - Rect, Circle, Star */}
      <div className="d-flex align-items-center">
        <OverlayTrigger placement="bottom" overlay={renderTooltip("Rectangle")}>
          <button className="btn btn-outline-success mx-1" onClick={addRect}>
            <i className="bi bi-square" />
          </button>
        </OverlayTrigger>
        <OverlayTrigger placement="bottom" overlay={renderTooltip("Circle")}>
          <button className="btn btn-outline-success mx-1" onClick={addCircle}>
            <i className="bi bi-circle" />
          </button>
        </OverlayTrigger>
        <OverlayTrigger placement="bottom" overlay={renderTooltip("Star")}>
          <button className="btn btn-outline-success mx-1" onClick={addStar}>
            <i className="bi bi-star" />
          </button>
        </OverlayTrigger>
      </div>

      {/* Add New Slide */}
      <OverlayTrigger
        placement="bottom"
        overlay={renderTooltip("Add New Slide")}
      >
        <button className="btn btn-success rounded-circle">
          <i className="bi bi-plus"></i>
        </button>
      </OverlayTrigger>

      {/* Present Mode */}
      <OverlayTrigger
        placement="bottom"
        overlay={renderTooltip("Present Mode")}
      >
        <button className="btn btn-info">
          <i className="bi bi-play-circle-fill"></i> Present
        </button>
      </OverlayTrigger>

      {/* Export as PDF */}
      <OverlayTrigger
        placement="bottom"
        overlay={renderTooltip("Export as PDF")}
      >
        <button className="btn btn-danger" onClick={handleExportPDF}>
          Export as PDF
        </button>
      </OverlayTrigger>
    </div>
  );
};

export default Tools;
