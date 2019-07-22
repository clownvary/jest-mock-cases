import SoundPlayer from './soundPlayer';
import {getName,getNumber,reBoot } from 'phoneUtil';


export default class Phone {
  constructor() {
    this.soundPlayer = new SoundPlayer();
  }

  playSomethingCool() {
    const coolSoundFileName = 'song.mp3';
    return this.soundPlayer.playSoundFile(coolSoundFileName);
  }
  getInfo(){
    const name = getName('iphone');
    const number = getNumber('iphone');
    return `${name} ${number}`;
  }
  reStart() {
    return reBoot().then((v) => {
      return 'restart success: ' + v;
    }).catch((e) => {
      return 'restart fail: ' + e;
    });
  }
  playNewSomethingCool(){
    const coolSoundFileName = 'song.mp4';
    return  new SoundPlayer().playSoundFile(coolSoundFileName);
  }


}