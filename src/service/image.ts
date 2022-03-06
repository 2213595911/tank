import config from '../config'

type mapType = keyof typeof config.images
export const images = new Map<mapType, HTMLImageElement>()

export function loadImage() {
  return Object.entries(config.images).map(([key, value]) => {
    return new Promise(resolve => {
      const image = document.createElement('img')
      image.src = value
      image.onload = () => {
        images.set(key as mapType, image)
        resolve(image)
      }
    })
  })
}
