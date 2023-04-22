import { makeAutoObservable } from "mobx";
import { CarInfoItem, RecognizedData } from "../misc/types";
import config from "../config";

class RecognizerResultsStore {
  private _searchResults: RecognizedData = null;

  get searchResults(): Array<CarInfoItem> {
    if (!this._searchResults) {
      return [];
    }

    return Object
      .entries(this._searchResults)
      .filter(([_, value]) => value !== null)
      .map(([name, value]) => ({ name, value: value as unknown as string | number }));
  }

  constructor() {
    makeAutoObservable(this);
  }

  public loadSearchResults = async (celeryTaskId: string) => {
    const response = await fetch(`${config.BACKEND_URL}/api/v1/recognition/${celeryTaskId}`);

    if (response.status !== 200) {
      console.warn(`Received invalid status code. Expected 200 but received ${response.status}`)
      return;
    }

    this._searchResults = await response.json();
  }
}

export default RecognizerResultsStore
