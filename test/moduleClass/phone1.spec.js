import Phone from 'phone';
import SoundPlayer from 'soundPlayer';
// 适合同一文件中mock多次不同的值
// 注意当前这种方式只适合内部延迟执行class内的方法的调用, 有一点局限性
// 不适合return new SoundPlayer().playSoundFile();这种直接调用请看phone3.spec.js

jest.mock('soundPlayer');

describe('Module with class: need to replace implementation many times', () => {
    
    it('We can check if the Phone called the Soundplayer class constructor', () => {
        const phone = new Phone();
        expect(SoundPlayer).toHaveBeenCalledTimes(1);
    });
    
    it('should return a mock value by manual mock',()=>{
        const phone = new Phone();
        expect(SoundPlayer).toHaveBeenCalled();
        jest.fn().mockImplementation
        
        // 注意一定要在实例上mock
        
        const mockSoundPlayerInstance = SoundPlayer.mock.instances[0];
        const spy = jest.spyOn(mockSoundPlayerInstance,'playSoundFile');
        spy.mockReturnValue('mock value'); 
        expect(phone.playSomethingCool()).toEqual('mock value');
    })
    it('should return a mock value by manual mock2',()=>{
        const phone = new Phone();
        expect(SoundPlayer).toHaveBeenCalled();
        
        const mockSoundPlayerInstance = SoundPlayer.mock.instances[0];
        const spy = jest.spyOn(mockSoundPlayerInstance,'playSoundFile');
        spy.mockReturnValue('mock value2');
        expect(phone.playSomethingCool()).toEqual('mock value2');
    })
});
