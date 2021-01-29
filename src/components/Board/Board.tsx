import React from 'react'
import { Axis } from '../Axis';
import './Board.css';

interface Props {
  width: number;
  height: number;
  margin: {
    top: number;
    right: number;
    bottom: number;
    left: number;
  }
}

const defaultMargin = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
};

export const Board: React.FC<Props> = ({
  width = 800,
  height = 600,
  margin = defaultMargin
}: Props) => {
  const entireWidth = width + margin.left + margin.right;
  const entireHeight = height + margin.top + margin.bottom;
  
  return (
    <svg 
      width={entireWidth}
      height={entireHeight}
      viewBox={`0 0 ${entireWidth} ${entireHeight}`}
    >
      <g transform={`translate(${margin.left}, ${margin.top})`}>
        <g className="axisLayer">
          <Axis></Axis>
        </g>
        <g className="ganttLayer"></g>
      </g>
    </svg>
  )
}

