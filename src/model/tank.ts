import { directionEnum } from '../enum/directionEnum'
import { images } from './../service/image'
import Model from './model'
import _ from 'lodash'
import config from '../config'

export default class extends Model implements IModel {
  name: string = 'tank'
  private direction: directionEnum = directionEnum.top
  render(): void {
    this.randomDirection()
    super.draw(this.randomImage())
  }

  randomDirection() {
    const random = Math.floor(Math.random() * 4)
    this.direction = Object.keys(directionEnum)[random] as directionEnum
  }

  randomImage() {
    const name = this.name + _.upperFirst(this.direction)
    return images.get(name as keyof typeof config.images)!
  }
}
