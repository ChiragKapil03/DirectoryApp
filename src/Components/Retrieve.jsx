import React, { useState, useEffect } from 'react';

export default function Retrieve() {
    const [aadharNumber, setAadharNumber] = useState('');
    const [userDetails, setUserDetails] = useState(null);
    const [users, setUsers] = useState([]);


    useEffect(() => {
        const savedUsers = JSON.parse(localStorage.getItem('users'));
        if (savedUsers) {
            setUsers(savedUsers);
        }
    }, []);

   
    const handleChange = (e) => {
        setAadharNumber(e.target.value);
    };

    const handleSearch = () => {
        const foundUser = users.find(user => user.aadhar === aadharNumber);
        if (foundUser) {
            setUserDetails(foundUser);
        } else {
            setUserDetails(null); 
            alert('User not found');
        }
    };

    return (
        <div>
            <div style={{ border: "1px solid black", margin: "10px auto", width: "90%", minHeight: "80vh" }}>
                <h4 style={{ border: "1px solid black", borderTop: "0", margin: "0px auto", width: "50%", minHeight: "5vh", backgroundColor: "#4472c4", color: "white" }}>
                    Retrieve details
                </h4>
                <br />
                <h3>Search from Aadhar number</h3>
                <input
                    type="number"
                    value={aadharNumber}
                    onChange={handleChange}
                    placeholder="Enter Aadhar number"
                    style={{ marginRight: "10px",height:"35px",borderRadius:"10px",padding:"2px" }}
                />
                <button onClick={handleSearch} style={{ backgroundColor: "#4472c4", color: "white", cursor: "pointer" }}>
                    Search
                </button>

                {userDetails && (
                    <div style={{ marginTop: "20px" }}>
                        <table style={{ width: "70%", margin: "20px auto", borderCollapse: "collapse", border: "1px solid black" }}>
                            <thead>
                                <tr>
                                    <th style={{ border: "1px solid black", padding: "8px", backgroundColor: "#4472c4", color: "white" }}>Field</th>
                                    <th style={{ border: "1px solid black", padding: "8px", backgroundColor: "#4472c4", color: "white" }}>Details</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style={{ border: "1px solid black", padding: "8px" }}>Name</td>
                                    <td style={{ border: "1px solid black", padding: "8px" }}>{userDetails.name}</td>
                                </tr>
                                <tr>
                                    <td style={{ border: "1px solid black", padding: "8px" }}>Date of Birth</td>
                                    <td style={{ border: "1px solid black", padding: "8px" }}>{userDetails.dob}</td>
                                </tr>
                                <tr>
                                    <td style={{ border: "1px solid black", padding: "8px" }}>Aadhar Number</td>
                                    <td style={{ border: "1px solid black", padding: "8px" }}>{userDetails.aadhar}</td>
                                </tr>
                                <tr>
                                    <td style={{ border: "1px solid black", padding: "8px" }}>Mobile Number</td>
                                    <td style={{ border: "1px solid black", padding: "8px" }}>{userDetails.mobile}</td>
                                </tr>
                                <tr>
                                    <td style={{ border: "1px solid black", padding: "8px" }}>Age</td>
                                    <td style={{ border: "1px solid black", padding: "8px" }}>{userDetails.age}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
}
