import steel from './canvas/steel'
import './canvas/straw'
import straw from './canvas/straw'
import tank from './canvas/tank'
import wall from './canvas/wall'
import water from './canvas/water'
import config from './config'
import { loadImage } from './service/image'
import './style.scss'

async function bootstrap() {
  await Promise.all(loadImage())
  const el = document.querySelector<HTMLDivElement>('#app')!
  el.style.width = config.canvas.width + 'px'
  el.style.height = config.canvas.height + 'px'

  straw.render()
  wall.render()
  water.render()
  steel.render()
  tank.render()
}

void bootstrap()
