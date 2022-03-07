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
  private move(): void {
    switch (this.direction) {
      case directionEnum.top:
        this.y += 2
        break
      case directionEnum.right:
        this.x += 2
        break
      case directionEnum.bottom:
        this.y -= 2
        break
      case directionEnum.left:
        this.x -= 2
        break
    }
    this.draw()
  }

  // 插入图片
  image() {
    const name = this.name + _.upperFirst(this.direction)
    return images.get(name as keyof typeof config.images)!
  }
}
