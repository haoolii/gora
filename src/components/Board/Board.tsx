import React from 'react'
import './Board.css';
import * as d3 from 'd3';

interface Props {
  width: number;
  height: number;
  margin: {
    top: number;
    right: number;
    bottom: number;
    left: number;
  },
  xScale: d3.ScaleTime<number, number>;
  yScale: d3.ScaleBand<string>;
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
  margin = defaultMargin,
  xScale,
  yScale
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
        </g>
        <g className="ganttLayer"></g>
      </g>
    </svg>
  )
}

