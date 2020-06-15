import React, { Component, Ref, ReactElement, RefObject} from 'react';
import { Illustration, Ellipse, Rect, Anchor, Cylinder, Box, TAU, Group } from 'zdog';
import Table from './Table';
import Chair from './Chair';
import TableOf6 from './TableOf6';

export default class Floorplan extends Component {
  
  private illo?: Illustration;
  private el?: HTMLCanvasElement;

  private zoom = 1;

  constructor(props: any) {
    super(props);
    this.animate = this.animate.bind(this);
  }

  componentDidMount() {

    this.illo = new Illustration({
      element: this.el as HTMLCanvasElement,
      dragRotate: true,
      rotate: {
        x: TAU/10,
        // y: TAU/32,
        z: TAU/40
      }
    });

    const tableOf6 = TableOf6(this.illo);
    tableOf6.translate.y = -300;

    tableOf6.copyGraph({
      translate: {y: 100, x: 200}
    });

    tableOf6.copyGraph({
      translate: {y: 100, x: -300}
    });

    // update & render
    this.illo.updateRenderGraph();
    
    this.animate();
  }

  animate() {
    if (!this.illo) {
      return;
    }
    
    // if (this.zoom < 3) {
    //   this.zoom += 0.01;
    //   this.illo.zoom = this.zoom;
    //   console.log(this.zoom)
    // }

    this.illo.zoom = 0.5;
    this.illo.updateRenderGraph();
    requestAnimationFrame( this.animate );
  }


  render() {
    return (
      <canvas className="zdog-canvas" 
        ref={(el: HTMLCanvasElement) => this.el = el} 
        width="1000" height="600"
      />
    )
  }

}