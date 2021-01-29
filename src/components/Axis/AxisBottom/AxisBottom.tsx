import React, { useRef, useEffect } from 'react'
import * as d3 from 'd3';

interface Props {
  width: number,
  height: number,
  scale: any,
}

export const AxisBottom: React.FC<Props> = ({
  width,
  height,
  scale
}) => {
  const gEl = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (gEl.current) {
      d3.select(gEl.current).call(
        d3.axisBottom(scale)
      )
    }    
  }, []);

  return (
    <g ref={gEl}></g>
  )
}
