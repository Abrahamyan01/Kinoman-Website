import { makeAutoObservable } from 'mobx';

class DropdownStore {
    dropdowns = {
      movies: false,
      profile: false,
      subscribe: false,
      alert: false,
      genres:false,
      countries:false,
      actors:false,
      directors:false
    };
  
    constructor() {
      makeAutoObservable(this);
    }
  
    setShowDropdown(name:string, value:boolean) {
      if (value) {
        this.closeAllDropdowns();
      }
      this.dropdowns[name] = value;
    }
    toggleShowDropdown(name:string) {
      this.dropdowns[name] = !this.dropdowns[name];
    }
  
    closeAllDropdowns() {
      for (const key in this.dropdowns) {
        this.dropdowns[key] = false;
      }
    }
  }

export const dropdownStore = new DropdownStore();