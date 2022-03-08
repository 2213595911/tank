/// <reference types="vite/client" />

import {directionEnum} from './enum/directionEnum'

interface IModelConstructor {
  new(x: number, y: number): IModel
}

interface BulletModelConstructor {
  new(tank: IModel): IModel
}

interface IModel {
  name: string
  canvas: ICanvas
  direction: directionEnum
  tank?: IModel
  x: number
  y: number
  width: number
  height: number

  render(): void

  image(): HTMLImageElement

  removeModel(): void
}

interface ICanvas {
  num: number
  Model: IModelConstructor | BulletModelConstructor
  canvas: CanvasRenderingContext2D

  removeModel(model: IModel): void

  renderModels(): void
}
