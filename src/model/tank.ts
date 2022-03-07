import { images } from './../service/image'
import Model from './model'

export default class extends Model implements IModel {
  render(): void {
    super.draw(this.randomImage())
  }

  randomImage() {
    return images.get('tank')!
  }
}
