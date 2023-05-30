import { makeAutoObservable } from "mobx";
import Cookies from 'js-cookie';

export class TranslationStore {
  translation = "ru";


  constructor() {
    makeAutoObservable(this);
    const storedTranslation = Cookies.get('i18nextLng');
    if (storedTranslation) {
      this.translation = storedTranslation;
    }
  }

  setTranslation(status) {
    this.translation = status;
  }
}

export const translationStore = new TranslationStore();

