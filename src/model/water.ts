import water from '../canvas/water'
import {images} from '../service/image'
import ModelAbstract from './model'
import {ICanvas, IModel} from "../vite-env";

export default class extends ModelAbstract implements IModel {
  canvas: ICanvas = water
  name: string = 'water'

  image(): HTMLImageElement {
    return images.get('water')!
  }

  render(): void {
    super.draw()
  }
}
