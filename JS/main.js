import { spline } from "https://cdn.skypack.dev/@georgedoescode/spline@1.0.1";
import SimplexNoise from "https://cdn.skypack.dev/simplex-noise@2.4.0";



const bigPath = document.getElementById("blob1-path");
const smallPath = document.getElementById("blob2-path");

let noiseStep = 0.001;

const simplex= new SimplexNoise();

let bigRadius = screen.width/2.5
let smallRadius = screen.width/3

if(screen.width > 600) {
  bigRadius = screen.width/6
  smallRadius = screen.width/7
}

const bigPoints = createPoints(bigRadius);
const smallPoints = createPoints(smallRadius);

(function animate() {
  let offset = 25;
  
  if(screen.width > 600) {
    offset = 60;
  }
  bigPath.setAttribute("d", spline(bigPoints, 1, true));
  smallPath.setAttribute("d", spline(smallPoints, 1, true));

  for (let i of bigPoints) {
    const point = i;

    const noiseX = noise(point.noiseOffsetX, point.noiseOffsetX);
    const noiseY = noise(point.noiseOffsetY, point.noiseOffsetY);

    const x = map(noiseX, -1, 1, point.originX - offset, point.originX + offset);
    const y = map(noiseY, -1, 1, point.originY - offset, point.originY + offset);

    point.x = x*1.5 ;
    point.y = y ;

    point.noiseOffsetX += noiseStep;
    point.noiseOffsetY += noiseStep;

  }

  for (let i of smallPoints) {
    const point = i;

    const noiseX = noise(point.noiseOffsetX, point.noiseOffsetX);
    const noiseY = noise(point.noiseOffsetY, point.noiseOffsetY);

    const x = map(noiseX, -1, 1, point.originX - offset, point.originX + offset);
    const y = map(noiseY, -1, 1, point.originY - offset, point.originY + offset);

    point.x = x*1.5;
    point.y = y ;

    point.noiseOffsetX += noiseStep;
    point.noiseOffsetY += noiseStep;

  }

  requestAnimationFrame(animate);
})();

function map(n, start1, end1, start2, end2) {
  return ((n - start1) / (end1 - start1)) * (end2 - start2)  +start2;
}

function noise(x, y)  {
  return simplex.noise2D(x, y);
}

function createPoints(rad) {
  const points = [];
  const numPoints = 9;
  const angleStep = (Math.PI*2) / numPoints;
  

  for(let i = 1; i < numPoints; i++) {
    const theta = i * angleStep;

    const x = 100 + Math.cos(theta) * rad;
    const y = 100 + Math.sin(theta) * rad;

    points.push({
      x: x,
      y: y,

      originX: x,
      originY: y,

      noiseOffsetX: Math.random() * 1000,
      noiseOffsetY: Math.random() * 1000
    });
  }

  return points;
}


