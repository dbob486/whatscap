import { Button, Center, FormControl, FormHelperText, FormLabel, Input } from '@chakra-ui/react'

export default function Home() {
  return (
    <>
      <Center bg={'lightblue'} h={'5em'}> Hello World </Center>
      <Center>
        <FormControl w={'50em'} top={'5em'}>
          <FormLabel>Email address</FormLabel>
          <Input type='email' onSubmit={(e) => {console.log(e)}}/>
          <Button colorScheme='blue' type='submit' >Button</Button>
          <FormHelperText>We'll never share your email.</FormHelperText>
        </FormControl>
      </Center>
    </>
  )
}
