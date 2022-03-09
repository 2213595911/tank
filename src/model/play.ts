import play from '../canvas/play'
import {images} from '../service/image'
import ModelAbstract from './model'
import {ICanvas, IModel} from "../vite-env";
import _ from "lodash";
import config from "../config";
import {directionEnum} from "../enum/directionEnum";
import util from "../util";
import bullet from "../canvas/bullet";

export default class extends ModelAbstract implements IModel {
  canvas: ICanvas = play
  name: string = 'play'
  protected isBind = false


  image(): HTMLImageElement {
    const direction = this.name + _.upperFirst(this.direction)
    return images.get(direction as keyof typeof config.images)!
  }

  render(): void {
    super.draw()
    if (!this.isBind) {
      this.isBind = true
      document.addEventListener('keydown', this.changeDirection.bind(this))
      document.addEventListener('keydown', this.move.bind(this))
      document.addEventListener('keydown', (event: KeyboardEvent) => {
        if(event.code === 'Space'){
          bullet.addPlayBullet(this)
        }
      })
    }
  }


  // 修改方向
  public changeDirection(event: KeyboardEvent) {
    switch (event.code) {
      case 'ArrowUp':
        this.direction = directionEnum.top
        break;
      case 'ArrowRight':
        this.direction = directionEnum.right
        break;
      case 'ArrowDown':
        this.direction = directionEnum.bottom
        break;
      case 'ArrowLeft':
        this.direction = directionEnum.left
        break;
    }
    // event.preventDefault()
  }

  // 玩家移动
  protected move(event: KeyboardEvent) {
    let x = this.x
    let y = this.y
    switch (event.code) {
      case 'ArrowUp':
        y -= 5
        break;
      case 'ArrowRight':
        x += 5
        break;
      case 'ArrowDown':
        y += 5
        break;
      case 'ArrowLeft':
        x -= 5
        break;
    }
    if (util.isTouchCanvas(x, y) || util.isTouchModel(x, y)) {
      return
    }
    this.x = x
    this.y = y
    this.canvas.renderModels()
  }


}
