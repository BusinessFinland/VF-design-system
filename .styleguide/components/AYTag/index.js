import React from 'react';

import './styles.css';

const AYTag = ({ violations, onRefresh }) => {
  const renderTag = (status = '', message = '', description = '') => {
    return (
      <>
        <div className='styleguide--ay-title'>
          <div className={`styleguide--ay-tag styleguide--ay-tag_${status.toLowerCase()}`}>{status}</div>
          <div className='styleguide--ay-message'>{message}</div>
        </div>
        {description && <div className='styleguide--ay-description'>{description}</div>}
        {
          <div className='bf-link' onClick={onRefresh}>
            Refresh results
          </div>
        }
      </>
    );
  };

  if (!violations)
    return <div className='styleguide--ay'>{renderTag('Loading', 'Checking accessability')}</div>;

  if (violations && !violations.length)
    return <div className='styleguide--ay'>{renderTag('Passed', 'All accessibility tests passed')}</div>;

  return violations.map(violation => {
    const violationHelp = (
      <a target='_blank' href={violation.helpUrl}>
        {violation.help}
      </a>
    );

    return (
      <div key={violation.id} className='styleguide--ay'>
        {renderTag(violation.impact, violationHelp, violation.description)}
        <div>
          {violation.nodes.map(node => {
            return (
              <div key={node.html}>
                <code className='styleguide--ay-code'>{node.html}</code>
                <div className='styleguide--ay-summary'>{node.failureSummary}</div>
              </div>
            );
          })}
        </div>
      </div>
    );
  });
};

export default AYTag;
