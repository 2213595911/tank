import { images } from './../service/image'
import { directionEnum } from '../enum/directionEnum'
import Model from './model'
import config from '../config'
import _ from 'lodash'
import water from '../canvas/water'
import steel from '../canvas/steel'
import wall from '../canvas/wall'

export default class extends Model implements IModel {
  name: string = 'tank'
  render(): void {
    this.move()
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
    }
    const models = [...water.models, ...steel.models, ...wall.models]
    return models.some(model => {
      const state =
        x + config.model.width <= model.x ||
        x >= model.x + config.model.width ||
        y + config.model.height <= model.y ||
        y >= model.y + config.model.height

      return !state
    })
  }

  // 插入图片
  image() {
    const name = this.name + _.upperFirst(this.direction)
    return images.get(name as keyof typeof config.images)!
  }
}
