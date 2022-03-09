import config from '../config'
import CanvasAbstract from './canvas'
import Model from '../model/wall'
import {ICanvas, IModelConstructor} from "../vite-env";

class Wall extends CanvasAbstract implements ICanvas {
  num: number = config.wall.num
  Model: IModelConstructor = Model

  render(): void {
    super.createModels()
    this.createBossWall()
    super.renderModels()
  }

  // 绘制boss砖墙
  protected createBossWall() {
    const cw = config.canvas.width
    const ch = config.canvas.height
    const mw = config.model.width
    const mh = config.model.height
    const pos = [
      {x: cw / 2 - mw * 3, y: ch - mh},
      {x: cw / 2 - mw * 2, y: ch - mh},
      {x: cw / 2 - mw * 2, y: ch - mh * 2},
      {x: cw / 2 - mw, y: ch - mh * 2},
      {x: cw / 2, y: ch - mh * 2},
      {x: cw / 2 + mw, y: ch - mh * 2},
      {x: cw / 2 + mw * 2, y: ch - mh * 2},
      {x: cw / 2 - mw * 3, y: ch - mh * 2},
      {x: cw / 2 - mw * 3, y: ch - mh * 3},
      {x: cw / 2 - mw * 2, y: ch - mh * 3},
      {x: cw / 2 - mw, y: ch - mh},
      {x: cw / 2 - mw, y: ch - mh * 3},
      {x: cw / 2, y: ch - mh * 3},
      {x: cw / 2 + mw, y: ch - mh},
      {x: cw / 2 + mw * 2, y: ch - mh},
      {x: cw / 2 + mw, y: ch - mh * 3},
      {x: cw / 2 + mw * 2, y: ch - mh * 3},
      {x: cw / 2 + mw * 3, y: ch - mh},
      {x: cw / 2 + mw * 3, y: ch - mh * 2},
      {x: cw / 2 + mw * 3, y: ch - mh * 3},
    ]
    pos.forEach(position => {
      const instance = new (this.Model as IModelConstructor)(position.x, position.y)
      this.models.push(instance)
    })
  }
}

export default new Wall('wall')
