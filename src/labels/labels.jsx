import React from 'react';

require('!style!css!sass!./style.scss');

export default class Labels extends React.Component {

  static propTypes = {
    labels: React.PropTypes.array.isRequired
  }

  /**
   * Given background color, determine if text color should be white or black
   * @param {string} hexcolor background color code
   * @return {string} 'white' or 'black'
   * @ref - https://24ways.org/2010/calculating-color-contrast
   */
  getTextColor (hexcolor) {
    const r = parseInt(hexcolor.substr(0,2),16);
    const g = parseInt(hexcolor.substr(2,2),16);
    const b = parseInt(hexcolor.substr(4,2),16);
    const yiq = ((r*299)+(g*587)+(b*114))/1000;

    return (yiq >= 128) ? 'black' : 'white';
  }

  /**
   * Constructs labels for an individual issue
   * @param  {array} labels - list of labels with name and color properties
   * @return {html}         - divs of each label
   */
  prepareLabels (labels) {
    const formattedLabels = [];
    const labelsLength    = labels.length;

    for (let i = 0; i < labelsLength; i++) {
      const style = { backgroundColor: `#${labels[i].color}` };

      style.color = this.getTextColor(style.backgroundColor.substring(1));

      formattedLabels.push(
        <span key={i} className='label' style={style}>{labels[i].name}</span>
      );
    };

    return formattedLabels.length ? formattedLabels : '';
  }

  render () {
    return (
      <div className="labels">
        {this.prepareLabels(this.props.labels)}
      </div>
    );
  }
}