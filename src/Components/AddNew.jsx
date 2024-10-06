import React, { useState, useEffect } from "react";

export default function AddNew() {
    const [users, setUsers] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        dob: '',
        aadhar: '',
        mobile: '',
        age: ''
    });

    useEffect(() => {
        const savedUsers = JSON.parse(localStorage.getItem('users'));
        if (savedUsers) {
            setUsers(savedUsers);
        }
    }, []);

    const addUserFun = () => {
        setShowForm(true);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const calculateAge = (dob) => {
        const birthDate = new Date(dob.split('-').reverse().join('-')); 
        const currentDate = new Date();
        
        let age = currentDate.getFullYear() - birthDate.getFullYear();
        const monthDifference = currentDate.getMonth() - birthDate.getMonth();
        
        if (monthDifference < 0 || (monthDifference === 0 && currentDate.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    };

    const handleSave = () => {
        const { name, dob, aadhar, mobile } = formData;

        if (!name || !dob || !aadhar || !mobile) {
            alert("Please fill all the fields before saving.");
            return;
        }

        const age = calculateAge(formData.dob);
        const newUser = { ...formData, age: age.toString() };
        const newUsers = [...users, newUser];
        setUsers(newUsers);
        localStorage.setItem('users', JSON.stringify(newUsers));
        setShowForm(false);
        setFormData({ name: '', dob: '', aadhar: '', mobile: '', age: '' });
    };

    const deleteUser = (index) => {
        const newUsers = users.filter((_, i) => i !== index);
        setUsers(newUsers);
        localStorage.setItem('users', JSON.stringify(newUsers));
    };

    return (
        <div style={{ border: "1px solid black", margin: "10px auto", width: "90%", minHeight: "80vh" }}>
            <h4 style={{ border: "1px solid black", borderTop: "0", margin: "0px auto", width: "50%", minHeight: "5vh", backgroundColor: "#4472c4", color: "white" }}>
                User details
            </h4>

            <table style={{ width: "95%", margin: "5px auto", height: "5vh", border: "1px solid black" }}>
                <thead>
                    <tr>
                        <th style={{ width: "20%", height: "5vh", border: "1px solid black", backgroundColor: "#4472c4", color: "white" }}>Name</th>
                        <th style={{ width: "10%", height: "5vh", border: "1px solid black", backgroundColor: "#4472c4", color: "white" }}>Date Of Birth</th>
                        <th style={{ width: "20%", height: "5vh", border: "1px solid black", backgroundColor: "#4472c4", color: "white" }}>Aadhar Number</th>
                        <th style={{ width: "20%", height: "5vh", border: "1px solid black", backgroundColor: "#4472c4", color: "white" }}>Mobile Number</th>
                        <th style={{ width: "10%", height: "5vh", border: "1px solid black", backgroundColor: "#4472c4", color: "white" }}>Age</th>
                        <th style={{ width: "10%", height: "5vh", border: "1px solid black", backgroundColor: "#4472c4", color: "white" }}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={index}>
                            <td style={{ border: "1px solid black" }}>{user.name}</td>
                            <td style={{ border: "1px solid black" }}>{user.dob}</td>
                            <td style={{ border: "1px solid black" }}>{user.aadhar}</td>
                            <td style={{ border: "1px solid black" }}>{user.mobile}</td>
                            <td style={{ border: "1px solid black" }}>{user.age}</td>
                            <td style={{ border: "1px solid black" }}>
                                <button style={{ backgroundColor: "#ff0000", color: "white", cursor: "pointer",height:"35px",display:"flex",alignItems:"center",justifyItems:"center",marginInline:"auto",marginBlock:"2px" }} onClick={() => deleteUser(index)}>
                                Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="userContainer" style={{ minHeight: "58vh", padding: "10px" }}>
                {showForm && (
                    <div style={{ padding: "2px", backgroundColor: "#4472c4", color: "white", borderRadius: "5px",height:"120px" }}>
                        <h4>Fill below form for New Entry</h4>
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            value={formData.name}
                            onChange={handleChange}
                            style={{ marginRight: "10px",height:"39px",borderRadius:"10px",border:"0" }}/>

                        <input
                            type="text"
                            name="dob"
                            placeholder="dd-mm-yyyy"
                            value={formData.dob}
                            onChange={handleChange}
                            style={{ marginRight: "10px",height:"39px",borderRadius:"10px",border:"0" }}/>

                        <input
                            type="text"
                            name="aadhar"
                            placeholder="Aadhar number"
                            value={formData.aadhar}
                            onChange={handleChange}
                            style={{ marginRight: "10px" ,height:"39px",borderRadius:"10px",border:"0"}}/>

                        <input
                            type="text"
                            name="mobile"
                            placeholder="Mobile number"
                            value={formData.mobile}
                            onChange={handleChange}
                            style={{ marginRight: "10px",height:"39px",borderRadius:"10px",border:"0" }}/>

                        <button style={{ backgroundColor: "white", color: "black", cursor: "pointer" }} onClick={handleSave}>Save
                        </button>
                    </div>
                )}
            </div>

            {!showForm && (
                <button style={{ backgroundColor: "#4472c4", color: "white" }} onClick={addUserFun}>
                    Add User
                </button>
            )}
        </div>
    );
}
