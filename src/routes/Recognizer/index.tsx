import React from 'react';
import css from './style.module.scss';
import { observer } from 'mobx-react-lite';
import RecognizerStore from '../../stores/recognizer';
import RecognitionForm from '../../components/RecognitionForm';
import SearchResults from '../../components/SearchResults';
import * as stub from '../../stub';

function Recognizer() {
  const store = React.useMemo(() => new RecognizerStore(), []);

  return (
    <div className="container">
      <h1 className={css.title}>Car model recognition service</h1>

      <RecognitionForm
        className={css.recognitionForm}
        onSubmit={store.onSubmitFile}
      />

      <SearchResults
        className={css.searchResults}
        data={stub.searchResults}
      />
    </div>
  );
}

export default observer(Recognizer);
