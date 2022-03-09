import config from '../config'
import position from '../service/position'
import {BulletModelConstructor, IModel, IModelConstructor} from '../vite-env'

export default abstract class CanvasAbstract {
  abstract num: number
  abstract Model: IModelConstructor | BulletModelConstructor

  abstract render(): void

  public models: IModel[] = []

  constructor(
      protected name: string,
      protected el = document.createElement('canvas')!,
      public canvas = el.getContext('2d')!,
      protected app = document.querySelector('#app')!
  ) {
    this.createCanvas()
  }

  // 创建模型
  protected createModels() {
    position.getCollection(this.num).forEach(position => {
      const instance = new (this.Model as IModelConstructor)(position.x, position.y)
      this.models.push(instance)
    })
  }

  // 渲染模型
  public renderModels() {
    this.canvas.clearRect(0, 0, config.canvas.width, config.canvas.height)
    this.models.forEach(model => {
      model.render()
    })
  }

  // 移除模型
  public removeModel(model: IModel) {
    this.models = this.models.filter(m => m !== model)
    this.renderModels()
  }

  // 创建画布
  protected createCanvas() {
    this.el.width = config.canvas.width
    this.el.height = config.canvas.height
    this.el.setAttribute('name', this.name)
    this.app.appendChild(this.el)
  }

}
