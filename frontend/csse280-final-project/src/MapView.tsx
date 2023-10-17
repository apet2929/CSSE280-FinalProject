import * as React from "react";
import Canvas from "./Canvas";

export interface Props {
  name: string;
  priority?: boolean;
}

export const MapView: React.FC<Props> = props => {
    // let image = new Path2D("indiana_county_map.svg")
    let image = new Path2D('M10 10 h 80 v 80 h -80 Z')
    return <div>
        {props.name}
        <Canvas canvasWidth={300} canvasHeight={300} image={image} />
    </div>
}