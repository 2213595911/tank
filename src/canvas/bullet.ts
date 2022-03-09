import CanvasAbstract from './canvas'
import Model from '../model/bullet'
import tank from './tank'
import {BulletModelConstructor, IModel} from '../vite-env'
import bullet from "../model/bullet";
import audio from "../service/audio";

class Bullet extends CanvasAbstract {
  public num: number = 0
  public Model: BulletModelConstructor = Model
  interval = 0

  // 渲染模型
  render(): void {
    this.interval = setInterval(() => {
      this.createBullet()
      this.renderModels()
    }, 20)
  }

  // 停止渲染
  stop() {
    clearInterval(this.interval)
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

  // 创建玩家子弹
  addPlayBullet(play: IModel) {
    this.models.push(new bullet(play))
    audio.fire()
  }
}

export default new Bullet('bullet')
