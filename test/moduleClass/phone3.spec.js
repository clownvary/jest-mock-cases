import Phone from 'phone';
import SoundPlayer from 'soundPlayer';
// 适合立即调用class实例方法的情况

describe('Module with class: need to replace implementation many times', () => {
    
    it('should return a mock value by manual mock',()=>{
        const phone = new Phone();
        
        SoundPlayer.prototype.playSoundFile = jest.fn().mockReturnValue('mock value');
        expect(phone.playNewSomethingCool()).toEqual('mock value');
    });
});
