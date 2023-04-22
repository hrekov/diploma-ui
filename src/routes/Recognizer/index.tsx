import React from 'react';
import css from './style.module.scss';
import { observer } from 'mobx-react-lite';
import RecognizerStore from '../../stores/recognizer-store';
import RecognitionForm from '../../components/RecognitionForm';
import SectionTitle from '../../components/SectionTitle';
import SearchResults from '../../components/SearchResults';

function Recognizer() {
  const store = React.useMemo(() => new RecognizerStore(), []);

  return (
    <div className="container">
      <SectionTitle className={css.title} title="Car model recognition service" />

      <RecognitionForm
        className={css.recognitionForm}
        onSubmit={store.onSubmitFile}
      />

      <SearchResults
        className={css.searchResults}
        data={store.recognizedData}
        dataTaskId={store.dataTaskId}
      />
    </div>
  );
}

export default observer(Recognizer);
