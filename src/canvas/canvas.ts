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
    const position = this.position()
    this.canvas.drawImage(images.get('straw')!, position.x, position.y, config.model.width, config.model.height)
  }

  // 生成坐标
  protected position() {
    return {
      x: 20,
      y: 100,
    }
  }
}
