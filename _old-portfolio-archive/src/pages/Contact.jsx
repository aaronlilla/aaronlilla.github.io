// Contact.js
import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';
import emailjs from 'emailjs-com';
import './Contact/index.scss';

const Contact = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prevForm) => ({ ...prevForm, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await emailjs.send(
                'service_fbajk4q',
                'template_z052h6r',
                form,
                'g2Yu9MTX-iynpnElA'
            );
            alert('Your message has been sent!');
            setForm({ name: '', email: '', subject: '', message: '' });
        } catch {
            alert('There was an error sending your message.');
        }
    };

    return (
        <Box className="contact-page" sx={{ backgroundColor: '#121212', color: '#f5f5f5', padding: 4, borderRadius: 2 }}>
            <Typography variant="h4" gutterBottom>CONTACT ME</Typography>
            <Typography paragraph>
                Looking to bring on a skilled React developer, collaborate on a project, or just want to connect? I’d love to hear from you! Feel free to reach out using the form below, and I’ll get back to you as soon as possible. Whether you’re interested in discussing a job opportunity, have a project idea, or simply have a question, I’m here to help and excited to connect.
            </Typography>
            <form onSubmit={handleSubmit}>
                {['name', 'email', 'subject', 'message'].map((field) => (
                    <TextField
                        key={field}
                        fullWidth
                        required
                        label={field.charAt(0).toUpperCase() + field.slice(1)}
                        name={field}
                        variant="outlined"
                        margin="normal"
                        type={field === 'email' ? 'email' : 'text'}
                        value={form[field]}
                        onChange={handleChange}
                        InputLabelProps={{ style: { color: '#9e9e9e' } }}
                        sx={{ '& .MuiOutlinedInput-root': { color: '#fff' } }}
                        multiline={field === 'message'}
                        rows={field === 'message' ? 4 : 1}
                    />
                ))}
                <Button 
                    type="submit" 
                    variant="contained" 
                    fullWidth 
                    sx={{
                        marginTop: 2,
                        height: '60px',
                        backgroundColor: '#3cfdbd',
                        color: '#1c1c1c',
                        fontSize: '18px',
                        fontWeight: '800',
                        '&:hover': {
                            backgroundColor: '#34e5aa'
                        }
                    }}
                >
                    Send Message
                </Button>
            </form>
        </Box>
    );
};

export default Contact;
