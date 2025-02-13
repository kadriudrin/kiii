import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"

const Record = (props) => {
    return (
        <tr>
            <td>{props.record.name}</td>
            <td>{props.record.position}</td>
            <td>{props.record.level}</td>
            <td>
                <Link className="btn btn btn-warning me-2" to={`/edit/${props.record._id}`}>Edit</Link>
                <button
                    className="btn btn btn-danger me-2"
                    onClick={() => {
                        props.deleteRecord(props.record._id)
                    }}
                >
                    Delete
                </button>

                <Link className="btn btn btn-info me-2" to={`/details/${props.record._id}`}>Details</Link>
            </td>
        </tr>
    )
}

export default function RecordList() {
    const [records, setRecords] = useState([])



    useEffect(() => {
        async function getRecords() {
            const response = await fetch(`/api/record/`)

            if (!response.ok) {
                const message = `An error occurred: ${response.statusText}`
                window.alert(message)
                return
            }

            const records = await response.json()
            setRecords(records)
        }

        getRecords()

        return
    }, [records.length])

    async function deleteRecord(id) {
        const result = window.confirm("Will this employee be removed from the list?")
        if (!result) {
            return
        }

        await fetch(`/api/${id}`, {
            method: "DELETE"
        })

        const newRecords = records.filter((record) => record._id !== id)
        setRecords(newRecords)
    }

    function recordList() {
        return records.map((record) => {
            return (
                <Record
                    key={record._id}
                    record={record}
                    deleteRecord={() => deleteRecord(record._id)}
                />
            )
        })
    }

    return (
        <div>
            <h3 className="ps-2">Record List</h3>

            <table className="table table-striped table-hover align-middle" style={{ marginTop: 20 }}>
                <thead className="table-dark">
                    <tr>
                        <th>Name</th>
                        <th>Position</th>
                        <th>Level</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>{recordList()}</tbody>
            </table>
        </div>
    )
}