import { BrowserRouter} from 'react-router-dom';

import { AppRouter } from './router'

export const BankApp = () => {
  return (
    <BrowserRouter>
      <AppRouter/>
    </BrowserRouter>
  )
}
