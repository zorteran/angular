import { ImageBaseUrlPipe } from './image-base-url.pipe';

describe('ImageBaseUrlPipe', () => {
  it('create an instance', () => {
    const pipe = new ImageBaseUrlPipe('test.jpg');
    expect(pipe).toBeTruthy();
  });
});
