import { useEffect, useState } from "react";
import CommentsList from "../components/CommentsList";
import AddComment from "../components/AddComment";

const ComentArea = ({ asin }) => {
    const [comments, setComments] = useState([]);

    const fetchComments = async () => {
        try {
            const response = await fetch(
                `https://striveschool-api.herokuapp.com/api/books/${asin}/comments/`,
                {
                    headers: {
                        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2JjZDk4NmU3MDMzNzAwMTUzMTZkZDQiLCJpYXQiOjE3NDI2NTk1NDUsImV4cCI6MTc0Mzg2OTE0NX0.P4cT4uLB46FY6HM94IdP_TZgMOdJGyT_Vwp0Nk-UT3U",
                        "Content-Type": "application/json"
                    },
                }
            );
            if (response.ok) {
                const data = await response.json();
                setComments(data);
            } else {
                console.error("Errore nella fetch dei commenti");
            }
        } catch (err) {
            console.error("Errore:,err");
        }

    };

    useEffect(() => {
        fetchComments();
    }, [asin]);

    return (
        <div className="mt-3">
            <AddComment asin={asin} onCommentAdded={fetchComments} />
            <CommentsList comments={comments} onCommentDeleted={fetchComments} />
        </div>
    );
};

export default ComentArea;
