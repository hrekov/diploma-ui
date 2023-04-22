import React from 'react';
import css from './style.module.scss';
import SectionTitle from '../../components/SectionTitle';
import Button from '../../components/Button';
import joinCSS from 'classnames';
import { Link, useParams } from 'react-router-dom';
import { route } from '../../misc/constants';
import RecognizerResultsStore from '../../stores/recognizer-results-store';
import { observer } from 'mobx-react-lite';

function RecognitionFullResult() {
  const store = React.useMemo(() => new RecognizerResultsStore(), []);
  const { id: celeryTaskId } = useParams();

  React.useEffect(() => {
    store.loadSearchResults(celeryTaskId!)
      .catch(err => console.error(err));
  }, [ store, celeryTaskId ])

  return (
    <div className={css.wrapper}>
       <SectionTitle title="Full Recognition result" />

       <p className={css.note}>Note: This result will be erased after one day after its created</p>

       <table className={joinCSS('styledTable', css.table)}>
          <thead>
            <tr>
              <th>Characteristic</th>
              <th>Value</th>
              <th>Source</th>
            </tr>
          </thead>

          { store.searchResults.map(row => (
            <tr key={row.name}>
              <td>{row.name}</td>
              <td>{row.value}</td>
              <td>DbPedia</td>
            </tr>
          ))}
       </table>

      <Link className={css.back_button} to={`${route.RECOGNIZER}`}>
        <Button>Back to recognition</Button>
       </Link>
    </div>
  );
}

export default observer(RecognitionFullResult);
