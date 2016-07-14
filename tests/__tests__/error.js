jest.unmock('../../src/error/error.jsx');

import React     from 'react';
import ReactDOM  from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import ErrorView from '../../src/error/error.jsx';

const errMessage = 'This is an error';

describe('ErrorView', () => {

  it('displays error given through props', () => {
    const errorComponent = TestUtils.renderIntoDocument(
      <ErrorView err={errMessage} />
    );

    const errNode = ReactDOM.findDOMNode(errorComponent);

    expect(errNode.textContent).toEqual(`${errMessage}"https://developer.github.com/v3/#rate-limiting"`);
  });

});