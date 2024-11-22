import { useNavigate } from "react-router-dom";

function CategoryComponent(props) {
    const navigate = useNavigate();

    const gotoUrl = (codigo) => {
        navigate("/categories/edit/" + codigo);
    };

    return (
        <div
            className="card"
            style={{
                backgroundColor: "#f8f9fa",
                border: "1px solid #ddd",
                borderRadius: "10px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                marginBottom: "20px",
            }}
        >
            <div className="card-body">
                <h5
                    className="card-title"
                    style={{
                        color: "#2a5298",
                        fontWeight: "bold",
                        fontSize: "1.25rem",
                    }}
                >
                    {props.nombre}
                </h5>
                <div className="d-flex justify-content-between">
                    <button
                        onClick={() => gotoUrl(props.codigo)}
                        className="btn btn-secondary"
                        style={{
                            backgroundColor: "#2a5298",
                            borderColor: "#2a5298",
                            color: "#fff",
                            fontWeight: "bold",
                            transition: "all 0.3s",
                        }}
                    >
                        Editar
                    </button>
                    <button
                        className="btn btn-danger"
                        style={{
                            backgroundColor: "#e63946",
                            borderColor: "#e63946",
                            color: "#fff",
                            fontWeight: "bold",
                            transition: "all 0.3s",
                        }}
                    >
                        Eliminar
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CategoryComponent;
