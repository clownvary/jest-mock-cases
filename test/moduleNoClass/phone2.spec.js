import Phone from 'phone';
import * as util from 'phoneUtil'

// 只测试是否被调用时候
jest.mock('phoneUtil');

describe('Module without class: no need to replace implementation', () => {
    it('We can check if the Phone called the getName/getNumber method', () => {
        const phone = new Phone();
        phone.getInfo();
        expect(util.getName).toHaveBeenCalledTimes(1);
        expect(util.getNumber).toHaveBeenCalledTimes(1);
    });
});