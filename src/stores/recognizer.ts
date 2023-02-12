import { action, makeAutoObservable } from 'mobx';

class RecognizerStore {
  constructor() {
    makeAutoObservable(this);
  }

  public onSubmitFile(file: File) {
    console.log(file);
  }
}

export default RecognizerStore;
