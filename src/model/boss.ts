import {images} from '../service/image'
import ModelAbstract from './model'
import {ICanvas, IModel} from "../vite-env";
import boss from "../canvas/boss";

export default class extends ModelAbstract implements IModel {
  canvas: ICanvas = boss
  name: string = 'boss'

  image(): HTMLImageElement {
    return images.get('boss')!
  }

  render(): void {
    super.draw()
  }
}
