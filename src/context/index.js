import { Test5Provider } from './test5';
import { Test7Provider } from './test7';

export function MainProvider({ children }) {
  return (
    <Test5Provider>
      <Test7Provider>
        {children}
      </Test7Provider>
    </Test5Provider>
  );
}
