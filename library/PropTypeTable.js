import React, { PropTypes } from 'react';
import Highlight from 'react-highlight';

const propTypes = {
  object: PropTypes.object.isRequired,
};

const Compy = ({
  object,
}) => (
  <div className="library__table__wrapper">
    <table className="library__table">
      <thead>
        <tr>
          <th>
            Property
          </th>
          <th>
            Description
          </th>
          <th>
            Required
          </th>
          <th>
            Value
          </th>
        </tr>
      </thead>
      <tbody>
        {Object.keys(object).map((key, i) => (
          <tr key={`${key}-${i}`}>
            <td>{key}</td>
            <td>{object[key].description}</td>
            <td>{object[key].required ? 'Yes' : 'No'}</td>
            <td className="library__table--nopad">
              <Highlight className="javascript">
                {object[key].value.trim()}
              </Highlight>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

Compy.propTypes = propTypes;

export default Compy;
