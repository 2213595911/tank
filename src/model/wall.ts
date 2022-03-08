import wall from '../canvas/wall'
import {ICanvas, IModel} from '../vite-env'
import {images} from '../service/image'
import ModelAbstract from './model'

export default class extends ModelAbstract implements IModel {
  canvas: ICanvas = wall
  name: string = 'wall'

  image(): HTMLImageElement {
    return images.get('wall')!
  }

  render(): void {
    super.draw()
  }
}
