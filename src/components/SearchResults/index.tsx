import React from 'react';
import css from './style.module.scss';
import joinCSS from 'classnames';
import { CarInfoResult } from '../../misc/types';
import Button from '../Button';
import { Link } from 'react-router-dom';
import { route } from '../../misc/constants';

interface SearchResultsProps {
  data: CarInfoResult,
  dataTaskId: string | null,
  className?: string,
}

function SearchResults({ data, dataTaskId, className }: SearchResultsProps) {
  return (
    <div className={css.wrapper}>
      <table
        className={joinCSS('styledTable', className)}
        hidden={!Boolean(data.length)}
      >
        <caption className={css.tableCaption}>
          Recognition Result
        </caption>

        <thead>
          <tr>
            <th>Characteristic</th>
            <th>Value</th>
          </tr>
        </thead>

        <tbody>
          { data.map(row => (
            <tr key={row.name}>
              <td>{row.name}</td>
              <td>{row.value}</td>
            </tr>
          ))}
        </tbody>
      </table>

      { dataTaskId &&
        <Link to={route.FULL_RESULTS.replace(':id', dataTaskId)}>
          <Button className={css.showMoreButton}>Show More</Button>
        </Link>
      }
    </div>
  );
}

export default SearchResults;
