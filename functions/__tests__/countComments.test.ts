import { countComments } from '../countComments';


describe('countComments', () => {
  test('возвращается количество комментариев', () => {
    const comments: any = [
      { id: 1, repliedOnComment: null },
      { id: 2, repliedOnComment: 1 },
      { id: 3, repliedOnComment: 1 },
      { id: 4, repliedOnComment: 2 },
    ];
    expect(countComments(comments)).toBe(4);
  });

  test('возвращается 0, если массив пустой', () => {
    expect(countComments([])).toBe(0);
  });
});