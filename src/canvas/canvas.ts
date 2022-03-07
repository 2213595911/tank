import config from '../config'
import position from '../service/position'
export default abstract class CanvasAbstract {
  abstract num: number
  abstract Model: IModelConstructor
  abstract render(): void

  protected models: IModel[] = []

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

  // 创建模型
  protected createModels() {
    position.getCollection(this.num).forEach(position => {
      const instance = new this.Model(this.canvas, position.x, position.y)
      this.models.push(instance)
    })
  }

  // 渲染模型
  protected renderModels() {
    this.models.forEach(model => {
      model.render()
    })
  }
}
