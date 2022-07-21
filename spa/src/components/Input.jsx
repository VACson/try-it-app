import { forwardRef } from 'react';
import cn from 'classnames';

const SearchField = forwardRef(({ className, ...props }, ref) => {
  return <input id="input" name="input" ref={ref} className={cn('input', className)} {...props} />;
});

export default SearchField;
