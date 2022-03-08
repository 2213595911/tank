import bullet from '../canvas/bullet'
import steel from '../canvas/steel'
import wall from '../canvas/wall'
import config from '../config'
import {directionEnum} from '../enum/directionEnum'
import {images} from '../service/image'
import util from '../util'
import {ICanvas, IModel} from '../vite-env'
import ModelAbstract from './model'

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

  move() {
    let x = this.x
    let y = this.y
    switch (this.direction) {
      case directionEnum.top:
        y -= 1
        break
      case directionEnum.right:
        x += 1
        break
      case directionEnum.bottom:
        y += 1
        break
      case directionEnum.left:
        x -= 1
        break
    }

    // 碰撞检测
    const modelTouch = util.isTouchModel(x, y, 2, 2, [...wall.models, ...steel.models])
    if (util.isTouchCanvas(x, y, 2, 2)) {
      this.removeModel()
    } else if (modelTouch) {
      this.removeModel()
      // 存在问题
      if (modelTouch.name === 'wall') modelTouch.removeModel()
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
