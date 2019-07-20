import Phone from 'phone';
import * as util from 'phoneUtil';
// 适合不是以class形式导出，同时需要改写模块实现的情况

describe('Module without class: need to replace implementation', () => {
    it('should return original value by object', () => {
        const phone = new Phone();
        expect(phone.getInfo()).toEqual('original name:iphone original number:156');
    });
    it('should return mock value', () => {

        const phone = new Phone();
        const originalUtil = util;
        // util.xxx, 也可以是异步的方法
        util.getName = jest.fn().mockReturnValue('mock name');
        util.getNumber = jest.fn().mockReturnValue('mock number');
        expect(phone.getInfo()).toEqual('mock name mock number');
        util.getName = originalUtil.getName;
        util.getNumber = originalUtil.getNumber;
    });
    it('should return mock value2', () => {
        const phone = new Phone();
        const originalUtil = util;
        // util.xxx, 也可以是异步的方法
        util.getName = jest.fn().mockReturnValue('mock name2');
        util.getNumber = jest.fn().mockReturnValue('mock number2');
        expect(phone.getInfo()).toEqual('mock name2 mock number2');
        util.getName = originalUtil.getName;
        util.getNumber = originalUtil.getNumber;
    });
});
