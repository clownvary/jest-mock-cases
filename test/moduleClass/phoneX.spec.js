import Phone from 'phone';
import * as Sound from 'soundPlayer';
// 适合所有情况，导出 import * as xxx from '... 

describe('Module with class: need to replace implementation many times', () => {

    it('should return a mock value by manual mock',()=>{
        const phone = new Phone();
        // 直接mock default,而不论导出的是class还是普通的方法
        // 唯一区别是class的mock 需要实现constructor即
        // xxx.default = jest.fn().mockImplementation(()=>{
        //     xxx // constructor
        //     return {...}// instance methods
        // }))
        Sound.default = jest.fn().mockImplementation(() => ({
            playSoundFile: jest.fn().mockReturnValue('mock default')
        }));
        expect(phone.playNewSomethingCool()).toEqual('mock default');
    });
});
