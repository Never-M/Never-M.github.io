import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends Component {
        render() {
                return (
                        <div className="contact-body">
                                <Grid className="contact-grid">
                                        <Cell col={6}>
                                                <h2>Yichen Ma</h2>
                                                <img
                                                        src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
                                                        alt="avatar"
                                                        style={{ height: '250px' }}
                                                />
                                                <p style={{ width: '75%', margin: 'auto', paddingTop: '1em' }}>i am your father</p>
                                        </Cell>
                                        <Cell col={6}>
                                                <h2>Contact Me</h2>
                                                <hr />
                                                <div className="contact-list">
                                                        <List>
                                                                <ListItem>
                                                                        <ListItemContent style={{fontSize:'30px',fontFamily:'Anton'}}>
                                                                                <i className="fa fa-phone-square" aria-hidden = "true"/>
                                                                                (949) 231-2337                                                                                
                                                                        </ListItemContent>
                                                                </ListItem>
                                                                <ListItem>
                                                                        <ListItemContent style={{fontSize:'30px',fontFamily:'Anton'}}>
                                                                                <i className="fa fa-envelope-square" aria-hidden = "true"/>
                                                                                zjz2013b@yc.com                                                                                
                                                                        </ListItemContent>
                                                                </ListItem>
                                                                <ListItem>
                                                                        <ListItemContent style={{fontSize:'30px',fontFamily:'Anton'}}>
                                                                                <i className="fa fa-skype" aria-hidden = "true"/>
                                                                                myskypId                                                                                
                                                                        </ListItemContent>
                                                                </ListItem>
                                                        </List>
                                                </div>
                                        </Cell>
                                </Grid>
                        </div>
                )
        }
}

export default Contact;