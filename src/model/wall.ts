import { images } from './../service/image'
import Model from './model'

export default class extends Model implements IModel {
  name: string = 'wall'
  image(): HTMLImageElement {
    return images.get('wall')!
  }
  render(): void {
    this.draw()
  }
}
