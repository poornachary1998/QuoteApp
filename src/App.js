import { Route, Switch,Redirect } from 'react-router-dom';
import Layout from './components/layout/layout';


import React, {Suspense} from 'react';
import LoadingSpinner from './components/UI/LoadingSpinner';

const NewQuote= React.lazy(() => import('./Pages/NewQuote'));
const AllQuotes= React.lazy(() => import('./Pages/AllQuotes'));
const QuoteDetail= React.lazy(() => import('./Pages/QuoteDetail'));
const NotFound= React.lazy(() => import('./Pages/NotFound'));

function App() {
  return (
  <Layout>    
    
      <Suspense fallback={<div className='centered'>
        <LoadingSpinner />
      </div>} >
        <Switch>
        <Route path="/" exact>         <Redirect to='/quotes'> </Redirect> </Route>
      <Route path='/quotes' exact>   <AllQuotes/>   </Route>
      <Route path='/quotes/:quoteId'><QuoteDetail/> </Route>
      <Route path='/new-quote'>      <NewQuote/></Route>
      <Route path='*'>               <NotFound/></Route>
      
    </Switch>
    </Suspense>
    </Layout>
    );
}

export default App;
