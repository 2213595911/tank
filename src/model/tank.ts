import { images } from './../service/image'
import { directionEnum } from '../enum/directionEnum'
import Model from './model'
import config from '../config'
import _ from 'lodash'

export default class extends Model implements IModel {
  name: string = 'tank'
  render(): void {
    this.move()
  }
  // 移动
  protected move(): void {
    let x = this.x
    let y = this.y
    while (true) {
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
      if (this.isTouch(x, y)) {
        this.randomDirection()
      } else {
        this.x = x
        this.y = y
        break
      }
    }
    this.draw()
  }

  // 碰撞检测
  protected isTouch(x: number, y: number): boolean {
    if (x < 0 || x + config.model.width > this.width || y < 0 || y + config.model.height > this.height) {
      return true
    } else {
      return false
    }
  }

  // 插入图片
  image() {
    const name = this.name + _.upperFirst(this.direction)
    return images.get(name as keyof typeof config.images)!
  }
}
