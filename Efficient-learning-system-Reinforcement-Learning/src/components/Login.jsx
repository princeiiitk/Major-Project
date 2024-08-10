import React, { useState } from 'react';

export default function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Basic validation
        if (!username || !password) {
            setError('Both fields are required.');
            return;
        }

        // Clear previous error and success messages
        setError('');
        setSuccess('');

        try {
            // const testmsg = (await fetch('https://chatgpt-mivl.onrender.com/api//messages')).json();
            // console.log("-->>",testmsg)
            const response = await fetch(`https://chatgpt-mivl.onrender.com/api/users?username=${username}&password=${password}`);
            
            if (response.ok) {
                const data = await response.json();
                setSuccess('Login successful!');
                console.log('Response data:', data);
                // Handle successful login here
            } else {
                const errorData = await response.json();
                setError(errorData.message || 'Login failed.');
            }
        } catch (err) {
            setError('Network error. Please try again.');
        }

        // Reset form fields
        setUsername('');
        setPassword('');
    };

    return (
        <div style={styles.loginContainer}>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div style={styles.formGroup}>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Enter your username"
                        style={styles.input}
                    />
                </div>
                <div style={styles.formGroup}>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                        style={styles.input}
                    />
                </div>
                {error && <p style={styles.errorMessage}>{error}</p>}
                {success && <p style={styles.successMessage}>{success}</p>}
                <button type="submit" style={styles.button}>Login</button>
            </form>
        </div>
    );
}

// Inline styles
const styles = {
    loginContainer: {
        maxWidth: '400px',
        margin: 'auto',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '8px',
        backgroundColor: '#f9f9f9',
    },
    formGroup: {
        marginBottom: '15px',
    },
    label: {
        display: 'block',
        marginBottom: '5px',
    },
    input: {
        width: '100%',
        padding: '8px',
        boxSizing: 'border-box',
    },
    button: {
        width: '100%',
        padding: '10px',
        backgroundColor: '#007bff',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
    },
    errorMessage: {
        color: 'red',
        textAlign: 'center',
        marginTop: '10px',
    },
    successMessage: {
        color: 'green',
        textAlign: 'center',
        marginTop: '10px',
    },
};
