import { useState, useEffect, useCallback } from "react";
import {
  ReactFlow,
  useNodesState,
  useEdgesState,
  addEdge,
  Controls,
  MarkerType,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import ColorSelectorNode from "./ModelNode";
// import { InputNode } from "./InputNode";
import Component from "./Component";
import Component1 from "./Component1";
import NodeForm from "./NodeForm";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";

const initBgColor = "#1A192B";
const connectionLineStyle = { stroke: "#fff" };
const snapGrid = [20, 20];

const nodeTypes = {
  selectorNode: ColorSelectorNode,
  nodeform: NodeForm,
  component: Component,
  component1: Component1,
};

const defaultViewport = { x: 0, y: 0, zoom: 1.5 };

const style = {
  nodeStyle: {
    border: "1px solid #777",
    padding: 10,
    background: "transparent",
    color: "white",
  },
};

const CustomNodeFlow = () => {
  const [nodeIdCounter, setNodeIdCounter] = useState(6);
  const [dummyData, setDummyData] = useState([
    // {
    //   id: "1",
    //   type: "inputNode",
    //   data: {
    //     // onSubmit: (newNodeData) => {
    //     //   console.log(newNodeData,"newNodeData")
    //     //   addNode(newNodeData);
    //     // },
    //     inputValue,
    //     setInputValue,
    //     setNodeIdCounter,
    //   },
    //   position: { x: 0, y: 50 },
    //   sourcePosition: "right",
    // },
    {
      id: "2",
      type: "selectorNode",
      data: { label: "Ordered Models", discription: "List of Models" },
      style: style.nodeStyle,
      position: { x: 300, y: 50 },
    },
    {
      id: "3",
      type: "selectorNode",
      data: { label: "Ordered Models", discription: "List of Models" },
      style: style.nodeStyle,
      position: { x: 600, y: 50 },
      targetPosition: "left",
    },
    // {
    //   id: "4",
    //   type: "component",
    //   data: { label: "Inference", description: "Inference Engine" },
    //   style: style.nodeStyle,
    //   position: { x: 650, y: 300 },
    //   targetPosition: "left",
    // },
    // {
    //   id: "5",
    //   type: "component1",
    //   data: { label: "Output Node", description: "Inference Engine" },
    //   style: style.nodeStyle,
    //   position: { x: 850, y: 0 },
    //   targetPosition: "left",
    // },
  ]);
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [bgColor] = useState(initBgColor);

  useEffect(() => {
    setNodes(dummyData);

    setEdges([
      {
        id: "e1-2",
        style: { stroke: "#fff" },
      },
      {
        id: "e2a-3",
        sourceHandle: "a",
        style: { stroke: "#fff" },
      },
      {
        id: "e2b-4",
        sourceHandle: "b",
        style: { stroke: "#fff" },
      },
    ]);
  }, []);

  const addNode = (nodeData) => {
    const newNode = {
      id: `${nodeIdCounter}`,
      type: "component1",
      data: {
        title: nodeData.title,
        subtitle: nodeData.subtitle,
        description: nodeData.description,
      },
      position: { x: Math.random() * 500, y: Math.random() * 500 },
      style: {
        border: "1px solid #777",
        padding: 10,
        borderRadius: "5px",
        background: "transparent",
        color: "white",
      },
    };

    setNodes((nds) => nds.concat(newNode));
    setNodeIdCounter((preval) => preval + 1);
    setDummyData((preval) => [...preval, newNode]);
  };

  const onConnect = useCallback(
    (params) =>
      setEdges((eds) =>
        addEdge(
          {
            ...params,
            animated: true,
            style: { stroke: "#fff" },
            markerEnd: { type: MarkerType.Arrow, width: 30, height: 30 },
          },
          eds
        )
      ),
    []
  );

  return (
    <div style={{ height: "100vh" }}>
      <NodeForm onSubmit={addNode} />
      <ReactFlow
        nodes={[...nodes]}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        style={{ background: bgColor }}
        nodeTypes={nodeTypes}
        connectionLineStyle={connectionLineStyle}
        snapToGrid={true}
        snapGrid={snapGrid}
        defaultViewport={defaultViewport}
        fitView
        attributionPosition="bottom-left"
      >
        <Controls />
      </ReactFlow>
    </div>
  );
};

export default CustomNodeFlow;
