jest.unmock('../../src/loading/loading.jsx');

import React     from 'react';
import ReactDOM  from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Loading   from '../../src/loading/loading.jsx';

describe('Loading', () => {
  it('displays only css and no text', () => {
    const loadingComponent = TestUtils.renderIntoDocument(
      <Loading />
    );

    const loadingNode = ReactDOM.findDOMNode(loadingComponent);

    expect(loadingNode.textContent).toEqual('');
  });
});