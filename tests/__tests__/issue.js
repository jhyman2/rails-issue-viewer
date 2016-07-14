jest.unmock('../../src/issue/component.jsx');

import React     from 'react';
import ReactDOM  from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Issue     from '../../src/issue/component.jsx';

const TEST_ISSUE = {
  title: 'Issue Title',
  state: 'Open',
  user: {
    login: "piotrkaczmarek",
    id: 4920654,
    avatar_url: "https://avatars.githubusercontent.com/u/4920654?v=3"
  },
  body: 'This is a body'
};

describe('Issue', () => {
  const issueComponent = TestUtils.renderIntoDocument(
    <Issue data={TEST_ISSUE} />
  );

  const issueNode = ReactDOM.findDOMNode(issueComponent);
  const rootChildren = issueNode.childNodes;

  it('displays in a div', () => {
    expect(issueNode.nodeName).toEqual('DIV');
  });

  it('displays header with prop title', () => {
    expect(rootChildren[0].nodeName).toEqual('DIV');
    expect(rootChildren[0].childNodes[0].textContent).toEqual(TEST_ISSUE.title);
  });
});