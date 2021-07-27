import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    Providers.Google({
      clientId: '555288237532-151mlmg1lr24mjonv284eni50vrt1383.apps.googleusercontent.com',
      clientSecret: 'wmoNnA-LJOJIwWpkmelFzmYT'
    }),
    Providers.GitHub({
      clientId: '555288237532-151mlmg1lr24mjonv284eni50vrt1383.apps.githubusercontent.com',
      clientSecret: 'wmoNnA-LJOJIwWpkmelFzmYT'
    }),
  ],
})