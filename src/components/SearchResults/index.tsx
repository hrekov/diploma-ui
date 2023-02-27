import React from 'react';
import css from './style.module.scss';
import joinCSS from 'classnames';
import { CarInfoResult } from '../../misc/types';

interface SearchResultsProps {
  data: CarInfoResult,
  className?: string,
}

function SearchResults({ data, className }: SearchResultsProps) {
  return (
    <table
      className={joinCSS(css.table, className)}
      hidden={!Boolean(data.length)}
    >
      <caption className={css.tableCaption}>
        Recognition Result
      </caption>

      <tr>
        <th>Characteristic</th>
        <th>Value</th>
      </tr>

      { data.map(row => (
        <tr>
          <td>{row.name}</td>
          <td>{row.value}</td>
        </tr>
      ))}
    </table>
  );
}

export default SearchResults;
