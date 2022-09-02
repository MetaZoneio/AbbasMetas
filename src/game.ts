import { GlassHouse } from '../metas/glasshouse/glasshouse'


const glasshouseLandOwnerData = {
  host_data: `
{
  "GlassHouse": {
    "position": {"x":8,"y":0,"z":8},
    "rotation": {"x":0,"y":0,"z":0},
    "scale": {"x":1,"y":1,"z":1}
  }
}`
}

/// --- Set up your meta system to test ---
engine.addSystem(new GlassHouse(null, glasshouseLandOwnerData))
