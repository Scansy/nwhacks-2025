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
import styles from './App.module.css'; // Import the CSS module

const mapDataToNodesAndEdges = (data) => {
  const nodes = [];
  const edges = [];
  const traverse = (item, parentId = null) => {
    nodes.push({
      id: item.ID.toString(),
      position: { x: Math.random() * 400, y: Math.random() * 400 },
      data: { label: item.NodeName, className: styles.skillNode }, // Use the CSS module class
    });
    if (parentId) {
      edges.push({
        id: `e${parentId}-${item.ID}`,
        source: parentId.toString(),
        target: item.ID.toString(),
        style: { stroke: 'red' },
      });
    }
    if (item.Subitems) {
      if (Array.isArray(item.Subitems)) {
        item.Subitems.forEach(subitem => traverse(subitem, item.ID));
      } else {
        Object.values(item.Subitems).forEach(subitem => traverse(subitem, item.ID));
      }
    }
  };
  traverse(data.HTML);
  return { nodes, edges };
};

export default function App() {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  useEffect(() => {
    const { nodes, edges } = mapDataToNodesAndEdges(frontendData);
    setNodes(nodes);
    setEdges(edges);
  }, [setNodes, setEdges]);

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
        nodeTypes={{
          default: ({ data }) => (
            <div className={data.className}>
              {data.label}
            </div>
          ),
        }}
      >
        <MiniMap />
        <Controls />
        <Background />
      </ReactFlow>
    </div>
  );
}