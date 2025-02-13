import React, { useState, useEffect } from "react"
import {useParams, useNavigate, NavLink} from "react-router-dom"

export default function Details() {
    const [employee,setEmployee] = useState(null)

    const params = useParams()
    const navigate = useNavigate()


    useEffect(() => {
        async function fetchData() {
            const id = params.id
            const response = await fetch(`/api/record/${id}`)
            if (!response.ok) {
                const message = `An error occurred: ${response.statusText}`
                window.alert(message)
                return
            }

            const record = await response.json()
            if (!record) {
                window.alert(`Record with id ${id} not found`)
                navigate("/")
                return
            }
            console.log(record)
            setEmployee(record)
        }

        fetchData()

        return
    }, [params.id, navigate])



    if (!employee) {
        return <div>Loading...</div>;
    }



    return (
        <div>
            <h1>Employee Details</h1>
            <p><strong>Name:</strong> {employee.name}</p>
            <p><strong>Position:</strong> {employee.position}</p>
            <p><strong>Level:</strong> {employee.level}</p>
            <button className="btn btn-primary">
                <NavLink className="nav-link" to="/">
                   Back To List
                </NavLink>
            </button>
        </div>
    )
}