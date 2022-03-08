import steel from '../canvas/steel'
import {ICanvas, IModel} from '../vite-env'
import {images} from '../service/image'
import ModelAbstract from './model'

export default class extends ModelAbstract implements IModel {
  canvas: ICanvas = steel
  name: string = 'steel'

  image(): HTMLImageElement {
    return images.get('steel')!
  }

  render(): void {
    super.draw()
  }
}
