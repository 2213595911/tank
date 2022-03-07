import { images } from './../service/image'
import Model from './model'

export default class extends Model implements IModel {
  name: string = 'water'
  image(): HTMLImageElement {
    return images.get('water')!
  }
  render(): void {
    this.draw()
  }
}
