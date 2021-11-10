import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { Alert } from '@material-ui/lab'
import { Form,FormControl, Button,  Navbar, Nav } from 'react-bootstrap'
import {
  Container, 
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper, TextField
} from '@material-ui/core'


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useParams,
  useHistory,
} from "react-router-dom"


const Home = () => (
  <div> <h2>You are inside Home Page </h2> </div>
)

const Note = ({ notes }) => {
  const id = useParams().id
  const note = notes.find(n => n.id === Number(id))
  return (
    <div>
      <h2>{note.content}</h2>
     
    
    </div>
  )
}

const Notes = ({notes}) => (
  <div>
    <h2>Notessssssss</h2>

    <TableContainer component={Paper}>
      <Table>
        <TableBody>
          {notes.map(note => (
            <TableRow key={note.id}>
              <TableCell>
                <Link to={/notes/${note.id}}>{note.content}</Link>
              </TableCell>
              <TableCell>
                {note.user}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </div>
)


const Users = () => (
  <div> <h2>You are in Users Page</h2> </div>
)
const Login = (props) => {
  const history = useHistory()

  const onSubmit = (event) => {
    event.preventDefault()
    props.onLogin('mluukkai')
    history.push('/')
  }

  return (
    <div class = "container">
      <h2>login</h2>
      <form onSubmit={onSubmit} action="/action_page.php" method="post">
        <center>
        
        <div class="imagecontainer">
          
          
        
          <TextField input type="text" label="username" />
          </div>
          <div>
          <TextField  label="password" type='password' />
          </div>
          <div class=".btn-text-align-left">
        <a href="https://www.youtube.com/">forgot password</a>
        </div>
        <div>
          <Button variant="primary" color="primary" type="submit">
            login
          </Button>
          <div class="divider"/>
          <Button variant="contained" color="primary" type="reset">
            Reset
          </Button>
        </div>
        
        
        </center>
      </form>
    </div>
  )
}

const App = () => {
  const [notes, setNotes] = useState([
    {
      id: 1,
      content: 'HTML is easy',
    },
    {
      id: 2,
      content: 'Browser can execute only Javascript',

    },
    {
      id: 3,
      content: 'Most important methods of HTTP-protocol are GET and POST',
     
    }
  ])

  const [user, setUser] = useState(null) 
const [message, setMessage] = useState(null)

  const login = (user) => {
    setUser(user)
    setMessage(welcome ${user})
    setTimeout(() => {
      setMessage(null)
    }, 10000)
  }
  const padding = {
    padding: 5
  }

  return (
<Container>
    <div>
 {(message &&
    <Alert severity="success">
      {message}
    </Alert>
  )}
    <Router>
      <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#" as="span">
        <Link style={padding} to="/">home</Link>
      </Nav.Link>
      <Nav.Link href="#" as="span">
        <Link style={padding} to="/notes">notes</Link>
      </Nav.Link>
      <Nav.Link href="#" as="span">
        <Link style={padding} to="/users">users</Link>
      </Nav.Link>
      <Nav.Link href="#" as="span">
        {user
          ? <em style={padding}>{user} logged in</em>
          : <Link style={padding} to="/login">login</Link>
        }
    </Nav.Link>
    
    </Nav>
    <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
  </Navbar.Collapse>
</Navbar>

      </div>