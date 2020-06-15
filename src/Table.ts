import { Illustration, Ellipse, Rect, Anchor, Cylinder, Box, TAU, Group } from 'zdog';



export default function Table(parent: Anchor) {

  const group = new Group();
  
  
  const table = new Anchor({
    addTo: parent,
    rotate: {
      x: TAU/2
    },
  });

  new Box({
    addTo: table,
    height: 100,
    width: 100,
    depth: 15,
    stroke: 1,
    leftFace: '#999',
    rightFace: '#999',
    bottomFace: '#666',
    topFace: '#666',
    fill: true,
    color: '#ababab',
  });

  new Ellipse({
    addTo: table,
    diameter: 20,
    stroke: 20,
    color: '#666',
    translate: {
      z: 100
    }
  });

  new Cylinder({
    length: 100,
    diameter: 10,
    addTo: table,
    color: '#000',
    translate: {
      z: 50
    }
  });

  return table;
}