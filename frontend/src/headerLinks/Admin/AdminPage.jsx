import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "./axiosInstance";
import "./Styles/AdminPage.css";

function AdminPage() {
  const [clients, setClients] = useState([]);
  const [modalMessage, setModalMessage] = useState(null);
  const [isCreating, setIsCreating] = useState(false);
  const [editingClientId, setEditingClientId] = useState(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    companyEmail: "",
    companyAddress: "",
    phoneNumber: "",
    messSubject: "",
    messBody: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const response = await axiosInstance.get("/admin/data");
        setClients(response.data.data);
      } catch (err) {
        handleModal(err.response?.data?.message || "Could not fetch data.");
        if (err.response?.status === 403) navigate("/admin");
      }
    };
    fetchClients();
  }, [navigate]);

  const handleModal = (message) => {
    setModalMessage(message);
    setTimeout(() => setModalMessage(null), 3000);
  };

  const handleLogout = async () => {
    try {
      await axiosInstance.get("/logoutUser");
      document.cookie =
        "token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
      handleModal("Logged out successfully.");
      navigate("/admin");
    } catch (err) {
      handleModal(err.response?.data?.message || "Logout failed.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = editingClientId
      ? `/admin/company/${editingClientId}`
      : "/admin/company";
    const method = editingClientId ? "put" : "post";

    try {
      const response = await axiosInstance[method](url, formData);
      const updatedClient = response.data.data;

      setClients((prev) =>
        editingClientId
          ? prev.map((client) =>
              client._id === editingClientId ? updatedClient : client
            )
          : [...prev, updatedClient]
      );

      resetForm();
      handleModal(
        editingClientId
          ? "Company updated successfully."
          : "Company created successfully."
      );
    } catch (err) {
      handleModal(err.response?.data?.message || "Failed to save company.");
    }
  };

  const handleDelete = async (id) => {
    try {
      await axiosInstance.delete(`/company/${id}`);
      setClients((prev) => prev.filter((client) => client._id !== id));
      handleModal("Company deleted successfully.");
    } catch (err) {
      handleModal(err.response?.data?.message || "Could not delete company.");
    }
  };

  const handleEdit = (client) => {
    setEditingClientId(client._id);
    setFormData(client);
    setIsCreating(true);
  };

  const resetForm = () => {
    setFormData({
      firstName: "",
      lastName: "",
      companyName: "",
      companyEmail: "",
      companyAddress: "",
      phoneNumber: "",
      messSubject: "",
      messBody: "",
    });
    setIsCreating(false);
    setEditingClientId(null);
  };

  return (
    <div className="admin-container">
      {modalMessage && (
        <div className="modal">
          <p>{modalMessage}</p>
          <button onClick={() => setModalMessage(null)}>Close</button>
        </div>
      )}

      <div className="admin-actions">
        <button
          onClick={() => {
            resetForm();
            setIsCreating(!isCreating);
          }}
          className="create-toggle"
        >
          {isCreating ? "Cancel" : "Create New Company"}
        </button>
        <button onClick={handleLogout} className="logout-button">
          Logout
        </button>
      </div>

      {isCreating ? (
        <div className="form-container">
          <h2>{editingClientId ? "Edit Company" : "Create New Company"}</h2>
          <form onSubmit={handleSubmit}>
            {Object.keys(formData).map((field) => (
              <label key={field}>
                {field
                  .replace(/([A-Z])/g, " $1")
                  .replace(/^./, (str) => str.toUpperCase())}
                :
                <input
                  type={field.includes("Email") ? "email" : "text"}
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                />
              </label>
            ))}
            <button type="submit">
              {editingClientId ? "Save Changes" : "Create Company"}
            </button>
          </form>
        </div>
      ) : (
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Company Name</th>
                <th>Company Email</th>
                <th>Company Address</th>
                <th>Phone Number</th>
                <th>Message Subject</th>
                <th>Message Body</th>
                <th>Date Submitted</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {clients.map((client) => (
                <tr key={client._id}>
                  <td>{client.firstName}</td>
                  <td>{client.lastName}</td>
                  <td>{client.companyName}</td>
                  <td>{client.companyEmail}</td>
                  <td>{client.companyAddress}</td>
                  <td>{client.phoneNumber}</td>
                  <td>{client.messSubject}</td>
                  <td>{client.messBody}</td>
                  <td>
                    {client.dateSubmitted
                      ? new Date(client.dateSubmitted).toLocaleDateString()
                      : "N/A"}
                  </td>
                  <td>
                    <button onClick={() => handleEdit(client)}>Edit</button>
                    <button onClick={() => handleDelete(client._id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default AdminPage;
