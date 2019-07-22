import Phone from 'phone';
import * as util from 'phoneUtil';
// 适合异步方法的多次mock

describe('Module with async method: need to replace implementation', () => {
    it('should return original value by object', () => {
        const phone = new Phone();
        const _util = util;
        util.reBoot = jest.fn().mockResolvedValueOnce('mock resolve');
        // 注意要有return (如果使用done方式，则不需要)
        return phone.reStart().then((v)=>{
        expect(v).toEqual('restart success: mock resolve');
        util.reBoot =_util.reBoot;
        });
    });
    it('should return failure value by mock', () => {
        const phone = new Phone();
        util.reBoot = jest.fn().mockRejectedValue('mock reject')
        // 有点问题，这里.rejects不行，必须是resolves, 很奇怪
        return expect(phone.reStart()).resolves.toEqual('restart fail: mock reject');
    });
});
