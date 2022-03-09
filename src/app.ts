import bullet from './canvas/bullet'
import steel from './canvas/steel'
import './canvas/straw'
import straw from './canvas/straw'
import tank from './canvas/tank'
import wall from './canvas/wall'
import water from './canvas/water'
import config from './config'
import {loadImage} from './service/image'
import './style.scss'
import boss from "./canvas/boss";
import play from "./canvas/play";
import audio from "./service/audio";

export default {
  isStart: false,
  state: 10,
  interval: 0,
  // 预加载
  boostrap() {
    const el = document.querySelector<HTMLDivElement>('#app')!
    el.style.width = config.canvas.width + 'px'
    el.style.height = config.canvas.height + 'px'
    el.addEventListener('click', async () => {
      if (!this.isStart) {
        this.isStart = true
        void await this.start()
        el.style.backgroundImage = 'none'
        audio.start()
        // 检测游戏结束
        this.interval = setInterval(() => {
          if (tank.models.length === 0) this.state = 0
          if (play.models.length === 0 || boss.models.length === 0) this.state = 1
          if (this.state !== 10) void this.stop()
        })
      }
    })
  },

  // 游戏结束
  async stop() {
    console.log('游戏结束')
    clearInterval(this.interval)
    tank.stop()
    bullet.stop()
    this.text()
  },

  // 结束文字
  text() {
    const el = document.createElement('canvas')!
    el.width = config.canvas.width
    el.height = config.canvas.height
    const canvas = el.getContext('2d')!
    canvas.fillStyle = 'red'
    canvas.font = '80px JetBrains Mono'
    canvas.textAlign = 'center'
    canvas.textBaseline = 'middle'
    const text = this.state === 0 ? '恭喜你，获得胜利！' : '战斗失败'
    canvas.fillText(text, config.canvas.width / 2, config.canvas.height / 2)
    document.querySelector('#app')!.appendChild(el)
  },
  // 开始游戏
  async start() {
    await Promise.all(loadImage())
    straw.render()
    wall.render()
    water.render()
    steel.render()
    tank.render()
    bullet.render()
    boss.render()
    play.render()
  }

}
// void bootstrap()
