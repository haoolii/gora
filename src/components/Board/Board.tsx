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
  xAxis: React.FC<any>;
  yAxis: React.FC<any>;
}

const defaultMargin = {
  top: 15,
  right: 15,
  bottom: 15,
  left: 15
};

export const Board: React.FC<Props> = ({
  width = 800,
  height = 600,
  margin = defaultMargin,
  xScale,
  yScale,
  xAxis,
  yAxis
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
          { xAxis({
            scale: xScale,
            width: width,
            height: height
          }) }
          {
            yAxis({
              scale: yScale,
              width: width,
              height: height
            })
          }
        </g>
        <g className="ganttLayer"></g>
      </g>
    </svg>
  )
}

