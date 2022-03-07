import { images } from '../service/image'
import Model from './model'

export default class extends Model implements IModel {
  name: string = 'straw'
  image(): HTMLImageElement {
    return images.get('straw')!
  }
  render(): void {
    this.draw()
  }
}
