import React from 'react'
import ReactDOM from 'react-dom'
import ApolloClient from 'apollo-boost'
import { Context } from './Context'
import { ApolloProvider } from '@apollo/react-hooks'
import { App } from './App'

const client = new ApolloClient({
  uri: 'https://petgram-server-jrmfsd-okxluew9o.now.sh/graphql'
})

ReactDOM.render(
  <Context.Provider value={{ isAuth: false }}>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Context.Provider>,
  document.getElementById('app')
)
