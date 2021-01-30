import React, { useRef, useEffect } from 'react'
import * as d3 from 'd3';

interface Props {
  scale: any,
}

export const AxisBottom: React.FC<Props> = ({
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
