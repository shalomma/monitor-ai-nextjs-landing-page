'use client'

import { Center, useToast, Heading } from '@chakra-ui/react'
import { Auth } from '@saas-ui/auth'
import { Link } from '@saas-ui/react'
import { BackgroundGradient } from 'components/gradients/background-gradient'
import { PageTransition } from 'components/motion/page-transition'
import { Section } from 'components/section'
import { NextPage } from 'next'
// import { FaGithub, FaGoogle } from 'react-icons/fa'

// const providers = {
//   google: {
//     name: 'Google',
//     icon: FaGoogle,
//   },
//   github: {
//     name: 'Github',
//     icon: FaGithub,
//     variant: 'solid',
//   },
// }

const Login: NextPage = () => {
  const toast = useToast()

  // const handleProviderClick = () => {
  //   toast({
  //     title: 'Not available',
  //     description: 'This login method is currently not available.',
  //     status: 'warning',
  //     duration: 5000,
  //     isClosable: true,
  //   })
  // }

  return (
      <Section height="calc(100vh - 200px)" innerWidth="container.sm">
        <BackgroundGradient zIndex="-1" />

        <Center height="100%" pt="20">
          <PageTransition width="100%">
            <Heading as="h1" size="lg" mb="8" textAlign="center">Login</Heading>
            {/*<Stack width="100%" spacing={4}>*/}
            {/*  <Button leftIcon={<FaGoogle />} onClick={handleProviderClick} width="100%" height="40px">*/}
            {/*    Login with Google*/}
            {/*  </Button>*/}
            {/*  <Button leftIcon={<FaGithub />} onClick={handleProviderClick} width="100%" height="40px">*/}
            {/*    Login with Github*/}
            {/*  </Button>*/}
            {/*</Stack>*/}
            <Auth
                title=""
                view="login"
                type="password"
                // providers={providers}
                signupLink={<Link href="../signup">Sign up for a demo</Link>}
            />
          </PageTransition>
        </Center>
      </Section>
  )
}

export default Login
