import { memo } from "react";
import { Handle, Position } from "@xyflow/react";
// eslint-disable-next-line react-refresh/only-export-components, react/display-name, react/prop-types
export default memo(({ data, isConnectable }) => {
  // eslint-disable-next-line react/prop-types
  const { label, description } = data;
  return (
    <>
      <div
        style={{
          padding: 10,
          background: "transparent",
          color: "white",
        }}
      >
        <Handle
          type="target"
          position={Position.Left}
          style={{
            background: "#555",
            visibility: "hidden",
            width: "15px",
            height: "15px",
          }}
          onConnect={(params) => console.log("handle onConnect", params)}
          isConnectable={isConnectable}
        />
        <h4 style={{ textAlign: "left", margin: "0px" }}>{label}</h4>
        <p style={{ textAlign: "left", margin: "0px" }}>{description}</p>
        <Handle
          type="source"
          position="right"
          style={{ width: "15px", height: "15px" }}
        />
      </div>
    </>
  );
});
