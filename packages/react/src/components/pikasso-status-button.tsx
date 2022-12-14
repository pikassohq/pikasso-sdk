import * as React from 'react';
import { formatProps, useStyles } from 'styles';
import { PikassoStatusButtonReactProps } from '@/types';
import useEnvironment from '@/hooks/use-environment';
import { LIB_VERSION } from '@/utils/version';
import {
  brandLogo,
  clientNames,
  onboardingRequestStatusResponse,
  pikassoStatusButtonService,
  pikassoStatusService,
} from '@pikasso-sdk/core';

export const PikassoStatusButton: React.FC<PikassoStatusButtonReactProps> = ({
  className,
  disabled,
  onClick,
  style,
  tabIndex,
  theme = 'dark',
  nftId,
  exchangeId,
  auctionId,
  platformId,
  mintConfig,
  environment,
  ...props
}) => {
  const [status, setStatus] = React.useState(onboardingRequestStatusResponse.WAITING_SUBMISSION);
  const { isServerSideRendering } = useEnvironment();

  const { goToOnboarding, fetchClientIntegration } = pikassoStatusService({
    libVersion: LIB_VERSION,
    nftId,
    exchangeId,
    environment,
    platformId,
    auctionId,
    mintConfig,
    setStatus,
    clientName: clientNames.react,
  });
  const { getButtonText, isButtonDisabled, handleClick } = pikassoStatusButtonService({ onClick });

  const _handleClick: React.MouseEventHandler<HTMLButtonElement> = (e) => handleClick(e, status, goToOnboarding);

  React.useEffect(() => {
    fetchClientIntegration();

    const interval = setInterval(() => {
      fetchClientIntegration();
    }, 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  const classes = useStyles(formatProps(theme));

  const content = React.useMemo(() => {
    return <span className={classes.pikassoParagraph}>{getButtonText(status)}</span>;
  }, [status]);

  return (
    <React.Fragment>
      {!isServerSideRendering && (
        <button
          className={`${classes.pikassoButton} ${className || ''}`}
          disabled={isButtonDisabled(status)}
          style={{ ...style }}
          tabIndex={tabIndex}
          onClick={_handleClick}
          {...props}
        >
          <img className={classes.pikassoImg} src={brandLogo} alt="Pikasso logo" />
          {content}
        </button>
      )}
    </React.Fragment>
  );
};
