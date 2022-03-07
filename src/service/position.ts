import config from '../config'

class Position {
  private collection: { x: number; y: number }[] = []
  // 生成坐标集合（用于去重）
  public getCollection(num: number) {
    const collections = [] as { x: number; y: number }[]
    for (let i = 0; i < num; i++) {
      while (true) {
        const position = this.position()
        const exist = this.collection.some(item => item.x === position.x && item.y === position.y)
        if (!exist) {
          collections.push(this.position())
          this.collection.push(this.position())
          break
        }
      }
    }
    return collections
  }

  // 生成坐标
  protected position() {
    return {
      // 减5存在疑问
      x: Math.floor(Math.random() * (config.canvas.width / config.model.width)) * config.model.width,
      y: Math.floor(Math.random() * (config.canvas.height / config.model.height - 5)) * config.model.height + config.model.height * 2,
    }
  }
}

export default new Position()
