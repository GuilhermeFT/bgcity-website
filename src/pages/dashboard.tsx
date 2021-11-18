import type { GetServerSideProps, NextPage } from 'next'
import { getSession } from 'next-auth/client'

const Dashboard: NextPage = () => {
  return <div>SALVE SALVE</div>
}

export const getServerSideProps: GetServerSideProps = async ctx => {
  const session = await getSession(ctx)

  if (!session) {
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

export default Dashboard
