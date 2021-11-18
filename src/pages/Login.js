import { useFormik } from "formik"
import * as Yup from "yup"
import { Input, Button } from "@chakra-ui/react"
import { FormControl, FormLabel, FormErrorMessage } from "@chakra-ui/form-control"
import { useContext } from "react"
import { UserContext } from "../contexts/UserContext"



const Login = () => {

const { isLogged, setIsLogged } = useContext(UserContext)

    const handleClick = () => {
        console.log('handle click')
        if (isLogged) {
            setIsLogged(false)
        } else {
            setIsLogged(true)
        }
    }

  const formik = useFormik({
    initialValues: {
      username: "Eloi",
      password: "yoyoyoyo"
    },
    onSubmit: values => {
        
    },
    validationSchema: Yup.object().shape({
      username: Yup.string()
        .required("Username non renseigné")
        .max(15, "Username trop long"),
      password: Yup.string()
        .required("Password non renseigné")
        .min(6, "Password trop court")
    }),
    validateOnChange: false
  }) 


  return (
    <form onSubmit={formik.handleSubmit}>
        <FormControl id="username" w="300px" isInvalid={formik.errors.username}>
            <FormLabel>Username</FormLabel>
            <Input
            type="text"
            name="username"
            value={formik.values.username}
            onChange={formik.handleChange}
            />
            <FormErrorMessage>{formik.errors.username}</FormErrorMessage>
        </FormControl>

        <FormControl id="password" mt={5} w="300px" isInvalid={undefined}>
            <FormLabel>Password</FormLabel>
            <Input
            type="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            />
            <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
        </FormControl>
        {isLogged ? 
        (<Button type="button" colorScheme="teal" variant="solid" w="100%" mt={5} onClick={() => handleClick()}>Log out</Button>) : 
        (<Button type="submit" colorScheme="teal" variant="solid" w="100%" mt={5} onClick={() => handleClick()}> Log in </Button>)
        }
    </form>
  )
}

export default Login