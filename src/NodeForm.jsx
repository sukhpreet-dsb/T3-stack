import { useState } from "react";

// eslint-disable-next-line react/prop-types
const NodeForm = ({ onSubmit }) => {
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [description, setDescription] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, subtitle, description });
    setTitle("");
    setSubtitle("");
    setDescription("");
    setIsModalOpen(false);
  };

  return (
    <>
      <button
        type="button"
        className="btn btn-primary add-node"
        onClick={() => setIsModalOpen(true)}
      >
        + Add Node
      </button>

      {isModalOpen && (
        <div
          className="modal fade show"
          style={{ display: "block" }} 
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Add Node
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setIsModalOpen(false)}
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <form onSubmit={handleSubmit}>
                  <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    className="form-control mb-2"
                    onChange={(e) => setTitle(e.target.value)}
                    required
                  />
                  <input
                    type="text"
                    placeholder="Subtitle"
                    value={subtitle}
                    className="form-control mb-2"
                    onChange={(e) => setSubtitle(e.target.value)}
                    required
                  />
                  <textarea
                    placeholder="Description"
                    value={description}
                    className="form-control mb-2"
                    onChange={(e) => setDescription(e.target.value)}
                    required
                  />
                  <button type="submit" className="btn btn-success">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NodeForm;
