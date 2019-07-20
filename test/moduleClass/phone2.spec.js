import Phone from 'phone';
import SoundPlayer from 'soundPlayer';
// 适合需要替换模块内部实现的测试, 放置在文件顶部的jest.mock(xxx),会把整个上下文都mock,
// 没法在当前文件中别的case里重新mock, 所以使用这种方法只能mock一个结果
jest.mock('soundPlayer',()=>{
    // 注意这里不能返回箭头函数，不起作用
    /*
    // work
    jest.mock('soundPlayer', () => {
        return jest.fn().mockImplementation(() => {
            return {
                playSoundFile: jest.fn().mockReturnValue('mock value')
            }
        })
    });
    // not work
    jest.mock('soundPlayer', () => {
       return jest.fn().mockImplementation(() => {
           return {
               playSoundFile: jest.fn().mockReturnValue('mock value')
           }
       })
    );
    */
    return jest.fn().mockImplementation(()=>{
        return {
            playSoundFile: jest.fn().mockReturnValue('mock value')
        }
    });
}); // SoundPlayer is now a mock constructor

beforeEach(() => {
  // Clear all instances and calls to constructor and all methods:
  jest.resetModules();
});


describe('Module with class: need to replace implementation just once', () => {
    it('should return a mock value by manual mock',()=>{
        const phone = new Phone();
        expect(phone.playSomethingCool()).toEqual('mock value');
    });
});

