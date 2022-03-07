import { images } from './../service/image'
import Model from './model'

export default class extends Model implements IModel {
  name: string = 'steel'
  image(): HTMLImageElement {
    return images.get('steel')!
  }
  render(): void {
    this.draw()
  }
}
