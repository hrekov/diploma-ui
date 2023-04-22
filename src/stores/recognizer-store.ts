import { makeAutoObservable } from 'mobx';
import config from "../config";
import { CarInfoItem, RecognizedData } from '../misc/types';

class RecognizerStore {
  private _isFileProcessing = false;
  private _recognizedData: RecognizedData = null;
  private _taskId: string | null = null;

  get isFileProcessing(): boolean {
    return this._isFileProcessing;
  }

  get recognizedData(): Array<CarInfoItem> {
    if (!this._recognizedData) {
      return [];
    }

    return Object
      .entries(this._recognizedData)
      .slice(0, 5)
      .filter(([_, value]) => value !== null)
      .map(([name, value]) => ({ name, value: value as unknown as string | number }));
  }

  get dataTaskId(): string | null {
    return this._taskId;
  }

  constructor() {
    makeAutoObservable(this);
  }

  private waitForRecognitionResult = async (taskId: string): Promise<RecognizedData> => {
    const response = await fetch(
      `${config.BACKEND_URL}/api/v1/recognition/${taskId}`,
      {
        method: 'GET',
        credentials: 'include',
      }
    );

    return await response.json();
  }

  public onSubmitFile = async (file: File) => {
    const formData = new FormData();
    formData.append('photo', file);

    this._isFileProcessing = true;

    const response = await fetch(
      `${config.BACKEND_URL}/api/v1/recognition`,
      {
        method: 'POST',
        body: formData,
        credentials: 'include',
      },
    );

    if (response.status !== 200) {
      throw new Error('Unsuccessful status code');
    }

    const taskId = await response.json().then(data => data['task_id']);

    this._recognizedData = await this.waitForRecognitionResult(taskId);
    this._taskId = taskId;

    this._isFileProcessing = false;
  }
}

export default RecognizerStore;
