import { Illustration, Ellipse, Rect, Anchor, Cylinder, Box, TAU } from 'zdog';
import Table from './Table';
import Chair from './Chair';


export default function TableOf6(parent: Anchor) {
  
  const tableOf6 = new Anchor({
    addTo: parent
  });
  
  const tableGroup = new Anchor({
    addTo: tableOf6
  })

  const table = Table(tableGroup);
  const chair = Chair(tableGroup);
  chair.rotate.z = -(TAU/4);
  chair.translate.x = -70;

  chair.copyGraph({
    translate: {x: -150},
    rotate: {y: TAU/2, z: TAU/4}
  });

  chair.copyGraph({
    translate: {x: -110, y: -40},
    rotate: {x: TAU/2, z: TAU/2}
  });

  chair.copyGraph({
    translate: {x: -110, y: 40},
    rotate: {x: TAU/2, z: TAU}
  });

  table.translate.x = -110;

  tableGroup.copyGraph({
    translate: { x: -150, y: 0 }
  });
  
  tableGroup.copyGraph({
    translate: { x: 150 }
  });
  
  tableGroup.copyGraph({
    translate: { x: 0, y: 150 }
  });
  
  tableGroup.copyGraph({
    translate: { x: -150, y: 150 }
  });
  
  tableGroup.copyGraph({
    translate: { x: 150, y: 150 }
  });

  return tableOf6;
}