import { Illustration, Ellipse, Rect, Anchor, Cylinder, Box, TAU } from 'zdog';



export default function Chair(parent: Anchor) {
  
  const chair = new Anchor({
    addTo: parent,
    rotate: {
      // x: TAU/2,
      y: TAU/2,
      // z: TAU/2
    }
  });

  const legZ = 90;

  const seat = new Box({
    addTo: chair,
    width: 60,
    height: 60,
    depth: 10,
    leftFace: '#666',
    rightFace: '#666',
    bottomFace: '#999',
    topFace: '#999',
    fill: true,
    color: '#7d7d7d',
    stroke: false,
    translate: {
      z: 70
    }
  });


  const backing = new Box({
    addTo: chair,
    width: 60,
    height: 60,
    depth: 10,
    leftFace: '#999',
    rightFace: '#999',
    bottomFace: '#666',
    topFace: '#666',
    fill: true,
    color: '#ababab',
    stroke: false,
    translate: {
      z: 35, y: -25
    },
    rotate: {
      x: TAU/4
    }
  });

  const leg = new Cylinder({
    length: 28,
    diameter: 10,
    addTo: chair,
    color: '#000',
    translate: {
      x: -15, z: legZ, y: -15
    }
  });

  leg.copyGraph({
    translate: {x: 15, y: -15, z: legZ}
  });

  leg.copyGraph({
    translate: {x: -15, y: 15, z: legZ}
  });

  leg.copyGraph({
    translate: {x: 15, y: 15, z: legZ}
  });

  return chair;
}