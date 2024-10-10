import { memo } from "react";
import { Handle, Position } from "@xyflow/react";
// eslint-disable-next-line react-refresh/only-export-components, react/display-name, react/prop-types
export default memo(({ data, isConnectable }) => {
  // eslint-disable-next-line react/prop-types
  const { title, subtitle, description } = data;
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
          id="a"
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
        <Handle
          type="target"
          id="a"
          position={Position.Top}
          style={{
            background: "#555",
            visibility: "hidden",
            width: "15px",
            height: "15px",
          }}
          onConnect={(params) => console.log("handle onConnect", params)}
          isConnectable={isConnectable}
        />
        <Handle
          type="source"
          position={Position.Bottom}
          style={{
            background: "#555",
            width: "15px",
            height: "15px",
          }}
          onConnect={(params) => console.log("handle onConnect", params)}
          isConnectable={isConnectable}
        />
        <h4 style={{ textAlign: "left", margin: "0px" }}>{title}</h4>
        <h5 style={{ textAlign: "left", margin: "0px" }}>{subtitle}</h5>
        <p style={{ textAlign: "left", margin: "0px" }}>{description}</p>
        <Handle
          type="source"
          position={Position.Right}
          style={{ background: "#555", width: "15px", height: "15px" }}
          id="a"
          isConnectable={isConnectable}
        />
      </div>
    </>
  );
});
