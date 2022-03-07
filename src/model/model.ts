import { directionEnum } from '../enum/directionEnum'
import _ from 'lodash'
import config from '../config'

export default abstract class Model {
  protected direction: directionEnum = directionEnum.top
  abstract name: string
  abstract render(): void
  abstract image(): HTMLImageElement
  constructor(public canvas: CanvasRenderingContext2D, public x: number, public y: number) {
    this.randomDirection()
  }

  // 随机生成方向
  protected randomDirection() {
    const random = Math.floor(Math.random() * 4)
    this.direction = Object.keys(directionEnum)[random] as directionEnum
  }

  // 插图
  protected draw() {
    this.canvas.drawImage(this.image(), this.x, this.y, config.model.width, config.model.height)
  }
}
