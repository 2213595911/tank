import {images} from '../service/image'
import {directionEnum} from '../enum/directionEnum'
import ModelAbstract from './model'
import config from '../config'
import _ from 'lodash'
import tank from '../canvas/tank'
import {ICanvas, IModel} from '../vite-env'
import util from '../util'

export default class extends ModelAbstract implements IModel {
  canvas: ICanvas = tank
  name: string = 'tank'

  render(): void {
    this.move()
    // 增加向下行走的概率
    if (_.random(5) === 1) {
      this.direction = directionEnum.bottom
    }
  }

  // 移动
  protected move(): void {
    while (true) {
      let x = this.x
      let y = this.y
      switch (this.direction) {
        case directionEnum.top:
          y--
          break
        case directionEnum.right:
          x++
          break
        case directionEnum.bottom:
          y++
          break
        case directionEnum.left:
          x--
          break
      }
      if (util.isTouchModel(x, y) || util.isTouchCanvas(x, y)) {
        this.randomDirection()
      } else {
        this.x = x
        this.y = y
        break
      }
    }
    super.draw()
  }

  // 插入图片
  image() {
    const name = this.name + _.upperFirst(this.direction)
    return images.get(name as keyof typeof config.images)!
  }
}
