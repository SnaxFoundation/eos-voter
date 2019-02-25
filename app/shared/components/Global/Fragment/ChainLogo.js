// @flow
import React, { PureComponent } from 'react';
import { Image, Popup } from 'semantic-ui-react';
import { translate } from 'react-i18next';

import bosLogo from '../../../../renderer/assets/images/bos.jpg';
import snaxLogo from '../../../../renderer/assets/images/snax.png';
import eosLogo from '../../../../renderer/assets/images/eos.png';
import insightsLogo from '../../../../renderer/assets/images/insights.svg';
import placeholder from '../../../../renderer/assets/images/placeholder.png';
import telosLogo from '../../../../renderer/assets/images/telos.png';
import worbliLogo from '../../../../renderer/assets/images/worbli.png';

const logos = {
  'd880df625a3a977fabfed62fb1fe1adce546782c458ee5b9d7b56554af0bd9a8': snaxLogo, // testnet snax
  'd880df625a3a977fabfed62fb1fe1adce546782c458ee5b9d7b56554af0bd9a8': snaxLogo, // testnet snax
};

class GlobalFragmentChainLogo extends PureComponent<Props> {
  render() {
    const {
      avatar,
      className,
      chainId,
      name,
      size,
      style,
      t,
    } = this.props;
    let src = logos[chainId];
    if (!logos[chainId]) {
      src = placeholder;
    }
    return (
      <Popup
        content={t('tools:tools_wallets_blockchain')}
        header={name}
        inverted
        position="top center"
        style={{ textAlign: 'center' }}
        trigger={(
          <Image
            avatar={avatar}
            centered
            className={className}
            size={size}
            src={src}
            style={style}
          />
        )}
      />
    );
  }
}

export default translate('global')(GlobalFragmentChainLogo);
