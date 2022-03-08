import straw from '../canvas/straw'
import {images} from '../service/image'
import {ICanvas, IModel} from '../vite-env'
import ModelAbstract from './model'

export default class extends ModelAbstract implements IModel {
  canvas: ICanvas = straw
  name: string = 'straw'

  image(): HTMLImageElement {
    return images.get('straw')!
  }

  render(): void {
    super.draw()
  }
}
