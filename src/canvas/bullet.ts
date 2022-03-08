import CanvasAbstract from './canvas'
import Model from '../model/bullet'
import tank from './tank'
import {BulletModelConstructor} from '../vite-env'

class Bullet extends CanvasAbstract {
  public num: number = 0
  public Model: BulletModelConstructor = Model

  // 渲染模型
  render(): void {
    setInterval(() => {
      this.createBullet()
      this.renderModels()
    }, 20)
  }

  // 创建子弹模型
  createBullet() {
    tank.models.forEach(tank => {
      const isExists = this.models.some(bullet => bullet.tank === tank)
      if (!isExists) {
        this.models.push(new Model(tank))
      }
    })
  }
}

export default new Bullet('bullet')
