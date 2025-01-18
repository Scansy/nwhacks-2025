import React, { useCallback, useState, useEffect } from 'react';
import {
  ReactFlow,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import frontendData from '../frontenddata.json';

const mapDataToNodes = (data) => {
  const nodes = [];
  const traverse = (item, parentId = null) => {
    nodes.push({
      id: item.ID.toString(),
      position: { x: Math.random() * 400, y: Math.random() * 400 },
      data: { label: item.NodeName },
    });
    if (item.Subitems) {
      if (Array.isArray(item.Subitems)) {
        item.Subitems.forEach(subitem => traverse(subitem, item.ID));
      } else {
        Object.values(item.Subitems).forEach(subitem => traverse(subitem, item.ID));
      }
    }
  };
  traverse(data.HTML);
  return nodes;
};

export default function App() {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  useEffect(() => {
    const initialNodes = mapDataToNodes(frontendData);
    setNodes(initialNodes);
  }, [setNodes]);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges],
  );

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
      >
        <MiniMap />
        <Controls />
        <Background />
      </ReactFlow>
    </div>
  );
}