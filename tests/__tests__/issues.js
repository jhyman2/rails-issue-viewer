jest.unmock('../../src/issues/component.jsx');

import React     from 'react';
import ReactDOM  from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Issues    from '../../src/issues/component.jsx';

const TEST_ISSUES = [
  {
    title: 'Issue Title',
    state: 'Open',
    number: '1',
    user: {
      login: "piotrkaczmarek",
      id: 4920654,
      avatar_url: "https://avatars.githubusercontent.com/u/4920654?v=3"
    },
    body: 'This is a body'
  },
  {
    title: 'Issue Title 2',
    state: 'Open',
    number: '2',
    user: {
      login: "piotrkaczmarek2",
      id: 4920654,
      avatar_url: "https://avatars.githubusercontent.com/u/4920654?v=3"
    },
    body: 'This is a body 2'
  },
];

describe('Issues', () => {
  const issueComponent = TestUtils.renderIntoDocument(
    <Issues issues={TEST_ISSUES} />
  );

  const issueNode = ReactDOM.findDOMNode(issueComponent);
  const rootChildren = issueNode.childNodes;

  it('displays in a div', () => {
    expect(issueNode.nodeName).toEqual('DIV');
  });

  it('displays all issues', () => {
    let issues = 0;

    for (let key in rootChildren) {
      if (rootChildren[key].className === 'issue') {
        expect(rootChildren[key].className).toEqual('issue')
      }
    }
  });
});