import * as React from 'react';
import { createUseStyles } from 'react-jss';

export type ProductNftProps = React.HTMLAttributes<HTMLDivElement> & { data: any };

export const ProductNft: React.FC<ProductNftProps> = ({ data, className, ...rest }) => {
  const classes = useStyles();

  return (
    <div {...rest} className={className}>
      <img src={data} alt="NFT" className={classes.image} />
    </div>
  );
};

const useStyles = createUseStyles({
  image: {
    height: '564px',
    maxWidth: '564px',
    objectPosition: 'center',
    objectFit: 'cover',
    borderRadius: '12px',
  },
});
