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
  'b73d947e5792d923a190f4ef1532255b59dee93fe2e32170b018d59001ce58a7': snaxLogo, // testnet snax
  'b73d947e5792d923a190f4ef1532255b59dee93fe2e32170b018d59001ce58a7': snaxLogo, // testnet snax
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
