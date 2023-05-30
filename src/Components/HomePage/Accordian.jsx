import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CheckIcon from '@mui/icons-material/Check';

export default function SimpleAccordion() {
  return (
    <div style={{margin:"10px"}}>
       <h1>FrontEnd Basic</h1>
      <Accordion style={{border:"0.2px solid black"}}> 
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography style={{fontWeight:"bold"}}>Frontend Developer</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <p style={{fontWeight:"bold"}}>3 languages all web developers must learn.</p>
          <CheckIcon/> HTML to define the content of web pages.
<br/>
<CheckIcon/>CSS to specify the layout of web pages.
<br/>
<CheckIcon/>JavaScript to program the behavior of web pages.
          </Typography>
        </AccordionDetails>
      </Accordion>
     
      
      <Accordion style={{border:"0.2px solid black"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography style={{fontWeight:"bold"}}>HTML-05</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <CheckIcon/> HTML is the standard markup language for Web pages.
<br/>
<CheckIcon/>With HTML you can create your own Website.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion style={{border:"0.2px solid black"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography style={{fontWeight:"bold"}}>CSS</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <CheckIcon/> CSS is the language we use to style an HTML document.
<br/>
<CheckIcon/>CSS describes how HTML elements should be displayed.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion style={{border:"0.2px solid black"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography style={{fontWeight:"bold"}}>JAVSCRIPT</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <CheckIcon/>JavaScript is the world's most popular programming language.
<br/>
<CheckIcon/>JavaScript is the programming language of the Web.
          </Typography>
        </AccordionDetails>

    
      </Accordion>

      <Accordion style={{border:"0.2px solid black"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography style={{fontWeight:"bold"}}>J-Query</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <CheckIcon/>jQuery is a fast, small, and feature-rich JavaScript library. It makes things like HTML document traversal and manipulation, event handling, animation.
<br/>
          </Typography>
        </AccordionDetails>

    
      </Accordion>
      <Accordion style={{border:"0.2px solid black"}}> 
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography style={{fontWeight:"bold"}}>Bootstrap-05</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <CheckIcon/>Bootstrap 5 is the newest version of Bootstrap. 
<br/>
<CheckIcon/>which is the most popular HTML, CSS, and JavaScript framework for creating responsive, mobile-first websites.
          </Typography>
        </AccordionDetails>
      </Accordion><br/>
      <h1>Advance</h1>
      <Accordion style={{border:"0.2px solid black"}}> 
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography style={{fontWeight:"bold"}}>React JS</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <CheckIcon/>React is a JavaScript library for building user interfaces.
<br/>
<CheckIcon/>React is used to build single-page applications.
<br/><CheckIcon/>React allows us to create reusable UI components.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion style={{border:"0.2px solid black"}}> 
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography style={{fontWeight:"bold"}}>React Bootstrap</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <CheckIcon/>The most popular front-end framework
Rebuilt for React.
<br/>
<CheckIcon/>React-Bootstrap replaces the Bootstrap JavaScript. 
<br/><CheckIcon/>Each component has been built from scratch as a true React component, without unneeded dependencies like jQuery.
          </Typography>
        </AccordionDetails>
      </Accordion>
      
      
      <Accordion style={{border:"0.2px solid black"}}> 
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography style={{fontWeight:"bold"}}>Material UI</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <CheckIcon/>Material UI is a library of React UI components that implements Google's Material Design.
<br/>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion style={{border:"0.2px solid black"}}> 
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography style={{fontWeight:"bold"}}>Tailwind CSS</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <CheckIcon/>Tailwind CSS works by scanning all of your HTML files, JavaScript components, and any other templates for class names, generating the corresponding styles and then writing them to a static CSS file.
<br/>
          </Typography>
        </AccordionDetails>
      </Accordion>
<br/>
<h1>BackEnd</h1>
      <Accordion style={{border:"0.2px solid black"}}> 
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography style={{fontWeight:"bold"}}>NodeJS</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <CheckIcon/>Node.js is an open source server environment.
<br/>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion style={{border:"0.2px solid black"}}> 
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography style={{fontWeight:"bold"}}>ExpressJS</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <CheckIcon/>Express.js, or simply Express, is a back end web application framework for building RESTful APIs with Node.js, released as free and open-source software under the MIT License. 
          <br/><CheckIcon/>It is designed for building web applications and APIs.

          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion style={{border:"0.2px solid black"}}> 
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography style={{fontWeight:"bold"}}>MySQL</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <CheckIcon/>MySQL is a widely used relational database management system (RDBMS).
          <br/><CheckIcon/>MySQL is free and open-source.

          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion style={{border:"0.2px solid black"}}> 
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography style={{fontWeight:"bold"}}>NextJS</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <CheckIcon/>The React Framework for the Web.
          <br/><CheckIcon/>With Next.js, you can build user interfaces using React components. Then, Next.js provides additional structure, features, and optimizations for your application.

          </Typography>
        </AccordionDetails>
      </Accordion>


    </div>
  );
}
