
export class GlassHouse implements ISystem {
  META_ID = 0 // Change to your MetaZone meta number identifier

  api = null
  host = null

  /// --- Lets make a 3D model ---
  metaEntity = null

  /**
   * Initial scene setup, create all objects in the constructor.
   *
   * @param api          Used to call MetaZone API endpoints.
   * @param host_data    Very first
   */
  constructor(api, host_data) {
    // Save api
    this.api = api;



    ///////// Your static scene assets ///////////
    // Initialize all scene entities here

    /// --- Lets spawn a 3d model ---
    this.metaEntity = new Entity()
    this.metaEntity.addComponent(new Transform({
      position: new Vector3(8, 0, 8)
    }))
    engine.addEntity(this.metaEntity)

    const modelEntity = new Entity()
    modelEntity.addComponent(new GLTFShape('metas/glasshouse/models/collider test xx.glb'))
    modelEntity.addComponent(new Transform({
      position: new Vector3(8.5, 0, 6.7),
      scale: new Vector3(1.2, 1.2, 1.2)
    }))
    modelEntity.setParent(this.metaEntity)

    ///////// Your static scene assets ///////////



    // Initial host data
    this.refreshHost(host_data)
  }

  /**
   * A Decentraland provided function where you should put your code that
   * repeats over and over.
   *
   * @param dt     Delta time since last update
   */
  update(dt: number) {
    // Note: your code that repeats goes here
  }

  /**
   * A MetaZone provided function that contains data customized by the
   * landowner on the MetaZone.io system. This gets called every minute when it
   * is deployed live. During testing its called once in the game.ts file.
   *
   * @param host_data    Data sent from the MetaZone backend to update your Meta
   */
  refreshHost(host: Object) {
    // Save host info
    this.host = host

    // Parse metadata
    if(this.host.host_data) {
      let host_data = JSON.parse(this.host.host_data)

      ///////// Your landowner adjustable content ///////////
      // You decide which of your creation's entities the landowner can adjust.

      /// --- Lets adjust our 3d model ---
      this.metaEntity.getComponent(Transform).position.set(
        host_data.GlassHouse.position.x,
        host_data.GlassHouse.position.y,
        host_data.GlassHouse.position.z
      )
      this.metaEntity.getComponent(Transform).rotation.setEuler(
        host_data.GlassHouse.rotation.x,
        host_data.GlassHouse.rotation.y,
        host_data.GlassHouse.rotation.z
      )
      this.metaEntity.getComponent(Transform).scale.set(
        host_data.GlassHouse.scale.x,
        host_data.GlassHouse.scale.y,
        host_data.GlassHouse.scale.z
      )

      ///////// Your landowner adjustable content ///////////
    }
  }

}
