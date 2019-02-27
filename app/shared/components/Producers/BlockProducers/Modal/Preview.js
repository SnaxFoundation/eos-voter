// @flow
import React, { Component } from 'react';
import { translate } from 'react-i18next';

import GlobalTransactionModal from '../../../Global/Transaction/Modal';
import ProducersVotingPreviewSelection from './Preview/Selection';

class ProducersVotingPreview extends Component<Props> {
  render() {
    const {
      account,
      actions,
      blockExplorers,
      lastError,
      onConfirm,
      selected,
      settings,
      submitting,
      system,
      t,
      unregisteredProducers
    } = this.props;

    return (
      <React.Fragment>
        <GlobalTransactionModal
          actionName="VOTEPRODUCER"
          actions={actions}
          blockExplorers={blockExplorers}
          button={{
            color: 'green',
            content: t('producer_voter_save_changes'),
            fluid: true,
            icon: '',
            disabled: !account.voter_info
          }}
          content={(
            <ProducersVotingPreviewSelection
              account={account}
              lastError={lastError}
              onConfirm={onConfirm}
              selected={selected}
              settings={settings}
              submitting={submitting}
              unregisteredProducers={unregisteredProducers}
            />
          )}
          icon="exchange"
          title={t('producer_voter_save_changes')}
          settings={settings}
          system={system}
        />
        {!account.voter_info && <p>You should stack tokens before you will be able to vote</p>}
      </React.Fragment>
    );
  }
}

export default translate('producers')(ProducersVotingPreview);
