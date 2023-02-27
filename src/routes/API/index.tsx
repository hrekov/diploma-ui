import React from 'react';
import SectionTitle from '../../components/SectionTitle';
import css from './style.module.scss';

function APIPage() {
  return (
    <div>
      <SectionTitle title="API Documentation" className={css.title}/>

      <p className={css.note}>
        NOTE: Current API doesn't require authorization to work with it. This
        service
        provides REST
      </p>

      <section>
        <h2>Endpoints</h2>
        <table>
          <thead>
          <tr>
            <th>Endpoint</th>
            <th>Description</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>/api/v1/health</td>
            <td>Get service health</td>
          </tr>
          <tr>
            <td>/api/v1/recognize</td>
            <td>Perform recognition on provided image</td>
          </tr>
          </tbody>
        </table>
      </section>

      <section className={css.endpointSection}>
        <h2>GET /api/v1/health</h2>
        <p>Returns a list of all users.</p>
        <h3>Example Request</h3>
        <pre>
          GET /api/users HTTP/1.1
          Host: api.example.com
        </pre>

        <h3>Example Response</h3>

        <pre>
        HTTP/1.1 200 OK
        Content-Type: application/json

          {`
      [
          {
            "id": 1,
            "name": "John Doe",
            "email": "john.doe@example.com"
          },
          {
            "id": 2,
            "name": "Jane Smith",
            "email": "jane.smith@example.com"
          }
      ]
      `}
    </pre>
      </section>

      <section className={css.endpointSection}>
        <h2>POST /api/v1/recognize</h2>
        <p>Returns a list of all users.</p>
        <h3>Example Request</h3>
        <pre>
          GET /api/users HTTP/1.1
          Host: api.example.com
        </pre>

        <h3>Example Response</h3>

        <pre>
        HTTP/1.1 200 OK
        Content-Type: application/json

          {`
      [
          {
            "id": 1,
            "name": "John Doe",
            "email": "john.doe@example.com"
          },
          {
            "id": 2,
            "name": "Jane Smith",
            "email": "jane.smith@example.com"
          }
      ]
      `}
    </pre>
      </section>
    </div>
  );
}

export default APIPage;
