import * as React from "react";
import Canvas from "./Canvas";

// Your props are your public API, so it's worth taking the
// time to use JSDoc to explain how it works:

export interface Props {
  /** The user's name */
  name: string;
  /** Should the name be rendered in bold */
  priority?: boolean;
}

export const MapView: React.FC<Props> = props => {
    let image = new Image()
    image.src = 'http://phrogz.net/tmp/gkhead.jpg';
    return <div>
        {props.name}
        <Canvas canvasWidth={300} canvasHeight={300} image={image} />
    </div>
}