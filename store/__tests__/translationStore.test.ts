import { TranslationStore } from '../translationStore';
import Cookies from 'js-cookie';

describe('TranslationStore', () => {
    test('установка перевода на значение, сохраненного в куки', () => {
        jest.spyOn(Cookies, 'get' as any).mockImplementation(() => 'en');
        const store = new TranslationStore();
        expect(store.translation).toBe('en');
    });
   
    test('установка перевода на значение по умолчанию, если в куках нет значения', () => {
        jest.spyOn(Cookies, 'get' as any).mockImplementation(() => undefined);
        const store = new TranslationStore();
        expect(store.translation).toBe('ru');
    });
   
    test('обновление перевода при вызове setTranslation', () => {
    const store = new TranslationStore();
    store.setTranslation('en');
    expect(store.translation).toBe('en');
    });
   });