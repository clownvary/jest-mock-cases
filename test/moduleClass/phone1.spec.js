import Phone from 'phone';
import SoundPlayer from 'soundPlayer';
// 适合同一文件中mock多次不同的值

jest.mock('soundPlayer');

describe('Module with class: need to replace implementation many times', () => {
    
    it('We can check if the Phone called the Soundplayer class constructor', () => {
        const phone = new Phone();
        expect(SoundPlayer).toHaveBeenCalledTimes(1);
    });
    
    it('should return a mock value by manual mock',()=>{
        const phone = new Phone();
        expect(SoundPlayer).toHaveBeenCalled();
        
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
