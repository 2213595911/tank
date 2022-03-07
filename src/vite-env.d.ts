/// <reference types="vite/client" />

interface IModelConstructor {
  new (canvas: CanvasRenderingContext2D, x: number, y: number): IModel
}

interface IModel {
  canvas: CanvasRenderingContext2D
  x: number
  y: number
  render(): void
  createModels?(): void
  image(): HTMLImageElement
}
