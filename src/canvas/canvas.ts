import config from '../config'
import { images } from '../service/image'
export default abstract class CanvasAbstract {
  protected items = []
  abstract render(): void

  constructor(
    protected el = document.createElement('canvas')!,
    protected canvas = el.getContext('2d')!,
    protected app = document.querySelector('#app')!
  ) {
    this.createCanvas()
  }

  // 创建画布
  protected createCanvas() {
    this.el.width = config.canvas.width
    this.el.height = config.canvas.height
    this.app.insertAdjacentElement('beforeend', this.el)
  }

  // 绘制模型
  protected drawModel(num: number) {
    this.positionCollection(num).forEach(position => {
      this.canvas.drawImage(images.get('straw')!, position.x, position.y, config.model.width, config.model.height)
    })
  }

  // 生成坐标集合（用于去重）
  protected positionCollection(num: number) {
    const collections = [] as { x: number; y: number }[]
    for (let i = 0; i < num; i++) {
      while (true) {
        const position = this.position()
        const exist = collections.some(item => item.x === position.x && position.y)
        if (!exist) {
          collections.push(this.position())
          break
        }
      }
    }
    return collections
  }

  // 生成坐标
  protected position() {
    return {
      x: Math.floor((Math.random() * config.canvas.width) / config.model.width) * config.model.width,
      y: Math.floor((Math.random() * config.canvas.height) / config.model.height) * config.model.height,
    }
  }
}
