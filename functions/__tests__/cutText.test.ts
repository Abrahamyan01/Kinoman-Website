import { cutText } from "../cutText";

describe('cutText', () => {

    test('возвращается срезанный текст, а также троеточие', () => {
      const text = 'Hello World';
      const result = cutText(text, 5, false);
      expect(result).toBe('Hello...');
    });
    test('возвращается текст целиком, если showFullText === true', () => {
        const text = 'Hello World';
        const result = cutText(text, 5, true);
        expect(result).toBe(text);
      });
  
    test('возвращается текст целиком, если текст меньше лимита', () => {
      const text = 'Hello';
      const result = cutText(text, 10, false);
      expect(result).toBe(text);
    });
  });