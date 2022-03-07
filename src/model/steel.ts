import { images } from './../service/image'
import Model from './model'

export default class extends Model implements IModel {
  render(): void {
    super.draw(images.get('steel')!)
  }
}
