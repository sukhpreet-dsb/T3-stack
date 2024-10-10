import { memo } from "react";
import { Handle, Position } from "@xyflow/react";

// eslint-disable-next-line react-refresh/only-export-components, react/display-name, react/prop-types
export default memo(({ data, isConnectable }) => {
  // eslint-disable-next-line react/prop-types
  const { label, discription } = data;
  return (
    <>
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

      <Handle
        type="source"
        position={Position.Right}
        style={{ width: "15px", height: "15px", background: "#555" }}
        id="source1"
        isConnectable={isConnectable}
      />
      <h3 style={{ textAlign: "left" }}>{label}</h3>
      <p style={{ textAlign: "left" }}>{discription}</p>
      {/* <Handle
        type="source"
        position={Position.Right}
        style={{width:"10px",height:"10px"}}
        id="a"
        isConnectable={isConnectable}
      /> */}
    </>
  );
});
