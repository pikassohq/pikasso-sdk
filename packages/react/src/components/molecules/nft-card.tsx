import * as React from 'react';
import { createUseStyles } from 'react-jss';
import { getAvatarLetter, getUsernameFromEmail } from '@/utils/string';
import { Nft } from '@/services/types';
import { getAvailableListingPrice } from '@/utils/nft';

export type NftCardNftProps = React.HTMLAttributes<HTMLDivElement> & {
  nft: Nft;
  onClick?: (id: string) => void;
};

export const NftCardNft: React.FC<NftCardNftProps> = ({ nft, onClick, className, ...rest }) => {
  const classes = useStyles();

  return (
    <div {...rest} className={className} onClick={onClick}>
      <div className={classes.container}>
        <div>
          <img alt={nft.name} className={classes.image} src={nft?.image} />
        </div>

        <div className={classes.boxName}>
          <div className={classes.title}>{nft.collection?.name}</div>
          <div className={classes.name}>{nft?.name}</div>
        </div>

        <div className={classes.boxPrice}>
          <div className={classes.user}>
            <span className={classes.spanIcon}>{getAvatarLetter(nft?.owner?.email)}</span>
            <span className={classes.spanUser}>{getUsernameFromEmail(nft?.owner?.email)}</span>
          </div>

          {nft.orders && <div className={classes.price}>${getAvailableListingPrice(nft.orders)?.price}</div>}
        </div>
      </div>
    </div>
  );
};

const useStyles = createUseStyles({
  container: { background: '#FFFFFF', border: '1px solid #EEEFF0', borderRadius: '12px', cursor: 'pointer' },

  image: {
    width: '240px',
    height: '198px',
    margin: '12px',
    background: '#EEEFF0',
    borderRadius: '12px',
    objectPosition: 'center',
    objectFit: 'cover',
  },

  boxName: {
    margin: '12px',
    textAlign: 'left',
  },

  boxPrice: {
    margin: '12px',
    textAlign: 'left',
    display: 'flex',
    justifyContent: 'space-between',
  },

  user: {
    display: 'flex',
    alignItems: 'center',
  },

  price: {
    color: '#1F1F23',
    fontSize: '14px',
    background: '#EEEFF0',
    borderRadius: '4px',
    display: 'flex',
    alignItems: 'center',
    padding: '5px 8px',
  },

  spanIcon: {
    background: '#6E43D4',
    color: '#ffffff',
    padding: '4px',
    borderRadius: '24px',
    height: '24px',
    width: '24px',
    fontSize: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  spanUser: {
    marginLeft: '8px',
    color: '#1F1F23',
    fontSize: '14px',
  },

  title: { color: '#6E43D4', fontSize: '12px', marginBottom: '12px' },

  name: {
    color: '#1F1F23',
    fontSize: '16px',
    fontWeight: 700,
  },
});
