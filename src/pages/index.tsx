import type { GetServerSideProps, NextPage } from 'next'

import { getSession, signin } from 'next-auth/client'

const Home: NextPage = () => {
  return (
    <div>
      <button onClick={() => signin('discord')}>Logar</button>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async ctx => {
  const session = await getSession(ctx)
  console.log(session)

  if (session) {
    return {
      redirect: {
        destination: '/dashboard',
        permanent: false
      }
    }
  }

  return {
    props: {}
  }
}
export default Home
