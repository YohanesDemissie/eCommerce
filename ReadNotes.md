#Export Const
exports multiple functions from one component, allowing the developer to call on these functions/components accross the entire application

#Importing Const
MUST import with with curly brackets like so...
import { Navbar } from './file-path'

#styled components 
importing constants into styled components, must be done like in navbar file, appliying pizza red to backgorund color

import { pizzaRed } from '../Styles/colors';

const NavbarStyled = styled.div`
  body {
    background-color: ${pizzaRed};
  }
`
#Altering styled components for certain elements
You can import styled components and add css properties on the components page like so...

import { Title } from '../Styles/colors';
const Logo = styled(Title)`
  font-size: 20px;
  color: white;;
`

#WATCH PART 13 
FOR DIFFERENT SECTIONS OF THE MENU LIKE SANDWHICHES AND SIDES AND STUFF

