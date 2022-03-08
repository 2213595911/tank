import {directionEnum} from '../enum/directionEnum'
import config from '../config'
import {ICanvas, IModel} from '../vite-env'

export default abstract class ModelAbstract {
  public direction: directionEnum = directionEnum.top
  public width: number = config.model.width
  public height: number = config.model.height
  abstract name: string

  abstract render(): void

  abstract image(): HTMLImageElement

  abstract canvas: ICanvas

  constructor(public x: number, public y: number) {
    this.randomDirection()
  }

  // 删除模型
  public removeModel() {
    this.canvas.removeModel(this)
  }

  // 随机生成方向
  protected randomDirection() {
    this.direction = Object.keys(directionEnum)[Math.floor(Math.random() * 4)] as directionEnum
  }

  // 画
  protected draw() {
    this.canvas.canvas.drawImage(this.image(), this.x, this.y, this.width, this.height)
  }

  // 爆炸
  protected blast(model: IModel) {
    Array(...Array(8).keys()).reduce((promise, index) => {
      return new Promise(resolve => {
        const img = new Image()
        img.src = `/src/static/images/blasts/blast${index}.gif`
        img.onload = () => {
          this.canvas.canvas.drawImage(img, model.x, model.y, 30, 30)
          resolve(promise)
        }
      })
    }, Promise.resolve())
  }
}
