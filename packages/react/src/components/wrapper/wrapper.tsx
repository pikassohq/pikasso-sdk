import * as React from 'react';
import { createUseStyles } from 'react-jss';

export type WrapperTableProps = React.HTMLAttributes<HTMLDivElement>;

export const Wrapper: React.FC<WrapperTableProps> = ({ className, children, ...rest }) => {
  const classes = useStyles();
  return (
    <div className={classes.content} {...rest}>
      <div style={{ overflow: 'auto' }} className={className}>
        {children}
      </div>
    </div>
  );
};

const useStyles = createUseStyles({
  content: {
    border: '1px solid #EEEFF0',
    borderRadius: '10px',
    overflow: 'hidden',
  },
});
