import { Button, Result, Row } from 'antd'
import { useRouter } from 'next/router'

import SEOHead from '@/components/seo/index'

const Custom404Page = () => {
  const router = useRouter()

  return (
    <>
     <SEOHead title='404 Not Found' />
      <Row align='middle' justify='center' className='mt-24'>
        <Result
          status='404'
          title='404'
          subTitle='Sorry, the page you visited does not exist.'
          extra={
            <Button type='primary' onClick={() => router.replace('/')}>
              Back Home
            </Button>
          }
        />
      </Row>
      </>

  )
}

export default Custom404Page
