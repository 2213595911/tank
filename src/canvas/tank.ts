import config from '../config'
import CanvasAbstract from './canvas'
import Model from '../model/tank'
import position from '../service/position'
import {IModelConstructor} from '../vite-env'

class Tank extends CanvasAbstract {
  num: number = config.tank.num
  Model: IModelConstructor = Model

  render(): void {
    this.createModels()
    // 渲染坦克
    setInterval(() => {
      this.renderModels()
    }, config.runtime)
  }

  // 渲染模型
  public renderModels() {
    this.canvas.clearRect(0, 0, config.canvas.width, config.canvas.height)
    this.models.forEach(model => model.render())
  }

  // 创建模型
  createModels(): void {
    for (let i = 0; i < this.num; i++) {
      const pos = position.position()
      const instance = new this.Model(pos.x, 0)
      this.models.push(instance)
    }
  }
}

export default new Tank('tank')
