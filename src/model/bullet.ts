import bullet from '../canvas/bullet'
import steel from '../canvas/steel'
import wall from '../canvas/wall'
import config from '../config'
import {directionEnum} from '../enum/directionEnum'
import {images} from '../service/image'
import util from '../util'
import {ICanvas, IModel} from '../vite-env'
import ModelAbstract from './model'
import boss from "../canvas/boss";
import tank from "../canvas/tank";
import play from "../canvas/play";

export default class extends ModelAbstract implements IModel {
  name: string = 'bullet'
  canvas: ICanvas = bullet

  constructor(public tank: IModel) {
    super(tank.x + config.model.width / 2, tank.y + config.model.height / 2)
    this.direction = tank.direction
  }

  image(): HTMLImageElement {
    return images.get('bullet')!
  }

  // 子弹移动
  move() {
    let x = this.x
    let y = this.y
    let step = this.tank.name === 'play' ? 5 : 2
    switch (this.direction) {
      case directionEnum.top:
        y -= step
        break
      case directionEnum.right:
        x += step
        break
      case directionEnum.bottom:
        y += step
        break
      case directionEnum.left:
        x -= step
        break
    }

    // 子弹碰撞检测
    const modelTouch = util.isTouchModel(x, y, 2, 2, [...wall.models, ...steel.models, ...boss.models, ...tank.models, ...play.models])
    if (util.isTouchCanvas(x, y, 2, 2)) {
      this.removeModel()
    } else if (modelTouch && modelTouch.name !== this.tank.name) {
      this.removeModel()
      // 存在问题
      if (modelTouch.name !== 'steel') modelTouch.removeModel()
      this.blast(modelTouch)
    } else {
      this.x = x
      this.y = y
      this.draw()
    }
  }

  render(): void {
    this.move()
  }

  // 画
  draw() {
    this.canvas.canvas.drawImage(this.image(), this.x, this.y, 2, 2)
  }
}
