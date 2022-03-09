export default {
  el(id:string){
    return document.querySelector<HTMLAudioElement>(id)!
  },
  start(){
    void this.el('#start').play()
  },
  fire(){
    void this.el('#fire').play()
  },
  blast(){
    void this.el('#blast').play()
  }
}